# Extending Input State Machines

`@ue-too/board` ships with two built-in input state machines that turn raw DOM events into high-level camera operations:

- **KMT state machine** (keyboard / mouse / trackpad) — handles spacebar-drag panning, scroll-wheel panning, pinch-to-zoom on trackpads, middle-click panning, and keyboard shortcuts.
- **Touch state machine** — handles two-finger pan and pinch-to-zoom.

Most apps need to add their *own* operations on top — placing objects, drawing shapes, selection boxes, custom gestures — without losing the built-in pan/zoom behavior. The idiomatic way to do this is to **extend** the existing state machines rather than replace them.

This guide walks through the pattern end-to-end, using the [`banana`](https://github.com/ue-too/ue-too/tree/main/apps/banana) app's train-layout editor as a worked example.

## Why extend instead of replace

The built-in KMT state machine is a finite-state machine with these states (see [`KmtIdleState`](./index/classes/KmtIdleState.md) and friends):

```
IDLE
  ├─▶ READY_TO_PAN_VIA_SPACEBAR ──▶ INITIAL_PAN ──▶ PAN
  ├─▶ READY_TO_PAN_VIA_SCROLL_WHEEL ──▶ PAN_VIA_SCROLL_WHEEL
  └─▶ DISABLED
```

Each state reacts to events like `leftPointerDown`, `spacebarDown`, `scroll`, etc., and emits output events of type `pan`, `zoom`, `rotate`, `cursor`, or `none`. The board then forwards those outputs to the camera.

If you replace this whole machine, you inherit the job of reimplementing panning and zooming from scratch. If you **extend** it, pan/zoom keeps working and you only write code for the operations you actually care about.

The extension pattern has four moving parts:

1. **Widen the event and context types** so your custom events live alongside the built-in ones.
2. **Wrap `KmtIdleState`** with a subclass that inherits all of the original's event reactions, then adds a `_defer` handler that routes your custom events to a sub-state machine.
3. **Type-cast the other built-in states** (`PanState`, etc.) to the widened types — they don't need logic changes.
4. **Assemble with `TemplateStateMachine`** and assign the result to the board's `kmtParser.stateMachine`.

The touch machine follows the same pattern — see [§6](#_6-extending-the-touch-state-machine).

## 1. Widen the event and context types

Intersect the board's event map with your custom events, and the board's context with your custom context.

```typescript
import {
  KmtInputContext,
  KmtInputEventMapping,
  KmtInputEventOutputMapping,
  KmtInputStates,
} from '@ue-too/board';

// Your tool-switcher events, placement events, etc.
type ToolSwitcherEvents = {
  switchToTrain: {};
  switchToLayout: {};
  // ...
};

interface ToolSwitcherContext {
  // ...app-specific fields
}

type KmtStateMachineEventWithToolSwitcher =
  KmtInputEventMapping & ToolSwitcherEvents & {
    startDeletion: {};
    endDeletion: {};
  };

type KmtStateMachineExtensionContext =
  KmtInputContext & ToolSwitcherContext;
```

**Key points:**
- The widened event type is a *superset* of `KmtInputEventMapping`, so anywhere the board expects the base type, your widened type is structurally assignable.
- The `KmtInputStates` union is **not** widened. The built-in state names still cover all the "top-level" states; your tool modes live in a *sub*-state machine that the custom IDLE state defers to. See [§4](#_4-the-defer-pattern-for-tool-dispatch).

## 2. Subclass `KmtIdleState`

Create a new IDLE state that copies every reaction, guard, and lifecycle hook from the stock `KmtIdleState`, then adds a `_defer` handler. This is the part that preserves built-in pan/zoom behavior.

```typescript
import { KmtIdleState } from '@ue-too/board';
import {
  Defer,
  EventReactions,
  Guard,
  TemplateState,
  TemplateStateMachine,
} from '@ue-too/being';

class KmtStateMachineExtensionIdleState extends TemplateState<
  KmtStateMachineEventWithToolSwitcher,
  KmtStateMachineExtensionContext,
  KmtInputStates,
  KmtInputEventOutputMapping
> {
  private _originalEventReactions: EventReactions<
    KmtStateMachineEventWithToolSwitcher,
    KmtStateMachineExtensionContext,
    KmtInputStates,
    KmtInputEventOutputMapping
  >;
  private _toolSwitcherSubStateMachine: ToolSwitcherStateMachine;

  constructor(
    layoutSubStateMachine: LayoutStateMachine,
    trainSubStateMachine: TrainPlacementStateMachine,
    stationSubStateMachine: StationPlacementStateMachine,
    duplicateSubStateMachine: DuplicateToSideStateMachine,
  ) {
    super();
    const originalIdleState = new KmtIdleState();

    this._originalEventReactions = originalIdleState.eventReactions as unknown as EventReactions<
      KmtStateMachineEventWithToolSwitcher,
      KmtStateMachineExtensionContext,
      KmtInputStates,
      KmtInputEventOutputMapping
    >;

    this._eventReactions = {
      ...this._originalEventReactions,
    } as EventReactions<
      KmtStateMachineEventWithToolSwitcher,
      KmtStateMachineExtensionContext,
      KmtInputStates,
      KmtInputEventOutputMapping
    >;

    this.uponEnter = originalIdleState.uponEnter as unknown as (
      context: KmtStateMachineExtensionContext,
      stateMachine: TemplateStateMachine<
        KmtStateMachineEventWithToolSwitcher,
        KmtStateMachineExtensionContext,
        KmtInputStates,
        KmtInputEventOutputMapping
      >,
      from: KmtInputStates | 'INITIAL',
    ) => void;

    this.beforeExit = originalIdleState.beforeExit as unknown as (
      context: KmtStateMachineExtensionContext,
      stateMachine: TemplateStateMachine<
        KmtStateMachineEventWithToolSwitcher,
        KmtStateMachineExtensionContext,
        KmtInputStates,
        KmtInputEventOutputMapping
      >,
      to: KmtInputStates | 'TERMINAL',
    ) => void;

    this._guards = originalIdleState.guards as unknown as Guard<KmtStateMachineExtensionContext>;

    this._toolSwitcherSubStateMachine = createToolSwitcherStateMachine(
      layoutSubStateMachine,
      trainSubStateMachine,
      stationSubStateMachine,
      duplicateSubStateMachine,
    );
  }

  // Forward unhandled events to the tool-switcher sub-state machine.
  // See §4 for how this routes through to the active tool.
  protected _defer: Defer<
    KmtStateMachineExtensionContext,
    KmtStateMachineEventWithToolSwitcher,
    KmtInputStates,
    KmtInputEventOutputMapping
  > = {
    action: (context, event, eventKey, stateMachine) => {
      const key = eventKey as keyof ToolSwitcherEvents;
      const payload = event as ToolSwitcherEvents[keyof ToolSwitcherEvents];
      const result = (this._toolSwitcherSubStateMachine.happens as (
        k: keyof ToolSwitcherEvents,
        p: ToolSwitcherEvents[keyof ToolSwitcherEvents],
      ) => ReturnType<ToolSwitcherStateMachine['happens']>)(key, payload);

      if (result.handled) {
        return { handled: true, output: result.output };
      }
      return { handled: false };
    },
  };
}
```

**Key points:**
- Instantiate `new KmtIdleState()` and copy its `eventReactions`, `uponEnter`, `beforeExit`, and `guards`. There is no static "reactions constant" to read — an instance is required.
- The `as unknown as …` casts are load-bearing. They tell TypeScript that an event map over the widened event union is still compatible with the handlers originally written against the narrow union, which is true because widening only adds keys the original handlers never touch.

## 3. Type-cast the other built-in states

`PanState`, `InitialPanState`, and friends already have the correct runtime behavior. They just need to be re-typed to match the widened event / context. A tiny helper makes this painless:

```typescript
import { State } from '@ue-too/being';

export const createAdaptedStateToExpansionFunc = <
  OldState extends State<any, any, any, any>,
  NewState extends State<any, any, any, any>,
>() => {
  return (state: OldState): NewState => {
    return state as unknown as NewState;
  };
};

const expandState = createAdaptedStateToExpansionFunc<
  State<
    KmtInputEventMapping,
    KmtInputContext,
    KmtInputStates,
    KmtInputEventOutputMapping
  >,
  State<
    KmtStateMachineEventWithToolSwitcher,
    KmtStateMachineExtensionContext,
    KmtInputStates,
    KmtInputEventOutputMapping
  >
>();
```

> This helper currently lives inside `apps/banana` rather than being exported from `@ue-too/board`. Copy it into your own project until a future release exports it.

## 4. Assemble the extended state machine

```typescript
import {
  DisabledState,
  InitialPanState,
  PanState,
  PanViaScrollWheelState,
  ReadyToPanViaScrollWheelState,
  ReadyToPanViaSpaceBarState,
} from '@ue-too/board';
import { StateMachine, TemplateStateMachine } from '@ue-too/being';

export type KmtExpandedStateMachine = StateMachine<
  KmtStateMachineEventWithToolSwitcher,
  KmtStateMachineExtensionContext,
  KmtInputStates,
  KmtInputEventOutputMapping
>;

export function createKmtInputStateMachineExpansion(
  layoutSubStateMachine: LayoutStateMachine,
  trainSubStateMachine: TrainPlacementStateMachine,
  stationSubStateMachine: StationPlacementStateMachine,
  duplicateSubStateMachine: DuplicateToSideStateMachine,
  context: KmtStateMachineExtensionContext,
): KmtExpandedStateMachine {
  const states = {
    IDLE: new KmtStateMachineExtensionIdleState(
      layoutSubStateMachine,
      trainSubStateMachine,
      stationSubStateMachine,
      duplicateSubStateMachine,
    ),
    READY_TO_PAN_VIA_SPACEBAR: expandState(new ReadyToPanViaSpaceBarState()),
    INITIAL_PAN: expandState(new InitialPanState()),
    PAN: expandState(new PanState()),
    READY_TO_PAN_VIA_SCROLL_WHEEL: expandState(new ReadyToPanViaScrollWheelState()),
    PAN_VIA_SCROLL_WHEEL: expandState(new PanViaScrollWheelState()),
    DISABLED: expandState(new DisabledState()),
  };

  return new TemplateStateMachine<
    KmtStateMachineEventWithToolSwitcher,
    KmtStateMachineExtensionContext,
    KmtInputStates,
    KmtInputEventOutputMapping
  >(states, 'IDLE', context);
}
```

Only `IDLE` is your custom subclass; every other state is wrapped with `expandState(...)`.

## 5. Wire it into the board instance

Once you've built the expanded machine, reassign it onto the board's KMT parser:

```typescript
const kmtInputStateMachine = createKmtInputStateMachineExpansion(
  layoutSubStateMachine,
  trainStateMachine,
  stationStateMachine,
  duplicateSubStateMachine,
  baseComponents.observableInputTracker,
);

baseComponents.kmtParser.stateMachine = kmtInputStateMachine;
baseComponents.kmtInputStateMachine = kmtInputStateMachine;
```

`kmtParser` is the bridge between raw DOM events and the state machine. Reassigning its `.stateMachine` property swaps in your expanded version without touching any other part of the board.

## 6. The `_defer` pattern for tool dispatch

The non-obvious part of the recipe is how a single custom IDLE state serves multiple tools (train placement, track layout, station placement, duplication, …) without becoming a giant switch statement.

The answer is **`_defer`** — a fallback handler that fires whenever the state's own `_eventReactions` doesn't have a match for an incoming event. In the example above, `_defer` forwards the event to a `ToolSwitcherStateMachine`, which in turn forwards it to whichever tool is currently active.

The return contract is simple:

| Return value | Meaning |
|---|---|
| `{ handled: true, output }` | Event consumed. `output` becomes the state machine's output for this tick. |
| `{ handled: false }` | Falls through — the state machine continues as if `_defer` was never defined. |

This ordering is important:

1. **Parent `_eventReactions` fire first** — built-in pan/zoom always runs.
2. **`_defer` runs only if no reaction matched** — so tools only see events the camera doesn't want.

If you want a tool's gesture to *override* the built-in behavior (e.g. swallow `leftPointerDown` during placement so the camera doesn't start a pan), add that event to the custom IDLE state's `_eventReactions` instead of handling it in `_defer`.

## 7. Defining a tool's sub-state machine

A tool-specific state machine is just a regular `TemplateStateMachine` over *your* event and context types. Here is a trimmed version of banana's train-placement machine — a two-state flow where the user presses a key to start placing, moves the cursor to preview, and left-clicks to commit:

```typescript
import {
  BaseContext,
  EventReactions,
  NO_OP,
  TemplateState,
  TemplateStateMachine,
} from '@ue-too/being';
import type { Point } from '@ue-too/math';

export type TrainPlacementStates = 'IDLE' | 'HOVER_FOR_PLACEMENT';

export type TrainPlacementEvents = {
  leftPointerDown: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  pointerMove: { x: number; y: number };
  escapeKey: {};
  startPlacement: {};
  endPlacement: {};
  flipTrainDirection: {};
  F: {};
};

export interface TrainPlacementContext extends BaseContext {
  cancelCurrentTrainPlacement: () => void;
  placeTrain: (position: Point) => void;
  hoverForPlacement: (position: Point) => void;
  flipTrainDirection: () => void;
  convert2WorldPosition: (position: Point) => Point;
  convert2WindowPosition: (position: Point) => Point;
}

export class TrainPlacementIDLEState extends TemplateState<
  TrainPlacementEvents,
  TrainPlacementContext,
  TrainPlacementStates
> {
  protected _eventReactions: EventReactions<
    TrainPlacementEvents,
    TrainPlacementContext,
    TrainPlacementStates
  > = {
    startPlacement: {
      action: NO_OP,
      defaultTargetState: 'HOVER_FOR_PLACEMENT',
    },
  };
}

export class TrainPlacementHoverForPlacementState extends TemplateState<
  TrainPlacementEvents,
  TrainPlacementContext,
  TrainPlacementStates
> {
  protected _eventReactions: EventReactions<
    TrainPlacementEvents,
    TrainPlacementContext,
    TrainPlacementStates
  > = {
    endPlacement: {
      action: (context) => context.cancelCurrentTrainPlacement(),
      defaultTargetState: 'IDLE',
    },
    leftPointerUp: {
      action: (context, event) => {
        const world = context.convert2WorldPosition({ x: event.x, y: event.y });
        context.placeTrain(world);
      },
      defaultTargetState: 'HOVER_FOR_PLACEMENT',
    },
    pointerMove: {
      action: (context, event) => {
        const world = context.convert2WorldPosition({ x: event.x, y: event.y });
        context.hoverForPlacement(world);
      },
      defaultTargetState: 'HOVER_FOR_PLACEMENT',
    },
    escapeKey: {
      action: (context) => context.cancelCurrentTrainPlacement(),
      defaultTargetState: 'IDLE',
    },
    F: {
      action: (context) => context.flipTrainDirection(),
      defaultTargetState: 'HOVER_FOR_PLACEMENT',
    },
  };
}

export class TrainPlacementStateMachine extends TemplateStateMachine<
  TrainPlacementEvents,
  TrainPlacementContext,
  TrainPlacementStates
> {
  constructor(context: TrainPlacementContext) {
    super(
      {
        IDLE: new TrainPlacementIDLEState(),
        HOVER_FOR_PLACEMENT: new TrainPlacementHoverForPlacementState(),
      },
      'IDLE',
      context,
    );
  }
}
```

Notice that this machine knows nothing about the board — it just declares the events it cares about and the state transitions between them. The tool-switcher (and the extended KMT machine's `_defer`) is what glues it to pointer input.

For a full-featured example that wires multiple such tools together through a single tool-switcher, see [`kmt-state-machine-extension.ts`](https://github.com/ue-too/ue-too/blob/main/apps/banana/src/trains/input-state-machine/kmt-state-machine-extension.ts) in the banana app.

## 8. Extending the touch state machine

The touch machine is smaller — three states and three events — but the recipe is identical.

Built-in states (see [`touch-input-state-machine.ts`](./index/index.md)):

```
IDLE ──▶ PENDING ──▶ IN_PROGRESS
```

- `IDLE` — no active touches, or a single touch (reserved for app-level UI to consume).
- `PENDING` — exactly two touches, waiting for motion to decide between pan and pinch.
- `IN_PROGRESS` — two-finger pan / pinch-zoom in progress.

To add single-finger gestures (tap-to-place, drag-to-draw, etc.) without breaking two-finger pan and pinch:

1. **Widen the types:**

   ```typescript
   import {
     TouchContext,
     TouchEventMapping,
     TouchInputEventOutputMapping,
     TouchInputStates,
   } from '@ue-too/board';

   type MyTouchEvents = TouchEventMapping & {
     singleTap: { x: number; y: number };
   };

   type MyTouchContext = TouchContext & { /* app fields */ };
   ```

2. **Subclass the built-in `IdleState`** for touch, copying its reactions and adding a `_defer` that routes single-touch gestures to your sub-machine. `PendingState` and `InProgressState` can be re-cast with the same `expandState` helper from [§3](#_3-type-cast-the-other-built-in-states).

3. **Assemble with `TemplateStateMachine`** and assign to `baseComponents.touchParser.stateMachine`.

Because single-finger and two-finger events are naturally disjoint on the touch machine, most apps only need to extend `IdleState` — `PENDING` and `IN_PROGRESS` will only ever see two-finger events and can keep their default behavior.

Banana does not currently ship a touch extension, so there is no end-to-end reference in the repo, but the KMT example in this guide is a drop-in template.

## 9. Gotchas

- **`uponEnter` / `beforeExit` binding.** The subclass assigns these as instance properties copied from the original state. `TemplateState`'s hooks don't rely on `this`, so the direct assignment works — but if you override either one in your subclass, remember the parent's hook is now shadowed and you must call it manually if you still want its behavior.
- **Order of resolution.** `_defer` fires *only* when `_eventReactions` has no entry for the incoming event. If a tool needs to consume an event the built-in IDLE already handles (e.g. `leftPointerDown`), override it in the custom IDLE's `_eventReactions` instead.
- **State union is not widened.** The *state names* stay `KmtInputStates` — tools are modeled as a separate sub-state machine, not as new top-level states. This keeps built-in transitions (`IDLE → READY_TO_PAN_VIA_SPACEBAR → PAN`) unchanged.
- **Structural subtyping saves you.** Because the widened event / context types are supersets, anywhere the board expects the base types your expanded machine is still assignable. No wrapper or adapter is needed at the board-facing boundary.

## 10. Reference

Symbols you will touch when following this guide:

| Symbol | Package | Purpose |
|---|---|---|
| [`KmtIdleState`](./index/classes/KmtIdleState.md), [`PanState`](./index/classes/PanState.md), [`InitialPanState`](./index/classes/InitialPanState.md), [`ReadyToPanViaSpaceBarState`](./index/classes/ReadyToPanViaSpaceBarState.md), [`ReadyToPanViaScrollWheelState`](./index/classes/ReadyToPanViaScrollWheelState.md), [`PanViaScrollWheelState`](./index/classes/PanViaScrollWheelState.md), [`DisabledState`](./index/classes/DisabledState.md) | `@ue-too/board` | Built-in KMT states to compose with |
| `KmtInputEventMapping`, `KmtInputContext`, `KmtInputStates`, `KmtInputEventOutputMapping` | `@ue-too/board` | KMT type parameters to widen |
| `TouchEventMapping`, `TouchContext`, `TouchInputStates`, `TouchInputEventOutputMapping` | `@ue-too/board` | Touch type parameters to widen |
| `TemplateState`, `TemplateStateMachine`, `EventReactions`, `Defer`, `Guard`, `State`, `NO_OP`, `BaseContext` | `@ue-too/being` | Generic FSM primitives |

Live reference implementation: [`apps/banana/src/trains/input-state-machine/`](https://github.com/ue-too/ue-too/tree/main/apps/banana/src/trains/input-state-machine) — the source files quoted throughout this guide.

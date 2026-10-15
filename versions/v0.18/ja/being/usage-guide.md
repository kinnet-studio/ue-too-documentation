# Usage Guide

`@ue-too/being` is a type-safe finite state machine library for TypeScript. It provides a class-based approach to defining states, events, transitions, and guards, with full TypeScript type inference throughout.

## Installation

```bash
npm install @ue-too/being
```

## Core Concepts

A state machine in `@ue-too/being` is built from three main pieces:

1. **Event Payload Mapping** — A TypeScript type that maps event names to their payload types
2. **States** — A string literal union representing all possible states
3. **Context** — A shared object (extending `BaseContext`) accessible by all states

With these defined, you create **state classes** (extending `TemplateState`) that define how each state responds to events, and assemble them into a **`TemplateStateMachine`**.

## Basic Usage

Here is a minimal example — a placement tool with three states:

### Step 1: Define Events, States, and Context

```typescript
import {
  BaseContext,
  EventReactions,
  NO_OP,
  TemplateState,
  TemplateStateMachine,
} from '@ue-too/being';

// Events and their payload types
type PlacementEvents = {
  startPlacement: {};          // no payload needed
  pointerMove: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  escapeKey: {};
  endPlacement: {};
};

// All possible states
type PlacementStates = 'IDLE' | 'HOVER_FOR_START' | 'HOVER_FOR_END';

// Context shared across all states
interface PlacementContext extends BaseContext {
  startDrag: (position: { x: number; y: number }) => void;
  updateDrag: (position: { x: number; y: number }) => void;
  finishDrag: (position: { x: number; y: number }) => void;
  cancelPlacement: () => void;
}
```

**Key points:**
- Events with `{}` as payload require no argument when triggered
- Events with a specific type (like `{ x: number; y: number }`) require that payload
- The context must implement `setup()` and `cleanup()` from `BaseContext`

### Step 2: Define State Classes

Each state extends `TemplateState` and defines its `_eventReactions`:

```typescript
class IdleState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    startPlacement: {
      action: NO_OP,                    // no side effects
      defaultTargetState: 'HOVER_FOR_START',  // transition to this state
    },
  };
}

class HoverForStartState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    leftPointerUp: {
      action: (context, event) => {
        context.startDrag({ x: event.x, y: event.y });
      },
      defaultTargetState: 'HOVER_FOR_END',
    },
    escapeKey: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'IDLE',
    },
    endPlacement: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'IDLE',
    },
  };
}

class HoverForEndState extends TemplateState<
  PlacementEvents,
  PlacementContext,
  PlacementStates
> {
  protected _eventReactions: EventReactions<
    PlacementEvents,
    PlacementContext,
    PlacementStates
  > = {
    pointerMove: {
      action: (context, event) => {
        context.updateDrag({ x: event.x, y: event.y });
      },
      // no defaultTargetState — stays in HOVER_FOR_END
    },
    leftPointerUp: {
      action: (context, event) => {
        context.finishDrag({ x: event.x, y: event.y });
      },
      defaultTargetState: 'HOVER_FOR_START',
    },
    escapeKey: {
      action: (context) => context.cancelPlacement(),
      defaultTargetState: 'HOVER_FOR_START',
    },
  };
}
```

**Event reaction structure:**
- `action` — a function called when the event occurs. Receives `(context, eventPayload, stateMachine)`. Use `NO_OP` when no side effects are needed.
- `defaultTargetState` — (optional) the state to transition to after the action runs. If omitted, the state machine stays in the current state.

### Step 3: Assemble the State Machine

```typescript
const context: PlacementContext = {
  startDrag(pos) { /* ... */ },
  updateDrag(pos) { /* ... */ },
  finishDrag(pos) { /* ... */ },
  cancelPlacement() { /* ... */ },
  setup() { /* initialize resources */ },
  cleanup() { /* release resources */ },
};

const machine = new TemplateStateMachine<
  PlacementEvents,
  PlacementContext,
  PlacementStates
>(
  {
    IDLE: new IdleState(),
    HOVER_FOR_START: new HoverForStartState(),
    HOVER_FOR_END: new HoverForEndState(),
  },
  'IDLE',       // initial state
  context,
);
```

The constructor takes:
1. A record mapping each state name to its state instance
2. The initial state name
3. The context object
4. (Optional) `autoStart` — defaults to `true`. When `true`, `start()` is called automatically, which calls `context.setup()` and enters the initial state.

### Step 4: Trigger Events

```typescript
machine.happens('startPlacement');
// now in HOVER_FOR_START

machine.happens('leftPointerUp', { x: 100, y: 200 });
// now in HOVER_FOR_END

machine.happens('pointerMove', { x: 150, y: 250 });
// stays in HOVER_FOR_END (no target state defined)

machine.happens('leftPointerUp', { x: 200, y: 300 });
// now in HOVER_FOR_START
```

`happens()` returns an `EventResult`:
```typescript
const result = machine.happens('startPlacement');
if (result.handled) {
  console.log('Transitioned to:', result.nextState);
} else {
  console.log('Event was not handled by the current state');
}
```

## Lifecycle Hooks

States can define `uponEnter` and `beforeExit` methods to run logic during transitions:

```typescript
class LayoutState extends TemplateState<Events, MyContext, States> {
  private _subMachine: SomeStateMachine;

  constructor(subMachine: SomeStateMachine) {
    super();
    this._subMachine = subMachine;
  }

  uponEnter(context: MyContext, stateMachine: StateMachine<...>, from: States | 'INITIAL') {
    // Called when entering this state
    this._subMachine.happens('startLayout');
  }

  beforeExit(context: MyContext, stateMachine: StateMachine<...>, to: States | 'TERMINAL') {
    // Called when leaving this state
    this._subMachine.happens('endLayout');
  }

  protected _eventReactions = { /* ... */ };
}
```

- `uponEnter` receives the state that was transitioned **from** (or `'INITIAL'` on first enter)
- `beforeExit` receives the state being transitioned **to** (or `'TERMINAL'` on wrapup)
- These hooks are **not** called when the state machine stays in the same state

### State Machine Lifecycle

```typescript
machine.start();   // calls context.setup(), enters initial state, triggers uponEnter
machine.wrapup();  // triggers beforeExit on current state, calls context.cleanup()
machine.reset();   // calls wrapup(), then start() — full restart
```

You can also listen to state changes:

```typescript
machine.onStateChange((from, to) => {
  console.log(`Transitioned from ${from} to ${to}`);
});
```

## Guards: Conditional Transitions

Guards let you conditionally choose which state to transition to based on the current context. This is useful when the same event should lead to different states depending on runtime conditions.

### Defining Guards

```typescript
import {
  EventGuards,
  EventReactions,
  Guard,
  TemplateState,
} from '@ue-too/being';

type EditStates = 'INACTIVE' | 'IDLE' | 'DRAGGING';

type EditEvents = {
  startEditing: {};
  endEditing: {};
  leftPointerDown: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  leftPointerMove: { x: number; y: number };
};

interface EditContext extends BaseContext {
  projectOnTarget: (position: { x: number; y: number }) => boolean;
  getCurrentPosition: () => { x: number; y: number };
  setCurrentPosition: (position: { x: number; y: number }) => void;
}

class IdleState extends TemplateState<EditEvents, EditContext, EditStates> {
  // 1. Define guard functions
  protected _guards: Guard<EditContext, 'projectOnTarget'> = {
    projectOnTarget: (context) => {
      return context.projectOnTarget(context.getCurrentPosition());
    },
  };

  // 2. Define event reactions (action runs first)
  protected _eventReactions = {
    leftPointerDown: {
      action: (context: EditContext, payload: { x: number; y: number }) => {
        context.setCurrentPosition(payload);
      },
      // No defaultTargetState — if no guard matches, stays in current state
    },
    endEditing: {
      action: NO_OP,
      defaultTargetState: 'INACTIVE' as const,
    },
  } as EventReactions<EditEvents, EditContext, EditStates>;

  // 3. Map guards to events and target states
  protected _eventGuards: Partial<
    EventGuards<EditEvents, EditStates, EditContext, typeof this._guards>
  > = {
    leftPointerDown: [
      { guard: 'projectOnTarget', target: 'DRAGGING' },
    ],
  };
}
```

### How Guards Work

When an event is handled:

1. The `action` function runs first (e.g., updating position in context)
2. The state machine checks `_eventGuards` for that event
3. Guards are evaluated **in order** — the first guard that returns `true` determines the target state
4. If no guard matches, `defaultTargetState` is used (if defined)
5. If neither a guard matches nor a `defaultTargetState` is set, the state machine stays in the current state

This is powerful for scenarios like drag-and-drop: the pointer-down action always records the position, but the transition to `DRAGGING` only happens if the pointer is over a valid target.

## Event Delegation with Defer

`Defer` allows a state to intercept events before its normal `_eventReactions` are evaluated. This is commonly used to delegate events to a child/sub-state machine.

### How It Works

When an event arrives at a state with `_defer` defined:

1. The `_defer.action` function is called first
2. If it returns `{ handled: true }`, the event is considered handled and `_eventReactions` are **skipped**
3. If it returns `{ handled: false }`, the event falls through to `_eventReactions` as normal

### Example: Delegating to a Sub-State Machine

```typescript
class LayoutToolState extends TemplateState<
  ToolEvents,
  ToolContext,
  ToolStates
> {
  private _layoutMachine: LayoutStateMachine;

  constructor(layoutMachine: LayoutStateMachine) {
    super();
    this._layoutMachine = layoutMachine;
  }

  // Defer: try the sub-machine first
  protected _defer: Defer<ToolContext, ToolEvents, ToolStates> = {
    action: (context, event, eventKey, stateMachine) => {
      const result = this._layoutMachine.happens(eventKey, event);
      if (result.handled) {
        return { handled: true, output: result.output };
      }
      return { handled: false };
    },
  };

  // Lifecycle: start/stop the sub-machine
  uponEnter(context: ToolContext, sm: any, from: ToolStates | 'INITIAL') {
    this._layoutMachine.happens('startLayout');
  }

  beforeExit(context: ToolContext, sm: any, to: ToolStates | 'TERMINAL') {
    this._layoutMachine.happens('endLayout');
  }

  // Own event reactions (only reached if defer didn't handle the event)
  protected _eventReactions: EventReactions<ToolEvents, ToolContext, ToolStates> = {
    switchToOtherTool: {
      action: NO_OP,
      defaultTargetState: 'OTHER_TOOL',
    },
  };
}
```

This pattern enables **hierarchical composition** — a parent state machine delegates domain-specific events to a child machine while handling its own events (like tool switching) normally.

## Event Output Mapping

By default, event actions return `void`. You can define an **Event Output Mapping** to make event handlers return typed values:

```typescript
type MyEvents = {
  calculate: { value: number };
  reset: {};
};

// Define what each event returns
type MyOutputMapping = {
  calculate: number;  // calculate returns a number
  reset: void;        // reset returns nothing
};

type MyStates = 'IDLE' | 'ACTIVE';

class ActiveState extends TemplateState<
  MyEvents,
  MyContext,
  MyStates,
  MyOutputMapping  // 4th type parameter
> {
  protected _eventReactions = {
    calculate: {
      action: (context, event) => {
        return event.value * 2;  // return value is typed as number
      },
    },
  } as EventReactions<MyEvents, MyContext, MyStates, MyOutputMapping>;
}

// Usage:
const result = machine.happens('calculate', { value: 5 });
if (result.handled && 'output' in result) {
  console.log(result.output); // 10, typed as number
}
```

The `EventOutputMapping` is the 4th generic parameter on `TemplateState`, `TemplateStateMachine`, and related types.

## Extending an Existing State Machine

A powerful pattern in `@ue-too/being` is extending an existing state machine to add new functionality without modifying the original. This is used extensively in the codebase to take a base input state machine and layer additional tool-specific behavior on top.

### The Pattern

The approach involves:
1. **Merging event types** — combine the original events with new ones using `&` intersection
2. **Merging context types** — same approach for the context
3. **Creating a new state class** that wraps the original state and adds new behavior (typically via `Defer`)
4. **Adapting existing states** to the expanded type system with a type-casting utility
5. **Assembling a new state machine** using the expanded types

### Step-by-Step Walkthrough

Suppose you have a base input state machine from a library:

```typescript
// From the library — you can't modify these
type BaseEvents = {
  leftPointerDown: { x: number; y: number };
  leftPointerUp: { x: number; y: number };
  pointerMove: { x: number; y: number };
  scrollWheel: { deltaY: number };
};

type BaseStates = 'IDLE' | 'PAN' | 'DISABLED';

interface BaseInputContext extends BaseContext {
  // ... base context methods
}

// Original state classes: BaseIdleState, PanState, DisabledState
// Original factory: createBaseInputStateMachine(context)
```

#### 1. Define Expanded Types

```typescript
// New events specific to your application
type ToolSwitcherEvents = {
  switchToLayout: {};
  switchToTrain: {};
  switchToIdle: {};
};

// Merge event types
type ExpandedEvents = BaseEvents & ToolSwitcherEvents;

// Merge context types
type ExpandedContext = BaseInputContext & ToolSwitcherContext;
```

#### 2. Create the Extended Idle State

The key is wrapping the original IDLE state and adding sub-machine delegation via `Defer`:

```typescript
class ExpandedIdleState extends TemplateState<
  ExpandedEvents,
  ExpandedContext,
  BaseStates,
  BaseOutputMapping
> {
  private _toolSwitcherMachine: ToolSwitcherStateMachine;

  constructor(toolSwitcherMachine: ToolSwitcherStateMachine) {
    super();

    // Instantiate the original state
    const originalIdle = new BaseIdleState();

    // Copy its event reactions (with type cast for the expanded types)
    this._eventReactions = {
      ...originalIdle.eventReactions as unknown as EventReactions<
        ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping
      >,
    };

    // Copy lifecycle hooks
    this.uponEnter = originalIdle.uponEnter as unknown as (
      context: ExpandedContext,
      sm: TemplateStateMachine<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>,
      from: BaseStates | 'INITIAL'
    ) => void;

    this.beforeExit = originalIdle.beforeExit as unknown as (
      context: ExpandedContext,
      sm: TemplateStateMachine<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>,
      to: BaseStates | 'TERMINAL'
    ) => void;

    // Copy guards
    this._guards = originalIdle.guards as unknown as Guard<ExpandedContext>;

    this._toolSwitcherMachine = toolSwitcherMachine;
  }

  // Defer: tool-switcher events are handled by the sub-machine
  protected _defer: Defer<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping> = {
    action: (context, event, eventKey, stateMachine) => {
      const result = this._toolSwitcherMachine.happens(
        eventKey as keyof ToolSwitcherEvents,
        event as ToolSwitcherEvents[keyof ToolSwitcherEvents]
      );
      if (result.handled) {
        return { handled: true, output: result.output };
      }
      return { handled: false };
    },
  };
}
```

#### 3. Create a Type-Adapter for Existing States

States that don't need modification still need to be cast to the expanded type system:

```typescript
import { State } from '@ue-too/being';

const createAdaptedState = <
  OldState extends State<any, any, any, any>,
  NewState extends State<any, any, any, any>,
>() => {
  return (state: OldState): NewState => {
    return state as unknown as NewState;
  };
};

// Create the adapter for our specific expansion
const expandState = createAdaptedState<
  State<BaseEvents, BaseInputContext, BaseStates, BaseOutputMapping>,
  State<ExpandedEvents, ExpandedContext, BaseStates, BaseOutputMapping>
>();
```

#### 4. Assemble the Expanded State Machine

```typescript
function createExpandedInputStateMachine(
  toolSwitcherMachine: ToolSwitcherStateMachine,
  context: ExpandedContext,
) {
  const states = {
    // The extended IDLE state with sub-machine delegation
    IDLE: new ExpandedIdleState(toolSwitcherMachine),
    // Original states adapted to the expanded types
    PAN: expandState(new PanState()),
    DISABLED: expandState(new DisabledState()),
  };

  return new TemplateStateMachine<
    ExpandedEvents,
    ExpandedContext,
    BaseStates,
    BaseOutputMapping
  >(states, 'IDLE', context);
}
```

### How It Works at Runtime

1. When a `switchToLayout` event arrives, the IDLE state's `_defer` intercepts it and delegates to the tool-switcher sub-machine
2. When a `leftPointerDown` event arrives, `_defer` passes it to the sub-machine first. If the sub-machine doesn't handle it, it falls through to the original IDLE state's `_eventReactions`
3. Non-IDLE states (PAN, DISABLED) work exactly as before — they only see the events they handle and ignore the rest

This pattern preserves the original state machine's behavior while layering new functionality on top, without modifying any library code.

## Utility: `CreateStateType`

A convenience type that derives a string literal union from a `readonly` array:

```typescript
import { CreateStateType } from '@ue-too/being';

const TOOL_STATES = ['LAYOUT', 'TRAIN', 'STATION', 'IDLE'] as const;

type ToolStates = CreateStateType<typeof TOOL_STATES>;
// Result: 'LAYOUT' | 'TRAIN' | 'STATION' | 'IDLE'
```

This is useful when you also need the array at runtime (e.g., for iteration or validation) while keeping the type in sync.

## API Reference

For full API details (all classes, interfaces, types, and functions), see the [API Reference](./index/index.md).

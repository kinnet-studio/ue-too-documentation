[@ue-too/being](../modules.md) / index

# index

State machine library for TypeScript.

## Remarks

The `@ue-too/being` package provides a type-safe, flexible finite state machine implementation
for TypeScript. It enables you to model complex stateful behavior with clear state transitions,
event handling, and conditional logic through guards.

## Core Concepts

- **States**: Discrete modes that your system can be in (e.g., IDLE, ACTIVE, LOADING)
- **Events**: Triggers that cause state transitions (e.g., "start", "stop", "load")
- **Context**: Shared data that persists across state transitions
- **Guards**: Conditional logic for dynamic state transitions
- **Event Reactions**: Handlers that define what happens when an event occurs in a state

## Key Features

- **Type Safety**: Full TypeScript type inference for events, payloads, and states
- **Event Outputs**: Actions can return values accessible in event results
- **Lifecycle Hooks**: `uponEnter` and `beforeExit` callbacks for state transitions
- **Conditional Transitions**: Guards enable context-based routing to different states
- **Flexible Architecture**: States only define handlers for relevant events

## Main Exports

- [TemplateStateMachine](classes/TemplateStateMachine.md): Concrete state machine implementation
- [TemplateState](classes/TemplateState.md): Abstract base class for creating states
- [BaseContext](interfaces/BaseContext.md): Context interface for shared state data
- [EventResult](type-aliases/EventResult.md): Type for event handling results
- [createStateGuard](functions/createStateGuard.md): Utility for creating type guards

## 例

Basic state machine
```typescript
import { TemplateStateMachine, TemplateState, BaseContext } from '@ue-too/being';

// Define events and payloads
type Events = {
  start: {};
  stop: {};
  tick: { delta: number };
};

// Define states
type States = "IDLE" | "RUNNING" | "PAUSED";

// Define context
interface TimerContext extends BaseContext {
  elapsed: number;
  setup() { this.elapsed = 0; }
  cleanup() {}
}

// Create state classes
class IdleState extends TemplateState<Events, TimerContext, States> {
  eventReactions = {
    start: {
      action: (context) => {
        console.log('Starting timer');
        context.elapsed = 0;
      },
      defaultTargetState: "RUNNING"
    }
  };
}

class RunningState extends TemplateState<Events, TimerContext, States> {
  eventReactions = {
    tick: {
      action: (context, event) => {
        context.elapsed += event.delta;
      }
    },
    stop: {
      action: (context) => {
        console.log('Stopped at:', context.elapsed);
      },
      defaultTargetState: "IDLE"
    }
  };
}

// Create and use the state machine
const context: TimerContext = {
  elapsed: 0,
  setup() { this.elapsed = 0; },
  cleanup() {}
};

const timer = new TemplateStateMachine<Events, TimerContext, States>(
  {
    IDLE: new IdleState(),
    RUNNING: new RunningState(),
    PAUSED: new PausedState()
  },
  "IDLE",
  context
);

// Trigger events
timer.happens("start");
timer.happens("tick", { delta: 16 });
timer.happens("stop");
```

## 参照

 - [TemplateStateMachine](classes/TemplateStateMachine.md) for the main state machine class
 - [TemplateState](classes/TemplateState.md) for creating state implementations

## Core

- [BaseContext](interfaces/BaseContext.md)
- [EventHandled](type-aliases/EventHandled.md)
- [EventNotHandled](type-aliases/EventNotHandled.md)
- [EventResult](type-aliases/EventResult.md)
- [NO\_OP](variables/NO_OP.md)

## Types

- [State](interfaces/State.md)
- [StateMachine](interfaces/StateMachine.md)
- [DefaultOutputMapping](type-aliases/DefaultOutputMapping.md)
- [EventGuards](type-aliases/EventGuards.md)
- [EventPreconditions](type-aliases/EventPreconditions.md)
- [EventReactions](type-aliases/EventReactions.md)
- [EventResultCallback](type-aliases/EventResultCallback.md)
- [Guard](type-aliases/Guard.md)
- [GuardEvaluation](type-aliases/GuardEvaluation.md)
- [GuardMapping](type-aliases/GuardMapping.md)
- [StateChangeCallback](type-aliases/StateChangeCallback.md)

## Utilities

- [CreateStateType](type-aliases/CreateStateType.md)
- [EventArgs](type-aliases/EventArgs.md)
- [createStateGuard](functions/createStateGuard.md)

## Composition

- [DelegatingState](classes/DelegatingState.md)
- [ExtendableState](type-aliases/ExtendableState.md)
- [HostableStateMachine](type-aliases/HostableStateMachine.md)
- [StateExtender](type-aliases/StateExtender.md)
- [StateExtension](type-aliases/StateExtension.md)
- [WidenedState](type-aliases/WidenedState.md)
- [createStateExtender](functions/createStateExtender.md)
- [createStateWidener](functions/createStateWidener.md)
- [extendState](functions/extendState.md)

## Examples

- [createVendingMachine](functions/createVendingMachine.md)

## Introspection

- [MachineGraph](type-aliases/MachineGraph.md)
- [MachineGraphEdge](type-aliases/MachineGraphEdge.md)
- [MachineGraphNode](type-aliases/MachineGraphNode.md)
- [extractMachineGraph](functions/extractMachineGraph.md)

## Other

- [StateDefinition](interfaces/StateDefinition.md)
- [StateMachineSchema](interfaces/StateMachineSchema.md)
- [TransitionDefinition](interfaces/TransitionDefinition.md)
- [Action](type-aliases/Action.md)
- [ActionFunction](type-aliases/ActionFunction.md)
- [Defer](type-aliases/Defer.md)
- [Delay](type-aliases/Delay.md)
- [EventPayloadSchema](type-aliases/EventPayloadSchema.md)
- [ExtractStateNames](type-aliases/ExtractStateNames.md)
- [GuardFunction](type-aliases/GuardFunction.md)
- [TransitionDefinitionUnion](type-aliases/TransitionDefinitionUnion.md)
- [VendingMachineEvents](type-aliases/VendingMachineEvents.md)
- [VendingMachineStates](type-aliases/VendingMachineStates.md)
- [createStateMachineSchemaWithInferredStates](functions/createStateMachineSchemaWithInferredStates.md)

## Runtime Factory

- [createStateMachineFromSchema](functions/createStateMachineFromSchema.md)

## State Machine Core

- [TemplateState](classes/TemplateState.md)
- [TemplateStateMachine](classes/TemplateStateMachine.md)

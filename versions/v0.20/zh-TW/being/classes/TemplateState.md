[@ue-too/being](../globals.md) / TemplateState

# Abstract Class: TemplateState\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:825](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L825)

Abstract base class for state machine states.

## Remarks

This abstract class provides the foundation for implementing individual states in a state machine.
Each state defines how it responds to events through the `eventReactions` object.

## Key Concepts

- **Event Reactions**: Define handlers for events this state cares about. Unhandled events are ignored.
- **Guards**: Conditional logic that determines which state to transition to based on context
- **Lifecycle Hooks**: `uponEnter` and `beforeExit` callbacks for state transition side effects
- **Selective Handling**: Only define reactions for events relevant to this state

## Implementation Pattern

1. Extend this class for each state in your state machine
2. Implement the `eventReactions` property with handlers for relevant events
3. Optionally override `uponEnter` and `beforeExit` for lifecycle logic
4. Optionally define `guards` and `eventGuards` for conditional transitions

## Examples

Simple state implementation
```typescript
class IdleState extends TemplateState<MyEvents, MyContext, MyStates> {
  eventReactions = {
    start: {
      action: (context, event) => {
        console.log('Starting...');
        context.startTime = Date.now();
      },
      defaultTargetState: "ACTIVE"
    },
    reset: {
      action: (context, event) => {
        context.counter = 0;
      }
      // No state transition - stays in IDLE
    }
  };

  uponEnter(context, stateMachine, fromState) {
    console.log(`Entered IDLE from ${fromState}`);
  }
}
```

State with guards for conditional transitions
```typescript
class PaymentState extends TemplateState<Events, VendingContext, States> {
  guards = {
    hasEnoughMoney: (context) => context.balance >= context.itemPrice,
    needsChange: (context) => context.balance > context.itemPrice
  };

  eventReactions = {
    selectItem: {
      action: (context, event) => {
        context.selectedItem = event.itemId;
        context.itemPrice = getPrice(event.itemId);
      },
      defaultTargetState: "IDLE" // Fallback if no guard matches
    }
  };

  eventGuards = {
    selectItem: [
      { guard: 'hasEnoughMoney', target: 'DISPENSING' },
      // If hasEnoughMoney is false, uses defaultTargetState (IDLE)
    ]
  };
}
```

## See

 - [TemplateStateMachine](TemplateStateMachine.md) for the state machine implementation
 - [EventReactions](../type-aliases/EventReactions.md) for defining event handlers

## Extended by

- [`CompositeState`](CompositeState.md)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

Object mapping event names to their payload types

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

Context type shared across all states

### States

`States` *extends* `string` = `"IDLE"`

Union of all possible state names (string literals)

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Implements

- [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Constructors

### Constructor

> **new TemplateState**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(): `TemplateState`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Returns

`TemplateState`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Properties

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:854](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L854)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:850](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L850)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:845](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L845)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:833](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L833)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:844](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L844)

## Accessors

### delay

#### Get Signature

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [interface.ts:883](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L883)

##### Returns

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Implementation of

[`State`](../interfaces/State.md).[`delay`](../interfaces/State.md#delay)

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:868](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L868)

##### Returns

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### Implementation of

[`State`](../interfaces/State.md).[`eventGuards`](../interfaces/State.md#eventguards)

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:874](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L874)

##### Returns

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Implementation of

[`State`](../interfaces/State.md).[`eventReactions`](../interfaces/State.md#eventreactions)

***

### guards

#### Get Signature

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:864](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L864)

##### Returns

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### Implementation of

[`State`](../interfaces/State.md).[`guards`](../interfaces/State.md#guards)

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: [interface.ts:858](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L858)

##### Returns

keyof `EventPayloadMapping`[]

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [interface.ts:902](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L902)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `States`

#### Returns

`void`

#### Implementation of

[`State`](../interfaces/State.md).[`beforeExit`](../interfaces/State.md#beforeexit)

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:915](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L915)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### Implementation of

[`State`](../interfaces/State.md).[`handles`](../interfaces/State.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [interface.ts:889](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L889)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `States`

#### Returns

`void`

#### Implementation of

[`State`](../interfaces/State.md).[`uponEnter`](../interfaces/State.md#uponenter)

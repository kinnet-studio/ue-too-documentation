[@ue-too/being](../../modules.md) / [index](../index.md) / TemplateState

# Abstract Class: TemplateState\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:973](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L973)

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

- [`DelegatingState`](DelegatingState.md)

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

Defined in: [interface.ts:1007](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1007)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:1003](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1003)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:993](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L993)

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:998](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L998)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:981](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L981)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:992](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L992)

## Accessors

### delay

#### Get Signature

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [interface.ts:1042](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1042)

##### Returns

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Implementation of

[`State`](../interfaces/State.md).[`delay`](../interfaces/State.md#delay)

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:1021](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1021)

##### Returns

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### Implementation of

[`State`](../interfaces/State.md).[`eventGuards`](../interfaces/State.md#eventguards)

***

### eventPreconditions

#### Get Signature

> **get** **eventPreconditions**(): `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:1027](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1027)

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### Returns

`Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

#### Implementation of

[`State`](../interfaces/State.md).[`eventPreconditions`](../interfaces/State.md#eventpreconditions)

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:1033](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1033)

##### Returns

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Implementation of

[`State`](../interfaces/State.md).[`eventReactions`](../interfaces/State.md#eventreactions)

***

### guards

#### Get Signature

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:1017](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1017)

##### Returns

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### Implementation of

[`State`](../interfaces/State.md).[`guards`](../interfaces/State.md#guards)

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: [interface.ts:1011](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1011)

##### Returns

keyof `EventPayloadMapping`[]

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [interface.ts:1061](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1061)

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

Defined in: [interface.ts:1074](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1074)

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

Defined in: [interface.ts:1048](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1048)

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

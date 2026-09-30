[@ue-too/being](../../modules.md) / [index](../index.md) / TemplateStateMachine

# Class: TemplateStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:665](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L665)

Concrete implementation of a finite state machine.

## Remarks

This class provides a complete, ready-to-use state machine implementation. It's generic enough
to handle most use cases without requiring custom extensions.

## Features

- **Type-safe events**: Events and their payloads are fully typed via the EventPayloadMapping
- **State transitions**: Automatic state transitions based on event handlers
- **Event outputs**: Handlers can return values that are included in the result
- **Lifecycle hooks**: States can define `uponEnter` and `beforeExit` callbacks
- **State change listeners**: Subscribe to state transitions
- **Shared context**: All states access the same context object for persistent data

## Usage Pattern

1. Define your event payload mapping type
2. Define your states as a string union type
3. Create state classes extending [TemplateState](TemplateState.md)
4. Instantiate TemplateStateMachine with your states and initial state

## Example

Basic vending machine state machine
```typescript
type Events = {
  insertCoin: { amount: number };
  selectItem: { itemId: string };
  cancel: {};
};

type States = "IDLE" | "PAYMENT" | "DISPENSING";

interface VendingContext extends BaseContext {
  balance: number;
  setup() { this.balance = 0; }
  cleanup() {}
}

const context: VendingContext = {
  balance: 0,
  setup() { this.balance = 0; },
  cleanup() {}
};

const machine = new TemplateStateMachine<Events, VendingContext, States>(
  {
    IDLE: new IdleState(),
    PAYMENT: new PaymentState(),
    DISPENSING: new DispensingState()
  },
  "IDLE",
  context
);

// Trigger events
machine.happens("insertCoin", { amount: 100 });
machine.happens("selectItem", { itemId: "A1" });
```

## See

 - [TemplateState](TemplateState.md) for creating state implementations
 - [StateMachine](../interfaces/StateMachine.md) for the interface definition

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

- [`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Constructors

### Constructor

> **new TemplateStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:701](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L701)

#### Parameters

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

##### initialState

`States`

##### context

`Context`

##### autoStart

`boolean` = `true`

#### Returns

`TemplateStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Properties

### \_context

> `protected` **\_context**: `Context`

Defined in: [interface.ts:683](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L683)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:678](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L678)

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: [`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>[]

Defined in: [interface.ts:693](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L693)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:686](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L686)

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### Returns

`void`

***

### \_initialState

> `protected` **\_initialState**: `States`

Defined in: [interface.ts:699](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L699)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:685](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L685)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:679](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L679)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:684](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L684)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:698](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L698)

## Accessors

### context

#### Get Signature

> **get** **context**(): `Context`

Defined in: [interface.ts:874](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L874)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

##### Returns

`Context`

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`context`](../interfaces/StateMachine.md#context-1)

***

### currentState

#### Get Signature

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:866](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L866)

##### Returns

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`currentState`](../interfaces/StateMachine.md#currentstate)

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:878](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L878)

##### Returns

`States`[]

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`possibleStates`](../interfaces/StateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:882](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L882)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`states`](../interfaces/StateMachine.md#states-1)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:763](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L763)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:769](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L769)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`happens`](../interfaces/StateMachine.md#happens)

***

### onEventResult()

> **onEventResult**(`callback`): () => `void`

Defined in: [interface.ts:854](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L854)

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md)
for the exact snapshot-iteration semantics.

#### Parameters

##### callback

[`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onEventResult`](../interfaces/StateMachine.md#oneventresult)

***

### onHappens()

> **onHappens**(`callback`): () => `void`

Defined in: [interface.ts:836](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L836)

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md) for the exact
snapshot-iteration semantics.

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onHappens`](../interfaces/StateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): () => `void`

Defined in: [interface.ts:826](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L826)

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
[EventResultCallback](../type-aliases/EventResultCallback.md) for the exact snapshot-iteration semantics.

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`onStateChange`](../interfaces/StateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:723](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L723)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`reset`](../interfaces/StateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:870](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L870)

#### Parameters

##### context

`Context`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`setContext`](../interfaces/StateMachine.md#setcontext)

***

### start()

> **start**(): `void`

Defined in: [interface.ts:729](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L729)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`start`](../interfaces/StateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:758](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L758)

#### Parameters

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`switchTo`](../interfaces/StateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

Defined in: [interface.ts:742](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L742)

#### Returns

`void`

#### Implementation of

[`StateMachine`](../interfaces/StateMachine.md).[`wrapup`](../interfaces/StateMachine.md#wrapup)

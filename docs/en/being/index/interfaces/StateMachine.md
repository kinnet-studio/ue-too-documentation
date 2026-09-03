[@ue-too/being](../../modules.md) / [index](../index.md) / StateMachine

# Interface: StateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [interface.ts:212](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L212)

## Description

This is the interface for the state machine. The interface takes in a few generic parameters.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

You can probably get by using the TemplateStateMachine class.
The naming is that an event would "happen" and the state of the state machine would "handle" it.

## See

 - [TemplateStateMachine](../classes/TemplateStateMachine.md)
 - KmtInputStateMachine

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## Properties

### context?

> `readonly` `optional` **context**: `Context`

Defined in: [interface.ts:229](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L229)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
[TemplateStateMachine](../classes/TemplateStateMachine.md) always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

***

### currentState

> **currentState**: `States` \| `"INITIAL"` \| `"TERMINAL"`

Defined in: [interface.ts:289](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L289)

***

### possibleStates

> **possibleStates**: `States`[]

Defined in: [interface.ts:258](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L258)

***

### states

> **states**: `Record`\<`States`, [`State`](State.md)\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:242](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L242)

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:231](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L231)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:238](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L238)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

Defined in: [interface.ts:283](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L283)

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; [TemplateStateMachine](../classes/TemplateStateMachine.md) always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md)
for the exact snapshot-iteration semantics.

#### Parameters

##### callback

[`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### Returns

`void` \| () => `void`

***

### onHappens()

> **onHappens**(`callback`): `void` \| () => `void`

Defined in: [interface.ts:266](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L266)

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md) for the exact
snapshot-iteration semantics.

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void` \| () => `void`

***

### onStateChange()

> **onStateChange**(`callback`): `void` \| () => `void`

Defined in: [interface.ts:257](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L257)

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
[EventResultCallback](../type-aliases/EventResultCallback.md) for the exact snapshot-iteration semantics.

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void` \| () => `void`

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:286](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L286)

#### Returns

`void`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:241](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L241)

#### Parameters

##### context

`Context`

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [interface.ts:287](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L287)

#### Returns

`void`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:220](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L220)

#### Parameters

##### state

`States`

#### Returns

`void`

***

### wrapup()

> **wrapup**(): `void`

Defined in: [interface.ts:288](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L288)

#### Returns

`void`

[@ue-too/being](../../modules.md) / [index](../index.md) / HierarchicalStateMachine

# Class: HierarchicalStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [hierarchical.ts:306](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L306)

Extended state machine that supports hierarchical state paths.

## Remarks

This class extends TemplateStateMachine to track and expose hierarchical
state paths when composite states are used.

## Extends

- [`TemplateStateMachine`](TemplateStateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

Context type

### States

`States` *extends* `string` = `string`

State names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## Constructors

### Constructor

> **new HierarchicalStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:701](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L701)

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

`HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`constructor`](TemplateStateMachine.md#constructor)

## Properties

### \_context

> `protected` **\_context**: `Context`

Defined in: [interface.ts:683](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L683)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_context`](TemplateStateMachine.md#context)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:678](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L678)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_currentState`](TemplateStateMachine.md#currentstate)

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: [`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>[]

Defined in: [interface.ts:693](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L693)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_eventResultCallbacks`](TemplateStateMachine.md#eventresultcallbacks)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:686](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L686)

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_happensCallbacks`](TemplateStateMachine.md#happenscallbacks)

***

### \_initialState

> `protected` **\_initialState**: `States`

Defined in: [interface.ts:699](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L699)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_initialState`](TemplateStateMachine.md#initialstate)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:685](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L685)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_stateChangeCallbacks`](TemplateStateMachine.md#statechangecallbacks)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:679](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L679)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_states`](TemplateStateMachine.md#states)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:684](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L684)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_statesArray`](TemplateStateMachine.md#statesarray)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:698](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L698)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_timeouts`](TemplateStateMachine.md#timeouts)

## Accessors

### context

#### Get Signature

> **get** **context**(): `Context`

Defined in: [interface.ts:874](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L874)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
[TemplateStateMachine](TemplateStateMachine.md) always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

##### Returns

`Context`

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
[TemplateStateMachine](TemplateStateMachine.md) always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`context`](TemplateStateMachine.md#context-1)

***

### currentState

#### Get Signature

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:866](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L866)

##### Returns

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`currentState`](TemplateStateMachine.md#currentstate)

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:878](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L878)

##### Returns

`States`[]

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`possibleStates`](TemplateStateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:882](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L882)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`states`](TemplateStateMachine.md#states-1)

## Methods

### getActiveStatePath()

> **getActiveStatePath**(): `string`[]

Defined in: [hierarchical.ts:343](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L343)

Gets all active states in the hierarchy.
Returns an array where the first element is the top-level state,
and subsequent elements are nested child states.

#### Returns

`string`[]

***

### getCurrentStatePath()

> **getCurrentStatePath**(): `string`

Defined in: [hierarchical.ts:324](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L324)

Gets the current hierarchical state path.
Returns a simple state name for non-composite states,
or a dot-notation path for composite states (e.g., "PARENT.CHILD").

#### Returns

`string`

***

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:763](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L763)

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

Defined in: [interface.ts:769](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L769)

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

***

### isInStatePath()

> **isInStatePath**(`path`): `boolean`

Defined in: [hierarchical.ts:368](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L368)

Checks if the state machine is currently in a specific hierarchical path.
Supports both simple state names and dot-notation paths.

#### Parameters

##### path

`string`

State path to check (e.g., "PARENT" or "PARENT.CHILD")

#### Returns

`boolean`

***

### onEventResult()

> **onEventResult**(`callback`): () => `void`

Defined in: [interface.ts:854](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L854)

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; [TemplateStateMachine](TemplateStateMachine.md) always
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

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onEventResult`](TemplateStateMachine.md#oneventresult)

***

### onHappens()

> **onHappens**(`callback`): () => `void`

Defined in: [interface.ts:836](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L836)

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

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onHappens`](TemplateStateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): () => `void`

Defined in: [interface.ts:826](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L826)

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

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onStateChange`](TemplateStateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:723](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L723)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`reset`](TemplateStateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:870](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L870)

#### Parameters

##### context

`Context`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`setContext`](TemplateStateMachine.md#setcontext)

***

### start()

> **start**(): `void`

Defined in: [interface.ts:729](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L729)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`start`](TemplateStateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:758](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L758)

#### Parameters

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`switchTo`](TemplateStateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

Defined in: [interface.ts:742](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L742)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`wrapup`](TemplateStateMachine.md#wrapup)

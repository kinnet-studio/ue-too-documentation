[@ue-too/being](../../modules.md) / [index](../index.md) / HierarchicalStateMachine

# 類別: HierarchicalStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

定義於: [hierarchical.ts:306](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L306)

Extended state machine that supports hierarchical state paths.

## 備註

This class extends TemplateStateMachine to track and expose hierarchical
state paths when composite states are used.

## Extends

- [`TemplateStateMachine`](TemplateStateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 型別參數

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

## 建構函式

### 建構函式

> **new HierarchicalStateMachine**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>(`states`, `initialState`, `context`, `autoStart`): `HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:701](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L701)

#### 參數

##### states

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

##### initialState

`States`

##### context

`Context`

##### autoStart

`boolean` = `true`

#### 回傳

`HierarchicalStateMachine`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`constructor`](TemplateStateMachine.md#constructor)

## 屬性

### \_context

> `protected` **\_context**: `Context`

定義於: [interface.ts:683](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L683)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_context`](TemplateStateMachine.md#context)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

定義於: [interface.ts:678](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L678)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_currentState`](TemplateStateMachine.md#currentstate)

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: [`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>[]

定義於: [interface.ts:693](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L693)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_eventResultCallbacks`](TemplateStateMachine.md#eventresultcallbacks)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: [interface.ts:686](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L686)

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `string`\> | [`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping`\>

##### context

`Context`

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_happensCallbacks`](TemplateStateMachine.md#happenscallbacks)

***

### \_initialState

> `protected` **\_initialState**: `States`

定義於: [interface.ts:699](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L699)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_initialState`](TemplateStateMachine.md#initialstate)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

定義於: [interface.ts:685](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L685)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_stateChangeCallbacks`](TemplateStateMachine.md#statechangecallbacks)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: [interface.ts:679](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L679)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_states`](TemplateStateMachine.md#states)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

定義於: [interface.ts:684](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L684)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_statesArray`](TemplateStateMachine.md#statesarray)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

定義於: [interface.ts:698](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L698)

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`_timeouts`](TemplateStateMachine.md#timeouts)

## 存取器

### context

#### Getter 簽章

> **get** **context**(): `Context`

定義於: [interface.ts:874](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L874)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
[TemplateStateMachine](TemplateStateMachine.md) always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

##### 回傳

`Context`

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
[TemplateStateMachine](TemplateStateMachine.md) always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`context`](TemplateStateMachine.md#context-1)

***

### currentState

#### Getter 簽章

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

定義於: [interface.ts:866](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L866)

##### 回傳

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`currentState`](TemplateStateMachine.md#currentstate)

***

### possibleStates

#### Getter 簽章

> **get** **possibleStates**(): `States`[]

定義於: [interface.ts:878](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L878)

##### 回傳

`States`[]

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`possibleStates`](TemplateStateMachine.md#possiblestates)

***

### states

#### Getter 簽章

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: [interface.ts:882](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L882)

##### 回傳

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`states`](TemplateStateMachine.md#states-1)

## 方法

### getActiveStatePath()

> **getActiveStatePath**(): `string`[]

定義於: [hierarchical.ts:343](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L343)

Gets all active states in the hierarchy.
Returns an array where the first element is the top-level state,
and subsequent elements are nested child states.

#### 回傳

`string`[]

***

### getCurrentStatePath()

> **getCurrentStatePath**(): `string`

定義於: [hierarchical.ts:324](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L324)

Gets the current hierarchical state path.
Returns a simple state name for non-composite states,
or a dot-notation path for composite states (e.g., "PARENT.CHILD").

#### 回傳

`string`

***

### happens()

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:763](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L763)

##### 型別參數

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

##### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

定義於: [interface.ts:769](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L769)

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `unknown`\>

##### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`happens`](TemplateStateMachine.md#happens)

***

### isInStatePath()

> **isInStatePath**(`path`): `boolean`

定義於: [hierarchical.ts:368](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L368)

Checks if the state machine is currently in a specific hierarchical path.
Supports both simple state names and dot-notation paths.

#### 參數

##### path

`string`

State path to check (e.g., "PARENT" or "PARENT.CHILD")

#### 回傳

`boolean`

***

### onEventResult()

> **onEventResult**(`callback`): () => `void`

定義於: [interface.ts:854](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L854)

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; [TemplateStateMachine](TemplateStateMachine.md) always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md)
for the exact snapshot-iteration semantics.

#### 參數

##### callback

[`EventResultCallback`](../type-aliases/EventResultCallback.md)\<`EventPayloadMapping`, `Context`, `States`\>

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`onEventResult`](TemplateStateMachine.md#oneventresult)

***

### onHappens()

> **onHappens**(`callback`): () => `void`

定義於: [interface.ts:836](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L836)

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see [EventResultCallback](../type-aliases/EventResultCallback.md) for the exact
snapshot-iteration semantics.

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`onHappens`](TemplateStateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): () => `void`

定義於: [interface.ts:826](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L826)

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
[EventResultCallback](../type-aliases/EventResultCallback.md) for the exact snapshot-iteration semantics.

#### 參數

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`onStateChange`](TemplateStateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

定義於: [interface.ts:723](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L723)

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`reset`](TemplateStateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

定義於: [interface.ts:870](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L870)

#### 參數

##### context

`Context`

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`setContext`](TemplateStateMachine.md#setcontext)

***

### start()

> **start**(): `void`

定義於: [interface.ts:729](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L729)

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`start`](TemplateStateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: [interface.ts:758](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L758)

#### 參數

##### state

`"INITIAL"` | `"TERMINAL"` | `States`

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`switchTo`](TemplateStateMachine.md#switchto)

***

### wrapup()

> **wrapup**(): `void`

定義於: [interface.ts:742](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L742)

#### 回傳

`void`

#### 繼承自

[`TemplateStateMachine`](TemplateStateMachine.md).[`wrapup`](TemplateStateMachine.md#wrapup)

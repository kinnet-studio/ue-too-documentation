[@ue-too/being-portable](../globals.md) / PortableMachine

# 介面: PortableMachine

定義於: [being-portable/src/api-types.ts:63](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L63)

A loaded machine: an ordinary `being` state machine plus its definition,
snapshot and restore.

## Extends

- `StateMachine`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`, [`PortableOutputs`](../type-aliases/PortableOutputs.md)\>

## 屬性

### context

> `readonly` **context**: [`PortableContext`](PortableContext.md)

定義於: [being-portable/src/api-types.ts:71](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L71)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### 覆寫了

`StateMachine.context`

***

### currentState

> **currentState**: `string`

定義於: being/dist/interface.d.ts:220

#### 繼承自

`StateMachine.currentState`

***

### definition

> `readonly` **definition**: [`MachineDefinition`](../type-aliases/MachineDefinition.md)

定義於: [being-portable/src/api-types.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L70)

The upgraded, normalized document, frozen.

***

### possibleStates

> **possibleStates**: `string`[]

定義於: being/dist/interface.d.ts:199

#### 繼承自

`StateMachine.possibleStates`

***

### states

> **states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

定義於: being/dist/interface.d.ts:191

#### 繼承自

`StateMachine.states`

## 方法

### happens()

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

定義於: being/dist/interface.d.ts:188

##### 型別參數

###### K

`K` *extends* `never`

##### 參數

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### 回傳

`EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

##### 繼承自

`StateMachine.happens`

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `unknown`\>

定義於: being/dist/interface.d.ts:189

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### 回傳

`EventResult`\<`string`, `unknown`\>

##### 繼承自

`StateMachine.happens`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

定義於: being/dist/interface.d.ts:216

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see EventResultCallback
for the exact snapshot-iteration semantics.

#### 參數

##### callback

`EventResultCallback`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`\>

#### 回傳

`void` \| () => `void`

#### 繼承自

`StateMachine.onEventResult`

***

### onHappens()

> **onHappens**(`callback`): `void` \| () => `void`

定義於: being/dist/interface.d.ts:207

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see EventResultCallback for the exact
snapshot-iteration semantics.

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

`void` \| () => `void`

#### 繼承自

`StateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void` \| () => `void`

定義於: being/dist/interface.d.ts:198

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
EventResultCallback for the exact snapshot-iteration semantics.

#### 參數

##### callback

`StateChangeCallback`\<`string`\>

#### 回傳

`void` \| () => `void`

#### 繼承自

`StateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義於: being/dist/interface.d.ts:217

#### 回傳

`void`

#### 繼承自

`StateMachine.reset`

***

### restore()

> **restore**(`snapshot`, `options?`): [`RestoreResult`](../type-aliases/RestoreResult.md)

定義於: [being-portable/src/api-types.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L74)

#### 參數

##### snapshot

`unknown`

##### options?

###### mode?

[`RestoreMode`](../type-aliases/RestoreMode.md)

#### 回傳

[`RestoreResult`](../type-aliases/RestoreResult.md)

***

### setContext()

> **setContext**(`context`): `void`

定義於: being/dist/interface.d.ts:190

#### 參數

##### context

[`PortableContext`](PortableContext.md)

#### 回傳

`void`

#### 繼承自

`StateMachine.setContext`

***

### snapshot()

> **snapshot**(): [`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

定義於: [being-portable/src/api-types.ts:73](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L73)

Throws while the machine is handling an event.

#### 回傳

[`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

***

### start()

> **start**(): `void`

定義於: being/dist/interface.d.ts:218

#### 回傳

`void`

#### 繼承自

`StateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: being/dist/interface.d.ts:178

#### 參數

##### state

`string`

#### 回傳

`void`

#### 繼承自

`StateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義於: being/dist/interface.d.ts:219

#### 回傳

`void`

#### 繼承自

`StateMachine.wrapup`

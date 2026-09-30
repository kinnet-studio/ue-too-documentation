[@ue-too/being-portable](../globals.md) / PortableMachine

# インターフェイス: PortableMachine

定義: [being-portable/src/api-types.ts:63](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L63)

A loaded machine: an ordinary `being` state machine plus its definition,
snapshot and restore.

## 拡張

- `StateMachine`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`, [`PortableOutputs`](../type-aliases/PortableOutputs.md)\>

## プロパティ

### context

> `readonly` **context**: [`PortableContext`](PortableContext.md)

定義: [being-portable/src/api-types.ts:71](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L71)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### 上書き

`StateMachine.context`

***

### currentState

> **currentState**: `string`

定義: being/dist/interface.d.ts:220

#### 継承元

`StateMachine.currentState`

***

### definition

> `readonly` **definition**: [`MachineDefinition`](../type-aliases/MachineDefinition.md)

定義: [being-portable/src/api-types.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L70)

The upgraded, normalized document, frozen.

***

### possibleStates

> **possibleStates**: `string`[]

定義: being/dist/interface.d.ts:199

#### 継承元

`StateMachine.possibleStates`

***

### states

> **states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

定義: being/dist/interface.d.ts:191

#### 継承元

`StateMachine.states`

## メソッド

### happens()

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

定義: being/dist/interface.d.ts:188

##### 型パラメーター

###### K

`K` *extends* `never`

##### パラメータ

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### 戻り値

`EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

##### 継承元

`StateMachine.happens`

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `unknown`\>

定義: being/dist/interface.d.ts:189

##### 型パラメーター

###### K

`K` *extends* `string`

##### パラメータ

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### 戻り値

`EventResult`\<`string`, `unknown`\>

##### 継承元

`StateMachine.happens`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

定義: being/dist/interface.d.ts:216

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see EventResultCallback
for the exact snapshot-iteration semantics.

#### パラメータ

##### callback

`EventResultCallback`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`\>

#### 戻り値

`void` \| () => `void`

#### 継承元

`StateMachine.onEventResult`

***

### onHappens()

> **onHappens**(`callback`): `void` \| () => `void`

定義: being/dist/interface.d.ts:207

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see EventResultCallback for the exact
snapshot-iteration semantics.

#### パラメータ

##### callback

(`args`, `context`) => `void`

#### 戻り値

`void` \| () => `void`

#### 継承元

`StateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void` \| () => `void`

定義: being/dist/interface.d.ts:198

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
EventResultCallback for the exact snapshot-iteration semantics.

#### パラメータ

##### callback

`StateChangeCallback`\<`string`\>

#### 戻り値

`void` \| () => `void`

#### 継承元

`StateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義: being/dist/interface.d.ts:217

#### 戻り値

`void`

#### 継承元

`StateMachine.reset`

***

### restore()

> **restore**(`snapshot`, `options?`): [`RestoreResult`](../type-aliases/RestoreResult.md)

定義: [being-portable/src/api-types.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L74)

#### パラメータ

##### snapshot

`unknown`

##### options?

###### mode?

[`RestoreMode`](../type-aliases/RestoreMode.md)

#### 戻り値

[`RestoreResult`](../type-aliases/RestoreResult.md)

***

### setContext()

> **setContext**(`context`): `void`

定義: being/dist/interface.d.ts:190

#### パラメータ

##### context

[`PortableContext`](PortableContext.md)

#### 戻り値

`void`

#### 継承元

`StateMachine.setContext`

***

### snapshot()

> **snapshot**(): [`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

定義: [being-portable/src/api-types.ts:73](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L73)

Throws while the machine is handling an event.

#### 戻り値

[`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

***

### start()

> **start**(): `void`

定義: being/dist/interface.d.ts:218

#### 戻り値

`void`

#### 継承元

`StateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義: being/dist/interface.d.ts:178

#### パラメータ

##### state

`string`

#### 戻り値

`void`

#### 継承元

`StateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義: being/dist/interface.d.ts:219

#### 戻り値

`void`

#### 継承元

`StateMachine.wrapup`

[@ue-too/being-portable](../globals.md) / PortableMachine

# Interface: PortableMachine

Defined in: [being-portable/src/api-types.ts:63](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L63)

A loaded machine: an ordinary `being` state machine plus its definition,
snapshot and restore.

## Extends

- `StateMachine`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`, [`PortableOutputs`](../type-aliases/PortableOutputs.md)\>

## Properties

### context

> `readonly` **context**: [`PortableContext`](PortableContext.md)

Defined in: [being-portable/src/api-types.ts:71](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L71)

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

#### Overrides

`StateMachine.context`

***

### currentState

> **currentState**: `string`

Defined in: being/dist/interface.d.ts:220

#### Inherited from

`StateMachine.currentState`

***

### definition

> `readonly` **definition**: [`MachineDefinition`](../type-aliases/MachineDefinition.md)

Defined in: [being-portable/src/api-types.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L70)

The upgraded, normalized document, frozen.

***

### possibleStates

> **possibleStates**: `string`[]

Defined in: being/dist/interface.d.ts:199

#### Inherited from

`StateMachine.possibleStates`

***

### states

> **states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `string` *extends* `States` ? `string` : `States`, `EventOutputMapping`\>\>

Defined in: being/dist/interface.d.ts:191

#### Inherited from

`StateMachine.states`

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

Defined in: being/dist/interface.d.ts:188

##### Type Parameters

###### K

`K` *extends* `never`

##### Parameters

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### Returns

`EventResult`\<`string`, `K` *extends* `never` ? [`PortableOutputs`](../type-aliases/PortableOutputs.md)\[`K`\<`K`\>\] : `void`\>

##### Inherited from

`StateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<`string`, `unknown`\>

Defined in: being/dist/interface.d.ts:189

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`PortableEvents`](../type-aliases/PortableEvents.md), `K`\>

##### Returns

`EventResult`\<`string`, `unknown`\>

##### Inherited from

`StateMachine.happens`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

Defined in: being/dist/interface.d.ts:216

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see EventResultCallback
for the exact snapshot-iteration semantics.

#### Parameters

##### callback

`EventResultCallback`\<[`PortableEvents`](../type-aliases/PortableEvents.md), [`PortableContext`](PortableContext.md), `string`\>

#### Returns

`void` \| () => `void`

#### Inherited from

`StateMachine.onEventResult`

***

### onHappens()

> **onHappens**(`callback`): `void` \| () => `void`

Defined in: being/dist/interface.d.ts:207

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see EventResultCallback for the exact
snapshot-iteration semantics.

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void` \| () => `void`

#### Inherited from

`StateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void` \| () => `void`

Defined in: being/dist/interface.d.ts:198

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
EventResultCallback for the exact snapshot-iteration semantics.

#### Parameters

##### callback

`StateChangeCallback`\<`string`\>

#### Returns

`void` \| () => `void`

#### Inherited from

`StateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

Defined in: being/dist/interface.d.ts:217

#### Returns

`void`

#### Inherited from

`StateMachine.reset`

***

### restore()

> **restore**(`snapshot`, `options?`): [`RestoreResult`](../type-aliases/RestoreResult.md)

Defined in: [being-portable/src/api-types.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L74)

#### Parameters

##### snapshot

`unknown`

##### options?

###### mode?

[`RestoreMode`](../type-aliases/RestoreMode.md)

#### Returns

[`RestoreResult`](../type-aliases/RestoreResult.md)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: being/dist/interface.d.ts:190

#### Parameters

##### context

[`PortableContext`](PortableContext.md)

#### Returns

`void`

#### Inherited from

`StateMachine.setContext`

***

### snapshot()

> **snapshot**(): [`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

Defined in: [being-portable/src/api-types.ts:73](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L73)

Throws while the machine is handling an event.

#### Returns

[`MachineSnapshot`](../type-aliases/MachineSnapshot.md)

***

### start()

> **start**(): `void`

Defined in: being/dist/interface.d.ts:218

#### Returns

`void`

#### Inherited from

`StateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: being/dist/interface.d.ts:178

#### Parameters

##### state

`string`

#### Returns

`void`

#### Inherited from

`StateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

Defined in: being/dist/interface.d.ts:219

#### Returns

`void`

#### Inherited from

`StateMachine.wrapup`

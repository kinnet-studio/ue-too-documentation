[@ue-too/being](../globals.md) / HierarchicalStateMachine

# Class: HierarchicalStateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>

Defined in: [hierarchical.ts:306](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L306)

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

Defined in: [interface.ts:591](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L591)

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

Defined in: [interface.ts:578](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L578)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_context`](TemplateStateMachine.md#context)

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:573](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L573)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_currentState`](TemplateStateMachine.md#currentstate)

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: [interface.ts:581](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L581)

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

Defined in: [interface.ts:589](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L589)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_initialState`](TemplateStateMachine.md#initialstate)

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: [`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>[]

Defined in: [interface.ts:580](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L580)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_stateChangeCallbacks`](TemplateStateMachine.md#statechangecallbacks)

***

### \_states

> `protected` **\_states**: `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:574](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L574)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_states`](TemplateStateMachine.md#states)

***

### \_statesArray

> `protected` **\_statesArray**: `States`[]

Defined in: [interface.ts:579](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L579)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_statesArray`](TemplateStateMachine.md#statesarray)

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined` = `undefined`

Defined in: [interface.ts:588](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L588)

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`_timeouts`](TemplateStateMachine.md#timeouts)

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `"INITIAL"` \| `"TERMINAL"` \| `States`

Defined in: [interface.ts:722](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L722)

##### Returns

`"INITIAL"` \| `"TERMINAL"` \| `States`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`currentState`](TemplateStateMachine.md#currentstate)

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: [interface.ts:730](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L730)

##### Returns

`States`[]

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`possibleStates`](TemplateStateMachine.md#possiblestates)

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: [interface.ts:734](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L734)

##### Returns

`Record`\<`States`, [`State`](../interfaces/State.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`states`](TemplateStateMachine.md#states-1)

## Methods

### getActiveStatePath()

> **getActiveStatePath**(): `string`[]

Defined in: [hierarchical.ts:343](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L343)

Gets all active states in the hierarchy.
Returns an array where the first element is the top-level state,
and subsequent elements are nested child states.

#### Returns

`string`[]

***

### getCurrentStatePath()

> **getCurrentStatePath**(): `string`

Defined in: [hierarchical.ts:324](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L324)

Gets the current hierarchical state path.
Returns a simple state name for non-composite states,
or a dot-notation path for composite states (e.g., "PARENT.CHILD").

#### Returns

`string`

***

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [interface.ts:652](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L652)

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

Defined in: [interface.ts:658](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L658)

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

Defined in: [hierarchical.ts:368](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L368)

Checks if the state machine is currently in a specific hierarchical path.
Supports both simple state names and dot-notation paths.

#### Parameters

##### path

`string`

State path to check (e.g., "PARENT" or "PARENT.CHILD")

#### Returns

`boolean`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: [interface.ts:710](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L710)

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onHappens`](TemplateStateMachine.md#onhappens)

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: [interface.ts:706](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L706)

#### Parameters

##### callback

[`StateChangeCallback`](../type-aliases/StateChangeCallback.md)\<`States`\>

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`onStateChange`](TemplateStateMachine.md#onstatechange)

***

### reset()

> **reset**(): `void`

Defined in: [interface.ts:612](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L612)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`reset`](TemplateStateMachine.md#reset)

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [interface.ts:726](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L726)

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

Defined in: [interface.ts:618](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L618)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`start`](TemplateStateMachine.md#start)

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: [interface.ts:647](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L647)

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

Defined in: [interface.ts:631](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L631)

#### Returns

`void`

#### Inherited from

[`TemplateStateMachine`](TemplateStateMachine.md).[`wrapup`](TemplateStateMachine.md#wrapup)

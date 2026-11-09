[@ue-too/board](../globals.md) / KmtInputStateMachineWebWorkerProxy

# Class: KmtInputStateMachineWebWorkerProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:755](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L755)

## Extends

- `TemplateStateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new KmtInputStateMachineWebWorkerProxy**(`webworker`): `KmtInputStateMachineWebWorkerProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:763](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L763)

#### Parameters

##### webworker

`Worker`

#### Returns

`KmtInputStateMachineWebWorkerProxy`

#### Overrides

`TemplateStateMachine< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## Properties

### \_context

> `protected` **\_context**: [`KmtInputContext`](../interfaces/KmtInputContext.md)

Defined in: packages/being/dist/interface.d.ts:383

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

Defined in: packages/being/dist/interface.d.ts:381

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: packages/being/dist/interface.d.ts:386

#### Parameters

##### args

\[`string`, `unknown`\] | \[`"leftPointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"spacebarDown"`\] | \[`"spacebarUp"`\] | \[`"stayIdle"`\] | \[`"cursorOnElement"`\] | \[`"scroll"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"scrollWithCtrl"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"middlePointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"disable"`\] | \[`"enable"`\] | \[`"pointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\]

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

Defined in: packages/being/dist/interface.d.ts:388

#### Inherited from

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

Defined in: packages/being/dist/interface.d.ts:385

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:382

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: (`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`)[]

Defined in: packages/being/dist/interface.d.ts:384

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

Defined in: packages/being/dist/interface.d.ts:387

#### Inherited from

`TemplateStateMachine._timeouts`

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

Defined in: packages/being/dist/interface.d.ts:398

##### Returns

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: packages/being/dist/interface.d.ts:400

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:401

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

`TemplateStateMachine.states`

## Methods

### happens()

> **happens**(...`args`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:780](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L780)

#### Parameters

##### args

...\[`string`, `unknown`\]

#### Returns

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Overrides

`TemplateStateMachine.happens`

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: packages/being/dist/interface.d.ts:397

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: packages/being/dist/interface.d.ts:396

#### Parameters

##### callback

`StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

Defined in: packages/being/dist/interface.d.ts:390

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: packages/being/dist/interface.d.ts:399

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

Defined in: packages/being/dist/interface.d.ts:391

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: packages/being/dist/interface.d.ts:393

#### Parameters

##### state

`"INITIAL"` | `"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

Defined in: packages/being/dist/interface.d.ts:392

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.wrapup`

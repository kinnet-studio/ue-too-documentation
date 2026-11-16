[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanPanningState

# Class: OneFingerPanPanningState

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:157](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L157)

PANNING state: one finger down, and moving it pans the camera.

## Remarks

Each move outputs a `pan` by how far the finger travelled since the
previous move, in window pixels, with y flipped when
[TouchContext.alignCoordinateSystem](../interfaces/TouchContext.md#aligncoordinatesystem) is `false`. A second finger
going down moves to **PINCHING**; lifting the finger moves to **IDLE**.

## Extends

- `FingerCountState`

## Constructors

### Constructor

> **new OneFingerPanPanningState**(): `OneFingerPanPanningState`

#### Returns

`OneFingerPanPanningState`

#### Inherited from

`FingerCountState.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:581

#### Inherited from

`FingerCountState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:580

#### Inherited from

`FingerCountState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>\>\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:115](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L115)

#### Inherited from

`FingerCountState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:579

#### Inherited from

`FingerCountState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:158](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L158)

#### Overrides

`FingerCountState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:112](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L112)

#### Inherited from

`FingerCountState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:587

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

`FingerCountState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:584

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`FingerCountState.eventGuards`

***

### eventPreconditions

#### Get Signature

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### Returns

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`FingerCountState.eventPreconditions`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: packages/being/dist/interface.d.ts:586

##### Returns

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

`FingerCountState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:583

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`FingerCountState.guards`

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: packages/being/dist/interface.d.ts:582

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

`FingerCountState.handlingEvents`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: packages/being/dist/interface.d.ts:589

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### Returns

`void`

#### Inherited from

`FingerCountState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:590

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

#### Returns

`EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`FingerCountState.handles`

***

### touchmove()

> **touchmove**(`context`, `payload`): [`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:172](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L172)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

[`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:588

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### Returns

`void`

#### Inherited from

`FingerCountState.uponEnter`

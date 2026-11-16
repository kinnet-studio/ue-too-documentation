[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanPinchingState

# 類別: OneFingerPanPinchingState

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:216](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L216)

PINCHING state: two or more fingers down; the first two pinch-zoom and pan.

## 備註

Each move uses the first two tracked fingers in the move payload and
outputs, in order:
1. a `pan` by how far their midpoint travelled since the previous move
2. a `zoom` of `currentSpread / previousSpread - 1` anchored at the
   current midpoint (in viewport coordinates)

The camera rig scales a zoom delta by the current zoom level, so this
keeps the content under both fingers. The `zoom` is left out when the two
fingers were on the same spot. Y is flipped in both outputs when
[TouchContext.alignCoordinateSystem](../interfaces/TouchContext.md#aligncoordinatesystem) is `false`.

Lifting fingers until one is left moves to **PANNING** with that finger;
lifting all of them moves to **IDLE**.

## Extends

- `FingerCountState`

## 建構函式

### 建構函式

> **new OneFingerPanPinchingState**(): `OneFingerPanPinchingState`

#### 回傳

`OneFingerPanPinchingState`

#### 繼承自

`FingerCountState.constructor`

## 屬性

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:581

#### 繼承自

`FingerCountState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:580

#### 繼承自

`FingerCountState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>\>\>

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:115](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L115)

#### 繼承自

`FingerCountState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:579

#### 繼承自

`FingerCountState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:217](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L217)

#### 覆寫了

`FingerCountState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:112](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L112)

#### 繼承自

`FingerCountState._guards`

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:587

##### 回傳

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

`FingerCountState.delay`

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:584

##### 回傳

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`FingerCountState.eventGuards`

***

### eventPreconditions

#### Getter 簽章

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 回傳

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`FingerCountState.eventPreconditions`

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: packages/being/dist/interface.d.ts:586

##### 回傳

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

`FingerCountState.eventReactions`

***

### guards

#### Getter 簽章

> **get** **guards**(): `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:583

##### 回傳

`Guard`\<`Context`\>

#### 繼承自

`FingerCountState.guards`

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: packages/being/dist/interface.d.ts:582

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

`FingerCountState.handlingEvents`

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: packages/being/dist/interface.d.ts:589

#### 參數

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### 回傳

`void`

#### 繼承自

`FingerCountState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:590

#### 型別參數

##### K

`K` *extends* `string`

#### 參數

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

#### 回傳

`EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 繼承自

`FingerCountState.handles`

***

### touchmove()

> **touchmove**(`context`, `payload`): [`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:231](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L231)

#### 參數

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### 回傳

[`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: packages/being/dist/interface.d.ts:588

#### 參數

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### 回傳

`void`

#### 繼承自

`FingerCountState.uponEnter`

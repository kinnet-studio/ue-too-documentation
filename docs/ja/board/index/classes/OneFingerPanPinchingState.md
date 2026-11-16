[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanPinchingState

# クラス: OneFingerPanPinchingState

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:216](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L216)

PINCHING state: two or more fingers down; the first two pinch-zoom and pan.

## Remarks

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

## 拡張

- `FingerCountState`

## コンストラクター

### コンストラクター

> **new OneFingerPanPinchingState**(): `OneFingerPanPinchingState`

#### 戻り値

`OneFingerPanPinchingState`

#### 継承元

`FingerCountState.constructor`

## プロパティ

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:581

#### 継承元

`FingerCountState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:580

#### 継承元

`FingerCountState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>\>\>

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:115](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L115)

#### 継承元

`FingerCountState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:579

#### 継承元

`FingerCountState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:217](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L217)

#### 上書き

`FingerCountState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"oneFinger"` \| `"twoOrMoreFingers"`\>

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:112](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L112)

#### 継承元

`FingerCountState._guards`

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: packages/being/dist/interface.d.ts:587

##### 戻り値

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

`FingerCountState.delay`

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:584

##### 戻り値

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`FingerCountState.eventGuards`

***

### eventPreconditions

#### 署名を取得する

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 戻り値

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`FingerCountState.eventPreconditions`

***

### eventReactions

#### 署名を取得する

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: packages/being/dist/interface.d.ts:586

##### 戻り値

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

`FingerCountState.eventReactions`

***

### guards

#### 署名を取得する

> **get** **guards**(): `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:583

##### 戻り値

`Guard`\<`Context`\>

#### 継承元

`FingerCountState.guards`

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: packages/being/dist/interface.d.ts:582

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

`FingerCountState.handlingEvents`

## メソッド

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義: packages/being/dist/interface.d.ts:589

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### 戻り値

`void`

#### 継承元

`FingerCountState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:590

#### 型パラメーター

##### K

`K` *extends* `string`

#### パラメータ

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

#### 戻り値

`EventResult`\<[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), `K` *extends* `"touchmove"` ? [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 継承元

`FingerCountState.handles`

***

### touchmove()

> **touchmove**(`context`, `payload`): [`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:231](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L231)

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### 戻り値

[`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)[]

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義: packages/being/dist/interface.d.ts:588

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md), [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)

#### 戻り値

`void`

#### 継承元

`FingerCountState.uponEnter`

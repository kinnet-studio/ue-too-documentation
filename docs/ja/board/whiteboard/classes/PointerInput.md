[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / PointerInput

# クラス: PointerInput

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:59](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L59)

Turns raw pointer events into tool events, and decides which presses are
the whiteboard's.

## Remarks

A primary-button press (or a touch or pen contact) starts a gesture,
unless the board is busy with one of its own gestures or the app's
screen-space controls own that spot. A second pointer during a gesture
cancels it, and everything is ignored until every pointer is up: two
fingers belong to the board's pinch and pan. A press becomes a drag past
5 screen pixels; two clicks close in time and space also report
a `doubleClick`. A mouse hovering reports moves with `pressed: false`.

## コンストラクター

### コンストラクター

> **new PointerInput**(`_deps`): `PointerInput`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:69](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L69)

#### パラメータ

##### \_deps

[`PointerInputDeps`](../interfaces/PointerInputDeps.md)

#### 戻り値

`PointerInput`

## アクセッサー

### pressed

#### 署名を取得する

> **get** **pressed**(): `boolean`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:72](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L72)

Whether a gesture is under way

##### 戻り値

`boolean`

## メソッド

### cancel()

> **cancel**(): `void`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:214](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L214)

Abandons the gesture and forgets every pointer (window blur, pointercancel)

#### 戻り値

`void`

***

### down()

> **down**(`s`): `void`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:76](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L76)

#### パラメータ

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### 戻り値

`void`

***

### lostCapture()

> **lostCapture**(`id`): `void`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:202](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L202)

The browser took the pointer away from the canvas mid-gesture

#### パラメータ

##### id

`number`

#### 戻り値

`void`

***

### move()

> **move**(`s`): `void`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:108](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L108)

#### パラメータ

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### 戻り値

`void`

***

### up()

> **up**(`s`): `void`

定義: [packages/board/src/whiteboard/editor/pointer-input.ts:152](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L152)

#### パラメータ

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### 戻り値

`void`

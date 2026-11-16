[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / PointerInput

# Class: PointerInput

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:59](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L59)

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

## Constructors

### Constructor

> **new PointerInput**(`_deps`): `PointerInput`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:69](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L69)

#### Parameters

##### \_deps

[`PointerInputDeps`](../interfaces/PointerInputDeps.md)

#### Returns

`PointerInput`

## Accessors

### pressed

#### Get Signature

> **get** **pressed**(): `boolean`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:72](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L72)

Whether a gesture is under way

##### Returns

`boolean`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:214](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L214)

Abandons the gesture and forgets every pointer (window blur, pointercancel)

#### Returns

`void`

***

### down()

> **down**(`s`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:76](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L76)

#### Parameters

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### Returns

`void`

***

### lostCapture()

> **lostCapture**(`id`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:202](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L202)

The browser took the pointer away from the canvas mid-gesture

#### Parameters

##### id

`number`

#### Returns

`void`

***

### move()

> **move**(`s`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:108](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L108)

#### Parameters

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### Returns

`void`

***

### up()

> **up**(`s`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:152](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L152)

#### Parameters

##### s

[`PointerSample`](../interfaces/PointerSample.md)

#### Returns

`void`

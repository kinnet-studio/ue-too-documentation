[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / PointerInputDeps

# 介面: PointerInputDeps

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:16](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L16)

What [PointerInput](../classes/PointerInput.md) needs from the editor around it.

## 方法

### boardBusy()

> **boardBusy**(): `boolean`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:19](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L19)

The board is in one of its own gestures (Space + drag, middle-drag)

#### 回傳

`boolean`

***

### dispatch()

> **dispatch**(`event`, `payload`): `void`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:22](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L22)

#### 參數

##### event

`"pointerMove"` | `"pointerDown"` | `"pointerUp"` | `"doubleClick"` | `"cancel"`

##### payload

\{ \} | [`ToolPointer`](ToolPointer.md)

#### 回傳

`void`

***

### middleClick()

> **middleClick**(`pointer`): `void`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:32](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L32)

A middle-button click (no drag) happened

#### 參數

##### pointer

[`ToolPointer`](ToolPointer.md)

#### 回傳

`void`

***

### ownsPointer()

> **ownsPointer**(`client`): `boolean`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:21](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L21)

The app's screen-space controls take presses at this point

#### 參數

##### client

`Point`

#### 回傳

`boolean`

***

### setCursor()

> **setCursor**(`cursor`): `void`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:34](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L34)

Overrides the cursor, or hands it back to the tool with null

#### 參數

##### cursor

`string` | `null`

#### 回傳

`void`

***

### toWorld()

> **toWorld**(`client`): `Point`

定義於: [packages/board/src/whiteboard/editor/pointer-input.ts:17](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/pointer-input.ts#L17)

#### 參數

##### client

`Point`

#### 回傳

`Point`

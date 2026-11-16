[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / PointerInputDeps

# Interface: PointerInputDeps

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:16](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L16)

What [PointerInput](../classes/PointerInput.md) needs from the editor around it.

## Methods

### boardBusy()

> **boardBusy**(): `boolean`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:19](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L19)

The board is in one of its own gestures (Space + drag, middle-drag)

#### Returns

`boolean`

***

### dispatch()

> **dispatch**(`event`, `payload`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:22](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L22)

#### Parameters

##### event

`"pointerMove"` | `"pointerDown"` | `"pointerUp"` | `"doubleClick"` | `"cancel"`

##### payload

\{ \} | [`ToolPointer`](ToolPointer.md)

#### Returns

`void`

***

### middleClick()

> **middleClick**(`pointer`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:32](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L32)

A middle-button click (no drag) happened

#### Parameters

##### pointer

[`ToolPointer`](ToolPointer.md)

#### Returns

`void`

***

### ownsPointer()

> **ownsPointer**(`client`): `boolean`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:21](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L21)

The app's screen-space controls take presses at this point

#### Parameters

##### client

`Point`

#### Returns

`boolean`

***

### setCursor()

> **setCursor**(`cursor`): `void`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:34](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L34)

Overrides the cursor, or hands it back to the tool with null

#### Parameters

##### cursor

`string` | `null`

#### Returns

`void`

***

### toWorld()

> **toWorld**(`client`): `Point`

Defined in: [packages/board/src/whiteboard/editor/pointer-input.ts:17](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/pointer-input.ts#L17)

#### Parameters

##### client

`Point`

#### Returns

`Point`

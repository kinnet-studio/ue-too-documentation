[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorBackground

# Interface: EditorBackground

Defined in: [packages/board/src/whiteboard/editor/tool-context.ts:22](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/tool-context.ts#L22)

Clickable things an app puts under or over the drawing.

## Methods

### activate()?

> `optional` **activate**(`world`, `pointer`): `void`

Defined in: [packages/board/src/whiteboard/editor/tool-context.ts:29](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/tool-context.ts#L29)

A click (no drag) landed on a spot `hitTest` claimed

#### Parameters

##### world

`Point`

##### pointer

[`ToolPointer`](ToolPointer.md)

#### Returns

`void`

***

### hitTest()?

> `optional` **hitTest**(`world`): `boolean`

Defined in: [packages/board/src/whiteboard/editor/tool-context.ts:27](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/tool-context.ts#L27)

Whether there is something clickable at this world point under the
drawing (the hand and select tools only). A shape on top wins.

#### Parameters

##### world

`Point`

#### Returns

`boolean`

***

### ownsPointer()?

> `optional` **ownsPointer**(`client`): `boolean`

Defined in: [packages/board/src/whiteboard/editor/tool-context.ts:34](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/tool-context.ts#L34)

Whether the app's own screen-space controls take presses at this
window point, whatever the tool

#### Parameters

##### client

`Point`

#### Returns

`boolean`

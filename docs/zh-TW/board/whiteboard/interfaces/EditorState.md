[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorState

# 介面: EditorState

定義於: [packages/board/src/whiteboard/editor/editor.ts:88](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L88)

What a toolbar needs to show.

## 屬性

### canRedo

> **canRedo**: `boolean`

定義於: [packages/board/src/whiteboard/editor/editor.ts:96](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L96)

***

### canUndo

> **canUndo**: `boolean`

定義於: [packages/board/src/whiteboard/editor/editor.ts:95](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L95)

***

### editingText

> **editingText**: `boolean`

定義於: [packages/board/src/whiteboard/editor/editor.ts:98](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L98)

***

### empty

> **empty**: `boolean`

定義於: [packages/board/src/whiteboard/editor/editor.ts:97](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L97)

***

### selection

> **selection**: readonly `string`[]

定義於: [packages/board/src/whiteboard/editor/editor.ts:90](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L90)

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`ShapeStyle`](ShapeStyle.md)\> \| `null`

定義於: [packages/board/src/whiteboard/editor/editor.ts:94](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L94)

The style values every selected shape shares, or null with nothing selected

***

### style

> **style**: [`ShapeStyle`](ShapeStyle.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:92](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L92)

The style the next shape gets

***

### tool

> **tool**: `"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

定義於: [packages/board/src/whiteboard/editor/editor.ts:89](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L89)

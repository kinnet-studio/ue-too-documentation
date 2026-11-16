[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorState

# Interface: EditorState

Defined in: [packages/board/src/whiteboard/editor/editor.ts:88](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L88)

What a toolbar needs to show.

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:96](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L96)

***

### canUndo

> **canUndo**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:95](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L95)

***

### editingText

> **editingText**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:98](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L98)

***

### empty

> **empty**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:97](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L97)

***

### selection

> **selection**: readonly `string`[]

Defined in: [packages/board/src/whiteboard/editor/editor.ts:90](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L90)

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`ShapeStyle`](ShapeStyle.md)\> \| `null`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:94](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L94)

The style values every selected shape shares, or null with nothing selected

***

### style

> **style**: [`ShapeStyle`](ShapeStyle.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:92](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L92)

The style the next shape gets

***

### tool

> **tool**: `"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:89](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L89)

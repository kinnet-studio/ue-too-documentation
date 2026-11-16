[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorOptions

# インターフェイス: EditorOptions

定義: [packages/board/src/whiteboard/editor/editor.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L61)

How to set up an [Editor](../classes/Editor.md).

## プロパティ

### background?

> `optional` **background**: [`EditorBackground`](EditorBackground.md)

定義: [packages/board/src/whiteboard/editor/editor.ts:76](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L76)

***

### board

> **board**: [`Board`](../../index/classes/Board.md)

定義: [packages/board/src/whiteboard/editor/editor.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L63)

The board whose camera the editor draws through

***

### canvas?

> `optional` **canvas**: `HTMLCanvasElement`

定義: [packages/board/src/whiteboard/editor/editor.ts:68](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L68)

The board's canvas. Pointer and key listeners attach to it and its
window; leave it out to feed [Editor.input](../classes/Editor.md#input) yourself.

***

### createPath()?

> `optional` **createPath**: () => `Path2D`

定義: [packages/board/src/whiteboard/editor/editor.ts:80](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L80)

Makes an empty path; `new Path2D()` by default (for hosts without Path2D)

#### 戻り値

`Path2D`

***

### document?

> `optional` **document**: [`WhiteboardDocument`](../classes/WhiteboardDocument.md)

定義: [packages/board/src/whiteboard/editor/editor.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L70)

The document to edit; a new empty one by default

***

### initialTool?

> `optional` **initialTool**: `"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

定義: [packages/board/src/whiteboard/editor/editor.ts:78](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L78)

The tool picked at the start; `'hand'` by default

***

### overlayParent?

> `optional` **overlayParent**: `HTMLElement`

定義: [packages/board/src/whiteboard/editor/editor.ts:74](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L74)

Holds the text-editing overlay; the canvas's parent by default

***

### textInput?

> `optional` **textInput**: [`TextInput`](TextInput.md)

定義: [packages/board/src/whiteboard/editor/editor.ts:72](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L72)

Where typing happens while text is edited (see `DomTextInput`)

***

### theme?

> `optional` **theme**: `Partial`\<[`WhiteboardTheme`](WhiteboardTheme.md)\>

定義: [packages/board/src/whiteboard/editor/editor.ts:75](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/editor.ts#L75)

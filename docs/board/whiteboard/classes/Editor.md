[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / Editor

# Class: Editor

Defined in: [packages/board/src/whiteboard/editor/editor.ts:155](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L155)

A whiteboard editor on a `@ue-too/board` board: tools, selection, undo,
and drawing the document each frame.

## Remarks

Each tool is a `@ue-too/being` state machine, hosted by an editor machine
with one state per tool. The editor works beside the board's own gestures:
scroll and Ctrl + scroll zoom, Space + drag and middle-drag pan, two
fingers pinch and pan; while the board is in one of them, tools stand
aside. The app keeps its frame loop and calls [Editor.draw](#draw) after
drawing its own background.

## Example

```ts
const board = new Board(canvas);
const editor = new Editor({ board, canvas });
editor.setTool('pen');
function frame(timestamp: number) {
    board.step(timestamp);
    if (board.context) editor.draw(board.context);
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
```

## Constructors

### Constructor

> **new Editor**(`options`): `Editor`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:188](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L188)

#### Parameters

##### options

[`EditorOptions`](../interfaces/EditorOptions.md)

#### Returns

`Editor`

## Properties

### document

> `readonly` **document**: [`WhiteboardDocument`](WhiteboardDocument.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:156](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L156)

***

### history

> `readonly` **history**: [`History`](History.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:157](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L157)

***

### input

> `readonly` **input**: [`PointerInput`](PointerInput.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:158](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L158)

## Accessors

### erasing

#### Get Signature

> **get** **erasing**(): `ReadonlySet`\<`string`\>

Defined in: [packages/board/src/whiteboard/editor/editor.ts:262](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L262)

Shapes the eraser has marked; they are drawn faded until it lets go

##### Returns

`ReadonlySet`\<`string`\>

***

### tool

#### Get Signature

> **get** **tool**(): `"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:257](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L257)

The tool in use

##### Returns

`"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

## Methods

### clear()

> **clear**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:362](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L362)

Removes every shape, as one undo step

#### Returns

`void`

***

### deleteSelection()

> **deleteSelection**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:406](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L406)

Deletes the selected shapes, as one undo step

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:418](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L418)

Removes the editor's listeners; the document is left as it is

#### Returns

`void`

***

### draw()

> **draw**(`ctx`): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:309](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L309)

Draws the document and the selection overlay. Call it each frame with
the board's context, after the board's `step` and your own background.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### getState()

> **getState**(): [`EditorState`](../interfaces/EditorState.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:290](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L290)

#### Returns

[`EditorState`](../interfaces/EditorState.md)

***

### getTheme()

> **getTheme**(): [`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)

Defined in: [packages/board/src/whiteboard/editor/editor.ts:286](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L286)

#### Returns

[`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)

***

### handleKey()

> **handleKey**(`event`): `boolean`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:375](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L375)

Runs the shortcut a key press stands for (see `shortcutFor`). The
editor calls it for key presses on the canvas's window; call it
yourself for other key sources.

#### Parameters

##### event

[`KeyLike`](../interfaces/KeyLike.md) & `object`

#### Returns

`boolean`

Whether the key was handled (its default is then prevented)

***

### redo()

> **redo**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:338](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L338)

Puts back the last change you undid

#### Returns

`void`

***

### selectAll()

> **selectAll**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:412](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L412)

Selects every shape, switching to the select tool

#### Returns

`void`

***

### setStyle()

> **setStyle**(`style`): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:347](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L347)

Sets the style the next shape gets, and restyles the selected shapes
(as one undo step)

#### Parameters

##### style

`Partial`\<[`ShapeStyle`](../interfaces/ShapeStyle.md)\>

#### Returns

`void`

***

### setTheme()

> **setTheme**(`theme`): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:280](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L280)

Replaces parts of the theme (after a light/dark switch, say)

#### Parameters

##### theme

`Partial`\<[`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)\>

#### Returns

`void`

***

### setTool()

> **setTool**(`tool`): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:267](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L267)

Switches tools, abandoning any gesture under way

#### Parameters

##### tool

`"rect"` | `"ellipse"` | `"arrow"` | `"line"` | `"pen"` | `"text"` | `"note"` | `"hand"` | `"select"` | `"eraser"`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:300](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L300)

Listens for changes to [EditorState](../interfaces/EditorState.md); called only when something
in it changed.

#### Parameters

##### listener

(`state`) => `void`

#### Returns

A function that stops the listener

> (): `void`

##### Returns

`void`

***

### toWorld()

> **toWorld**(`client`): `Point`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:275](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L275)

Converts a window point (CSS pixels) to world coordinates

#### Parameters

##### client

`Point`

#### Returns

`Point`

***

### undo()

> **undo**(): `void`

Defined in: [packages/board/src/whiteboard/editor/editor.ts:332](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L332)

Takes back your last change, abandoning any gesture under way first

#### Returns

`void`

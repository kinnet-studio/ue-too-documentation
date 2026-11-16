[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / Editor

# 類別: Editor

定義於: [packages/board/src/whiteboard/editor/editor.ts:155](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L155)

A whiteboard editor on a `@ue-too/board` board: tools, selection, undo,
and drawing the document each frame.

## 備註

Each tool is a `@ue-too/being` state machine, hosted by an editor machine
with one state per tool. The editor works beside the board's own gestures:
scroll and Ctrl + scroll zoom, Space + drag and middle-drag pan, two
fingers pinch and pan; while the board is in one of them, tools stand
aside. The app keeps its frame loop and calls [Editor.draw](#draw) after
drawing its own background.

## 範例

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

## 建構函式

### 建構函式

> **new Editor**(`options`): `Editor`

定義於: [packages/board/src/whiteboard/editor/editor.ts:188](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L188)

#### 參數

##### options

[`EditorOptions`](../interfaces/EditorOptions.md)

#### 回傳

`Editor`

## 屬性

### document

> `readonly` **document**: [`WhiteboardDocument`](WhiteboardDocument.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:156](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L156)

***

### history

> `readonly` **history**: [`History`](History.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:157](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L157)

***

### input

> `readonly` **input**: [`PointerInput`](PointerInput.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:158](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L158)

## 存取器

### erasing

#### Getter 簽章

> **get** **erasing**(): `ReadonlySet`\<`string`\>

定義於: [packages/board/src/whiteboard/editor/editor.ts:262](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L262)

Shapes the eraser has marked; they are drawn faded until it lets go

##### 回傳

`ReadonlySet`\<`string`\>

***

### tool

#### Getter 簽章

> **get** **tool**(): `"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

定義於: [packages/board/src/whiteboard/editor/editor.ts:257](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L257)

The tool in use

##### 回傳

`"rect"` \| `"ellipse"` \| `"arrow"` \| `"line"` \| `"pen"` \| `"text"` \| `"note"` \| `"hand"` \| `"select"` \| `"eraser"`

## 方法

### clear()

> **clear**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:362](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L362)

Removes every shape, as one undo step

#### 回傳

`void`

***

### deleteSelection()

> **deleteSelection**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:406](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L406)

Deletes the selected shapes, as one undo step

#### 回傳

`void`

***

### destroy()

> **destroy**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:418](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L418)

Removes the editor's listeners; the document is left as it is

#### 回傳

`void`

***

### draw()

> **draw**(`ctx`): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:309](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L309)

Draws the document and the selection overlay. Call it each frame with
the board's context, after the board's `step` and your own background.

#### 參數

##### ctx

`CanvasRenderingContext2D`

#### 回傳

`void`

***

### getState()

> **getState**(): [`EditorState`](../interfaces/EditorState.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:290](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L290)

#### 回傳

[`EditorState`](../interfaces/EditorState.md)

***

### getTheme()

> **getTheme**(): [`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)

定義於: [packages/board/src/whiteboard/editor/editor.ts:286](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L286)

#### 回傳

[`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)

***

### handleKey()

> **handleKey**(`event`): `boolean`

定義於: [packages/board/src/whiteboard/editor/editor.ts:375](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L375)

Runs the shortcut a key press stands for (see `shortcutFor`). The
editor calls it for key presses on the canvas's window; call it
yourself for other key sources.

#### 參數

##### event

[`KeyLike`](../interfaces/KeyLike.md) & `object`

#### 回傳

`boolean`

Whether the key was handled (its default is then prevented)

***

### redo()

> **redo**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:338](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L338)

Puts back the last change you undid

#### 回傳

`void`

***

### selectAll()

> **selectAll**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:412](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L412)

Selects every shape, switching to the select tool

#### 回傳

`void`

***

### setStyle()

> **setStyle**(`style`): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:347](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L347)

Sets the style the next shape gets, and restyles the selected shapes
(as one undo step)

#### 參數

##### style

`Partial`\<[`ShapeStyle`](../interfaces/ShapeStyle.md)\>

#### 回傳

`void`

***

### setTheme()

> **setTheme**(`theme`): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:280](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L280)

Replaces parts of the theme (after a light/dark switch, say)

#### 參數

##### theme

`Partial`\<[`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)\>

#### 回傳

`void`

***

### setTool()

> **setTool**(`tool`): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:267](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L267)

Switches tools, abandoning any gesture under way

#### 參數

##### tool

`"rect"` | `"ellipse"` | `"arrow"` | `"line"` | `"pen"` | `"text"` | `"note"` | `"hand"` | `"select"` | `"eraser"`

#### 回傳

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:300](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L300)

Listens for changes to [EditorState](../interfaces/EditorState.md); called only when something
in it changed.

#### 參數

##### listener

(`state`) => `void`

#### 回傳

A function that stops the listener

> (): `void`

##### 回傳

`void`

***

### toWorld()

> **toWorld**(`client`): `Point`

定義於: [packages/board/src/whiteboard/editor/editor.ts:275](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L275)

Converts a window point (CSS pixels) to world coordinates

#### 參數

##### client

`Point`

#### 回傳

`Point`

***

### undo()

> **undo**(): `void`

定義於: [packages/board/src/whiteboard/editor/editor.ts:332](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/editor.ts#L332)

Takes back your last change, abandoning any gesture under way first

#### 回傳

`void`

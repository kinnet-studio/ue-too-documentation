[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorBackground

# インターフェイス: EditorBackground

定義: [packages/board/src/whiteboard/editor/tool-context.ts:22](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/tool-context.ts#L22)

Clickable things an app puts under or over the drawing.

## メソッド

### activate()?

> `optional` **activate**(`world`, `pointer`): `void`

定義: [packages/board/src/whiteboard/editor/tool-context.ts:29](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/tool-context.ts#L29)

A click (no drag) landed on a spot `hitTest` claimed

#### パラメータ

##### world

`Point`

##### pointer

[`ToolPointer`](ToolPointer.md)

#### 戻り値

`void`

***

### hitTest()?

> `optional` **hitTest**(`world`): `boolean`

定義: [packages/board/src/whiteboard/editor/tool-context.ts:27](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/tool-context.ts#L27)

Whether there is something clickable at this world point under the
drawing (the hand and select tools only). A shape on top wins.

#### パラメータ

##### world

`Point`

#### 戻り値

`boolean`

***

### ownsPointer()?

> `optional` **ownsPointer**(`client`): `boolean`

定義: [packages/board/src/whiteboard/editor/tool-context.ts:34](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/tool-context.ts#L34)

Whether the app's own screen-space controls take presses at this
window point, whatever the tool

#### パラメータ

##### client

`Point`

#### 戻り値

`boolean`

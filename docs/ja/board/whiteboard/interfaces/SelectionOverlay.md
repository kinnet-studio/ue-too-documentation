[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / SelectionOverlay

# インターフェイス: SelectionOverlay

定義: [packages/board/src/whiteboard/render/overlay.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/overlay.ts#L38)

What the selection overlay shows this frame.

## プロパティ

### handles

> **handles**: [`Handle`](Handle.md)[]

定義: [packages/board/src/whiteboard/render/overlay.ts:41](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/overlay.ts#L41)

***

### marquee

> **marquee**: [`Box`](Box.md) \| `null`

定義: [packages/board/src/whiteboard/render/overlay.ts:43](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/overlay.ts#L43)

The rubber band being dragged, or null

***

### selection

> **selection**: [`Box`](Box.md) \| `null`

定義: [packages/board/src/whiteboard/render/overlay.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/overlay.ts#L40)

Box around the selected shapes, or null

***

### zoom

> **zoom**: `number`

定義: [packages/board/src/whiteboard/render/overlay.ts:45](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/overlay.ts#L45)

Camera zoom, so the overlay keeps its size on screen

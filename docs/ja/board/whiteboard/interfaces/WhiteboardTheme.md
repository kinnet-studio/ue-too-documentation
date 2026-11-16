[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / WhiteboardTheme

# インターフェイス: WhiteboardTheme

定義: [packages/board/src/whiteboard/render/theme.ts:12](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L12)

The colours and font a whiteboard is drawn with.

## Remarks

Shapes store colour names; the theme turns each name into a CSS colour, so
an app can swap themes (light and dark) without touching the drawing.

## プロパティ

### colors

> **colors**: `Record`\<[`ColorName`](../type-aliases/ColorName.md), `string`\>

定義: [packages/board/src/whiteboard/render/theme.ts:14](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L14)

Strokes, fills and text for each colour name

***

### fonts

> **fonts**: `object`

定義: [packages/board/src/whiteboard/render/theme.ts:21](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L21)

#### hand

> **hand**: `string`

CSS font family for text and notes, with fallbacks

***

### paper

> **paper**: `Record`\<[`ColorName`](../type-aliases/ColorName.md), `string`\>

定義: [packages/board/src/whiteboard/render/theme.ts:16](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L16)

A sticky note's paper for each colour name

***

### paperText

> **paperText**: `string`

定義: [packages/board/src/whiteboard/render/theme.ts:18](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L18)

Text on sticky notes

***

### selection

> **selection**: `string`

定義: [packages/board/src/whiteboard/render/theme.ts:20](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/theme.ts#L20)

Selection outline, handles and marquee

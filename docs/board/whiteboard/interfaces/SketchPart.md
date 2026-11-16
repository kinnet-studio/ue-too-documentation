[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / SketchPart

# Interface: SketchPart

Defined in: [packages/board/src/whiteboard/render/sketch.ts:30](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/sketch.ts#L30)

One path of a sketched shape and how to paint it.

## Remarks

`outline` and `hachure` are stroked in the shape's colour, `solid` is
filled in its colour at low opacity, `paper` is a note's sheet.

## Properties

### kind

> **kind**: `"stroke"` \| `"fill"`

Defined in: [packages/board/src/whiteboard/render/sketch.ts:31](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/sketch.ts#L31)

***

### ops

> **ops**: [`PathOp`](../type-aliases/PathOp.md)[]

Defined in: [packages/board/src/whiteboard/render/sketch.ts:33](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/sketch.ts#L33)

***

### role

> **role**: `"hachure"` \| `"solid"` \| `"outline"` \| `"paper"`

Defined in: [packages/board/src/whiteboard/render/sketch.ts:32](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/sketch.ts#L32)

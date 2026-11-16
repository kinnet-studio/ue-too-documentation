[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / hitShape

# Function: hitShape()

> **hitShape**(`shape`, `p`, `tolerance`, `env`): `boolean`

Defined in: [packages/board/src/whiteboard/geometry/hit-test.ts:78](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/hit-test.ts#L78)

Whether a world point hits a shape.

## Parameters

### shape

[`Shape`](../type-aliases/Shape.md)

### p

`Point`

### tolerance

`number`

### env

[`TextEnv`](../interfaces/TextEnv.md)

## Returns

`boolean`

## Remarks

Strokes (lines, arrows, pen strokes, the outlines of unfilled rectangles
and ellipses) hit within `tolerance` of the stroke's edge. Filled
rectangles and ellipses, notes and text hit anywhere inside. `tolerance`
is in world units: pass screen pixels divided by the zoom.

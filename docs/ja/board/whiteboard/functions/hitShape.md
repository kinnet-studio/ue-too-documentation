[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / hitShape

# 関数: hitShape()

> **hitShape**(`shape`, `p`, `tolerance`, `env`): `boolean`

定義: [packages/board/src/whiteboard/geometry/hit-test.ts:78](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/hit-test.ts#L78)

Whether a world point hits a shape.

## パラメータ

### shape

[`Shape`](../type-aliases/Shape.md)

### p

`Point`

### tolerance

`number`

### env

[`TextEnv`](../interfaces/TextEnv.md)

## 戻り値

`boolean`

## Remarks

Strokes (lines, arrows, pen strokes, the outlines of unfilled rectangles
and ellipses) hit within `tolerance` of the stroke's edge. Filled
rectangles and ellipses, notes and text hit anywhere inside. `tolerance`
is in world units: pass screen pixels divided by the zoom.

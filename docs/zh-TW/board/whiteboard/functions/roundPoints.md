[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / roundPoints

# 函式: roundPoints()

> **roundPoints**(`points`, `decimals`): [`PointPair`](../type-aliases/PointPair.md)[]

定義於: [packages/board/src/whiteboard/geometry/simplify.ts:80](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/simplify.ts#L80)

Rounds every coordinate to `decimals` places (half away from zero), to keep
saved drawings small.

## 參數

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### decimals

`number` = `2`

## 回傳

[`PointPair`](../type-aliases/PointPair.md)[]

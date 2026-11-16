[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / roundPoints

# 関数: roundPoints()

> **roundPoints**(`points`, `decimals`): [`PointPair`](../type-aliases/PointPair.md)[]

定義: [packages/board/src/whiteboard/geometry/simplify.ts:80](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/simplify.ts#L80)

Rounds every coordinate to `decimals` places (half away from zero), to keep
saved drawings small.

## パラメータ

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### decimals

`number` = `2`

## 戻り値

[`PointPair`](../type-aliases/PointPair.md)[]

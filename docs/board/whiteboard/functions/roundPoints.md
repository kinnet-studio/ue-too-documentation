[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / roundPoints

# Function: roundPoints()

> **roundPoints**(`points`, `decimals`): [`PointPair`](../type-aliases/PointPair.md)[]

Defined in: [packages/board/src/whiteboard/geometry/simplify.ts:80](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/simplify.ts#L80)

Rounds every coordinate to `decimals` places (half away from zero), to keep
saved drawings small.

## Parameters

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### decimals

`number` = `2`

## Returns

[`PointPair`](../type-aliases/PointPair.md)[]

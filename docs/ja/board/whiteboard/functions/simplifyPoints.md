[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / simplifyPoints

# 関数: simplifyPoints()

> **simplifyPoints**(`points`, `tolerance`): [`PointPair`](../type-aliases/PointPair.md)[]

定義: [packages/board/src/whiteboard/geometry/simplify.ts:36](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/simplify.ts#L36)

Drops points that stray less than `tolerance` from the line through their
neighbours (Ramer–Douglas–Peucker), keeping both ends.

## パラメータ

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### tolerance

`number`

## 戻り値

[`PointPair`](../type-aliases/PointPair.md)[]

## Remarks

Iterative, so very long strokes can't overflow the call stack.

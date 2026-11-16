[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / simplifyPoints

# 函式: simplifyPoints()

> **simplifyPoints**(`points`, `tolerance`): [`PointPair`](../type-aliases/PointPair.md)[]

定義於: [packages/board/src/whiteboard/geometry/simplify.ts:36](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/simplify.ts#L36)

Drops points that stray less than `tolerance` from the line through their
neighbours (Ramer–Douglas–Peucker), keeping both ends.

## 參數

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### tolerance

`number`

## 回傳

[`PointPair`](../type-aliases/PointPair.md)[]

## 備註

Iterative, so very long strokes can't overflow the call stack.

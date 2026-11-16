[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / simplifyPoints

# Function: simplifyPoints()

> **simplifyPoints**(`points`, `tolerance`): [`PointPair`](../type-aliases/PointPair.md)[]

Defined in: [packages/board/src/whiteboard/geometry/simplify.ts:36](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/simplify.ts#L36)

Drops points that stray less than `tolerance` from the line through their
neighbours (Ramer–Douglas–Peucker), keeping both ends.

## Parameters

### points

[`PointPair`](../type-aliases/PointPair.md)[]

### tolerance

`number`

## Returns

[`PointPair`](../type-aliases/PointPair.md)[]

## Remarks

Iterative, so very long strokes can't overflow the call stack.

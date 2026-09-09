[@ue-too/board](../../modules.md) / [index](../index.md) / angleSpan

# Function: angleSpan()

> **angleSpan**(`from`, `to`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:273](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/rotation.ts#L273)

Calculates the signed angular distance between two angles, taking the shorter path.

## Parameters

### from

`number`

Starting angle in radians

### to

`number`

Target angle in radians

## Returns

`number`

Signed angular difference in radians, in the range (-π, π]

## Remarks

Returns the shortest angular path from `from` to `to`:
- Positive value: rotate counter-clockwise (positive direction)
- Negative value: rotate clockwise (negative direction)
- Always returns the smaller of the two possible paths

## Example

```typescript
angleSpan(0, Math.PI/2);        // π/2 (90° ccw)
angleSpan(Math.PI/2, 0);        // -π/2 (90° cw)
angleSpan(0, 3*Math.PI/2);      // -π/2 (shorter to go cw)
angleSpan(3*Math.PI/2, 0);      // π/2 (shorter to go ccw)
angleSpan(0, Math.PI);          // π (180°, ambiguous)
```

[@ue-too/board](../globals.md) / clampRotation

# Function: clampRotation()

> **clampRotation**(`rotation`, `rotationLimits?`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:71](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L71)

Clamps a rotation angle to stay within specified angular limits.

## Parameters

### rotation

`number`

The rotation angle to clamp in radians

### rotationLimits?

[`RotationLimits`](../type-aliases/RotationLimits.md)

Optional rotation constraints with direction

## Returns

`number`

The clamped rotation angle, or original if already within limits

## Remarks

If the rotation is outside the allowed arc, it's clamped to the nearest
boundary (start or end). When equidistant from both, the `startAsTieBreaker`
flag determines which boundary to use.

The rotation is normalized to [0, 2π] before clamping.

## Example

```typescript
const limits = { start: 0, end: Math.PI/2, ccw: true, startAsTieBreaker: true };

clampRotation(Math.PI/4, limits);  // π/4 (within range)
clampRotation(Math.PI, limits);    // π/2 (clamped to end)
clampRotation(-0.1, limits);       // 0 (clamped to start)
```

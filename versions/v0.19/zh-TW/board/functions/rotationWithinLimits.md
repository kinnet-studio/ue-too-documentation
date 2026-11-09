[@ue-too/board](../globals.md) / rotationWithinLimits

# Function: rotationWithinLimits()

> **rotationWithinLimits**(`rotation`, `rotationLimits?`): `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:131](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L131)

Checks if a rotation angle is within specified angular limits.

## Parameters

### rotation

`number`

The rotation angle to check in radians

### rotationLimits?

[`RotationLimits`](../type-aliases/RotationLimits.md)

Optional rotation constraints with direction

## Returns

`boolean`

True if rotation is within the allowed arc or no limits specified, false otherwise

## Remarks

Returns true if:
- No limits are specified (undefined)
- Start and end angles are effectively equal (full circle allowed)
- Rotation falls within the arc from start to end in the specified direction

The rotation is normalized to [0, 2π] before checking.

## Example

```typescript
const limits = { start: 0, end: Math.PI/2, ccw: true, startAsTieBreaker: true };

rotationWithinLimits(Math.PI/4, limits);   // true (within range)
rotationWithinLimits(Math.PI, limits);     // false (outside range)
rotationWithinLimits(0, limits);           // true (at start)
rotationWithinLimits(Math.PI/2, limits);   // true (at end)
```

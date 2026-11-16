[@ue-too/board](../globals.md) / normalizeAngleZero2TwoPI

# Function: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:241](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L241)

Normalizes an angle to the range [0, 2π).

## Parameters

### angle

`number`

Angle in radians (can be any value)

## Returns

`number`

Equivalent angle in the range [0, 2π)

## Remarks

This function wraps angles to the standard [0, 2π) range. Useful for
ensuring consistent angle representation when comparing or storing angles.

## Example

```typescript
normalizeAngleZero2TwoPI(0);           // 0
normalizeAngleZero2TwoPI(Math.PI);     // π
normalizeAngleZero2TwoPI(3 * Math.PI); // π (wraps around)
normalizeAngleZero2TwoPI(-Math.PI/2);  // 3π/2 (negative becomes positive)
normalizeAngleZero2TwoPI(2 * Math.PI); // 0 (full rotation)
```

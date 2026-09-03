[@ue-too/board](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# Function: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:240](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L240)

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

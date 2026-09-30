[@ue-too/math](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# Function: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

Defined in: [index.ts:688](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/math/src/index.ts#L688)

Normalizes an angle to the range [0, 2π).

## Parameters

### angle

`number`

Angle in radians (can be any value)

## Returns

`number`

Normalized angle between 0 and 2π

## Remarks

This function wraps any angle to the range [0, 2π) by taking the modulo
and ensuring the result is positive.

## Example

```typescript
normalizeAngleZero2TwoPI(Math.PI * 3); // π (180 degrees)
normalizeAngleZero2TwoPI(-Math.PI / 2); // 3π/2 (270 degrees)
normalizeAngleZero2TwoPI(0); // 0
```

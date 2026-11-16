[@ue-too/math](../globals.md) / normalizeAngleZero2TwoPI

# Function: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

Defined in: [index.ts:688](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L688)

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

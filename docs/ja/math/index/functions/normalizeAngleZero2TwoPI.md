[@ue-too/math](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# 関数: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

定義: [index.ts:688](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/index.ts#L688)

Normalizes an angle to the range [0, 2π).

## パラメータ

### angle

`number`

Angle in radians (can be any value)

## 戻り値

`number`

Normalized angle between 0 and 2π

## Remarks

This function wraps any angle to the range [0, 2π) by taking the modulo
and ensuring the result is positive.

## 例

```typescript
normalizeAngleZero2TwoPI(Math.PI * 3); // π (180 degrees)
normalizeAngleZero2TwoPI(-Math.PI / 2); // 3π/2 (270 degrees)
normalizeAngleZero2TwoPI(0); // 0
```

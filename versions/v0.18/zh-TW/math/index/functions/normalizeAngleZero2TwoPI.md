[@ue-too/math](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# 函式: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

定義於: [index.ts:688](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/index.ts#L688)

Normalizes an angle to the range [0, 2π).

## 參數

### angle

`number`

Angle in radians (can be any value)

## 回傳

`number`

Normalized angle between 0 and 2π

## 備註

This function wraps any angle to the range [0, 2π) by taking the modulo
and ensuring the result is positive.

## 範例

```typescript
normalizeAngleZero2TwoPI(Math.PI * 3); // π (180 degrees)
normalizeAngleZero2TwoPI(-Math.PI / 2); // 3π/2 (270 degrees)
normalizeAngleZero2TwoPI(0); // 0
```

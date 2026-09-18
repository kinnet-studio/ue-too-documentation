[@ue-too/board](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# 函式: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:240](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/rotation.ts#L240)

Normalizes an angle to the range [0, 2π).

## 參數

### angle

`number`

Angle in radians (can be any value)

## 回傳

`number`

Equivalent angle in the range [0, 2π)

## 備註

This function wraps angles to the standard [0, 2π) range. Useful for
ensuring consistent angle representation when comparing or storing angles.

## 範例

```typescript
normalizeAngleZero2TwoPI(0);           // 0
normalizeAngleZero2TwoPI(Math.PI);     // π
normalizeAngleZero2TwoPI(3 * Math.PI); // π (wraps around)
normalizeAngleZero2TwoPI(-Math.PI/2);  // 3π/2 (negative becomes positive)
normalizeAngleZero2TwoPI(2 * Math.PI); // 0 (full rotation)
```

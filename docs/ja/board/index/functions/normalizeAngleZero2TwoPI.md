[@ue-too/board](../../modules.md) / [index](../index.md) / normalizeAngleZero2TwoPI

# 関数: normalizeAngleZero2TwoPI()

> **normalizeAngleZero2TwoPI**(`angle`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/rotation.ts#L240)

Normalizes an angle to the range [0, 2π).

## パラメータ

### angle

`number`

Angle in radians (can be any value)

## 戻り値

`number`

Equivalent angle in the range [0, 2π)

## Remarks

This function wraps angles to the standard [0, 2π) range. Useful for
ensuring consistent angle representation when comparing or storing angles.

## 例

```typescript
normalizeAngleZero2TwoPI(0);           // 0
normalizeAngleZero2TwoPI(Math.PI);     // π
normalizeAngleZero2TwoPI(3 * Math.PI); // π (wraps around)
normalizeAngleZero2TwoPI(-Math.PI/2);  // 3π/2 (negative becomes positive)
normalizeAngleZero2TwoPI(2 * Math.PI); // 0 (full rotation)
```

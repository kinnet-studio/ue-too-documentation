[@ue-too/board](../../modules.md) / [index](../index.md) / clampRotation

# 函式: clampRotation()

> **clampRotation**(`rotation`, `rotationLimits?`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:71](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L71)

Clamps a rotation angle to stay within specified angular limits.

## 參數

### rotation

`number`

The rotation angle to clamp in radians

### rotationLimits?

[`RotationLimits`](../type-aliases/RotationLimits.md)

Optional rotation constraints with direction

## 回傳

`number`

The clamped rotation angle, or original if already within limits

## 備註

If the rotation is outside the allowed arc, it's clamped to the nearest
boundary (start or end). When equidistant from both, the `startAsTieBreaker`
flag determines which boundary to use.

The rotation is normalized to [0, 2π] before clamping.

## 範例

```typescript
const limits = { start: 0, end: Math.PI/2, ccw: true, startAsTieBreaker: true };

clampRotation(Math.PI/4, limits);  // π/4 (within range)
clampRotation(Math.PI, limits);    // π/2 (clamped to end)
clampRotation(-0.1, limits);       // 0 (clamped to start)
```

[@ue-too/board](../../modules.md) / [index](../index.md) / clampRotateByHandler

# 函式: clampRotateByHandler()

> **clampRotateByHandler**(`delta`, `camera`, `config`): `number`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:242](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L242)

Handler pipeline step that clamps "rotate by" deltas to prevent angular boundary violations.

## 參數

### delta

`number`

Rotation angle change in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides current rotation and boundaries)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

Clamping configuration

## 回傳

`number`

Adjusted delta that respects rotation boundaries

## 備註

This handler ensures that applying the delta won't exceed rotation boundaries.

Algorithm:
1. Calculate potential new rotation (current + delta)
2. Normalize angle to [0, 2π) range
3. Clamp to rotation boundaries
4. Calculate shortest angular distance from current to clamped angle
5. Return that distance as the new delta

Behavior:
- If `clampRotation` is false: Returns delta unchanged
- If `clampRotation` is true: Adjusts delta to stay within boundaries

The resulting delta may be zero if already at a boundary and trying to rotate further.

## 範例

```typescript
camera.rotation = Math.PI * 0.4;  // 72 degrees
camera.rotationBoundaries = { max: Math.PI / 2 };  // Max 90 degrees

const config: RotationHandlerClampConfig = {
  clampRotation: true
};

const delta = Math.PI * 0.2;  // Try to rotate 36 degrees (would exceed max)
const clamped = clampRotateByHandler(delta, camera, config);
// clamped ≈ 0.314 radians (18 degrees - only rotate to boundary)
```

## 參閱

 - [normalizeAngleZero2TwoPI](normalizeAngleZero2TwoPI.md) for angle normalization
 - [clampRotation](clampRotation.md) for boundary clamping
 - [angleSpan](angleSpan.md) for calculating angular distance

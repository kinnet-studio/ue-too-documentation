[@ue-too/board](../../modules.md) / [index](../index.md) / clampRotateByHandler

# 関数: clampRotateByHandler()

> **clampRotateByHandler**(`delta`, `camera`, `config`): `number`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:242](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L242)

Handler pipeline step that clamps "rotate by" deltas to prevent angular boundary violations.

## パラメータ

### delta

`number`

Rotation angle change in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides current rotation and boundaries)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

Clamping configuration

## 戻り値

`number`

Adjusted delta that respects rotation boundaries

## Remarks

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

## 例

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

## 参照

 - [normalizeAngleZero2TwoPI](normalizeAngleZero2TwoPI.md) for angle normalization
 - [clampRotation](clampRotation.md) for boundary clamping
 - [angleSpan](angleSpan.md) for calculating angular distance

[@ue-too/board](../../modules.md) / [index](../index.md) / clampRotateToHandler

# 関数: clampRotateToHandler()

> **clampRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:336](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/rotation-handler.ts#L336)

Handler pipeline step that clamps "rotate to" targets to camera rotation boundaries.

## パラメータ

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides rotationBoundaries)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

Clamping configuration

## 戻り値

`number`

Clamped rotation angle

## Remarks

This handler enforces angular limits on absolute rotation requests.

Behavior:
- If `clampRotation` is false: Returns target unchanged
- If `clampRotation` is true: Clamps target to [BoardCamera.rotationBoundaries](../interfaces/ObservableBoardCamera.md#rotationboundaries)

The clamping handles:
- Missing boundaries (undefined min/max)
- One-sided constraints (only min or only max)
- Full range constraints

## 例

```typescript
camera.rotationBoundaries = { min: 0, max: Math.PI };  // [0°, 180°]

const config: RotationHandlerClampConfig = {
  clampRotation: true
};

const target = Math.PI * 1.5;  // 270 degrees (exceeds max)
const clamped = clampRotateToHandler(target, camera, config);
// clamped = π (180 degrees - clamped to max boundary)
```

## 参照

 - [clampRotation](clampRotation.md) for clamping implementation
 - [createDefaultRotateToHandler](createDefaultRotateToHandler.md) for default pipeline usage

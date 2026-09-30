[@ue-too/board](../../modules.md) / [index](../index.md) / clampRotateToHandler

# 函式: clampRotateToHandler()

> **clampRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:336](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L336)

Handler pipeline step that clamps "rotate to" targets to camera rotation boundaries.

## 參數

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides rotationBoundaries)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

Clamping configuration

## 回傳

`number`

Clamped rotation angle

## 備註

This handler enforces angular limits on absolute rotation requests.

Behavior:
- If `clampRotation` is false: Returns target unchanged
- If `clampRotation` is true: Clamps target to [BoardCamera.rotationBoundaries](../interfaces/ObservableBoardCamera.md#rotationboundaries)

The clamping handles:
- Missing boundaries (undefined min/max)
- One-sided constraints (only min or only max)
- Full range constraints

## 範例

```typescript
camera.rotationBoundaries = { min: 0, max: Math.PI };  // [0°, 180°]

const config: RotationHandlerClampConfig = {
  clampRotation: true
};

const target = Math.PI * 1.5;  // 270 degrees (exceeds max)
const clamped = clampRotateToHandler(target, camera, config);
// clamped = π (180 degrees - clamped to max boundary)
```

## 參閱

 - [clampRotation](clampRotation.md) for clamping implementation
 - [createDefaultRotateToHandler](createDefaultRotateToHandler.md) for default pipeline usage

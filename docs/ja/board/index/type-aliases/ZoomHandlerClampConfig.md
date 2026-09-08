[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomHandlerClampConfig

# 型エイリアス: ZoomHandlerClampConfig

> **ZoomHandlerClampConfig** = `object`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:44](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/zoom-handler.ts#L44)

Configuration for zoom level boundary clamping.

## Remarks

Controls whether zoom operations should be constrained to camera's zoom boundaries.

When `clampZoom` is true, zoom handlers enforce [BoardCamera.zoomBoundaries](../interfaces/ObservableBoardCamera.md#zoomboundaries)
limits (min/max zoom levels). When false, zoom can exceed configured boundaries.

## 例

```typescript
const config: ZoomHandlerClampConfig = {
  clampZoom: true  // Enforce zoom boundaries
};

camera.zoomBoundaries = { min: 0.5, max: 4.0 };
// Zoom will be clamped to [0.5, 4.0] range
```

## プロパティ

### clampZoom

> **clampZoom**: `boolean`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:48](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/zoom-handler.ts#L48)

Whether to enforce zoom level boundaries.

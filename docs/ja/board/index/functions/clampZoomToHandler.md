[@ue-too/board](../../modules.md) / [index](../index.md) / clampZoomToHandler

# 関数: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:207](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/zoom-handler.ts#L207)

Handler pipeline step that clamps "zoom to" targets to camera zoom boundaries.

## パラメータ

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides zoomBoundaries)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

Clamping configuration

## 戻り値

`number`

Clamped zoom level

## Remarks

This handler enforces zoom level limits on absolute zoom requests.

Behavior:
- If `clampZoom` is false: Returns destination unchanged
- If `clampZoom` is true: Clamps destination to [BoardCamera.zoomBoundaries](../interfaces/ObservableBoardCamera.md#zoomboundaries) (min/max)

The clamping is performed by [clampZoomLevel](clampZoomLevel.md), which handles:
- Missing boundaries (undefined min/max)
- One-sided constraints (only min or only max)
- Full range constraints

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) or [createHandlerChain](createHandlerChain.md).

## 例

```typescript
camera.zoomBoundaries = { min: 0.5, max: 3.0 };

const config: ZoomHandlerClampConfig = {
  clampZoom: true
};

const target = 5.0;  // Exceeds max
const clamped = clampZoomToHandler(target, camera, config);
// clamped = 3.0 (clamped to max boundary)
```

## 参照

 - [clampZoomLevel](clampZoomLevel.md) for clamping implementation
 - [createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) for default pipeline usage

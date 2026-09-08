[@ue-too/board](../../modules.md) / [index](../index.md) / clampZoomToHandler

# 函式: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:207](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/zoom-handler.ts#L207)

Handler pipeline step that clamps "zoom to" targets to camera zoom boundaries.

## 參數

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides zoomBoundaries)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

Clamping configuration

## 回傳

`number`

Clamped zoom level

## 備註

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

## 範例

```typescript
camera.zoomBoundaries = { min: 0.5, max: 3.0 };

const config: ZoomHandlerClampConfig = {
  clampZoom: true
};

const target = 5.0;  // Exceeds max
const clamped = clampZoomToHandler(target, camera, config);
// clamped = 3.0 (clamped to max boundary)
```

## 參閱

 - [clampZoomLevel](clampZoomLevel.md) for clamping implementation
 - [createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) for default pipeline usage

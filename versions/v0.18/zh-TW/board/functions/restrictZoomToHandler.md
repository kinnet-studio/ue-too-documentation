[@ue-too/board](../globals.md) / restrictZoomToHandler

# Function: restrictZoomToHandler()

> **restrictZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:314](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L314)

Handler pipeline step that prevents "zoom to" operations when zoom is locked.

## Parameters

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

Restriction configuration

## Returns

`number`

Current zoom level (if locked) or destination (if unlocked)

## Remarks

This handler implements a global zoom lock for absolute zoom operations.

Behavior:
- If `restrictZoom` is true: Returns current zoom level (prevents any change)
- If `restrictZoom` is false: Returns destination unchanged

Use this for:
- Disabling zoom during specific application states
- Fixed-zoom viewing modes
- Read-only camera modes

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
camera.zoomLevel = 2.0;

const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Lock zoom
};

const target = 3.0;
const result = restrictZoomToHandler(target, camera, config);
// result = 2.0 (zoom locked, returns current level)
```

## See

[createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) for default pipeline usage

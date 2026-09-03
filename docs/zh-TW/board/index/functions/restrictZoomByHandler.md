[@ue-too/board](../../modules.md) / [index](../index.md) / restrictZoomByHandler

# 函式: restrictZoomByHandler()

> **restrictZoomByHandler**(`delta`, `camera`, `config`): `number`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:362](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/zoom-handler.ts#L362)

Handler pipeline step that prevents "zoom by" operations when zoom is locked.

## 參數

### delta

`number`

Zoom level change

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

Restriction configuration

## 回傳

`number`

Zero (if locked) or delta (if unlocked)

## 備註

This handler implements a global zoom lock for relative zoom operations.

Behavior:
- If `restrictZoom` is true: Returns 0 (prevents any change)
- If `restrictZoom` is false: Returns delta unchanged

Use this for:
- Disabling zoom during specific application states
- Fixed-zoom viewing modes
- Read-only camera modes

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultZoomByOnlyHandler](createDefaultZoomByOnlyHandler.md) or [createHandlerChain](createHandlerChain.md).

## 範例

```typescript
const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Lock zoom
};

const delta = 0.5;
const result = restrictZoomByHandler(delta, camera, config);
// result = 0 (zoom locked, no change allowed)
```

## 參閱

[createDefaultZoomByOnlyHandler](createDefaultZoomByOnlyHandler.md) for default pipeline usage

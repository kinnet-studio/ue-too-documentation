[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomToHandlerFunction

# 型エイリアス: ZoomToHandlerFunction()

> **ZoomToHandlerFunction** = (`destination`, `camera`, `config`) => `number`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:118](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/zoom-handler.ts#L118)

Handler function type for absolute "zoom to" camera operations.

## パラメータ

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## 戻り値

`number`

Transformed zoom level (after applying restrictions and clamping)

## Remarks

Zoom-to handlers process absolute zoom level requests. They form a pipeline
that can apply restrictions, clamping, and other transformations.

Handler pipeline pattern:
- Each handler receives the target zoom, camera state, and config
- Returns a potentially modified zoom level
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Boundary clamping (enforce min/max zoom limits)
- Zoom locking (prevent any zoom changes)
- Custom zoom constraints or snapping

## 例

```typescript
const myZoomToHandler: ZoomToHandlerFunction = (target, camera, config) => {
  // Custom logic: snap to integer zoom levels
  return Math.round(target);
};
```

## 参照

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomToOnlyHandler](../functions/createDefaultZoomToOnlyHandler.md) for the default implementation

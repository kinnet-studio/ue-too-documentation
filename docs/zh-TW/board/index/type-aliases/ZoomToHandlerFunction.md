[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomToHandlerFunction

# 型別別名: ZoomToHandlerFunction()

> **ZoomToHandlerFunction** = (`destination`, `camera`, `config`) => `number`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:118](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/zoom-handler.ts#L118)

Handler function type for absolute "zoom to" camera operations.

## 參數

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## 回傳

`number`

Transformed zoom level (after applying restrictions and clamping)

## 備註

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

## 範例

```typescript
const myZoomToHandler: ZoomToHandlerFunction = (target, camera, config) => {
  // Custom logic: snap to integer zoom levels
  return Math.round(target);
};
```

## 參閱

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomToOnlyHandler](../functions/createDefaultZoomToOnlyHandler.md) for the default implementation

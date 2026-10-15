[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomByHandlerFunction

# 型別別名: ZoomByHandlerFunction()

> **ZoomByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:161](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/zoom-handler.ts#L161)

Handler function type for relative "zoom by" camera operations.

## 參數

### delta

`number`

Zoom level change (added to current zoom)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## 回傳

`number`

Transformed zoom delta (after applying restrictions and clamping)

## 備註

Zoom-by handlers process relative zoom change requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the delta.

Handler pipeline pattern:
- Each handler receives the zoom delta, camera state, and config
- Returns a potentially modified delta
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Boundary clamping (prevent exceeding min/max zoom)
- Zoom locking (return zero delta)
- Delta dampening or acceleration

## 範例

```typescript
const myZoomByHandler: ZoomByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large zoom changes
  if (Math.abs(delta) > 1.0) {
    return delta * 0.5;  // 50% dampening
  }
  return delta;
};
```

## 參閱

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomByOnlyHandler](../functions/createDefaultZoomByOnlyHandler.md) for the default implementation

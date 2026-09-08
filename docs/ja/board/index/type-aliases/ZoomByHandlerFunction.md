[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomByHandlerFunction

# 型エイリアス: ZoomByHandlerFunction()

> **ZoomByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:161](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/zoom-handler.ts#L161)

Handler function type for relative "zoom by" camera operations.

## パラメータ

### delta

`number`

Zoom level change (added to current zoom)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## 戻り値

`number`

Transformed zoom delta (after applying restrictions and clamping)

## Remarks

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

## 例

```typescript
const myZoomByHandler: ZoomByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large zoom changes
  if (Math.abs(delta) > 1.0) {
    return delta * 0.5;  // 50% dampening
  }
  return delta;
};
```

## 参照

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomByOnlyHandler](../functions/createDefaultZoomByOnlyHandler.md) for the default implementation

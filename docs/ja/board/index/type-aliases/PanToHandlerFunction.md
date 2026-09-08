[@ue-too/board](../../modules.md) / [index](../index.md) / PanToHandlerFunction

# 型エイリアス: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:160](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/pan-handler.ts#L160)

Handler function type for absolute "pan to" camera operations.

## パラメータ

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

Pan behavior configuration

## 戻り値

`Point`

Transformed destination position (after applying restrictions and clamping)

## Remarks

Pan-to handlers process absolute camera positioning requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the target position.

Handler pipeline pattern:
- Each handler receives the current destination, camera state, and config
- Returns a potentially modified destination point
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Axis restrictions (prevent movement on specific axes)
- Boundary clamping (keep position within bounds)
- Viewport constraints (ensure entire viewport stays in bounds)

## 例

```typescript
const myPanToHandler: PanToHandlerFunction = (dest, camera, config) => {
  // Custom logic: snap to grid
  return {
    x: Math.round(dest.x / 100) * 100,
    y: Math.round(dest.y / 100) * 100
  };
};
```

## 参照

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultPanToHandler](../functions/createDefaultPanToHandler.md) for the default implementation

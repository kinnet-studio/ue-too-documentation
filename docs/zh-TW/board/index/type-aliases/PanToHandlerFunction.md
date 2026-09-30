[@ue-too/board](../../modules.md) / [index](../index.md) / PanToHandlerFunction

# 型別別名: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:160](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/pan-handler.ts#L160)

Handler function type for absolute "pan to" camera operations.

## 參數

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

Pan behavior configuration

## 回傳

`Point`

Transformed destination position (after applying restrictions and clamping)

## 備註

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

## 範例

```typescript
const myPanToHandler: PanToHandlerFunction = (dest, camera, config) => {
  // Custom logic: snap to grid
  return {
    x: Math.round(dest.x / 100) * 100,
    y: Math.round(dest.y / 100) * 100
  };
};
```

## 參閱

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultPanToHandler](../functions/createDefaultPanToHandler.md) for the default implementation

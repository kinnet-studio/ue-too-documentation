[@ue-too/board](../../modules.md) / [index](../index.md) / PanByHandlerFunction

# 型別別名: PanByHandlerFunction()

> **PanByHandlerFunction** = (`delta`, `camera`, `config`) => `Point`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:205](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/pan-handler.ts#L205)

Handler function type for relative "pan by" camera operations.

## 參數

### delta

`Point`

Movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

Pan behavior configuration

## 回傳

`Point`

Transformed movement delta (after applying restrictions and clamping)

## 備註

Pan-by handlers process relative camera movement requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the movement delta.

Handler pipeline pattern:
- Each handler receives the current delta, camera state, and config
- Returns a potentially modified delta
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Axis restrictions (prevent movement on specific axes)
- Boundary clamping (prevent moving outside bounds)
- Delta dampening or acceleration

## 範例

```typescript
const myPanByHandler: PanByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large movements
  const magnitude = Math.sqrt(delta.x ** 2 + delta.y ** 2);
  if (magnitude > 100) {
    const scale = 100 / magnitude;
    return { x: delta.x * scale, y: delta.y * scale };
  }
  return delta;
};
```

## 參閱

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultPanByHandler](../functions/createDefaultPanByHandler.md) for the default implementation

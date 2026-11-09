[@ue-too/board](../globals.md) / PanToHandlerFunction

# Type Alias: PanToHandlerFunction()

> **PanToHandlerFunction** = (`destination`, `camera`, `config`) => `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:160](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L160)

Handler function type for absolute "pan to" camera operations.

## Parameters

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerConfig`](PanHandlerConfig.md)

Pan behavior configuration

## Returns

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

## Example

```typescript
const myPanToHandler: PanToHandlerFunction = (dest, camera, config) => {
  // Custom logic: snap to grid
  return {
    x: Math.round(dest.x / 100) * 100,
    y: Math.round(dest.y / 100) * 100
  };
};
```

## See

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultPanToHandler](../functions/createDefaultPanToHandler.md) for the default implementation

[@ue-too/board](../globals.md) / ZoomByHandlerFunction

# Type Alias: ZoomByHandlerFunction()

> **ZoomByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:161](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L161)

Handler function type for relative "zoom by" camera operations.

## Parameters

### delta

`number`

Zoom level change (added to current zoom)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`ZoomHandlerConfig`](ZoomHandlerConfig.md)

Zoom behavior configuration

## Returns

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

## Example

```typescript
const myZoomByHandler: ZoomByHandlerFunction = (delta, camera, config) => {
  // Custom logic: dampen large zoom changes
  if (Math.abs(delta) > 1.0) {
    return delta * 0.5;  // 50% dampening
  }
  return delta;
};
```

## See

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultZoomByOnlyHandler](../functions/createDefaultZoomByOnlyHandler.md) for the default implementation

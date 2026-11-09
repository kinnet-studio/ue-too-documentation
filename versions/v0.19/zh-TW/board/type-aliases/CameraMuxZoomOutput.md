[@ue-too/board](../globals.md) / CameraMuxZoomOutput

# Type Alias: CameraMuxZoomOutput

> **CameraMuxZoomOutput** = \{ `allowPassThrough`: `true`; `anchorPoint`: `Point`; `delta`: `number`; \} \| \{ `allowPassThrough`: `false`; \}

Defined in: [packages/board/src/camera/camera-mux/interface.ts:64](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L64)

Discriminated union type for zoom input results.
Indicates whether camera zooming is allowed and provides zoom parameters if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, both `delta` and `anchorPoint` are available
- When `allowPassThrough` is `false`, zoom is blocked

The `anchorPoint` ensures zoom focuses on a specific viewport location (e.g., cursor position).

## Example

```typescript
const output = cameraMux.notifyZoomInput(0.1, mousePosition);
if (output.allowPassThrough) {
  // Calculate new camera position to keep anchor point stationary
  const newZoom = camera.zoomLevel + output.delta;
  const newPosition = cameraPositionToGet(
    worldAtAnchor,
    output.anchorPoint,
    newZoom,
    camera.rotation
  );
  camera.setZoomLevel(newZoom);
  camera.setPosition(newPosition);
}
```

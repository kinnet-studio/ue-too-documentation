[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxZoomOutput

# 型エイリアス: CameraMuxZoomOutput

> **CameraMuxZoomOutput** = \{ `allowPassThrough`: `true`; `anchorPoint`: `Point`; `delta`: `number`; \} \| \{ `allowPassThrough`: `true`; `anchorPoint?`: `undefined`; `delta`: `number`; \} \| \{ `allowPassThrough`: `false`; \}

定義: [packages/board/src/camera/camera-mux/interface.ts:64](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/interface.ts#L64)

Discriminated union type for zoom input results.
Indicates whether camera zooming is allowed and provides zoom parameters if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, both `delta` and `anchorPoint` are available
- When `allowPassThrough` is `false`, zoom is blocked

The `anchorPoint` ensures zoom focuses on a specific viewport location (e.g., cursor position).

## 例

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

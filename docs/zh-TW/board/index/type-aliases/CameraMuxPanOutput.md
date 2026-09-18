[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxPanOutput

# 型別別名: CameraMuxPanOutput

> **CameraMuxPanOutput** = \{ `allowPassThrough`: `true`; `delta`: `Point`; \} \| \{ `allowPassThrough`: `false`; \}

定義於: [packages/board/src/camera/camera-mux/interface.ts:30](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/interface.ts#L30)

Discriminated union type for pan input results.
Indicates whether camera panning is allowed and provides the delta if accepted.

## 備註

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, no delta is provided

Use this to implement input gating, animation systems, or input arbitration.

## 範例

```typescript
const output = cameraMux.notifyPanInput({ x: 10, y: 5 });
if (output.allowPassThrough) {
  // TypeScript knows output.delta exists here
  camera.setPosition(
    PointCal.addVector(camera.position, output.delta)
  );
} else {
  // Input was blocked (e.g., during animation)
  console.log('Pan input blocked');
}
```

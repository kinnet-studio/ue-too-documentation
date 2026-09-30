[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxPanOutput

# 型エイリアス: CameraMuxPanOutput

> **CameraMuxPanOutput** = \{ `allowPassThrough`: `true`; `delta`: `Point`; \} \| \{ `allowPassThrough`: `false`; \}

定義: [packages/board/src/camera/camera-mux/interface.ts:30](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/interface.ts#L30)

Discriminated union type for pan input results.
Indicates whether camera panning is allowed and provides the delta if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, no delta is provided

Use this to implement input gating, animation systems, or input arbitration.

## 例

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

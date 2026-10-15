[@ue-too/board](../globals.md) / CameraMuxPanOutput

# Type Alias: CameraMuxPanOutput

> **CameraMuxPanOutput** = \{ `allowPassThrough`: `true`; `delta`: `Point`; \} \| \{ `allowPassThrough`: `false`; \}

Defined in: [packages/board/src/camera/camera-mux/interface.ts:30](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L30)

Discriminated union type for pan input results.
Indicates whether camera panning is allowed and provides the delta if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, no delta is provided

Use this to implement input gating, animation systems, or input arbitration.

## Example

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

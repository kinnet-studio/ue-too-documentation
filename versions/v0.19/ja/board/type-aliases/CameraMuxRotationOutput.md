[@ue-too/board](../globals.md) / CameraMuxRotationOutput

# Type Alias: CameraMuxRotationOutput

> **CameraMuxRotationOutput** = \{ `allowPassThrough`: `true`; `delta`: `number`; \} \| \{ `allowPassThrough`: `false`; \}

Defined in: [packages/board/src/camera/camera-mux/interface.ts:87](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L87)

Discriminated union type for rotation input results.
Indicates whether camera rotation is allowed and provides the delta if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, rotation is blocked

## Example

```typescript
const output = cameraMux.notifyRotationInput(0.1); // 0.1 radians
if (output.allowPassThrough) {
  camera.setRotation(camera.rotation + output.delta);
}
```

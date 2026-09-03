[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxRotationOutput

# 型エイリアス: CameraMuxRotationOutput

> **CameraMuxRotationOutput** = \{ `allowPassThrough`: `true`; `delta`: `number`; \} \| \{ `allowPassThrough`: `false`; \}

定義: [packages/board/src/camera/camera-mux/interface.ts:88](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/interface.ts#L88)

Discriminated union type for rotation input results.
Indicates whether camera rotation is allowed and provides the delta if accepted.

## Remarks

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, rotation is blocked

## 例

```typescript
const output = cameraMux.notifyRotationInput(0.1); // 0.1 radians
if (output.allowPassThrough) {
  camera.setRotation(camera.rotation + output.delta);
}
```

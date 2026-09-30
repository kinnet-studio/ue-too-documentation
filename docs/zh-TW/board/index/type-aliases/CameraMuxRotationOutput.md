[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxRotationOutput

# 型別別名: CameraMuxRotationOutput

> **CameraMuxRotationOutput** = \{ `allowPassThrough`: `true`; `delta`: `number`; \} \| \{ `allowPassThrough`: `false`; \}

定義於: [packages/board/src/camera/camera-mux/interface.ts:88](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/interface.ts#L88)

Discriminated union type for rotation input results.
Indicates whether camera rotation is allowed and provides the delta if accepted.

## 備註

This type uses discriminated unions for type-safe flow control:
- When `allowPassThrough` is `true`, the `delta` property is available
- When `allowPassThrough` is `false`, rotation is blocked

## 範例

```typescript
const output = cameraMux.notifyRotationInput(0.1); // 0.1 radians
if (output.allowPassThrough) {
  camera.setRotation(camera.rotation + output.delta);
}
```

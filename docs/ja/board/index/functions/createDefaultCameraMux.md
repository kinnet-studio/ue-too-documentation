[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultCameraMux

# 関数: createDefaultCameraMux()

> **createDefaultCameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

定義: [packages/board/src/camera/camera-mux/relay.ts:114](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/relay.ts#L114)

Factory function to create a default camera input multiplexer.
Returns a [Relay](../classes/Relay.md) instance that allows all inputs to pass through.

## 戻り値

[`CameraMux`](../interfaces/CameraMux.md)

A new stateless relay multiplexer

## Remarks

This is a convenience function for creating the simplest possible camera mux.
The returned instance has no state and never blocks inputs.

## 例

```typescript
const cameraMux = createDefaultCameraMux();

// Use with camera rig or input handlers
const cameraRig = new CameraRig(camera, cameraMux);
```

## 参照

[Relay](../classes/Relay.md) for implementation details

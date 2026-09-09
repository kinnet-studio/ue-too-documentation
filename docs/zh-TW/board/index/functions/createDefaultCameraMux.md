[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultCameraMux

# 函式: createDefaultCameraMux()

> **createDefaultCameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

定義於: [packages/board/src/camera/camera-mux/relay.ts:114](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/relay.ts#L114)

Factory function to create a default camera input multiplexer.
Returns a [Relay](../classes/Relay.md) instance that allows all inputs to pass through.

## 回傳

[`CameraMux`](../interfaces/CameraMux.md)

A new stateless relay multiplexer

## 備註

This is a convenience function for creating the simplest possible camera mux.
The returned instance has no state and never blocks inputs.

## 範例

```typescript
const cameraMux = createDefaultCameraMux();

// Use with camera rig or input handlers
const cameraRig = new CameraRig(camera, cameraMux);
```

## 參閱

[Relay](../classes/Relay.md) for implementation details

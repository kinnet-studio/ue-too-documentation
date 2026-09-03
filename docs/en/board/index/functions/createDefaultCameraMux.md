[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultCameraMux

# Function: createDefaultCameraMux()

> **createDefaultCameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/camera/camera-mux/relay.ts:114](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/relay.ts#L114)

Factory function to create a default camera input multiplexer.
Returns a [Relay](../classes/Relay.md) instance that allows all inputs to pass through.

## Returns

[`CameraMux`](../interfaces/CameraMux.md)

A new stateless relay multiplexer

## Remarks

This is a convenience function for creating the simplest possible camera mux.
The returned instance has no state and never blocks inputs.

## Example

```typescript
const cameraMux = createDefaultCameraMux();

// Use with camera rig or input handlers
const cameraRig = new CameraRig(camera, cameraMux);
```

## See

[Relay](../classes/Relay.md) for implementation details

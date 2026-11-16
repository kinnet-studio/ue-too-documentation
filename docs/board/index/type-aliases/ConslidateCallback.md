[@ue-too/board](../../modules.md) / [index](../index.md) / ConslidateCallback

# Type Alias: ConslidateCallback()

> **ConslidateCallback** = (`payload`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:142](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/camera/update-publisher.ts#L142)

Callback function type specifically for the 'all' camera event.
Receives a discriminated union of all camera events.

## Parameters

### payload

[`AllCameraEventPayload`](AllCameraEventPayload.md)

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`

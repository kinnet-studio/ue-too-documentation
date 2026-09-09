[@ue-too/board](../../modules.md) / [index](../index.md) / ConslidateCallback

# Type Alias: ConslidateCallback()

> **ConslidateCallback** = (`payload`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:142](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L142)

Callback function type specifically for the 'all' camera event.
Receives a discriminated union of all camera events.

## Parameters

### payload

[`AllCameraEventPayload`](AllCameraEventPayload.md)

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`

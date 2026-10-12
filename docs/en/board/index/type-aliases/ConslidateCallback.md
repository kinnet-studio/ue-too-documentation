[@ue-too/board](../../modules.md) / [index](../index.md) / ConslidateCallback

# Type Alias: ConslidateCallback()

> **ConslidateCallback** = (`payload`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:142](https://github.com/kinnet-studio/ue-too/blob/c904ff4e862cacf9f57c33ab487edde188a7d671/packages/board/src/camera/update-publisher.ts#L142)

Callback function type specifically for the 'all' camera event.
Receives a discriminated union of all camera events.

## Parameters

### payload

[`AllCameraEventPayload`](AllCameraEventPayload.md)

### cameraState

[`CameraState`](CameraState.md)

## Returns

`void`

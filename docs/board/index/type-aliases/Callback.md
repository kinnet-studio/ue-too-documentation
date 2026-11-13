[@ue-too/board](../../modules.md) / [index](../index.md) / Callback

# Type Alias: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

Defined in: [packages/board/src/camera/update-publisher.ts:131](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/update-publisher.ts#L131)

Generic callback function type for camera events.

## Type Parameters

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

The event type key from CameraEventMap

## Parameters

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

The event payload specific to this event type

### cameraState

[`CameraState`](CameraState.md)

Current camera state snapshot at the time of the event

## Returns

`void`

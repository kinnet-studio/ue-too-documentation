[@ue-too/board](../../modules.md) / [index](../index.md) / CameraEventMap

# 型別別名: CameraEventMap

> **CameraEventMap** = `object`

定義於: [packages/board/src/camera/update-publisher.ts:52](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L52)

Mapping of camera event names to their payload types.
Used for type-safe event subscription.

## 屬性

### all

> **all**: [`AllCameraEventPayload`](AllCameraEventPayload.md)

定義於: [packages/board/src/camera/update-publisher.ts:60](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L60)

Any camera change event (union of pan, zoom, rotate)

***

### pan

> **pan**: [`CameraPanEventPayload`](CameraPanEventPayload.md)

定義於: [packages/board/src/camera/update-publisher.ts:54](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L54)

Position change event

***

### rotate

> **rotate**: [`CameraRotateEventPayload`](CameraRotateEventPayload.md)

定義於: [packages/board/src/camera/update-publisher.ts:58](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L58)

Rotation change event

***

### zoom

> **zoom**: [`CameraZoomEventPayload`](CameraZoomEventPayload.md)

定義於: [packages/board/src/camera/update-publisher.ts:56](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L56)

Zoom level change event

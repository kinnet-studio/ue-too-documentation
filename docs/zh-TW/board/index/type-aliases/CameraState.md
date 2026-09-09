[@ue-too/board](../../modules.md) / [index](../index.md) / CameraState

# 型別別名: CameraState

> **CameraState** = `object`

定義於: [packages/board/src/camera/update-publisher.ts:102](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L102)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## 屬性

### position

> **position**: `Point`

定義於: [packages/board/src/camera/update-publisher.ts:104](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L104)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

定義於: [packages/board/src/camera/update-publisher.ts:108](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L108)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

定義於: [packages/board/src/camera/update-publisher.ts:106](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/update-publisher.ts#L106)

Current zoom level

[@ue-too/board](../../modules.md) / [index](../index.md) / CameraState

# Type Alias: CameraState

> **CameraState** = `object`

Defined in: [packages/board/src/camera/update-publisher.ts:102](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L102)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## Properties

### position

> **position**: `Point`

Defined in: [packages/board/src/camera/update-publisher.ts:104](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L104)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:108](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L108)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:106](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L106)

Current zoom level

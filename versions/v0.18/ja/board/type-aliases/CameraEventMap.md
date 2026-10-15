[@ue-too/board](../globals.md) / CameraEventMap

# Type Alias: CameraEventMap

> **CameraEventMap** = `object`

Defined in: [packages/board/src/camera/update-publisher.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L52)

Mapping of camera event names to their payload types.
Used for type-safe event subscription.

## Properties

### all

> **all**: [`AllCameraEventPayload`](AllCameraEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:60](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L60)

Any camera change event (union of pan, zoom, rotate)

***

### pan

> **pan**: [`CameraPanEventPayload`](CameraPanEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:54](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L54)

Position change event

***

### rotate

> **rotate**: [`CameraRotateEventPayload`](CameraRotateEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:58](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L58)

Rotation change event

***

### zoom

> **zoom**: [`CameraZoomEventPayload`](CameraZoomEventPayload.md)

Defined in: [packages/board/src/camera/update-publisher.ts:56](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L56)

Zoom level change event

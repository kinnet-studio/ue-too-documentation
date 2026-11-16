[@ue-too/board](../globals.md) / CameraState

# Type Alias: CameraState

> **CameraState** = `object`

Defined in: [packages/board/src/camera/update-publisher.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L102)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## Properties

### position

> **position**: `Point`

Defined in: [packages/board/src/camera/update-publisher.ts:104](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L104)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:108](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L108)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

Defined in: [packages/board/src/camera/update-publisher.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L106)

Current zoom level

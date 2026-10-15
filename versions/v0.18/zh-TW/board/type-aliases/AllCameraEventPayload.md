[@ue-too/board](../globals.md) / AllCameraEventPayload

# Type Alias: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

Defined in: [packages/board/src/camera/update-publisher.ts:117](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L117)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.

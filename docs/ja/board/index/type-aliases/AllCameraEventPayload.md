[@ue-too/board](../../modules.md) / [index](../index.md) / AllCameraEventPayload

# 型エイリアス: AllCameraEventPayload

> **AllCameraEventPayload** = [`CameraRotateEvent`](CameraRotateEvent.md) \| [`CameraPanEvent`](CameraPanEvent.md) \| [`CameraZoomEvent`](CameraZoomEvent.md)

定義: [packages/board/src/camera/update-publisher.ts:117](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/camera/update-publisher.ts#L117)

Union type of all camera event payloads with type discriminators.
Used for the 'all' event which fires for any camera change.

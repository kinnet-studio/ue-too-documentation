[@ue-too/board](../../modules.md) / [index](../index.md) / CameraRigConfig

# 型エイリアス: CameraRigConfig

> **CameraRigConfig** = [`PanHandlerConfig`](PanHandlerConfig.md) & [`ZoomHandlerConfig`](ZoomHandlerConfig.md) & [`RotationHandlerConfig`](RotationHandlerConfig.md)

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:50](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/camera-rig/camera-rig.ts#L50)

Configuration for camera rig behavior combining pan, zoom, and rotation settings.
Composed from individual handler configs.

## Remarks

This type merges configuration from:
- [PanHandlerConfig](PanHandlerConfig.md) - Pan clamping and boundaries
- [ZoomHandlerConfig](ZoomHandlerConfig.md) - Zoom limits and restrictions
- [RotationHandlerConfig](RotationHandlerConfig.md) - Rotation constraints

## 参照

 - [PanHandlerConfig](PanHandlerConfig.md)
 - [ZoomHandlerConfig](ZoomHandlerConfig.md)
 - [RotationHandlerConfig](RotationHandlerConfig.md)

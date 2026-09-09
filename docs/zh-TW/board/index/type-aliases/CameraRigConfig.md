[@ue-too/board](../../modules.md) / [index](../index.md) / CameraRigConfig

# 型別別名: CameraRigConfig

> **CameraRigConfig** = [`PanHandlerConfig`](PanHandlerConfig.md) & [`ZoomHandlerConfig`](ZoomHandlerConfig.md) & [`RotationHandlerConfig`](RotationHandlerConfig.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:50](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/camera-rig.ts#L50)

Configuration for camera rig behavior combining pan, zoom, and rotation settings.
Composed from individual handler configs.

## 備註

This type merges configuration from:
- [PanHandlerConfig](PanHandlerConfig.md) - Pan clamping and boundaries
- [ZoomHandlerConfig](ZoomHandlerConfig.md) - Zoom limits and restrictions
- [RotationHandlerConfig](RotationHandlerConfig.md) - Rotation constraints

## 參閱

 - [PanHandlerConfig](PanHandlerConfig.md)
 - [ZoomHandlerConfig](ZoomHandlerConfig.md)
 - [RotationHandlerConfig](RotationHandlerConfig.md)

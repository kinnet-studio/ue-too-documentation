[@ue-too/board](../../modules.md) / [index](../index.md) / CameraRigConfig

# Type Alias: CameraRigConfig

> **CameraRigConfig** = [`PanHandlerConfig`](PanHandlerConfig.md) & [`ZoomHandlerConfig`](ZoomHandlerConfig.md) & [`RotationHandlerConfig`](RotationHandlerConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:50](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L50)

Configuration for camera rig behavior combining pan, zoom, and rotation settings.
Composed from individual handler configs.

## Remarks

This type merges configuration from:
- [PanHandlerConfig](PanHandlerConfig.md) - Pan clamping and boundaries
- [ZoomHandlerConfig](ZoomHandlerConfig.md) - Zoom limits and restrictions
- [RotationHandlerConfig](RotationHandlerConfig.md) - Rotation constraints

## See

 - [PanHandlerConfig](PanHandlerConfig.md)
 - [ZoomHandlerConfig](ZoomHandlerConfig.md)
 - [RotationHandlerConfig](RotationHandlerConfig.md)

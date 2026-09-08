[@ue-too/board](../../modules.md) / [index](../index.md) / RotationHandlerConfig

# 型別別名: RotationHandlerConfig

> **RotationHandlerConfig** = [`RotationHandlerRestrictConfig`](RotationHandlerRestrictConfig.md) & [`RotationHandlerClampConfig`](RotationHandlerClampConfig.md)

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:26](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/rotation-handler.ts#L26)

Combined configuration for rotation handler behavior, merging restriction and clamping settings.

## 備註

This type combines [RotationHandlerRestrictConfig](RotationHandlerRestrictConfig.md) and [RotationHandlerClampConfig](RotationHandlerClampConfig.md)
to provide complete control over camera rotation behavior.

Rotation handlers use this configuration to:
- Completely disable rotation operations (restriction)
- Clamp rotation angle to stay within defined angular limits

## 參閱

 - [RotationHandlerRestrictConfig](RotationHandlerRestrictConfig.md) for rotation locking options
 - [RotationHandlerClampConfig](RotationHandlerClampConfig.md) for angular boundary options

[@ue-too/board](../globals.md) / RotationHandlerConfig

# Type Alias: RotationHandlerConfig

> **RotationHandlerConfig** = [`RotationHandlerRestrictConfig`](RotationHandlerRestrictConfig.md) & [`RotationHandlerClampConfig`](RotationHandlerClampConfig.md)

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:26](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L26)

Combined configuration for rotation handler behavior, merging restriction and clamping settings.

## Remarks

This type combines [RotationHandlerRestrictConfig](RotationHandlerRestrictConfig.md) and [RotationHandlerClampConfig](RotationHandlerClampConfig.md)
to provide complete control over camera rotation behavior.

Rotation handlers use this configuration to:
- Completely disable rotation operations (restriction)
- Clamp rotation angle to stay within defined angular limits

## See

 - [RotationHandlerRestrictConfig](RotationHandlerRestrictConfig.md) for rotation locking options
 - [RotationHandlerClampConfig](RotationHandlerClampConfig.md) for angular boundary options

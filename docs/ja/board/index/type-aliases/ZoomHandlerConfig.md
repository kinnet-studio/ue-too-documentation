[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomHandlerConfig

# 型エイリアス: ZoomHandlerConfig

> **ZoomHandlerConfig** = [`ZoomHandlerClampConfig`](ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](ZoomHandlerRestrictConfig.md)

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:20](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/zoom-handler.ts#L20)

Combined configuration for zoom handler behavior, merging restriction and clamping settings.

## Remarks

This type combines [ZoomHandlerClampConfig](ZoomHandlerClampConfig.md) and [ZoomHandlerRestrictConfig](ZoomHandlerRestrictConfig.md)
to provide complete control over camera zoom behavior.

Zoom handlers use this configuration to:
- Completely disable zoom operations (restriction)
- Clamp zoom level to stay within defined limits (min/max bounds)

## 参照

 - [ZoomHandlerClampConfig](ZoomHandlerClampConfig.md) for boundary clamping options
 - [ZoomHandlerRestrictConfig](ZoomHandlerRestrictConfig.md) for zoom disabling options

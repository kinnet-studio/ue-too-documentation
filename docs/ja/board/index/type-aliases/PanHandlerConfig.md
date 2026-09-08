[@ue-too/board](../../modules.md) / [index](../index.md) / PanHandlerConfig

# 型エイリアス: PanHandlerConfig

> **PanHandlerConfig** = [`PanHandlerRestrictionConfig`](PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](PanHandlerClampConfig.md)

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/pan-handler.ts#L23)

Combined configuration for pan handler behavior, merging restriction and clamping settings.

## Remarks

This type combines [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) and [PanHandlerClampConfig](PanHandlerClampConfig.md)
to provide complete control over camera panning behavior.

Pan handlers use this configuration to:
- Restrict movement along specific axes (world or viewport-relative)
- Clamp camera position to stay within boundaries
- Control whether entire viewport or just center must stay in bounds

## 参照

 - [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) for movement restriction options
 - [PanHandlerClampConfig](PanHandlerClampConfig.md) for boundary clamping options

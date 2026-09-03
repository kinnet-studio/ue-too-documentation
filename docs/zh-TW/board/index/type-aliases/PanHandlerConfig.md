[@ue-too/board](../../modules.md) / [index](../index.md) / PanHandlerConfig

# 型別別名: PanHandlerConfig

> **PanHandlerConfig** = [`PanHandlerRestrictionConfig`](PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](PanHandlerClampConfig.md)

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:23](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L23)

Combined configuration for pan handler behavior, merging restriction and clamping settings.

## 備註

This type combines [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) and [PanHandlerClampConfig](PanHandlerClampConfig.md)
to provide complete control over camera panning behavior.

Pan handlers use this configuration to:
- Restrict movement along specific axes (world or viewport-relative)
- Clamp camera position to stay within boundaries
- Control whether entire viewport or just center must stay in bounds

## 參閱

 - [PanHandlerRestrictionConfig](PanHandlerRestrictionConfig.md) for movement restriction options
 - [PanHandlerClampConfig](PanHandlerClampConfig.md) for boundary clamping options

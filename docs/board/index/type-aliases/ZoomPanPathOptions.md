[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomPanPathOptions

# Type Alias: ZoomPanPathOptions

> **ZoomPanPathOptions** = `object`

Defined in: [packages/board/src/camera/utils/zoom-pan-path.ts:22](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/camera/utils/zoom-pan-path.ts#L22)

Options for [createZoomPanPath](../functions/createZoomPanPath.md).

## Properties

### rho?

> `optional` **rho**: `number`

Defined in: [packages/board/src/camera/utils/zoom-pan-path.ts:22](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/camera/utils/zoom-pan-path.ts#L22)

How much the path zooms out to travel. Higher values zoom out
further and pan less; must be greater than 0. Defaults to
[DEFAULT\_ZOOM\_PAN\_RHO](../variables/DEFAULT_ZOOM_PAN_RHO.md).

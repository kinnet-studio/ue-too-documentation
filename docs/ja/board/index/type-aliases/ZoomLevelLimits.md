[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomLevelLimits

# 型エイリアス: ZoomLevelLimits

> **ZoomLevelLimits** = `object`

定義: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/zoom.ts#L13)

Constraints for camera zoom level with optional minimum and maximum bounds.

## Remarks

Zoom level of 1.0 represents 100% (no zoom), values >1 zoom in, values <1 zoom out.
If both min and max are undefined, no constraints are applied.

## プロパティ

### max?

> `optional` **max**: `number`

定義: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/zoom.ts#L13)

Maximum allowed zoom level (optional, e.g., 10 for 1000% zoom)

***

### min?

> `optional` **min**: `number`

定義: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/zoom.ts#L13)

Minimum allowed zoom level (optional, e.g., 0.1 for 10% zoom)

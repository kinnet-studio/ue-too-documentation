[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomLevelLimits

# 型別別名: ZoomLevelLimits

> **ZoomLevelLimits** = `object`

定義於: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/zoom.ts#L13)

Constraints for camera zoom level with optional minimum and maximum bounds.

## 備註

Zoom level of 1.0 represents 100% (no zoom), values >1 zoom in, values <1 zoom out.
If both min and max are undefined, no constraints are applied.

## 屬性

### max?

> `optional` **max**: `number`

定義於: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/zoom.ts#L13)

Maximum allowed zoom level (optional, e.g., 10 for 1000% zoom)

***

### min?

> `optional` **min**: `number`

定義於: [packages/board/src/camera/utils/zoom.ts:13](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/zoom.ts#L13)

Minimum allowed zoom level (optional, e.g., 0.1 for 10% zoom)

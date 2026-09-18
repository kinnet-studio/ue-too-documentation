[@ue-too/board](../../modules.md) / [index](../index.md) / clampZoomLevel

# 関数: clampZoomLevel()

> **clampZoomLevel**(`zoomLevel`, `zoomLevelLimits?`): `number`

定義: [packages/board/src/camera/utils/zoom.ts:76](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/zoom.ts#L76)

Clamps a zoom level to stay within specified limits.

## パラメータ

### zoomLevel

`number`

The zoom level to clamp

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## 戻り値

`number`

The clamped zoom level, or original value if already within limits

## Remarks

If the zoom level is already within limits, returns it unchanged.
If no limits are specified, returns the original value.

## 例

```typescript
const limits = { min: 0.5, max: 4 };

clampZoomLevel(2.0, limits);  // 2.0 (within bounds)
clampZoomLevel(0.1, limits);  // 0.5 (clamped to min)
clampZoomLevel(10, limits);   // 4.0 (clamped to max)
clampZoomLevel(2.0);          // 2.0 (no limits)
```

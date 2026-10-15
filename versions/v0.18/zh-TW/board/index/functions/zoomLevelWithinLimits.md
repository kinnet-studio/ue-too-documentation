[@ue-too/board](../../modules.md) / [index](../index.md) / zoomLevelWithinLimits

# 函式: zoomLevelWithinLimits()

> **zoomLevelWithinLimits**(`zoomLevel`, `zoomLevelLimits?`): `boolean`

定義於: [packages/board/src/camera/utils/zoom.ts:124](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/zoom.ts#L124)

Checks if a zoom level is within specified limits.

## 參數

### zoomLevel

`number`

The zoom level to check

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## 回傳

`boolean`

True if zoom level is valid and within limits, false otherwise

## 備註

Returns false if:
- Zoom level is ≤ 0 (invalid zoom)
- Zoom level exceeds maximum limit (if defined)
- Zoom level is below minimum limit (if defined)

Returns true if no limits are defined or zoom is within bounds.

## 範例

```typescript
const limits = { min: 0.5, max: 4 };

zoomLevelWithinLimits(2.0, limits);   // true
zoomLevelWithinLimits(0.1, limits);   // false (below min)
zoomLevelWithinLimits(10, limits);    // false (above max)
zoomLevelWithinLimits(-1, limits);    // false (negative zoom)
zoomLevelWithinLimits(0, limits);     // false (zero zoom)
zoomLevelWithinLimits(2.0);           // true (no limits)
```

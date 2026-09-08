[@ue-too/board](../../modules.md) / [index](../index.md) / zoomLevelBoundariesShouldUpdate

# 函式: zoomLevelBoundariesShouldUpdate()

> **zoomLevelBoundariesShouldUpdate**(`zoomLevelBoundaries`, `targetMinZoomLevel`): `targetMinZoomLevel is number`

定義於: [packages/board/src/utils/zoomlevel-adjustment.ts:141](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/zoomlevel-adjustment.ts#L141)

Determines if zoom level boundaries should be updated.

## 參數

### zoomLevelBoundaries

Current zoom level limits

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

### targetMinZoomLevel

Proposed new minimum zoom level

`number` | `undefined`

## 回傳

`targetMinZoomLevel is number`

True if boundaries should be updated (type guard for targetMinZoomLevel)

## 備註

Zoom level boundary updates only tighten (increase minimum zoom), never relax.
This prevents the camera from zooming out too far when boundaries shrink.

Returns true (update needed) when:
- No current boundaries exist (first-time setup)
- Target minimum is higher than current minimum (tightening)

Returns false (no update) when:
- Target is undefined (invalid/incomplete)
- Target is Infinity (invalid state)
- Target is lower than current minimum (would relax, not allowed)

This function is a type guard: when it returns true, TypeScript knows
targetMinZoomLevel is a number (not undefined).

## 範例

```typescript
const currentLimits = { min: 0.5, max: 10 };
const newMin = 0.8;

if (zoomLevelBoundariesShouldUpdate(currentLimits, newMin)) {
  // Safe to use newMin as number here
  currentLimits.min = newMin;  // Tighten the limit
}

// No update for lower values
zoomLevelBoundariesShouldUpdate(currentLimits, 0.3);  // false
```

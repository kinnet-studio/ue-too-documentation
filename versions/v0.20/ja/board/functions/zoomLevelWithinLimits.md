[@ue-too/board](../globals.md) / zoomLevelWithinLimits

# Function: zoomLevelWithinLimits()

> **zoomLevelWithinLimits**(`zoomLevel`, `zoomLevelLimits?`): `boolean`

Defined in: [packages/board/src/camera/utils/zoom.ts:124](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/zoom.ts#L124)

Checks if a zoom level is within specified limits.

## Parameters

### zoomLevel

`number`

The zoom level to check

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## Returns

`boolean`

True if zoom level is valid and within limits, false otherwise

## Remarks

Returns false if:
- Zoom level is ≤ 0 (invalid zoom)
- Zoom level exceeds maximum limit (if defined)
- Zoom level is below minimum limit (if defined)

Returns true if no limits are defined or zoom is within bounds.

## Example

```typescript
const limits = { min: 0.5, max: 4 };

zoomLevelWithinLimits(2.0, limits);   // true
zoomLevelWithinLimits(0.1, limits);   // false (below min)
zoomLevelWithinLimits(10, limits);    // false (above max)
zoomLevelWithinLimits(-1, limits);    // false (negative zoom)
zoomLevelWithinLimits(0, limits);     // false (zero zoom)
zoomLevelWithinLimits(2.0);           // true (no limits)
```

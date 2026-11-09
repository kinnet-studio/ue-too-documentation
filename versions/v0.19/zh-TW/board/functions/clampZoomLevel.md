[@ue-too/board](../globals.md) / clampZoomLevel

# Function: clampZoomLevel()

> **clampZoomLevel**(`zoomLevel`, `zoomLevelLimits?`): `number`

Defined in: [packages/board/src/camera/utils/zoom.ts:76](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/zoom.ts#L76)

Clamps a zoom level to stay within specified limits.

## Parameters

### zoomLevel

`number`

The zoom level to clamp

### zoomLevelLimits?

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

Optional zoom constraints

## Returns

`number`

The clamped zoom level, or original value if already within limits

## Remarks

If the zoom level is already within limits, returns it unchanged.
If no limits are specified, returns the original value.

## Example

```typescript
const limits = { min: 0.5, max: 4 };

clampZoomLevel(2.0, limits);  // 2.0 (within bounds)
clampZoomLevel(0.1, limits);  // 0.5 (clamped to min)
clampZoomLevel(10, limits);   // 4.0 (clamped to max)
clampZoomLevel(2.0);          // 2.0 (no limits)
```

[@ue-too/board](../globals.md) / zoomLevelBoundariesShouldUpdate

# Function: zoomLevelBoundariesShouldUpdate()

> **zoomLevelBoundariesShouldUpdate**(`zoomLevelBoundaries`, `targetMinZoomLevel`): `targetMinZoomLevel is number`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:144](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/zoomlevel-adjustment.ts#L144)

Determines if zoom level boundaries should be updated.

## Parameters

### zoomLevelBoundaries

Current zoom level limits

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

### targetMinZoomLevel

Proposed new minimum zoom level

`number` | `undefined`

## Returns

`targetMinZoomLevel is number`

True if boundaries should be updated (type guard for targetMinZoomLevel)

## Remarks

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

## Example

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

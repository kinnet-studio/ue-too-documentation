[@ue-too/board](../globals.md) / convertDeltaInWorldToViewPortSpace

# Function: convertDeltaInWorldToViewPortSpace()

> **convertDeltaInWorldToViewPortSpace**(`delta`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:413](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L413)

Converts a displacement vector from world space to viewport space.
Use this for converting movement deltas, not absolute positions.
Inverse of [convertDeltaInViewPortToWorldSpace](convertDeltaInViewPortToWorldSpace.md).

## Parameters

### delta

`Point`

Displacement vector in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## Returns

`Point`

Displacement vector in viewport space (CSS pixels)

## Remarks

This transforms a *relative* displacement, not an absolute point.
The conversion accounts for:
- Rotation: Delta is rotated by -camera rotation
- Zoom: Delta is scaled by zoom (world units → viewport pixels)

## Example

```typescript
// Object moved 50 units right in world space
const worldDelta = { x: 50, y: 0 };
const viewportDelta = convertDeltaInWorldToViewPortSpace(
  worldDelta,
  2.0,  // 2x zoom
  0     // no rotation
);
// Result: { x: 100, y: 0 } (50 world units = 100 viewport pixels at 2x zoom)
```

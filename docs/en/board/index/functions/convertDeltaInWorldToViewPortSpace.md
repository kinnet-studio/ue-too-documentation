[@ue-too/board](../../modules.md) / [index](../index.md) / convertDeltaInWorldToViewPortSpace

# Function: convertDeltaInWorldToViewPortSpace()

> **convertDeltaInWorldToViewPortSpace**(`delta`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:413](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/coordinate-conversion.ts#L413)

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

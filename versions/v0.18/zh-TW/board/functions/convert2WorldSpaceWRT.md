[@ue-too/board](../globals.md) / convert2WorldSpaceWRT

# Function: convert2WorldSpaceWRT()

> **convert2WorldSpaceWRT**(`targetPosition`, `interestPoint`, `viewPortWidth`, `viewPortHeight`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L48)

Converts a viewport point to world space with respect to a hypothetical camera position.
"WRT" = "With Respect To" - calculates where a viewport point would be in world space
if the camera were at the target position.

## Parameters

### targetPosition

`Point`

Hypothetical camera position in world coordinates

### interestPoint

`Point`

Point in canvas coordinates (origin at top-left corner of the canvas element in browser)

### viewPortWidth

`number`

Viewport width in CSS pixels

### viewPortHeight

`number`

Viewport height in CSS pixels

### cameraZoomLevel

`number`

Zoom level to apply

### cameraRotation

`number`

Rotation to apply in radians

## Returns

`Point`

World space coordinates of the interest point

## Remarks

This is useful for "what-if" calculations, such as:
- Predicting where a viewport corner would land if camera moves to a position
- Checking if moving to a position would show certain world objects

The interest point uses canvas coordinates (bottom-left origin), not viewport coordinates (center origin).

## Example

```typescript
// Where would the top-left viewport corner be in world space
// if camera moved to (100, 100)?
const worldCorner = convert2WorldSpaceWRT(
  { x: 100, y: 100 },  // target camera position
  { x: 0, y: 0 },    // top-left in canvas coords
  1920, 1080,           // viewport size
  1.0,                  // zoom
  0                     // rotation
);
```

[@ue-too/board](../globals.md) / convert2ViewPortSpaceAnchorAtCenter

# Function: convert2ViewPortSpaceAnchorAtCenter()

> **convert2ViewPortSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:216](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L216)

Converts a world point to viewport space (center-anchored).
Inverse of [convert2WorldSpaceAnchorAtCenter](convert2WorldSpaceAnchorAtCenter.md).

## Parameters

### point

`Point`

Point in world coordinates

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## Returns

`Point`

Viewport coordinates (origin at center, in CSS pixels)

## Remarks

Use this to find where a world object appears on screen.
Result is in viewport space with origin at center, useful for:
- Positioning UI elements over world objects
- Checking if objects are on screen
- Converting click positions

## Example

```typescript
// Where does world point (600, 300) appear in viewport?
const viewportPos = convert2ViewPortSpaceAnchorAtCenter(
  { x: 600, y: 300 },  // world position
  { x: 500, y: 300 },  // camera position
  1.0,
  0
);
// Result: { x: 100, y: 0 } (100 pixels right of center)

// Position a DOM element at this world object
element.style.left = `${viewportPos.x + canvas.width/2}px`;
element.style.top = `${-viewportPos.y + canvas.height/2}px`;
```

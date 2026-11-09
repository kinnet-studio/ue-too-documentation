[@ue-too/board](../globals.md) / convertFromViewport2World

# Function: convertFromViewport2World()

> **convertFromViewport2World**(`pointInViewport`, `cameraPositionInWorldSpace`, `cameraZoomLevel`, `cameraRotation`, `worldHasFlippedYAxis`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/viewport-world.ts:50](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/viewport-world.ts#L50)

Converts a point from viewport space to world space.

## Parameters

### pointInViewport

`Point`

The point in viewport coordinates to convert

### cameraPositionInWorldSpace

`Point`

The camera's center position in world coordinates

### cameraZoomLevel

`number`

The camera's zoom level (1.0 = normal, >1 = zoomed in, <1 = zoomed out)

### cameraRotation

`number`

The camera's rotation angle in radians

### worldHasFlippedYAxis

`boolean` = `false`

Whether world space uses inverted y-axis (default: false)

## Returns

`Point`

The point in world coordinates

## Remarks

This function applies the inverse of the camera transformation to convert from
viewport coordinates to world coordinates. It's essential for translating user
interactions (clicks, drags) into world-space positions.

The transformation applies these operations in reverse order:
1. Unzoom: Divide by zoom level (world units per viewport pixel)
2. Unrotate: Rotate by positive camera rotation (reverse the camera's rotation)
3. Flip Y (if needed): Negate y if world uses mathematical coordinates
4. Translate: Add camera position to get absolute world position

Mathematical formula:
```
worldPoint = rotate(pointInViewport / zoom, cameraRotation) + cameraPosition
```

## Example

```typescript
// Click at viewport center with zoomed and rotated camera
const viewportPoint = { x: 0, y: 0 };  // Center of viewport
const cameraPos = { x: 1000, y: 500 };
const zoom = 2.0;  // Zoomed in 2x
const rotation = Math.PI / 4;  // 45 degrees

const worldPoint = convertFromViewport2World(
  viewportPoint,
  cameraPos,
  zoom,
  rotation,
  false
);
// Result: { x: 1000, y: 500 } (camera position, since viewport center maps to camera position)
```

## See

[convertFromWorld2Viewport](convertFromWorld2Viewport.md) for inverse conversion

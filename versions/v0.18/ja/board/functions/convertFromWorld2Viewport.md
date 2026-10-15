[@ue-too/board](../globals.md) / convertFromWorld2Viewport

# Function: convertFromWorld2Viewport()

> **convertFromWorld2Viewport**(`pointInWorld`, `cameraPositionInWorldSpace`, `cameraZoomLevel`, `cameraRotation`, `worldHasFlippedYAxis`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/viewport-world.ts:123](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/viewport-world.ts#L123)

Converts a point from world space to viewport space.

## Parameters

### pointInWorld

`Point`

The point in world coordinates to convert

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

The point in viewport coordinates

## Remarks

This function applies the camera transformation to convert from world coordinates
to viewport coordinates. This is used for rendering world objects onto the viewport.

The transformation applies these operations in order:
1. Translate: Subtract camera position (make position relative to camera)
2. Flip Y (if needed): Negate y if world uses mathematical coordinates
3. Zoom: Multiply by zoom level (viewport pixels per world unit)
4. Rotate: Rotate by negative camera rotation (to align with viewport)

Mathematical formula:
```
viewportPoint = rotate((pointInWorld - cameraPosition) * zoom, -cameraRotation)
```

The negative rotation ensures that when the camera rotates clockwise, the world
appears to rotate counter-clockwise (from the viewer's perspective), which is
the expected behavior.

## Example

```typescript
// World object at (1100, 550) with camera at (1000, 500)
const worldPoint = { x: 1100, y: 550 };
const cameraPos = { x: 1000, y: 500 };
const zoom = 2.0;  // Zoomed in 2x
const rotation = 0;  // No rotation

const viewportPoint = convertFromWorld2Viewport(
  worldPoint,
  cameraPos,
  zoom,
  rotation,
  false
);
// Result: { x: 200, y: 100 }
// ((1100 - 1000) * 2 = 200, (550 - 500) * 2 = 100)
```

## See

[convertFromViewport2World](convertFromViewport2World.md) for inverse conversion

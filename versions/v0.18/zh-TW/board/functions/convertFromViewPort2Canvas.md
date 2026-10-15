[@ue-too/board](../globals.md) / convertFromViewPort2Canvas

# Function: convertFromViewPort2Canvas()

> **convertFromViewPort2Canvas**(`pointInViewPort`, `viewportOriginInCanvasSpace`, `viewportHasFlippedYAxis`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/canvas-viewport.ts:91](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/canvas-viewport.ts#L91)

Converts a point from viewport space to canvas space.

## Parameters

### pointInViewPort

`Point`

The point in viewport coordinates to convert

### viewportOriginInCanvasSpace

`Point` = `...`

The viewport's origin position in canvas coordinates (default: {0, 0})

### viewportHasFlippedYAxis

`boolean` = `false`

Whether viewport uses inverted y-axis (default: false)

## Returns

`Point`

The point in canvas coordinates

## Remarks

This is the inverse of [convertFromCanvas2ViewPort](convertFromCanvas2ViewPort.md). It transforms points
from viewport-relative coordinates back to absolute canvas coordinates.

The conversion process:
1. Flip Y (if needed): Negate y-coordinate to convert from mathematical to canvas system
2. Translate: Add viewport origin to convert from relative to absolute position

This is essential for rendering viewport-space objects (like shapes drawn by user)
onto the actual canvas element.

## Example

```typescript
// Viewport space point (centered viewport with y-up)
const viewportPoint = { x: 100, y: 50 };  // 100 right, 50 up from viewport center
const viewportOrigin = { x: 400, y: 300 }; // Viewport centered in canvas

// Convert to canvas coordinates
const canvasPoint = convertFromViewPort2Canvas(
  viewportPoint,
  viewportOrigin,
  true  // viewport has y-up
);
// Result: { x: 500, y: 250 }
// (400 + 100 = 500 in x, 300 - 50 = 250 in y due to flip)
```

## See

[convertFromCanvas2ViewPort](convertFromCanvas2ViewPort.md) for inverse conversion

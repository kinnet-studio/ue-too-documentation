[@ue-too/board](../globals.md) / convertFromCanvas2ViewPort

# Function: convertFromCanvas2ViewPort()

> **convertFromCanvas2ViewPort**(`pointInCanvas`, `viewportOriginInCanvasSpace`, `viewportHasFlippedYAxis`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/canvas-viewport.ts:41](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/canvas-viewport.ts#L41)

Converts a point from canvas space to viewport space.

## Parameters

### pointInCanvas

`Point`

The point in canvas coordinates to convert

### viewportOriginInCanvasSpace

`Point` = `...`

The viewport's origin position in canvas coordinates (default: {0, 0})

### viewportHasFlippedYAxis

`boolean` = `false`

Whether viewport uses inverted y-axis (default: false)

## Returns

`Point`

The point in viewport coordinates

## Remarks

Canvas and viewport coordinate systems can differ in two ways:
1. Origin position: Viewport origin may not be at canvas top-left (0,0)
2. Y-axis direction: Viewport may use mathematical coordinates (y-up) vs canvas (y-down)

The conversion process:
1. Translate: Subtract viewport origin from point (shifts coordinate system)
2. Flip Y (if needed): Negate y-coordinate for mathematical coordinate system

Common use case: Converting mouse click positions (canvas space) to positions
relative to a centered viewport that uses mathematical coordinates.

## Example

```typescript
// Canvas with centered viewport using mathematical coordinates
const canvasPoint = { x: 400, y: 300 };  // Click near center
const viewportOrigin = { x: 400, y: 300 }; // Viewport centered in 800x600 canvas

// Convert to viewport space with flipped y-axis
const viewportPoint = convertFromCanvas2ViewPort(
  canvasPoint,
  viewportOrigin,
  true  // viewport has y-up
);
// Result: { x: 0, y: 0 } (center of viewport)
```

## See

[convertFromViewPort2Canvas](convertFromViewPort2Canvas.md) for inverse conversion

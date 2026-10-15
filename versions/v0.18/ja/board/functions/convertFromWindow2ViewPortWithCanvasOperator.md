[@ue-too/board](../globals.md) / convertFromWindow2ViewPortWithCanvasOperator

# Function: convertFromWindow2ViewPortWithCanvasOperator()

> **convertFromWindow2ViewPortWithCanvasOperator**(`point`, `canvas`, `viewportOriginInCanvasSpace`, `viewportHasFlippedYAxis`): `Point`

Defined in: [packages/board/src/utils/coorindate-conversion.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coorindate-conversion.ts#L106)

Converts a point from window coordinates to viewport coordinates in one step.

## Parameters

### point

`Point`

The point in window coordinates (browser viewport)

### canvas

[`Canvas`](../interfaces/Canvas.md)

The canvas object with position and dimensions

### viewportOriginInCanvasSpace

`Point` = `...`

Viewport origin in canvas space (default: canvas center)

### viewportHasFlippedYAxis

`boolean` = `false`

Whether viewport uses mathematical y-axis (default: false)

## Returns

`Point`

The point in viewport coordinates

## Remarks

This is a convenience function that combines two conversions:
1. Window to Canvas: [convertFromWindow2Canvas](convertFromWindow2Canvas.md)
2. Canvas to Viewport: [convertFromCanvas2ViewPort](convertFromCanvas2ViewPort.md)

It's particularly useful for processing input events (mouse clicks, touches)
that need to be converted directly to viewport space for interaction handling.

The default viewport origin is the canvas center, which is common for
mathematical/engineering applications where (0,0) should be in the middle.

## Example

```typescript
// Mouse click event
const clickPos = { x: event.clientX, y: event.clientY };

const canvas = {
  position: { x: 100, y: 50 },
  width: 800,
  height: 600
};

// Convert to centered viewport with y-up
const viewportPos = convertFromWindow2ViewPortWithCanvasOperator(
  clickPos,
  canvas,
  { x: 400, y: 300 },  // center of canvas
  true  // mathematical coordinates
);

// viewportPos is now relative to viewport center with y-up
```

## See

 - [convertFromWindow2Canvas](convertFromWindow2Canvas.md) for window to canvas conversion
 - [convertFromCanvas2ViewPort](convertFromCanvas2ViewPort.md) for canvas to viewport conversion

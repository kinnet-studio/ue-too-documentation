[@ue-too/board](../globals.md) / drawRuler

# Function: drawRuler()

> **drawRuler**(`context`, `topLeftCorner`, `topRightCorner`, `bottomLeftCorner`, `alignCoordinateSystem`, `cameraZoomLevel`): `void`

Defined in: [packages/board/src/utils/drawing.ts:174](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/drawing.ts#L174)

Draws calibrated rulers along the edges of the viewport.

## Parameters

### context

`CanvasRenderingContext2D`

The canvas 2D rendering context

### topLeftCorner

`Point`

Top-left corner of viewport in world coordinates

### topRightCorner

`Point`

Top-right corner of viewport in world coordinates

### bottomLeftCorner

`Point`

Bottom-left corner of viewport in world coordinates

### alignCoordinateSystem

`boolean`

Whether coordinates align with canvas (y-down) or are mathematical (y-up)

### cameraZoomLevel

`number`

Current camera zoom level

## Returns

`void`

## Remarks

This function draws rulers with three levels of tick marks:
- Major ticks: At powers of 10 (1, 10, 100, etc.) with large labels
- Half ticks: At half-steps (5, 50, 500, etc.) with small labels
- Minor ticks: At 1/10 steps with no labels

The ruler automatically adapts to the zoom level by calculating appropriate
tick spacing using [calculateOrderOfMagnitude](calculateOrderOfMagnitude.md) and [calculateTickValues](calculateTickValues.md).

Rulers are drawn along:
- Top edge (horizontal ruler, red)
- Left edge (vertical ruler, green)

Tick positions are calibrated to align with round numbers in world space,
making it easy to read coordinates at any zoom level.

## Example

```typescript
const ctx = canvas.getContext('2d');
const zoom = 2.0;

// Viewport corners in world space
const topLeft = { x: -100, y: 100 };
const topRight = { x: 100, y: 100 };
const bottomLeft = { x: -100, y: -100 };

drawRuler(ctx, topLeft, topRight, bottomLeft, false, zoom);
// Draws rulers with ticks at -100, -50, 0, 50, 100
```

## See

 - [calculateTickValues](calculateTickValues.md) for tick calculation logic
 - [calculateOrderOfMagnitude](calculateOrderOfMagnitude.md) for order of magnitude calculation

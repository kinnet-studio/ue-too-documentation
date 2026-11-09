[@ue-too/board](../globals.md) / convertFromCanvas2Window

# Function: convertFromCanvas2Window()

> **convertFromCanvas2Window**(`pointInCanvas`, `canvas`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/window-canvas.ts:98](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/window-canvas.ts#L98)

Converts a point from canvas coordinates to browser window coordinates.

## Parameters

### pointInCanvas

`Point`

The point in canvas coordinates (relative to canvas element)

### canvas

[`Canvas`](../interfaces/Canvas.md)

The canvas object containing position information

## Returns

`Point`

The point in window coordinates (relative to browser viewport)

## Remarks

This is the inverse of [convertFromWindow2Canvas](convertFromWindow2Canvas.md). It translates canvas-relative
coordinates to window-relative coordinates.

The conversion adds the canvas position to the canvas-relative point:
```
windowPoint = canvasPoint + canvasPosition
```

This is useful for positioning DOM elements (like tooltips or menus) at specific
canvas coordinates, as DOM elements use window coordinates.

## Example

```typescript
// Point on canvas at (400, 250)
const canvasPos = { x: 400, y: 250 };

// Canvas positioned at (100, 50) in window
const canvas = {
  position: { x: 100, y: 50 },
  width: 800,
  height: 600
};

const windowPos = convertFromCanvas2Window(canvasPos, canvas);
// Result: { x: 500, y: 300 }
// (400 + 100 = 500, 250 + 50 = 300)

// Use for positioning a tooltip
tooltip.style.left = `${windowPos.x}px`;
tooltip.style.top = `${windowPos.y}px`;
```

## See

[convertFromWindow2Canvas](convertFromWindow2Canvas.md) for inverse conversion

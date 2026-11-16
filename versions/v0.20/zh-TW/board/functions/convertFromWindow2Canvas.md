[@ue-too/board](../globals.md) / convertFromWindow2Canvas

# Function: convertFromWindow2Canvas()

> **convertFromWindow2Canvas**(`pointInWindow`, `canvas`): `Point`

Defined in: [packages/board/src/utils/coordinate-conversions/window-canvas.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coordinate-conversions/window-canvas.ts#L48)

Converts a point from browser window coordinates to canvas coordinates.

## Parameters

### pointInWindow

`Point`

The point in window coordinates (relative to browser viewport)

### canvas

[`Canvas`](../interfaces/Canvas.md)

The canvas object containing position information

## Returns

`Point`

The point in canvas coordinates (relative to canvas element)

## Remarks

Window coordinates are relative to the browser's viewport (top-left = 0,0).
Canvas coordinates are relative to the canvas element's top-left corner.

This conversion is essential for processing mouse and touch events, which
provide coordinates relative to the window, not the canvas element.

The conversion simply subtracts the canvas position from the window position:
```
canvasPoint = windowPoint - canvasPosition
```

Note: This function expects the canvas object to have a `position` property
containing the canvas element's position in window coordinates (typically
from getBoundingClientRect()).

## Example

```typescript
// Mouse click at window position (500, 300)
const clickPos = { x: 500, y: 300 };

// Canvas positioned at (100, 50) in window
const canvas = {
  position: { x: 100, y: 50 },
  width: 800,
  height: 600
};

const canvasPos = convertFromWindow2Canvas(clickPos, canvas);
// Result: { x: 400, y: 250 }
// (500 - 100 = 400, 300 - 50 = 250)
```

## See

[convertFromCanvas2Window](convertFromCanvas2Window.md) for inverse conversion

[@ue-too/board](../globals.md) / reverseYAxis

# Function: reverseYAxis()

> **reverseYAxis**(`context`): `CanvasRenderingContext2D`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:709](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L709)

Creates a proxy that automatically flips y-coordinates for canvas context methods.

## Parameters

### context

`CanvasRenderingContext2D`

The canvas 2D rendering context to wrap

## Returns

`CanvasRenderingContext2D`

Proxied context that handles y-axis reversal automatically

## Remarks

Standard HTML canvas uses a top-left origin with y-axis pointing down.
This proxy inverts the y-axis to create a mathematical coordinate system
with y-axis pointing up.

The proxy intercepts drawing methods (fillRect, strokeRect, moveTo, lineTo, etc.)
and automatically negates y-coordinates and height values. This allows you to
work in mathematical coordinates while still rendering correctly.

Special handling for complex methods:
- drawImage with 9 args: Properly inverts source and destination rectangles
- drawImage with 5 args: Adjusts for image height
- All methods in methodsToFlip: Y-coordinates negated automatically

## Example

```typescript
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const flippedCtx = reverseYAxis(ctx);

// Draw with mathematical coordinates (y-up)
flippedCtx.fillRect(0, 0, 100, 100);  // Square in first quadrant
flippedCtx.moveTo(0, 0);
flippedCtx.lineTo(50, 100);           // Line going upward
```

## See

 - methodsToFlip for list of intercepted methods
 - [invertYAxisForDrawImageWith9Args](invertYAxisForDrawImageWith9Args.md) for drawImage special handling

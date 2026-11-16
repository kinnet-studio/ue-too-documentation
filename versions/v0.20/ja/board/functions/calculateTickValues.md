[@ue-too/board](../globals.md) / calculateTickValues

# Function: calculateTickValues()

> **calculateTickValues**(`minValue`, `maxValue`, `orderOfMagnitude?`): `object`

Defined in: [packages/board/src/utils/drawing.ts:466](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/drawing.ts#L466)

Calculates tick mark positions and spacing for a ruler.

## Parameters

### minValue

`number`

Minimum value on the ruler axis

### maxValue

`number`

Maximum value on the ruler axis

### orderOfMagnitude?

`number`

Optional pre-calculated order of magnitude (for consistency across axes)

## Returns

`object`

Object containing tick positions and spacing for major, half, and minor ticks

### calibrationMultiplier

> **calibrationMultiplier**: `number`

### halfTickStep

> **halfTickStep**: `number`

### majorTickStep

> **majorTickStep**: `number`

### maxHalfTickValue

> **maxHalfTickValue**: `number`

### maxMajorTickValue

> **maxMajorTickValue**: `number`

### maxMaxTickValue

> **maxMaxTickValue**: `number`

### minHalfTickValue

> **minHalfTickValue**: `number`

### minMajorTickValue

> **minMajorTickValue**: `number`

### minMinTickValue

> **minMinTickValue**: `number`

### minTickStep

> **minTickStep**: `number`

### normalizedOrderOfMagnitude

> **normalizedOrderOfMagnitude**: `number`

## Remarks

This function determines where to place tick marks on a ruler to show round
numbers at appropriate intervals. It calculates three levels of ticks:

1. Major ticks: At powers of 10 (step = 10^n)
2. Half ticks: At half the major step (step = 5×10^(n-1))
3. Minor ticks: At 1/10 the major step (step = 10^(n-1))

The calibration multiplier handles cases where the order of magnitude is very
small (< 1), ensuring tick positions are calculated correctly for zoomed-in views.

For consistency between x and y axes, you can provide a pre-calculated
orderOfMagnitude. Otherwise, it's calculated from the range width.

## Example

```typescript
// Ruler showing -100 to 100
const ticks = calculateTickValues(-100, 100);
// Result:
// majorTickStep: 100
// minMajorTickValue: -100, maxMajorTickValue: 100
// halfTickStep: 50
// minorTickStep: 10
// calibrationMultiplier: 1

// Zoomed in view: 0.001 to 0.01
const zoomedTicks = calculateTickValues(0.001, 0.01);
// Result:
// majorTickStep: 10 (calibrated)
// calibrationMultiplier: 0.001 (multiply tick values by this)
```

## See

 - [calculateOrderOfMagnitude](calculateOrderOfMagnitude.md) for order calculation
 - [drawRuler](drawRuler.md) for usage in ruler drawing

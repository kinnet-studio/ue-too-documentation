[@ue-too/board](../globals.md) / calculateOrderOfMagnitude

# Function: calculateOrderOfMagnitude()

> **calculateOrderOfMagnitude**(`value`): `number`

Defined in: [packages/board/src/utils/ruler.ts:37](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/ruler.ts#L37)

Calculates the order of magnitude (power of 10) of a number.

## Parameters

### value

`number`

The number to analyze

## Returns

`number`

The power of 10 that best represents this value's magnitude

## Remarks

The order of magnitude helps determine appropriate tick spacing for rulers
and grids. For example:
- Value 1234 has order 3 (10^3 = 1000)
- Value 0.056 has order -2 (10^-2 = 0.01)

The calculation finds the largest power of 10 that is less than or equal
to the absolute value.

Edge cases:
- Returns 0 for values <= 0
- For values >= 1: Counts powers of 10 until reaching the value
- For values < 1: Counts negative powers of 10 until reaching the value

This is used by drawing utilities to automatically scale tick marks and
grid lines appropriately for different zoom levels.

## Example

```typescript
calculateOrderOfMagnitude(1500);   // 3 (between 10^3=1000 and 10^4=10000)
calculateOrderOfMagnitude(85);     // 1 (between 10^1=10 and 10^2=100)
calculateOrderOfMagnitude(7);      // 0 (between 10^0=1 and 10^1=10)
calculateOrderOfMagnitude(0.05);   // -2 (between 10^-2=0.01 and 10^-1=0.1)
calculateOrderOfMagnitude(0);      // 0 (edge case)
calculateOrderOfMagnitude(-100);   // 0 (negative edge case)
```

## See

[drawRuler](drawRuler.md) for usage in ruler drawing

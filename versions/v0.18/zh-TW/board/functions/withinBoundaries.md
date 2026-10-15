[@ue-too/board](../globals.md) / withinBoundaries

# Function: withinBoundaries()

> **withinBoundaries**(`point`, `boundaries`): `boolean`

Defined in: [packages/board/src/camera/utils/position.ts:81](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/position.ts#L81)

Checks if a point is within the specified boundaries.

## Parameters

### point

`Point`

Point to check in world coordinates

### boundaries

Optional boundary constraints

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`boolean`

True if point is within boundaries or no boundaries specified, false otherwise

## Remarks

Returns true if:
- No boundaries are defined (undefined)
- Point satisfies all defined constraints

Each axis is checked independently. A missing constraint on an axis means
that axis is unbounded.

## Example

```typescript
const bounds: Boundaries = {
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
};

withinBoundaries({ x: 0, y: 0 }, bounds);      // true (inside)
withinBoundaries({ x: 150, y: 0 }, bounds);    // false (x too large)
withinBoundaries({ x: 0, y: -100 }, bounds);   // false (y too small)
withinBoundaries({ x: 100, y: 50 }, bounds);   // true (on boundary)
withinBoundaries({ x: 0, y: 0 }, undefined);   // true (no bounds)
```

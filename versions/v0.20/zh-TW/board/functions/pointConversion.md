[@ue-too/board](../globals.md) / pointConversion

# Function: pointConversion()

> **pointConversion**(`point`): `object`

Defined in: [packages/board/src/utils/coorindate-conversion.ts:50](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/coorindate-conversion.ts#L50)

Converts an isometric 3D point to a flat 2D world point.

## Parameters

### point

`Point`

The 3D point in isometric space (with optional z coordinate)

## Returns

`object`

The 2D point in flat world coordinates

### x

> **x**: `number`

### y

> **y**: `number`

## Remarks

This function performs an isometric projection transformation, converting 3D
coordinates to 2D using standard isometric angles (30 degrees).

The transformation uses:
- cos(30°) ≈ 0.866 for x-axis projection
- cos(60°) = 0.5 for y-axis projection
- Z-coordinate is added directly to the y-axis (height)

Mathematical formulas:
```
x_2d = (x_3d * cos30) - (y_3d * cos30)
y_2d = (x_3d * cos60) + (y_3d * cos60) + z_3d
```

This creates the classic isometric diamond grid appearance where:
- Moving along +X goes down-right
- Moving along +Y goes down-left
- Moving along +Z goes straight up

## Example

```typescript
// Convert a 3D cube corner to 2D isometric projection
const point3D = { x: 10, y: 10, z: 5 };
const point2D = pointConversion(point3D);
// Result: { x: 0, y: 15 }
// x: (10 * 0.866) - (10 * 0.866) = 0
// y: (10 * 0.5) + (10 * 0.5) + 5 = 15

// 2D point without z-coordinate
const flatPoint = { x: 20, y: 0 };
const projected = pointConversion(flatPoint);
// Result: { x: 17.32, y: 10 }
```

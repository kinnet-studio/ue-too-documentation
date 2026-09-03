[@ue-too/board](../../modules.md) / [index](../index.md) / withinBoundaries

# 函式: withinBoundaries()

> **withinBoundaries**(`point`, `boundaries`): `boolean`

定義於: [packages/board/src/camera/utils/position.ts:81](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/position.ts#L81)

Checks if a point is within the specified boundaries.

## 參數

### point

`Point`

Point to check in world coordinates

### boundaries

Optional boundary constraints

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`boolean`

True if point is within boundaries or no boundaries specified, false otherwise

## 備註

Returns true if:
- No boundaries are defined (undefined)
- Point satisfies all defined constraints

Each axis is checked independently. A missing constraint on an axis means
that axis is unbounded.

## 範例

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

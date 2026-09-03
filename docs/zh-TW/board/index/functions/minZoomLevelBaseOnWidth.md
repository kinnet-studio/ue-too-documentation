[@ue-too/board](../../modules.md) / [index](../index.md) / minZoomLevelBaseOnWidth

# 函式: minZoomLevelBaseOnWidth()

> **minZoomLevelBaseOnWidth**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

定義於: [packages/board/src/utils/zoomlevel-adjustment.ts:199](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/zoomlevel-adjustment.ts#L199)

Calculates minimum zoom level based only on boundary width.

## 參數

### boundaries

The world-space boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

### canvasWidth

`number`

Canvas width in pixels

### canvasHeight

`number`

Canvas height in pixels

### cameraRotation

`number`

Camera rotation angle in radians

## 回傳

`number` \| `undefined`

Minimum zoom level, or undefined if width is not defined

## 備註

Similar to [minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) but only considers the
width constraint. Useful when height is unbounded or not relevant.

Calculates zoom needed to fit the boundary width within the canvas,
accounting for rotation:
- Width projection on canvas X-axis: `width * cos(rotation)`
- Width projection on canvas Y-axis: `width * sin(rotation)`

Takes the maximum of these to ensure the width fits regardless of
how rotation distributes it across canvas axes.

## 範例

```typescript
const boundaries = {
  min: { x: 0 },
  max: { x: 1000 }
};

const zoom = minZoomLevelBaseOnWidth(boundaries, 800, 600, 0);
// Result: 0.8 (800/1000)
```

## 參閱

[minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) for full calculation

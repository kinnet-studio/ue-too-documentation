[@ue-too/board](../../modules.md) / [index](../index.md) / minZoomLevelBaseOnHeight

# 函式: minZoomLevelBaseOnHeight()

> **minZoomLevelBaseOnHeight**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

定義於: [packages/board/src/utils/zoomlevel-adjustment.ts:258](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/zoomlevel-adjustment.ts#L258)

Calculates minimum zoom level based only on boundary height.

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

Minimum zoom level, or undefined if height is not defined

## 備註

Similar to [minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) but only considers the
height constraint. Useful when width is unbounded or not relevant.

Calculates zoom needed to fit the boundary height within the canvas,
accounting for rotation:
- Height projection on canvas X-axis: `height * cos(rotation)`
- Height projection on canvas Y-axis: `height * sin(rotation)`

Takes the maximum of these to ensure the height fits regardless of
how rotation distributes it across canvas axes.

## 範例

```typescript
const boundaries = {
  min: { y: 0 },
  max: { y: 500 }
};

const zoom = minZoomLevelBaseOnHeight(boundaries, 800, 600, 0);
// Result: 1.2 (600/500)
```

## 參閱

[minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) for full calculation

[@ue-too/board](../../modules.md) / [index](../index.md) / minZoomLevelBaseOnHeight

# 関数: minZoomLevelBaseOnHeight()

> **minZoomLevelBaseOnHeight**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

定義: [packages/board/src/utils/zoomlevel-adjustment.ts:258](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/zoomlevel-adjustment.ts#L258)

Calculates minimum zoom level based only on boundary height.

## パラメータ

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

## 戻り値

`number` \| `undefined`

Minimum zoom level, or undefined if height is not defined

## Remarks

Similar to [minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) but only considers the
height constraint. Useful when width is unbounded or not relevant.

Calculates zoom needed to fit the boundary height within the canvas,
accounting for rotation:
- Height projection on canvas X-axis: `height * cos(rotation)`
- Height projection on canvas Y-axis: `height * sin(rotation)`

Takes the maximum of these to ensure the height fits regardless of
how rotation distributes it across canvas axes.

## 例

```typescript
const boundaries = {
  min: { y: 0 },
  max: { y: 500 }
};

const zoom = minZoomLevelBaseOnHeight(boundaries, 800, 600, 0);
// Result: 1.2 (600/500)
```

## 参照

[minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) for full calculation

[@ue-too/board](../../modules.md) / [index](../index.md) / minZoomLevelBaseOnDimensions

# 函式: minZoomLevelBaseOnDimensions()

> **minZoomLevelBaseOnDimensions**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

定義於: [packages/board/src/utils/zoomlevel-adjustment.ts:57](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/zoomlevel-adjustment.ts#L57)

Calculates minimum zoom level to fit boundaries within canvas at any rotation.

## 參數

### boundaries

The world-space boundaries to fit

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

Minimum zoom level, or undefined if boundaries are incomplete

## 備註

This function ensures the entire boundary region remains visible regardless
of camera rotation. It considers both width and height projections of the
rotated boundaries.

When boundaries are rotated, they occupy a larger axis-aligned bounding box.
This function calculates the minimum zoom needed to fit that box:

For each dimension (width/height):
1. Project boundary width onto canvas width axis: `width * cos(rotation)`
2. Project boundary height onto canvas width axis: `height * cos(rotation)`
3. Calculate zoom needed for each projection
4. Take the maximum of all zoom levels

Returns undefined if boundaries don't have both width and height defined.

Used when canvas is resized to automatically adjust zoom to keep content visible.

## 範例

```typescript
const boundaries = {
  min: { x: 0, y: 0 },
  max: { x: 1000, y: 500 }
};

// No rotation, 800x600 canvas
const zoom1 = minZoomLevelBaseOnDimensions(boundaries, 800, 600, 0);
// Result: 1.2 (600/500, height is limiting)

// 45 degree rotation
const zoom2 = minZoomLevelBaseOnDimensions(
  boundaries, 800, 600, Math.PI / 4
);
// Result: higher zoom (rotated bounds need more space)
```

## 參閱

 - [minZoomLevelBaseOnWidth](minZoomLevelBaseOnWidth.md) for width-only calculation
 - [minZoomLevelBaseOnHeight](minZoomLevelBaseOnHeight.md) for height-only calculation

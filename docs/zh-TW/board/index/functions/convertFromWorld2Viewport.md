[@ue-too/board](../../modules.md) / [index](../index.md) / convertFromWorld2Viewport

# 函式: convertFromWorld2Viewport()

> **convertFromWorld2Viewport**(`pointInWorld`, `cameraPositionInWorldSpace`, `cameraZoomLevel`, `cameraRotation`, `worldHasFlippedYAxis`): `Point`

定義於: [packages/board/src/utils/coordinate-conversions/viewport-world.ts:123](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/coordinate-conversions/viewport-world.ts#L123)

Converts a point from world space to viewport space.

## 參數

### pointInWorld

`Point`

The point in world coordinates to convert

### cameraPositionInWorldSpace

`Point`

The camera's center position in world coordinates

### cameraZoomLevel

`number`

The camera's zoom level (1.0 = normal, >1 = zoomed in, <1 = zoomed out)

### cameraRotation

`number`

The camera's rotation angle in radians

### worldHasFlippedYAxis

`boolean` = `false`

Whether world space uses inverted y-axis (default: false)

## 回傳

`Point`

The point in viewport coordinates

## 備註

This function applies the camera transformation to convert from world coordinates
to viewport coordinates. This is used for rendering world objects onto the viewport.

The transformation applies these operations in order:
1. Translate: Subtract camera position (make position relative to camera)
2. Flip Y (if needed): Negate y if world uses mathematical coordinates
3. Zoom: Multiply by zoom level (viewport pixels per world unit)
4. Rotate: Rotate by negative camera rotation (to align with viewport)

Mathematical formula:
```
viewportPoint = rotate((pointInWorld - cameraPosition) * zoom, -cameraRotation)
```

The negative rotation ensures that when the camera rotates clockwise, the world
appears to rotate counter-clockwise (from the viewer's perspective), which is
the expected behavior.

## 範例

```typescript
// World object at (1100, 550) with camera at (1000, 500)
const worldPoint = { x: 1100, y: 550 };
const cameraPos = { x: 1000, y: 500 };
const zoom = 2.0;  // Zoomed in 2x
const rotation = 0;  // No rotation

const viewportPoint = convertFromWorld2Viewport(
  worldPoint,
  cameraPos,
  zoom,
  rotation,
  false
);
// Result: { x: 200, y: 100 }
// ((1100 - 1000) * 2 = 200, (550 - 500) * 2 = 100)
```

## 參閱

[convertFromViewport2World](convertFromViewport2World.md) for inverse conversion

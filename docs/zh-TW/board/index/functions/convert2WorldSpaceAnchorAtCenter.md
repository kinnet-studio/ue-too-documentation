[@ue-too/board](../../modules.md) / [index](../index.md) / convert2WorldSpaceAnchorAtCenter

# 函式: convert2WorldSpaceAnchorAtCenter()

> **convert2WorldSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:166](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/coordinate-conversion.ts#L166)

Converts a viewport point (center-anchored) to world space.
This is the most commonly used viewport-to-world conversion function.

## 參數

### point

`Point`

Point in viewport coordinates (origin at viewport center)

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## 回傳

`Point`

World space coordinates of the point

## 備註

Viewport coordinates have the origin at the center of the viewport, with:
- Positive x to the right
- Positive y upward
- Point (0, 0) is the center of the viewport

This is the standard coordinate system for camera operations.

## 範例

```typescript
// Convert viewport center (0,0) to world space
const worldCenter = convert2WorldSpaceAnchorAtCenter(
  { x: 0, y: 0 },
  { x: 500, y: 300 },  // camera at world (500, 300)
  1.0,
  0
);
// worldCenter will be { x: 500, y: 300 }

// Convert point 100 pixels right of center
const rightPoint = convert2WorldSpaceAnchorAtCenter(
  { x: 100, y: 0 },
  { x: 500, y: 300 },
  2.0,  // 2x zoom
  0
);
// At 2x zoom, 100 viewport pixels = 50 world units
// Result: { x: 550, y: 300 }
```

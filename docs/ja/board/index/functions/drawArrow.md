[@ue-too/board](../../modules.md) / [index](../index.md) / drawArrow

# 関数: drawArrow()

> **drawArrow**(`context`, `cameraZoomLevel`, `startPoint`, `endPoint`, `width`, `arrowRatio`): `void`

定義: [packages/board/src/utils/drawing.ts:44](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/drawing.ts#L44)

Draws an arrow from start to end point with an arrowhead.

## パラメータ

### context

`CanvasRenderingContext2D`

The canvas 2D rendering context

### cameraZoomLevel

`number`

Current camera zoom level for scale-independent sizing

### startPoint

`Point`

Arrow tail position in world coordinates

### endPoint

`Point`

Arrow head position in world coordinates

### width

`number` = `1`

Line width in world units (default: 1)

### arrowRatio

`number` = `0.3`

Ratio of arrowhead size to total length (default: 0.3, unused in implementation)

## 戻り値

`void`

## Remarks

The arrow consists of a line segment and a triangular arrowhead. The arrowhead
size is adaptive:
- Maximum 10 pixels in viewport space
- Minimum half the arrow length

This ensures arrows look good at all zoom levels and lengths.

The arrowhead is constructed perpendicular to the arrow direction, creating
a filled triangle at the end point.

## 例

```typescript
const ctx = canvas.getContext('2d');
const zoom = 1.5;

// Draw a simple arrow
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
drawArrow(ctx, zoom, { x: 0, y: 0 }, { x: 100, y: 50 });

// Draw a thicker arrow
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
drawArrow(ctx, zoom, { x: 0, y: 0 }, { x: 100, y: -50 }, 3);
```

[@ue-too/board](../../modules.md) / [index](../index.md) / convertFromCanvas2Window

# 関数: convertFromCanvas2Window()

> **convertFromCanvas2Window**(`pointInCanvas`, `canvas`): `Point`

定義: [packages/board/src/utils/coordinate-conversions/window-canvas.ts:98](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/coordinate-conversions/window-canvas.ts#L98)

Converts a point from canvas coordinates to browser window coordinates.

## パラメータ

### pointInCanvas

`Point`

The point in canvas coordinates (relative to canvas element)

### canvas

[`Canvas`](../interfaces/Canvas.md)

The canvas object containing position information

## 戻り値

`Point`

The point in window coordinates (relative to browser viewport)

## Remarks

This is the inverse of [convertFromWindow2Canvas](convertFromWindow2Canvas.md). It translates canvas-relative
coordinates to window-relative coordinates.

The conversion adds the canvas position to the canvas-relative point:
```
windowPoint = canvasPoint + canvasPosition
```

This is useful for positioning DOM elements (like tooltips or menus) at specific
canvas coordinates, as DOM elements use window coordinates.

## 例

```typescript
// Point on canvas at (400, 250)
const canvasPos = { x: 400, y: 250 };

// Canvas positioned at (100, 50) in window
const canvas = {
  position: { x: 100, y: 50 },
  width: 800,
  height: 600
};

const windowPos = convertFromCanvas2Window(canvasPos, canvas);
// Result: { x: 500, y: 300 }
// (400 + 100 = 500, 250 + 50 = 300)

// Use for positioning a tooltip
tooltip.style.left = `${windowPos.x}px`;
tooltip.style.top = `${windowPos.y}px`;
```

## 参照

[convertFromWindow2Canvas](convertFromWindow2Canvas.md) for inverse conversion

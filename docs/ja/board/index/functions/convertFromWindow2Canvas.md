[@ue-too/board](../../modules.md) / [index](../index.md) / convertFromWindow2Canvas

# 関数: convertFromWindow2Canvas()

> **convertFromWindow2Canvas**(`pointInWindow`, `canvas`): `Point`

定義: [packages/board/src/utils/coordinate-conversions/window-canvas.ts:48](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/coordinate-conversions/window-canvas.ts#L48)

Converts a point from browser window coordinates to canvas coordinates.

## パラメータ

### pointInWindow

`Point`

The point in window coordinates (relative to browser viewport)

### canvas

[`Canvas`](../interfaces/Canvas.md)

The canvas object containing position information

## 戻り値

`Point`

The point in canvas coordinates (relative to canvas element)

## Remarks

Window coordinates are relative to the browser's viewport (top-left = 0,0).
Canvas coordinates are relative to the canvas element's top-left corner.

This conversion is essential for processing mouse and touch events, which
provide coordinates relative to the window, not the canvas element.

The conversion simply subtracts the canvas position from the window position:
```
canvasPoint = windowPoint - canvasPosition
```

Note: This function expects the canvas object to have a `position` property
containing the canvas element's position in window coordinates (typically
from getBoundingClientRect()).

## 例

```typescript
// Mouse click at window position (500, 300)
const clickPos = { x: 500, y: 300 };

// Canvas positioned at (100, 50) in window
const canvas = {
  position: { x: 100, y: 50 },
  width: 800,
  height: 600
};

const canvasPos = convertFromWindow2Canvas(clickPos, canvas);
// Result: { x: 400, y: 250 }
// (500 - 100 = 400, 300 - 50 = 250)
```

## 参照

[convertFromCanvas2Window](convertFromCanvas2Window.md) for inverse conversion

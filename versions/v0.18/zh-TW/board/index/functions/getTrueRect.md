[@ue-too/board](../../modules.md) / [index](../index.md) / getTrueRect

# 函式: getTrueRect()

> **getTrueRect**(`rect`, `computedStyle`): `DOMRect`

定義於: [packages/board/src/utils/canvas-position-dimension.ts:599](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/canvas-position-dimension.ts#L599)

Calculates the actual content rectangle excluding padding and borders.

## 參數

### rect

`DOMRect`

The element's bounding client rectangle

### computedStyle

`CSSStyleDeclaration`

The computed CSS styles for the element

## 回傳

`DOMRect`

DOMRect representing the content area only

## 備註

Browser's getBoundingClientRect() includes padding and borders, but for
coordinate transformations we need the actual drawable content area.

This function subtracts padding and border from all four sides to get
the "true" content rectangle. This is essential for accurate coordinate
conversions between window and canvas space.

## 範例

```typescript
const canvas = document.querySelector('canvas');
const rect = canvas.getBoundingClientRect();
const style = window.getComputedStyle(canvas);
const contentRect = getTrueRect(rect, style);

// contentRect.width is less than rect.width if padding/borders exist
console.log(`Full size: ${rect.width}x${rect.height}`);
console.log(`Content size: ${contentRect.width}x${contentRect.height}`);
```

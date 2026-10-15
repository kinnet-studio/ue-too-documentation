[@ue-too/board](../globals.md) / getTrueRect

# Function: getTrueRect()

> **getTrueRect**(`rect`, `computedStyle`): `DOMRect`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:599](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L599)

Calculates the actual content rectangle excluding padding and borders.

## Parameters

### rect

`DOMRect`

The element's bounding client rectangle

### computedStyle

`CSSStyleDeclaration`

The computed CSS styles for the element

## Returns

`DOMRect`

DOMRect representing the content area only

## Remarks

Browser's getBoundingClientRect() includes padding and borders, but for
coordinate transformations we need the actual drawable content area.

This function subtracts padding and border from all four sides to get
the "true" content rectangle. This is essential for accurate coordinate
conversions between window and canvas space.

## Example

```typescript
const canvas = document.querySelector('canvas');
const rect = canvas.getBoundingClientRect();
const style = window.getComputedStyle(canvas);
const contentRect = getTrueRect(rect, style);

// contentRect.width is less than rect.width if padding/borders exist
console.log(`Full size: ${rect.width}x${rect.height}`);
console.log(`Content size: ${contentRect.width}x${contentRect.height}`);
```

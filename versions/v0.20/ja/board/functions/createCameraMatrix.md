[@ue-too/board](../globals.md) / createCameraMatrix

# Function: createCameraMatrix()

> **createCameraMatrix**(`cameraPos`, `zoom`, `rotation`, `devicePixelRatio`, `canvasWidth`, `canvasHeight`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:292](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L292)

Creates a camera transformation matrix from camera parameters.
This matrix transforms world coordinates to canvas pixel coordinates.

## Parameters

### cameraPos

Camera position in world coordinates

#### x

`number`

#### y

`number`

### zoom

`number`

Zoom level (1.0 = 100%, 2.0 = 200%, etc.)

### rotation

`number`

Camera rotation in radians

### devicePixelRatio

`number`

Device pixel ratio (typically window.devicePixelRatio)

### canvasWidth

`number`

Canvas width in CSS pixels (not canvas.width!)

### canvasHeight

`number`

Canvas height in CSS pixels (not canvas.height!)

## Returns

`object`

Transformation matrix for world→canvas conversion

### a

> **a**: `number`

### b

> **b**: `number`

### c

> **c**: `number`

### d

> **d**: `number`

### e

> **e**: `number`

### f

> **f**: `number`

## Remarks

**Important**: canvasWidth and canvasHeight are CSS pixel dimensions,
not the internal canvas buffer size (canvas.width/canvas.height).
Use element.clientWidth/clientHeight or the CSS dimensions.

Transformation order:
1. Scale by devicePixelRatio (for high-DPI displays)
2. Translate to canvas center
3. Rotate by -camera.rotation (negated for correct direction)
4. Scale by zoom
5. Translate by -camera.position (world offset)

The resulting matrix can be applied to a canvas context:
```typescript
const {a, b, c, d, e, f} = createCameraMatrix(...);
ctx.setTransform(a, b, c, d, e, f);
// Now draw at world coordinates
```

## Example

```typescript
const matrix = createCameraMatrix(
  { x: 100, y: 200 },          // camera position
  2.0,                          // 2x zoom
  Math.PI / 6,                  // 30° rotation
  window.devicePixelRatio,
  canvas.clientWidth,           // CSS width, not canvas.width!
  canvas.clientHeight
);

ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
ctx.fillRect(100, 200, 50, 50);  // Draws at world coordinates (100, 200)
```

## See

[decomposeCameraMatrix](decomposeCameraMatrix.md) for extracting camera parameters from a matrix

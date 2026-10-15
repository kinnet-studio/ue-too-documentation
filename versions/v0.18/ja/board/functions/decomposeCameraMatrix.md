[@ue-too/board](../globals.md) / decomposeCameraMatrix

# Function: decomposeCameraMatrix()

> **decomposeCameraMatrix**(`transformMatrix`, `devicePixelRatio`, `canvasWidth`, `canvasHeight`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:111](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L111)

Decomposes a camera transformation matrix back to camera parameters.
Inverse operation of [createCameraMatrix](createCameraMatrix.md).

## Parameters

### transformMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The combined transformation matrix to decompose

### devicePixelRatio

`number`

Device pixel ratio used when creating the matrix

### canvasWidth

`number`

Canvas width in CSS pixels

### canvasHeight

`number`

Canvas height in CSS pixels

## Returns

`object`

Camera parameters: position, zoom, and rotation

### position

> **position**: `object`

#### position.x

> **x**: `number` = `cameraX`

#### position.y

> **y**: `number` = `cameraY`

### rotation

> **rotation**: `number`

### zoom

> **zoom**: `number`

## Remarks

This function reverses the transformation chain applied by [createCameraMatrix](createCameraMatrix.md):
1. Scale by devicePixelRatio
2. Translate to canvas center
3. Rotate by -camera.rotation
4. Scale by zoom level
5. Translate by -camera.position

Final matrix: M = Scale(DPR) * Translate(center) * Rotate * Scale(zoom) * Translate(-position)

The decomposition extracts:
- **Rotation**: From the orientation of the transformation (atan2)
- **Zoom**: From the total scale after removing devicePixelRatio
- **Position**: By reversing the translation chain

## Example

```typescript
// Create and then decompose a matrix
const matrix = createCameraMatrix(
  { x: 100, y: 200 },
  2.0,
  Math.PI / 4,
  window.devicePixelRatio,
  1920, 1080
);

const params = decomposeCameraMatrix(
  matrix,
  window.devicePixelRatio,
  1920, 1080
);
// params ≈ { position: {x: 100, y: 200}, zoom: 2.0, rotation: π/4 }
```

## See

[createCameraMatrix](createCameraMatrix.md) for the inverse operation

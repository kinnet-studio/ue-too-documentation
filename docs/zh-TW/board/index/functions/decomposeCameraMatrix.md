[@ue-too/board](../../modules.md) / [index](../index.md) / decomposeCameraMatrix

# 函式: decomposeCameraMatrix()

> **decomposeCameraMatrix**(`transformMatrix`, `devicePixelRatio`, `canvasWidth`, `canvasHeight`): `object`

定義於: [packages/board/src/camera/utils/matrix.ts:111](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/matrix.ts#L111)

Decomposes a camera transformation matrix back to camera parameters.
Inverse operation of [createCameraMatrix](createCameraMatrix.md).

## 參數

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

## 回傳

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

## 備註

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

## 範例

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

## 參閱

[createCameraMatrix](createCameraMatrix.md) for the inverse operation

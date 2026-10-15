[@ue-too/board](../../modules.md) / [index](../index.md) / transformationMatrixFromCamera

# 函式: transformationMatrixFromCamera()

> **transformationMatrixFromCamera**(`cameraPosition`, `cameraZoomLevel`, `cameraRotation`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:499](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/coordinate-conversion.ts#L499)

Creates a transformation matrix from camera parameters.
Combines position, zoom, and rotation into a single transform.

## 參數

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

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix for viewport-to-world conversion

## 備註

The resulting matrix can be used with [convert2WorldSpaceWithTransformationMatrix](convert2WorldSpaceWithTransformationMatrix.md)
for efficient batch transformations when camera state doesn't change.

Matrix composition order: Translation → Rotation → Scale(1/zoom)

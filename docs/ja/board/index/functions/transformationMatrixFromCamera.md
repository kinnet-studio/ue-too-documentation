[@ue-too/board](../../modules.md) / [index](../index.md) / transformationMatrixFromCamera

# 関数: transformationMatrixFromCamera()

> **transformationMatrixFromCamera**(`cameraPosition`, `cameraZoomLevel`, `cameraRotation`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

定義: [packages/board/src/camera/utils/coordinate-conversion.ts:499](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/coordinate-conversion.ts#L499)

Creates a transformation matrix from camera parameters.
Combines position, zoom, and rotation into a single transform.

## パラメータ

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## 戻り値

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix for viewport-to-world conversion

## Remarks

The resulting matrix can be used with [convert2WorldSpaceWithTransformationMatrix](convert2WorldSpaceWithTransformationMatrix.md)
for efficient batch transformations when camera state doesn't change.

Matrix composition order: Translation → Rotation → Scale(1/zoom)

[@ue-too/board](../../modules.md) / [index](../index.md) / transformationMatrixFromCamera

# Function: transformationMatrixFromCamera()

> **transformationMatrixFromCamera**(`cameraPosition`, `cameraZoomLevel`, `cameraRotation`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:499](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/coordinate-conversion.ts#L499)

Creates a transformation matrix from camera parameters.
Combines position, zoom, and rotation into a single transform.

## Parameters

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## Returns

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix for viewport-to-world conversion

## Remarks

The resulting matrix can be used with [convert2WorldSpaceWithTransformationMatrix](convert2WorldSpaceWithTransformationMatrix.md)
for efficient batch transformations when camera state doesn't change.

Matrix composition order: Translation → Rotation → Scale(1/zoom)

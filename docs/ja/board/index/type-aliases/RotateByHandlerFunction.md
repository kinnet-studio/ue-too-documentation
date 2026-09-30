[@ue-too/board](../../modules.md) / [index](../index.md) / RotateByHandlerFunction

# 型エイリアス: RotateByHandlerFunction()

> **RotateByHandlerFunction** = (`delta`, `camera`, `config`) => `number`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:137](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L137)

Handler function type for relative "rotate by" camera operations.

## パラメータ

### delta

`number`

Rotation angle change in radians (positive = counter-clockwise)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerConfig`](RotationHandlerConfig.md)

Rotation behavior configuration

## 戻り値

`number`

Transformed rotation delta (after applying restrictions and clamping)

## Remarks

Rotate-by handlers process relative rotation change requests. They form a pipeline
that can apply restrictions, clamping, and other transformations to the delta.

Handler pipeline pattern:
- Each handler receives the rotation delta, camera state, and config
- Returns a potentially modified delta
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Angular boundary clamping (prevent exceeding min/max angles)
- Rotation locking (return zero delta)
- Delta dampening or snapping

Rotation angles are in radians where:
- 0 = North (no rotation)
- Positive values = Counter-clockwise rotation
- Negative values = Clockwise rotation

## 例

```typescript
const myRotateByHandler: RotateByHandlerFunction = (delta, camera, config) => {
  // Custom logic: snap to 45-degree increments
  const totalRotation = camera.rotation + delta;
  const snapped = Math.round(totalRotation / (Math.PI / 4)) * (Math.PI / 4);
  return snapped - camera.rotation;
};
```

## 参照

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultRotateByHandler](../functions/createDefaultRotateByHandler.md) for the default implementation

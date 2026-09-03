[@ue-too/board](../../modules.md) / [index](../index.md) / RotateToHandlerFunction

# 型別別名: RotateToHandlerFunction()

> **RotateToHandlerFunction** = (`targetRotation`, `camera`, `config`) => `number`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:186](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L186)

Handler function type for absolute "rotate to" camera operations.

## 參數

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerConfig`](RotationHandlerConfig.md)

Rotation behavior configuration

## 回傳

`number`

Transformed rotation angle (after applying restrictions and clamping)

## 備註

Rotate-to handlers process absolute rotation angle requests. They form a pipeline
that can apply restrictions, clamping, and other transformations.

Handler pipeline pattern:
- Each handler receives the target angle, camera state, and config
- Returns a potentially modified angle
- Handlers can be chained using [createHandlerChain](../functions/createHandlerChain.md)

Common transformations:
- Angular boundary clamping (enforce min/max angles)
- Rotation locking (return current angle)
- Angle snapping or normalization

Rotation angles are in radians where:
- 0 = North (no rotation)
- π/2 = West (90° counter-clockwise)
- π = South (180°)
- 3π/2 = East (270° counter-clockwise)

## 範例

```typescript
const myRotateToHandler: RotateToHandlerFunction = (target, camera, config) => {
  // Custom logic: snap to cardinal directions
  const cardinals = [0, Math.PI/2, Math.PI, 3*Math.PI/2];
  return cardinals.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );
};
```

## 參閱

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultRotateToHandler](../functions/createDefaultRotateToHandler.md) for the default implementation

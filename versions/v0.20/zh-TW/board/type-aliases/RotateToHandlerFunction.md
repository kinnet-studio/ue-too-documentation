[@ue-too/board](../globals.md) / RotateToHandlerFunction

# Type Alias: RotateToHandlerFunction()

> **RotateToHandlerFunction** = (`targetRotation`, `camera`, `config`) => `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:186](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L186)

Handler function type for absolute "rotate to" camera operations.

## Parameters

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerConfig`](RotationHandlerConfig.md)

Rotation behavior configuration

## Returns

`number`

Transformed rotation angle (after applying restrictions and clamping)

## Remarks

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

## Example

```typescript
const myRotateToHandler: RotateToHandlerFunction = (target, camera, config) => {
  // Custom logic: snap to cardinal directions
  const cardinals = [0, Math.PI/2, Math.PI, 3*Math.PI/2];
  return cardinals.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );
};
```

## See

 - [createHandlerChain](../functions/createHandlerChain.md) for composing handler pipelines
 - [createDefaultRotateToHandler](../functions/createDefaultRotateToHandler.md) for the default implementation

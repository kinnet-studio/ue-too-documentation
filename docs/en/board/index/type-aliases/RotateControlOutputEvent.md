[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlOutputEvent

# Type Alias: RotateControlOutputEvent

> **RotateControlOutputEvent** = \{ `delta`: `number`; `type`: `"rotateBy"`; \} \| \{ `target`: `number`; `type`: `"rotateTo"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:75](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L75)

Discriminated union of output events from rotation control state machine.

## Remarks

Output events instruct the camera system what rotation operation to perform:
- `rotateBy`: Relative rotation by delta angle
- `rotateTo`: Absolute rotation to target angle
- `none`: No operation (input blocked)

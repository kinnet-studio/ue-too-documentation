[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlOutputEvent

# 型別別名: RotateControlOutputEvent

> **RotateControlOutputEvent** = \{ `delta`: `number`; `type`: `"rotateBy"`; \} \| \{ `target`: `number`; `type`: `"rotateTo"`; \} \| \{ `type`: `"none"`; \}

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:75](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L75)

Discriminated union of output events from rotation control state machine.

## 備註

Output events instruct the camera system what rotation operation to perform:
- `rotateBy`: Relative rotation by delta angle
- `rotateTo`: Absolute rotation to target angle
- `none`: No operation (input blocked)

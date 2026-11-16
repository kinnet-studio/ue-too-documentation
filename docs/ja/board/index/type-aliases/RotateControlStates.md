[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlStates

# 型エイリアス: RotateControlStates

> **RotateControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:15](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L15)

State identifiers for the rotation control state machine.

## Remarks

Three states manage rotation input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user rotation input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object rotation

[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlStates

# 型別別名: RotateControlStates

> **RotateControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:15](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L15)

State identifiers for the rotation control state machine.

## 備註

Three states manage rotation input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user rotation input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object rotation

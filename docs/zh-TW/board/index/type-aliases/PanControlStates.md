[@ue-too/board](../../modules.md) / [index](../index.md) / PanControlStates

# 型別別名: PanControlStates

> **PanControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:16](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L16)

State identifiers for the pan control state machine.

## 備註

Three states manage pan input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user pan input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object/position

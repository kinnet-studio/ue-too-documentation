[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomControlStates

# 型エイリアス: ZoomControlStates

> **ZoomControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:16](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L16)

State identifiers for the zoom control state machine.

## Remarks

Three states manage zoom input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user zoom input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object with zoom

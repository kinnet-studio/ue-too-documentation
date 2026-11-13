[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlStates

# Type Alias: RotateControlStates

> **RotateControlStates** = `"ACCEPTING_USER_INPUT"` \| `"TRANSITION"` \| `"LOCKED_ON_OBJECT"`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:15](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L15)

State identifiers for the rotation control state machine.

## Remarks

Three states manage rotation input and animations:
- `ACCEPTING_USER_INPUT`: Normal state, accepts user rotation input
- `TRANSITION`: Animation/transition state, may block user input
- `LOCKED_ON_OBJECT`: Camera locked to follow a specific object rotation

[@ue-too/board](../../modules.md) / [index](../index.md) / PanControlOutputEvent

# Type Alias: PanControlOutputEvent

> **PanControlOutputEvent** = \{ `delta`: `Point`; `type`: `"panByViewPort"`; \} \| \{ `target`: `Point`; `type`: `"panToWorld"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:76](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L76)

Discriminated union of output events from pan control state machine.

## Remarks

Output events instruct the camera system what pan operation to perform:
- `panByViewPort`: Relative pan in viewport coordinates
- `panToWorld`: Absolute pan to world position
- `none`: No operation (input blocked)

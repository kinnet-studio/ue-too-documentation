[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultPanControlStateMachine

# Function: createDefaultPanControlStateMachine()

> **createDefaultPanControlStateMachine**(`context`): [`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:436](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L436)

Creates a pan control state machine with default configuration.

## Parameters

### context

`BaseContext` = `...`

Camera rig or context for pan operations

## Returns

[`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Configured pan control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a pan state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user pan gestures.

## Example

```typescript
const cameraRig = createDefaultCameraRig(camera);
const panSM = createDefaultPanControlStateMachine(cameraRig);
```

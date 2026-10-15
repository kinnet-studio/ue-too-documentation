[@ue-too/board](../globals.md) / createDefaultZoomControlStateMachine

# Function: createDefaultZoomControlStateMachine()

> **createDefaultZoomControlStateMachine**(`context`): [`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:577](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L577)

Creates a zoom control state machine with default configuration.

## Parameters

### context

`BaseContext` = `...`

Camera rig or context for zoom operations

## Returns

[`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Configured zoom control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a zoom state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user zoom gestures.

## Example

```typescript
const cameraRig = createDefaultCameraRig(camera);
const zoomSM = createDefaultZoomControlStateMachine(cameraRig);
```

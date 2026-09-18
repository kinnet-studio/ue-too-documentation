[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultZoomControlStateMachine

# 函式: createDefaultZoomControlStateMachine()

> **createDefaultZoomControlStateMachine**(`context`): [`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:577](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L577)

Creates a zoom control state machine with default configuration.

## 參數

### context

`BaseContext` = `...`

Camera rig or context for zoom operations

## 回傳

[`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Configured zoom control state machine starting in `ACCEPTING_USER_INPUT` state

## 備註

Factory function for creating a zoom state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user zoom gestures.

## 範例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const zoomSM = createDefaultZoomControlStateMachine(cameraRig);
```

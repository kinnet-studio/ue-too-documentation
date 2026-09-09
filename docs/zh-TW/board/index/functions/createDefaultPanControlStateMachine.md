[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultPanControlStateMachine

# 函式: createDefaultPanControlStateMachine()

> **createDefaultPanControlStateMachine**(`context`): [`PanControlStateMachine`](../classes/PanControlStateMachine.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:436](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L436)

Creates a pan control state machine with default configuration.

## 參數

### context

`BaseContext` = `...`

Camera rig or context for pan operations

## 回傳

[`PanControlStateMachine`](../classes/PanControlStateMachine.md)

Configured pan control state machine starting in `ACCEPTING_USER_INPUT` state

## 備註

Factory function for creating a pan state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user pan gestures.

## 範例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const panSM = createDefaultPanControlStateMachine(cameraRig);
```

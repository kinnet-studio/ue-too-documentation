[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultZoomControlStateMachine

# 関数: createDefaultZoomControlStateMachine()

> **createDefaultZoomControlStateMachine**(`context`): [`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:577](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L577)

Creates a zoom control state machine with default configuration.

## パラメータ

### context

`BaseContext` = `...`

Camera rig or context for zoom operations

## 戻り値

[`ZoomControlStateMachine`](../classes/ZoomControlStateMachine.md)

Configured zoom control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a zoom state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user zoom gestures.

## 例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const zoomSM = createDefaultZoomControlStateMachine(cameraRig);
```

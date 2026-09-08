[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultRotateControlStateMachine

# 函式: createDefaultRotateControlStateMachine()

> **createDefaultRotateControlStateMachine**(`context`): [`RotateControlStateMachine`](../classes/RotateControlStateMachine.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:435](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L435)

Creates a rotation control state machine with default configuration.

## 參數

### context

`BaseContext` = `...`

Camera rig or context for rotation operations

## 回傳

[`RotateControlStateMachine`](../classes/RotateControlStateMachine.md)

Configured rotation control state machine starting in `ACCEPTING_USER_INPUT` state

## 備註

Factory function for creating a rotation state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user rotation gestures.

## 範例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const rotateSM = createDefaultRotateControlStateMachine(cameraRig);
```

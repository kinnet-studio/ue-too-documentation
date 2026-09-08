[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultRotateControlStateMachine

# 関数: createDefaultRotateControlStateMachine()

> **createDefaultRotateControlStateMachine**(`context`): [`RotateControlStateMachine`](../classes/RotateControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:435](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L435)

Creates a rotation control state machine with default configuration.

## パラメータ

### context

`BaseContext` = `...`

Camera rig or context for rotation operations

## 戻り値

[`RotateControlStateMachine`](../classes/RotateControlStateMachine.md)

Configured rotation control state machine starting in `ACCEPTING_USER_INPUT` state

## Remarks

Factory function for creating a rotation state machine with sensible defaults.
The machine starts in `ACCEPTING_USER_INPUT` state, ready to accept user rotation gestures.

## 例

```typescript
const cameraRig = createDefaultCameraRig(camera);
const rotateSM = createDefaultRotateControlStateMachine(cameraRig);
```

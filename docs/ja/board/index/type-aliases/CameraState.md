[@ue-too/board](../../modules.md) / [index](../index.md) / CameraState

# 型エイリアス: CameraState

> **CameraState** = `object`

定義: [packages/board/src/camera/update-publisher.ts:102](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/update-publisher.ts#L102)

Snapshot of camera state at the time an event occurs.
Passed to all event callbacks alongside the event payload.

## プロパティ

### position

> **position**: `Point`

定義: [packages/board/src/camera/update-publisher.ts:104](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/update-publisher.ts#L104)

Camera position in world coordinates

***

### rotation

> **rotation**: `number`

定義: [packages/board/src/camera/update-publisher.ts:108](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/update-publisher.ts#L108)

Current rotation in radians

***

### zoomLevel

> **zoomLevel**: `number`

定義: [packages/board/src/camera/update-publisher.ts:106](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/update-publisher.ts#L106)

Current zoom level

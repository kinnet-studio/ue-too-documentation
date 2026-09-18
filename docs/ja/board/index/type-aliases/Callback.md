[@ue-too/board](../../modules.md) / [index](../index.md) / Callback

# 型エイリアス: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

定義: [packages/board/src/camera/update-publisher.ts:131](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/update-publisher.ts#L131)

Generic callback function type for camera events.

## 型パラメーター

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

The event type key from CameraEventMap

## パラメータ

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

The event payload specific to this event type

### cameraState

[`CameraState`](CameraState.md)

Current camera state snapshot at the time of the event

## 戻り値

`void`

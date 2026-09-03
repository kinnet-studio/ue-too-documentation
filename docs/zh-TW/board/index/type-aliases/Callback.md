[@ue-too/board](../../modules.md) / [index](../index.md) / Callback

# 型別別名: Callback()\<K\>

> **Callback**\<`K`\> = (`event`, `cameraState`) => `void`

定義於: [packages/board/src/camera/update-publisher.ts:131](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L131)

Generic callback function type for camera events.

## 型別參數

### K

`K` *extends* keyof [`CameraEventMap`](CameraEventMap.md)

The event type key from CameraEventMap

## 參數

### event

[`CameraEventMap`](CameraEventMap.md)\[`K`\]

The event payload specific to this event type

### cameraState

[`CameraState`](CameraState.md)

Current camera state snapshot at the time of the event

## 回傳

`void`

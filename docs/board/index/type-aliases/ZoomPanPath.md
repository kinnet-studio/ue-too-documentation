[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomPanPath

# Type Alias: ZoomPanPath

> **ZoomPanPath** = `object`

Defined in: [packages/board/src/camera/utils/zoom-pan-path.ts:29](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/utils/zoom-pan-path.ts#L29)

A smooth camera path between two views, made by [createZoomPanPath](../functions/createZoomPanPath.md).

## Properties

### length

> `readonly` **length**: `number`

Defined in: [packages/board/src/camera/utils/zoom-pan-path.ts:35](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/utils/zoom-pan-path.ts#L35)

How long the trip feels, in the metric of Van Wijk & Nuij's paper.
A longer or deeper trip gives a bigger number, so it can scale an
animation's duration. It is 0 when both views are the same.

## Methods

### at()

> **at**(`t`): [`CameraView`](CameraView.md)

Defined in: [packages/board/src/camera/utils/zoom-pan-path.ts:46](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/utils/zoom-pan-path.ts#L46)

The camera view at progress `t`.

#### Parameters

##### t

`number`

Progress from 0 (start view) to 1 (target view). Values
outside that range are clamped, and `NaN` gives the start view. Equal
steps of `t` look like equal amounts of motion, so layer any easing on
top of `t`.

#### Returns

[`CameraView`](CameraView.md)

A new view object; `at(0)` is exactly the start view and
`at(1)` exactly the target view.

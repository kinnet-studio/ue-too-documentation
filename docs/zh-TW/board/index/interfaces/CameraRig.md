[@ue-too/board](../../modules.md) / [index](../index.md) / CameraRig

# 介面: CameraRig

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:72](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L72)

High-level camera control interface providing intuitive methods for pan, zoom, and rotation.
The camera rig acts as a facade over the camera, handling coordinate conversions and constraints.

## 備註

CameraRig provides:
- **Coordinate-aware methods**: Separate methods for viewport and world coordinates
- **Anchor-point zooming**: Keep points stationary during zoom (zoom-to-cursor)
- **Configuration management**: Unified config for all camera operations
- **Handler composition**: Combines pan, zoom, rotation handlers with proper sequencing

The rig ensures correct transformation order when combining operations
(e.g., zoom-at-point requires zoom followed by pan compensation).

## 參閱

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the default implementation
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a factory function

## Extends

- `BaseContext`

## 屬性

### camera

> **camera**: [`ObservableBoardCamera`](ObservableBoardCamera.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L74)

The underlying observable camera being controlled

***

### config

> **config**: [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:77](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L77)

Current configuration for all camera operations

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:94](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L94)

Pans the camera by a delta in viewport coordinates.

#### 參數

##### delta

`Point`

Movement delta in viewport space (CSS pixels, origin at center)

#### 回傳

`void`

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:106](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L106)

Pans the camera by a delta in world coordinates.

#### 參數

##### delta

`Point`

Movement delta in world space

#### 回傳

`void`

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:100](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L100)

Pans the camera to a target position in viewport coordinates.

#### 參數

##### target

`Point`

Target position in viewport space

#### 回傳

`void`

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L112)

Pans the camera to a target position in world coordinates.

#### 參數

##### target

`Point`

Target position in world space

#### 回傳

`void`

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:118](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L118)

Rotates the camera by a delta angle.

#### 參數

##### delta

`number`

Rotation delta in radians

#### 回傳

`void`

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:124](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L124)

Rotates the camera to a target angle.

#### 參數

##### target

`number`

Target rotation in radians

#### 回傳

`void`

***

### zoomBy()

> **zoomBy**: (`delta`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:150](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L150)

Zooms by a delta at viewport center.

#### 參數

##### delta

`number`

Zoom delta

#### 回傳

`void`

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:138](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L138)

Zooms by a delta, keeping a viewport point stationary.

#### 參數

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in viewport coordinates

#### 回傳

`void`

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:164](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L164)

Zooms by a delta, keeping a world point stationary.

#### 參數

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in world coordinates

#### 回傳

`void`

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:144](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L144)

Zooms to a target level at viewport center.

#### 參數

##### targetZoom

`number`

Target zoom level

#### 回傳

`void`

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:131](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L131)

Zooms to a target level, keeping a viewport point stationary.

#### 參數

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in viewport coordinates

#### 回傳

`void`

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:157](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L157)

Zooms to a target level, keeping a world point stationary.

#### 參數

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in world coordinates

#### 回傳

`void`

## 方法

### cleanup()

> **cleanup**(): `void`

定義於: packages/being/dist/interface.d.ts:31

#### 回傳

`void`

#### 繼承自

`BaseContext.cleanup`

***

### configure()

> **configure**(`config`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L83)

Updates the camera rig configuration.

#### 參數

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### 回傳

`void`

***

### setup()

> **setup**(): `void`

定義於: packages/being/dist/interface.d.ts:30

#### 回傳

`void`

#### 繼承自

`BaseContext.setup`

***

### update()

> **update**(): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:88](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/camera-rig.ts#L88)

Updates the camera rig state (called per frame if needed).

#### 回傳

`void`

[@ue-too/board](../../modules.md) / [index](../index.md) / CameraRig

# インターフェイス: CameraRig

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:72](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L72)

High-level camera control interface providing intuitive methods for pan, zoom, and rotation.
The camera rig acts as a facade over the camera, handling coordinate conversions and constraints.

## Remarks

CameraRig provides:
- **Coordinate-aware methods**: Separate methods for viewport and world coordinates
- **Anchor-point zooming**: Keep points stationary during zoom (zoom-to-cursor)
- **Configuration management**: Unified config for all camera operations
- **Handler composition**: Combines pan, zoom, rotation handlers with proper sequencing

The rig ensures correct transformation order when combining operations
(e.g., zoom-at-point requires zoom followed by pan compensation).

## 参照

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the default implementation
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a factory function

## 拡張

- `BaseContext`

## プロパティ

### camera

> **camera**: [`ObservableBoardCamera`](ObservableBoardCamera.md)

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:74](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L74)

The underlying observable camera being controlled

***

### config

> **config**: [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:77](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L77)

Current configuration for all camera operations

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:94](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L94)

Pans the camera by a delta in viewport coordinates.

#### パラメータ

##### delta

`Point`

Movement delta in viewport space (CSS pixels, origin at center)

#### 戻り値

`void`

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:106](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L106)

Pans the camera by a delta in world coordinates.

#### パラメータ

##### delta

`Point`

Movement delta in world space

#### 戻り値

`void`

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:100](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L100)

Pans the camera to a target position in viewport coordinates.

#### パラメータ

##### target

`Point`

Target position in viewport space

#### 戻り値

`void`

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L112)

Pans the camera to a target position in world coordinates.

#### パラメータ

##### target

`Point`

Target position in world space

#### 戻り値

`void`

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:118](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L118)

Rotates the camera by a delta angle.

#### パラメータ

##### delta

`number`

Rotation delta in radians

#### 戻り値

`void`

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:124](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L124)

Rotates the camera to a target angle.

#### パラメータ

##### target

`number`

Target rotation in radians

#### 戻り値

`void`

***

### zoomBy()

> **zoomBy**: (`delta`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:150](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L150)

Zooms by a delta at viewport center.

#### パラメータ

##### delta

`number`

Zoom delta

#### 戻り値

`void`

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:138](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L138)

Zooms by a delta, keeping a viewport point stationary.

#### パラメータ

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in viewport coordinates

#### 戻り値

`void`

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:164](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L164)

Zooms by a delta, keeping a world point stationary.

#### パラメータ

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in world coordinates

#### 戻り値

`void`

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:144](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L144)

Zooms to a target level at viewport center.

#### パラメータ

##### targetZoom

`number`

Target zoom level

#### 戻り値

`void`

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:131](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L131)

Zooms to a target level, keeping a viewport point stationary.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in viewport coordinates

#### 戻り値

`void`

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:157](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L157)

Zooms to a target level, keeping a world point stationary.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in world coordinates

#### 戻り値

`void`

## メソッド

### cleanup()

> **cleanup**(): `void`

定義: packages/being/dist/interface.d.ts:31

#### 戻り値

`void`

#### 継承元

`BaseContext.cleanup`

***

### configure()

> **configure**(`config`): `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:83](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L83)

Updates the camera rig configuration.

#### パラメータ

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### 戻り値

`void`

***

### setup()

> **setup**(): `void`

定義: packages/being/dist/interface.d.ts:30

#### 戻り値

`void`

#### 継承元

`BaseContext.setup`

***

### update()

> **update**(): `void`

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:88](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L88)

Updates the camera rig state (called per frame if needed).

#### 戻り値

`void`

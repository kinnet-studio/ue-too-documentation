[@ue-too/board](../globals.md) / CameraRig

# Interface: CameraRig

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:72](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L72)

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

## See

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the default implementation
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a factory function

## Extends

- `BaseContext`

## Properties

### camera

> **camera**: [`ObservableBoardCamera`](ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L74)

The underlying observable camera being controlled

***

### config

> **config**: [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:77](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L77)

Current configuration for all camera operations

***

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:94](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L94)

Pans the camera by a delta in viewport coordinates.

#### Parameters

##### delta

`Point`

Movement delta in viewport space (CSS pixels, origin at center)

#### Returns

`void`

***

### panByWorld()

> **panByWorld**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L106)

Pans the camera by a delta in world coordinates.

#### Parameters

##### delta

`Point`

Movement delta in world space

#### Returns

`void`

***

### panToViewPort()

> **panToViewPort**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:100](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L100)

Pans the camera to a target position in viewport coordinates.

#### Parameters

##### target

`Point`

Target position in viewport space

#### Returns

`void`

***

### panToWorld()

> **panToWorld**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:112](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L112)

Pans the camera to a target position in world coordinates.

#### Parameters

##### target

`Point`

Target position in world space

#### Returns

`void`

***

### rotateBy()

> **rotateBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:118](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L118)

Rotates the camera by a delta angle.

#### Parameters

##### delta

`number`

Rotation delta in radians

#### Returns

`void`

***

### rotateTo()

> **rotateTo**: (`target`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:124](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L124)

Rotates the camera to a target angle.

#### Parameters

##### target

`number`

Target rotation in radians

#### Returns

`void`

***

### zoomBy()

> **zoomBy**: (`delta`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:150](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L150)

Zooms by a delta at viewport center.

#### Parameters

##### delta

`number`

Zoom delta

#### Returns

`void`

***

### zoomByAt()

> **zoomByAt**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:138](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L138)

Zooms by a delta, keeping a viewport point stationary.

#### Parameters

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in viewport coordinates

#### Returns

`void`

***

### zoomByAtWorld()

> **zoomByAtWorld**: (`delta`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:164](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L164)

Zooms by a delta, keeping a world point stationary.

#### Parameters

##### delta

`number`

Zoom delta

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

***

### zoomTo()

> **zoomTo**: (`targetZoom`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:144](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L144)

Zooms to a target level at viewport center.

#### Parameters

##### targetZoom

`number`

Target zoom level

#### Returns

`void`

***

### zoomToAt()

> **zoomToAt**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:131](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L131)

Zooms to a target level, keeping a viewport point stationary.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in viewport coordinates

#### Returns

`void`

***

### zoomToAtWorld()

> **zoomToAtWorld**: (`targetZoom`, `at`) => `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:157](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L157)

Zooms to a target level, keeping a world point stationary.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: packages/being/dist/interface.d.ts:31

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:83](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L83)

Updates the camera rig configuration.

#### Parameters

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### Returns

`void`

***

### setup()

> **setup**(): `void`

Defined in: packages/being/dist/interface.d.ts:30

#### Returns

`void`

#### Inherited from

`BaseContext.setup`

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:88](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L88)

Updates the camera rig state (called per frame if needed).

#### Returns

`void`

[@ue-too/board](../globals.md) / DefaultCameraRig

# Class: DefaultCameraRig

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:207](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L207)

Default implementation of the camera rig providing comprehensive camera control.
Composes pan, zoom, and rotation handlers into a unified, easy-to-use API.

## Remarks

DefaultCameraRig serves as:
- **Context for state machines**: Passed to pan/zoom state machines as execution context
- **Handler composition**: Combines individual pan/zoom/rotation handlers
- **Coordinate conversion**: Manages conversions between viewport and world space
- **Configuration management**: Applies constraints and limits through handlers

The rig ensures proper transformation sequencing:
1. For anchor-point zoom: Apply zoom, then compensate camera position to keep anchor stationary
2. For rotation: Transform coordinates based on current camera rotation
3. For pan: Apply clamping and boundary constraints

## Example

```typescript
const camera = new DefaultBoardCamera();
const rig = new DefaultCameraRig({
  limitEntireViewPort: true,
  clampTranslation: true,
  clampZoom: true,
  restrictZoom: false
}, camera);

// Pan in viewport coordinates
rig.panByViewPort({ x: 50, y: -30 });

// Zoom at cursor position
rig.zoomByAt(0.1, mousePosition);

// Rotate camera
rig.rotateBy(Math.PI / 4);
```

## See

 - [CameraRig](../interfaces/CameraRig.md) for the interface definition
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a convenient factory function

## Implements

- [`CameraRig`](../interfaces/CameraRig.md)

## Constructors

### Constructor

> **new DefaultCameraRig**(`config`, `camera`): `DefaultCameraRig`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:241](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L241)

Creates a new DefaultCameraRig with specified configuration and camera.

#### Parameters

##### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md) & [`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

Camera rig configuration for pan and zoom constraints

##### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md) = `...`

Observable camera instance to control (defaults to new DefaultBoardCamera)

#### Returns

`DefaultCameraRig`

#### Remarks

The constructor initializes:
- Default pan, zoom, and rotation handler functions
- Rotation config with `restrictRotation: false` and `clampRotation: true`
- Handler functions that will be used to process and constrain all camera operations

#### Example

```typescript
const rig = new DefaultCameraRig({
  limitEntireViewPort: true,
  clampTranslation: true,
  clampZoom: true,
  restrictZoom: false,
  restrictXTranslation: false,
  restrictYTranslation: false
});
```

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:796](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L796)

Gets the underlying observable camera instance.

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

The camera being controlled by this rig

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:809](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L809)

Sets the underlying camera instance.

##### Remarks

Use this to swap cameras at runtime, though this is uncommon.
Usually you create a new rig instead.

##### Parameters

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

New camera to control

##### Returns

`void`

The underlying observable camera being controlled

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`camera`](../interfaces/CameraRig.md#camera)

***

### config

#### Get Signature

> **get** **config**(): [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:822](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L822)

Gets the current camera rig configuration.

##### Remarks

Returns a reference to the internal config. Modifications will affect rig behavior.
For safer updates, use [configure](#configure) instead.

##### Returns

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Current configuration object

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:835](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L835)

Sets the camera rig configuration.

##### Remarks

Creates a shallow copy of the provided config.
For partial updates, use [configure](#configure) instead.

##### Parameters

###### config

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

New configuration object

##### Returns

`void`

Current configuration for all camera operations

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`config`](../interfaces/CameraRig.md#config)

***

### limitEntireViewPort

#### Get Signature

> **get** **limitEntireViewPort**(): `boolean`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:787](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L787)

Gets whether the entire viewport must remain within boundaries.

##### Returns

`boolean`

True if entire viewport is constrained, false if only center is constrained

#### Set Signature

> **set** **limitEntireViewPort**(`limit`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:778](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L778)

Sets whether the entire viewport must remain within boundaries.

##### Remarks

When true, pan boundaries ensure the entire viewport stays within configured limits.
When false, only the camera center point is constrained.

This is a convenience setter for [CameraRigConfig](../type-aliases/CameraRigConfig.md).limitEntireViewPort.

##### Parameters

###### limit

`boolean`

##### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:871](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L871)

Cleans up resources used by the camera rig.

#### Returns

`void`

#### Remarks

Currently a no-op as DefaultCameraRig has no resources to clean up.
Implements BaseContext interface for consistency with other systems.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`cleanup`](../interfaces/CameraRig.md#cleanup)

***

### configure()

> **configure**(`config`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:860](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L860)

Updates camera rig configuration with partial settings.

#### Parameters

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### Returns

`void`

#### Remarks

This is the recommended way to update configuration at runtime.
Only provided properties are updated; others remain unchanged.

#### Example

```typescript
// Enable zoom restrictions without changing other settings
rig.configure({
  restrictZoom: true,
  zoomLevelLimits: { min: 0.5, max: 5.0 }
});

// Disable position clamping
rig.configure({ clampTranslation: false });
```

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`configure`](../interfaces/CameraRig.md#configure)

***

### panByViewPort()

> **panByViewPort**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:562](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L562)

Pans the camera by a delta in viewport coordinates.

#### Parameters

##### delta

`Point`

Movement delta in viewport space (center-anchored, CSS pixels)

#### Returns

`void`

#### Remarks

This is the most common pan method for user input (mouse drag, touch pan).
The delta is in screen/viewport coordinates and gets converted to world space
accounting for current camera rotation and zoom.

Conversion formula:
1. Rotate delta by camera rotation
2. Scale by inverse zoom (1 / zoomLevel)
3. Apply as world-space pan

#### Example

```typescript
// Pan camera when user drags mouse
canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const delta = { x: e.movementX, y: e.movementY };
    rig.panByViewPort(delta);
  }
});
```

#### See

[panByWorld](#panbyworld) for world-space panning

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByViewPort`](../interfaces/CameraRig.md#panbyviewport)

***

### panByWorld()

> **panByWorld**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:596](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L596)

Pans the camera by a delta in world coordinates.

#### Parameters

##### delta

`Point`

Movement delta in world space

#### Returns

`void`

#### Remarks

Use this for programmatic camera movement or when you already have world-space
coordinates (e.g., moving camera to follow a world object).

The delta is passed through the pan handler which may apply:
- Boundary clamping
- Movement restrictions (restrictXTranslation, restrictYTranslation)
- Other constraints from [CameraRigConfig](../type-aliases/CameraRigConfig.md)

#### Example

```typescript
// Move camera 100 units right, 50 units up in world space
rig.panByWorld({ x: 100, y: -50 });

// Follow a moving object
const objectMovement = { x: obj.dx, y: obj.dy };
rig.panByWorld(objectMovement);
```

#### See

[panByViewPort](#panbyviewport) for viewport-space panning

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panByWorld`](../interfaces/CameraRig.md#panbyworld)

***

### panToViewPort()

> **panToViewPort**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:661](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L661)

Pans the camera to position a viewport point at a specific location.

#### Parameters

##### target

`Point`

Target position in viewport coordinates (center-anchored, CSS pixels)

#### Returns

`void`

#### Remarks

Moves the camera so that the specified viewport point ends up at the viewport center.
This is less commonly used than world-space pan-to operations.

The method converts the viewport target to world space, then uses [panToWorld](#pantoworld).

#### Example

```typescript
// Center the camera on what's currently at the top-left of viewport
rig.panToViewPort({ x: -400, y: -300 });
```

#### See

[panToWorld](#pantoworld) for world-space variant (more commonly used)

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToViewPort`](../interfaces/CameraRig.md#pantoviewport)

***

### panToWorld()

> **panToWorld**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:633](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L633)

Pans the camera to an absolute position in world coordinates.

#### Parameters

##### target

`Point`

Target camera position in world space

#### Returns

`void`

#### Remarks

Sets the camera position directly (subject to constraints).
Unlike pan-by methods, this is an absolute positioning operation.

The target is passed through the pan handler which may apply:
- Boundary clamping
- Position restrictions

Use this for:
- "Go to location" features
- Centering camera on specific world coordinates
- Resetting camera to a known position

#### Example

```typescript
// Center camera on world origin
rig.panToWorld({ x: 0, y: 0 });

// Go to specific landmark
const landmark = { x: 1000, y: 500 };
rig.panToWorld(landmark);
```

#### See

[panToViewPort](#pantoviewport) for viewport-space variant

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`panToWorld`](../interfaces/CameraRig.md#pantoworld)

***

### rotateBy()

> **rotateBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:692](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L692)

Rotates the camera by a delta angle.

#### Parameters

##### delta

`number`

Rotation delta in radians (positive = counter-clockwise)

#### Returns

`void`

#### Remarks

Applies a relative rotation to the camera. The delta is passed through the
rotation handler which may apply clamping or restrictions based on [CameraRigConfig](../type-aliases/CameraRigConfig.md).

Camera rotation affects:
- How viewport coordinates map to world coordinates
- The orientation of pan operations
- Visual rendering of the world

#### Example

```typescript
// Rotate 45 degrees counter-clockwise
rig.rotateBy(Math.PI / 4);

// Rotate 90 degrees clockwise
rig.rotateBy(-Math.PI / 2);
```

#### See

[rotateTo](#rotateto) for absolute rotation

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`rotateBy`](../interfaces/CameraRig.md#rotateby)

***

### rotateTo()

> **rotateTo**(`target`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:743](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L743)

Rotates the camera to an absolute angle.

#### Parameters

##### target

`number`

Target rotation in radians (0 = no rotation, positive = counter-clockwise)

#### Returns

`void`

#### Remarks

Sets the camera rotation to a specific angle (subject to constraints).
The target is passed through the rotation handler which may apply clamping.

Use this for:
- Resetting camera to north-up orientation (0 radians)
- Snapping to cardinal directions
- Setting rotation from UI controls

#### Example

```typescript
// Reset to north-up
rig.rotateTo(0);

// Rotate to 90 degrees
rig.rotateTo(Math.PI / 2);
```

#### See

[rotateBy](#rotateby) for relative rotation

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`rotateTo`](../interfaces/CameraRig.md#rotateto)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:880](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L880)

Sets up the camera rig.

#### Returns

`void`

#### Remarks

Currently a no-op as DefaultCameraRig requires no setup.
Implements BaseContext interface for consistency with other systems.

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`setup`](../interfaces/CameraRig.md#setup)

***

### update()

> **update**(): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:894](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L894)

Updates the camera rig state.

#### Returns

`void`

#### Remarks

Currently a no-op as DefaultCameraRig has no per-frame update logic.
Implements BaseContext interface for consistency with other systems.

In stateful rig implementations, this might handle:
- Animation interpolation
- Momentum/inertia
- Smooth camera following

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`update`](../interfaces/CameraRig.md#update)

***

### zoomBy()

> **zoomBy**(`delta`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:414](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L414)

Zooms by a relative delta with the viewport center as the anchor point.

#### Parameters

##### delta

`number`

Zoom delta (added to current zoom level)

#### Returns

`void`

#### Remarks

Unlike [zoomByAt](#zoombyat), the delta is NOT scaled by current zoom level.
This provides absolute delta changes, useful for programmatic zoom adjustments.

The camera position remains unchanged, keeping the viewport center fixed in world space.

#### Example

```typescript
// Increase zoom by 0.5
rig.zoomBy(0.5);

// Decrease zoom by 0.2
rig.zoomBy(-0.2);
```

#### See

[zoomByAt](#zoombyat) for zoom with custom anchor point and scaling

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomBy`](../interfaces/CameraRig.md#zoomby)

***

### zoomByAt()

> **zoomByAt**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:337](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L337)

Zooms by a relative delta while keeping a viewport point stationary.

#### Parameters

##### delta

`number`

Relative zoom delta (multiplied by current zoom level)

##### at

`Point`

Anchor point in viewport coordinates (center-anchored, CSS pixels)

#### Returns

`void`

#### Remarks

This method is ideal for mouse wheel zoom interactions where the delta
represents a relative change rather than an absolute target.

The delta is scaled by current zoom level: `actualDelta = delta * currentZoom`
This provides consistent zoom "speed" regardless of current zoom level.

Like [zoomToAt](#zoomtoat), this keeps the anchor point stationary during zoom.

#### Example

```typescript
// Zoom in by 10% at cursor position (mouse wheel up)
rig.zoomByAt(0.1, cursorPosition);

// Zoom out by 10% at cursor position (mouse wheel down)
rig.zoomByAt(-0.1, cursorPosition);
```

#### See

[zoomToAt](#zoomtoat) for zooming to an absolute level

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAt`](../interfaces/CameraRig.md#zoombyat)

***

### zoomByAtWorld()

> **zoomByAtWorld**(`delta`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:504](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L504)

Zooms by a delta while keeping a world-space point stationary.

#### Parameters

##### delta

`number`

Zoom delta (added to current zoom level, not scaled)

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

#### Remarks

World-space variant of [zoomByAt](#zoombyat). The delta is NOT scaled by current zoom level,
unlike the viewport-space version.

Use this when programmatically zooming around specific world objects or coordinates.

#### Example

```typescript
// Zoom in by 0.5 while keeping a world landmark stationary
const landmarkPos = { x: 2000, y: 1500 };
rig.zoomByAtWorld(0.5, landmarkPos);
```

#### See

[zoomByAt](#zoombyat) for viewport-space variant with scaled delta

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAtWorld`](../interfaces/CameraRig.md#zoombyatworld)

***

### zoomTo()

> **zoomTo**(`targetZoom`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:383](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L383)

Zooms to a target level with the viewport center as the anchor point.

#### Parameters

##### targetZoom

`number`

Target zoom level to reach

#### Returns

`void`

#### Remarks

This is a simpler version of [zoomToAt](#zoomtoat) that always zooms relative to the
viewport center. The camera position remains unchanged, so the center point of
the viewport stays fixed in world space.

Use this when you want straightforward zoom without anchor-point tracking,
such as zoom controls in a UI toolbar.

#### Example

```typescript
// Zoom to 2x, centered on current view
rig.zoomTo(2.0);

// Zoom to fit (100%)
rig.zoomTo(1.0);
```

#### See

[zoomToAt](#zoomtoat) for zoom with custom anchor point

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomTo`](../interfaces/CameraRig.md#zoomto)

***

### zoomToAt()

> **zoomToAt**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:283](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L283)

Zooms to a target level while keeping a viewport point stationary (zoom-to-cursor).

#### Parameters

##### targetZoom

`number`

Target zoom level to reach

##### at

`Point`

Anchor point in viewport coordinates (center-anchored, CSS pixels)

#### Returns

`void`

#### Remarks

This implements the "zoom to cursor" behavior commonly seen in map applications.
The algorithm:
1. Converts anchor point from viewport to world space (before zoom)
2. Applies zoom transformation (may be clamped by config)
3. Converts anchor point from viewport to world space (after zoom)
4. Calculates position difference and pans camera to compensate

The anchor point remains stationary on screen, while the world zooms around it.

#### Example

```typescript
// Zoom to 2x at mouse cursor position
rig.zoomToAt(2.0, { x: mouseX, y: mouseY });

// The world point under the cursor stays in place
```

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAt`](../interfaces/CameraRig.md#zoomtoat)

***

### zoomToAtWorld()

> **zoomToAtWorld**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-rig/camera-rig.ts:450](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/camera-rig.ts#L450)

Zooms to a target level while keeping a world-space point stationary.

#### Parameters

##### targetZoom

`number`

Target zoom level to reach

##### at

`Point`

Anchor point in world coordinates

#### Returns

`void`

#### Remarks

Similar to [zoomToAt](#zoomtoat), but accepts world-space coordinates instead of viewport coordinates.
Useful when you want to zoom to keep a specific world object or location centered,
rather than a screen position.

The algorithm:
1. Converts world anchor to viewport space (before zoom)
2. Applies zoom transformation
3. Converts world anchor to viewport space (after zoom)
4. Calculates viewport movement and converts to world space
5. Pans camera to compensate

#### Example

```typescript
// Zoom to 3x while keeping a specific world object in place
const objectWorldPos = { x: 1000, y: 500 };
rig.zoomToAtWorld(3.0, objectWorldPos);
```

#### See

[zoomToAt](#zoomtoat) for viewport-space variant

#### Implementation of

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAtWorld`](../interfaces/CameraRig.md#zoomtoatworld)

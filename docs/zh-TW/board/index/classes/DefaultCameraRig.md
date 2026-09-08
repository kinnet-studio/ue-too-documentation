[@ue-too/board](../../modules.md) / [index](../index.md) / DefaultCameraRig

# 類別: DefaultCameraRig

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:207](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L207)

Default implementation of the camera rig providing comprehensive camera control.
Composes pan, zoom, and rotation handlers into a unified, easy-to-use API.

## 備註

DefaultCameraRig serves as:
- **Context for state machines**: Passed to pan/zoom state machines as execution context
- **Handler composition**: Combines individual pan/zoom/rotation handlers
- **Coordinate conversion**: Manages conversions between viewport and world space
- **Configuration management**: Applies constraints and limits through handlers

The rig ensures proper transformation sequencing:
1. For anchor-point zoom: Apply zoom, then compensate camera position to keep anchor stationary
2. For rotation: Transform coordinates based on current camera rotation
3. For pan: Apply clamping and boundary constraints

## 範例

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

## 參閱

 - [CameraRig](../interfaces/CameraRig.md) for the interface definition
 - [createDefaultCameraRig](../functions/createDefaultCameraRig.md) for a convenient factory function

## 實作

- [`CameraRig`](../interfaces/CameraRig.md)

## 建構函式

### 建構函式

> **new DefaultCameraRig**(`config`, `camera`): `DefaultCameraRig`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:241](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L241)

Creates a new DefaultCameraRig with specified configuration and camera.

#### 參數

##### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md) & [`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md) & [`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md) & [`ZoomHandlerRestrictConfig`](../type-aliases/ZoomHandlerRestrictConfig.md)

Camera rig configuration for pan and zoom constraints

##### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md) = `...`

Observable camera instance to control (defaults to new DefaultBoardCamera)

#### 回傳

`DefaultCameraRig`

#### 備註

The constructor initializes:
- Default pan, zoom, and rotation handler functions
- Rotation config with `restrictRotation: false` and `clampRotation: true`
- Handler functions that will be used to process and constrain all camera operations

#### 範例

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

## 存取器

### camera

#### Getter 簽章

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:796](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L796)

Gets the underlying observable camera instance.

##### 回傳

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

The camera being controlled by this rig

#### Setter 簽章

> **set** **camera**(`camera`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:809](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L809)

Sets the underlying camera instance.

##### 備註

Use this to swap cameras at runtime, though this is uncommon.
Usually you create a new rig instead.

##### 參數

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

New camera to control

##### 回傳

`void`

The underlying observable camera being controlled

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`camera`](../interfaces/CameraRig.md#camera)

***

### config

#### Getter 簽章

> **get** **config**(): [`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:822](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L822)

Gets the current camera rig configuration.

##### 備註

Returns a reference to the internal config. Modifications will affect rig behavior.
For safer updates, use [configure](#configure) instead.

##### 回傳

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

Current configuration object

#### Setter 簽章

> **set** **config**(`config`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:835](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L835)

Sets the camera rig configuration.

##### 備註

Creates a shallow copy of the provided config.
For partial updates, use [configure](#configure) instead.

##### 參數

###### config

[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)

New configuration object

##### 回傳

`void`

Current configuration for all camera operations

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`config`](../interfaces/CameraRig.md#config)

***

### limitEntireViewPort

#### Getter 簽章

> **get** **limitEntireViewPort**(): `boolean`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:787](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L787)

Gets whether the entire viewport must remain within boundaries.

##### 回傳

`boolean`

True if entire viewport is constrained, false if only center is constrained

#### Setter 簽章

> **set** **limitEntireViewPort**(`limit`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:778](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L778)

Sets whether the entire viewport must remain within boundaries.

##### 備註

When true, pan boundaries ensure the entire viewport stays within configured limits.
When false, only the camera center point is constrained.

This is a convenience setter for [CameraRigConfig](../type-aliases/CameraRigConfig.md).limitEntireViewPort.

##### 參數

###### limit

`boolean`

##### 回傳

`void`

## 方法

### cleanup()

> **cleanup**(): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:871](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L871)

Cleans up resources used by the camera rig.

#### 回傳

`void`

#### 備註

Currently a no-op as DefaultCameraRig has no resources to clean up.
Implements BaseContext interface for consistency with other systems.

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`cleanup`](../interfaces/CameraRig.md#cleanup)

***

### configure()

> **configure**(`config`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:860](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L860)

Updates camera rig configuration with partial settings.

#### 參數

##### config

`Partial`\<[`CameraRigConfig`](../type-aliases/CameraRigConfig.md)\>

Partial configuration to merge with current config

#### 回傳

`void`

#### 備註

This is the recommended way to update configuration at runtime.
Only provided properties are updated; others remain unchanged.

#### 範例

```typescript
// Enable zoom restrictions without changing other settings
rig.configure({
  restrictZoom: true,
  zoomLevelLimits: { min: 0.5, max: 5.0 }
});

// Disable position clamping
rig.configure({ clampTranslation: false });
```

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`configure`](../interfaces/CameraRig.md#configure)

***

### panByViewPort()

> **panByViewPort**(`delta`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:562](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L562)

Pans the camera by a delta in viewport coordinates.

#### 參數

##### delta

`Point`

Movement delta in viewport space (center-anchored, CSS pixels)

#### 回傳

`void`

#### 備註

This is the most common pan method for user input (mouse drag, touch pan).
The delta is in screen/viewport coordinates and gets converted to world space
accounting for current camera rotation and zoom.

Conversion formula:
1. Rotate delta by camera rotation
2. Scale by inverse zoom (1 / zoomLevel)
3. Apply as world-space pan

#### 範例

```typescript
// Pan camera when user drags mouse
canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const delta = { x: e.movementX, y: e.movementY };
    rig.panByViewPort(delta);
  }
});
```

#### 參閱

[panByWorld](#panbyworld) for world-space panning

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`panByViewPort`](../interfaces/CameraRig.md#panbyviewport)

***

### panByWorld()

> **panByWorld**(`delta`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:596](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L596)

Pans the camera by a delta in world coordinates.

#### 參數

##### delta

`Point`

Movement delta in world space

#### 回傳

`void`

#### 備註

Use this for programmatic camera movement or when you already have world-space
coordinates (e.g., moving camera to follow a world object).

The delta is passed through the pan handler which may apply:
- Boundary clamping
- Movement restrictions (restrictXTranslation, restrictYTranslation)
- Other constraints from [CameraRigConfig](../type-aliases/CameraRigConfig.md)

#### 範例

```typescript
// Move camera 100 units right, 50 units up in world space
rig.panByWorld({ x: 100, y: -50 });

// Follow a moving object
const objectMovement = { x: obj.dx, y: obj.dy };
rig.panByWorld(objectMovement);
```

#### 參閱

[panByViewPort](#panbyviewport) for viewport-space panning

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`panByWorld`](../interfaces/CameraRig.md#panbyworld)

***

### panToViewPort()

> **panToViewPort**(`target`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:661](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L661)

Pans the camera to position a viewport point at a specific location.

#### 參數

##### target

`Point`

Target position in viewport coordinates (center-anchored, CSS pixels)

#### 回傳

`void`

#### 備註

Moves the camera so that the specified viewport point ends up at the viewport center.
This is less commonly used than world-space pan-to operations.

The method converts the viewport target to world space, then uses [panToWorld](#pantoworld).

#### 範例

```typescript
// Center the camera on what's currently at the top-left of viewport
rig.panToViewPort({ x: -400, y: -300 });
```

#### 參閱

[panToWorld](#pantoworld) for world-space variant (more commonly used)

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`panToViewPort`](../interfaces/CameraRig.md#pantoviewport)

***

### panToWorld()

> **panToWorld**(`target`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:633](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L633)

Pans the camera to an absolute position in world coordinates.

#### 參數

##### target

`Point`

Target camera position in world space

#### 回傳

`void`

#### 備註

Sets the camera position directly (subject to constraints).
Unlike pan-by methods, this is an absolute positioning operation.

The target is passed through the pan handler which may apply:
- Boundary clamping
- Position restrictions

Use this for:
- "Go to location" features
- Centering camera on specific world coordinates
- Resetting camera to a known position

#### 範例

```typescript
// Center camera on world origin
rig.panToWorld({ x: 0, y: 0 });

// Go to specific landmark
const landmark = { x: 1000, y: 500 };
rig.panToWorld(landmark);
```

#### 參閱

[panToViewPort](#pantoviewport) for viewport-space variant

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`panToWorld`](../interfaces/CameraRig.md#pantoworld)

***

### rotateBy()

> **rotateBy**(`delta`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:692](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L692)

Rotates the camera by a delta angle.

#### 參數

##### delta

`number`

Rotation delta in radians (positive = counter-clockwise)

#### 回傳

`void`

#### 備註

Applies a relative rotation to the camera. The delta is passed through the
rotation handler which may apply clamping or restrictions based on [CameraRigConfig](../type-aliases/CameraRigConfig.md).

Camera rotation affects:
- How viewport coordinates map to world coordinates
- The orientation of pan operations
- Visual rendering of the world

#### 範例

```typescript
// Rotate 45 degrees counter-clockwise
rig.rotateBy(Math.PI / 4);

// Rotate 90 degrees clockwise
rig.rotateBy(-Math.PI / 2);
```

#### 參閱

[rotateTo](#rotateto) for absolute rotation

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`rotateBy`](../interfaces/CameraRig.md#rotateby)

***

### rotateTo()

> **rotateTo**(`target`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:743](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L743)

Rotates the camera to an absolute angle.

#### 參數

##### target

`number`

Target rotation in radians (0 = no rotation, positive = counter-clockwise)

#### 回傳

`void`

#### 備註

Sets the camera rotation to a specific angle (subject to constraints).
The target is passed through the rotation handler which may apply clamping.

Use this for:
- Resetting camera to north-up orientation (0 radians)
- Snapping to cardinal directions
- Setting rotation from UI controls

#### 範例

```typescript
// Reset to north-up
rig.rotateTo(0);

// Rotate to 90 degrees
rig.rotateTo(Math.PI / 2);
```

#### 參閱

[rotateBy](#rotateby) for relative rotation

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`rotateTo`](../interfaces/CameraRig.md#rotateto)

***

### setup()

> **setup**(): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:880](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L880)

Sets up the camera rig.

#### 回傳

`void`

#### 備註

Currently a no-op as DefaultCameraRig requires no setup.
Implements BaseContext interface for consistency with other systems.

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`setup`](../interfaces/CameraRig.md#setup)

***

### update()

> **update**(): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:894](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L894)

Updates the camera rig state.

#### 回傳

`void`

#### 備註

Currently a no-op as DefaultCameraRig has no per-frame update logic.
Implements BaseContext interface for consistency with other systems.

In stateful rig implementations, this might handle:
- Animation interpolation
- Momentum/inertia
- Smooth camera following

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`update`](../interfaces/CameraRig.md#update)

***

### zoomBy()

> **zoomBy**(`delta`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:414](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L414)

Zooms by a relative delta with the viewport center as the anchor point.

#### 參數

##### delta

`number`

Zoom delta (added to current zoom level)

#### 回傳

`void`

#### 備註

Unlike [zoomByAt](#zoombyat), the delta is NOT scaled by current zoom level.
This provides absolute delta changes, useful for programmatic zoom adjustments.

The camera position remains unchanged, keeping the viewport center fixed in world space.

#### 範例

```typescript
// Increase zoom by 0.5
rig.zoomBy(0.5);

// Decrease zoom by 0.2
rig.zoomBy(-0.2);
```

#### 參閱

[zoomByAt](#zoombyat) for zoom with custom anchor point and scaling

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomBy`](../interfaces/CameraRig.md#zoomby)

***

### zoomByAt()

> **zoomByAt**(`delta`, `at`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:337](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L337)

Zooms by a relative delta while keeping a viewport point stationary.

#### 參數

##### delta

`number`

Relative zoom delta (multiplied by current zoom level)

##### at

`Point`

Anchor point in viewport coordinates (center-anchored, CSS pixels)

#### 回傳

`void`

#### 備註

This method is ideal for mouse wheel zoom interactions where the delta
represents a relative change rather than an absolute target.

The delta is scaled by current zoom level: `actualDelta = delta * currentZoom`
This provides consistent zoom "speed" regardless of current zoom level.

Like [zoomToAt](#zoomtoat), this keeps the anchor point stationary during zoom.

#### 範例

```typescript
// Zoom in by 10% at cursor position (mouse wheel up)
rig.zoomByAt(0.1, cursorPosition);

// Zoom out by 10% at cursor position (mouse wheel down)
rig.zoomByAt(-0.1, cursorPosition);
```

#### 參閱

[zoomToAt](#zoomtoat) for zooming to an absolute level

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAt`](../interfaces/CameraRig.md#zoombyat)

***

### zoomByAtWorld()

> **zoomByAtWorld**(`delta`, `at`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:504](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L504)

Zooms by a delta while keeping a world-space point stationary.

#### 參數

##### delta

`number`

Zoom delta (added to current zoom level, not scaled)

##### at

`Point`

Anchor point in world coordinates

#### 回傳

`void`

#### 備註

World-space variant of [zoomByAt](#zoombyat). The delta is NOT scaled by current zoom level,
unlike the viewport-space version.

Use this when programmatically zooming around specific world objects or coordinates.

#### 範例

```typescript
// Zoom in by 0.5 while keeping a world landmark stationary
const landmarkPos = { x: 2000, y: 1500 };
rig.zoomByAtWorld(0.5, landmarkPos);
```

#### 參閱

[zoomByAt](#zoombyat) for viewport-space variant with scaled delta

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomByAtWorld`](../interfaces/CameraRig.md#zoombyatworld)

***

### zoomTo()

> **zoomTo**(`targetZoom`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:383](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L383)

Zooms to a target level with the viewport center as the anchor point.

#### 參數

##### targetZoom

`number`

Target zoom level to reach

#### 回傳

`void`

#### 備註

This is a simpler version of [zoomToAt](#zoomtoat) that always zooms relative to the
viewport center. The camera position remains unchanged, so the center point of
the viewport stays fixed in world space.

Use this when you want straightforward zoom without anchor-point tracking,
such as zoom controls in a UI toolbar.

#### 範例

```typescript
// Zoom to 2x, centered on current view
rig.zoomTo(2.0);

// Zoom to fit (100%)
rig.zoomTo(1.0);
```

#### 參閱

[zoomToAt](#zoomtoat) for zoom with custom anchor point

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomTo`](../interfaces/CameraRig.md#zoomto)

***

### zoomToAt()

> **zoomToAt**(`targetZoom`, `at`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:283](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L283)

Zooms to a target level while keeping a viewport point stationary (zoom-to-cursor).

#### 參數

##### targetZoom

`number`

Target zoom level to reach

##### at

`Point`

Anchor point in viewport coordinates (center-anchored, CSS pixels)

#### 回傳

`void`

#### 備註

This implements the "zoom to cursor" behavior commonly seen in map applications.
The algorithm:
1. Converts anchor point from viewport to world space (before zoom)
2. Applies zoom transformation (may be clamped by config)
3. Converts anchor point from viewport to world space (after zoom)
4. Calculates position difference and pans camera to compensate

The anchor point remains stationary on screen, while the world zooms around it.

#### 範例

```typescript
// Zoom to 2x at mouse cursor position
rig.zoomToAt(2.0, { x: mouseX, y: mouseY });

// The world point under the cursor stays in place
```

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAt`](../interfaces/CameraRig.md#zoomtoat)

***

### zoomToAtWorld()

> **zoomToAtWorld**(`targetZoom`, `at`): `void`

定義於: [packages/board/src/camera/camera-rig/camera-rig.ts:450](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/camera-rig.ts#L450)

Zooms to a target level while keeping a world-space point stationary.

#### 參數

##### targetZoom

`number`

Target zoom level to reach

##### at

`Point`

Anchor point in world coordinates

#### 回傳

`void`

#### 備註

Similar to [zoomToAt](#zoomtoat), but accepts world-space coordinates instead of viewport coordinates.
Useful when you want to zoom to keep a specific world object or location centered,
rather than a screen position.

The algorithm:
1. Converts world anchor to viewport space (before zoom)
2. Applies zoom transformation
3. Converts world anchor to viewport space (after zoom)
4. Calculates viewport movement and converts to world space
5. Pans camera to compensate

#### 範例

```typescript
// Zoom to 3x while keeping a specific world object in place
const objectWorldPos = { x: 1000, y: 500 };
rig.zoomToAtWorld(3.0, objectWorldPos);
```

#### 參閱

[zoomToAt](#zoomtoat) for viewport-space variant

#### 實作了

[`CameraRig`](../interfaces/CameraRig.md).[`zoomToAtWorld`](../interfaces/CameraRig.md#zoomtoatworld)

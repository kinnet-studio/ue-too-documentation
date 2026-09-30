[@ue-too/board](../../modules.md) / [index](../index.md) / DefaultBoardCamera

# クラス: DefaultBoardCamera

定義: [packages/board/src/camera/default-camera.ts:89](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L89)

Observable camera implementation that extends BaseCamera with event notification.
This is the recommended camera class for most applications.

## Remarks

DefaultBoardCamera wraps BaseCamera and adds an event system via [CameraUpdatePublisher](CameraUpdatePublisher.md).
All camera state changes (pan, zoom, rotate) trigger corresponding events that observers can subscribe to.

Use this class when you need to:
- React to camera changes in your UI or game logic
- Synchronize multiple systems with camera state
- Implement camera-dependent features (minimap, LOD, culling)

For a non-observable camera without event overhead, use BaseCamera directly.

## 例

```typescript
const camera = new DefaultBoardCamera(1920, 1080);

// Subscribe to camera events
camera.on('zoom', (event, state) => {
  console.log(`Zoomed by ${event.deltaZoomAmount}`);
  console.log(`New zoom level: ${state.zoomLevel}`);
});

camera.on('pan', (event, state) => {
  console.log(`Panned by (${event.diff.x}, ${event.diff.y})`);
});

// Camera updates trigger events
camera.setZoomLevel(2.0);
camera.setPosition({ x: 100, y: 200 });
```

## 参照

 - BaseCamera for non-observable camera
 - [ObservableBoardCamera](../interfaces/ObservableBoardCamera.md) for the interface definition

## 実装

- [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

## コンストラクター

### コンストラクター

> **new DefaultBoardCamera**(`options`): `DefaultBoardCamera`

定義: [packages/board/src/camera/default-camera.ts:124](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L124)

Creates a new observable camera with event notification capabilities.

#### パラメータ

##### options

[`CameraOptions`](../type-aliases/CameraOptions.md) = `DEFAULT_BOARD_CAMERA_OPTIONS`

#### 戻り値

`DefaultBoardCamera`

#### 例

```typescript
// Camera with default settings
const camera1 = new DefaultBoardCamera();

// Camera with custom viewport
const camera2 = new DefaultBoardCamera(1920, 1080);

// Camera with all options
const camera3 = new DefaultBoardCamera(
  1920, 1080,
  { x: 0, y: 0 },
  0,
  1.0,
  { min: { x: -5000, y: -5000 }, max: { x: 5000, y: 5000 } },
  { min: 0.5, max: 4 },
  { start: 0, end: Math.PI * 2 }
);
```

## Camera

### boundaries

#### 署名を取得する

> **get** **boundaries**(): [`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

定義: [packages/board/src/camera/default-camera.ts:154](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L154)

##### Description

The boundaries of the camera in the world coordinate system.

##### 戻り値

[`Boundaries`](../type-aliases/Boundaries.md) \| `undefined`

#### 署名を設定する

> **set** **boundaries**(`boundaries`): `void`

定義: [packages/board/src/camera/default-camera.ts:158](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L158)

Optional position boundaries for the camera in world coordinates

##### パラメータ

###### boundaries

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

##### 戻り値

`void`

Optional position boundaries for the camera in world coordinates

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`boundaries`](../interfaces/ObservableBoardCamera.md#boundaries)

***

### position

#### 署名を取得する

> **get** **position**(): `Point`

定義: [packages/board/src/camera/default-camera.ts:193](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L193)

##### Description

The position of the camera in the world coordinate system.

##### 戻り値

`Point`

Current camera position in world coordinates (center of viewport)

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`position`](../interfaces/ObservableBoardCamera.md#position)

***

### rotationBoundaries

#### 署名を取得する

> **get** **rotationBoundaries**(): [`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

定義: [packages/board/src/camera/default-camera.ts:327](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L327)

##### Description

The boundaries of the rotation of the camera.

##### 戻り値

[`RotationLimits`](../type-aliases/RotationLimits.md) \| `undefined`

#### 署名を設定する

> **set** **rotationBoundaries**(`rotationBoundaries`): `void`

定義: [packages/board/src/camera/default-camera.ts:331](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L331)

Optional rotation constraints (start and end angles)

##### パラメータ

###### rotationBoundaries

[`RotationLimits`](../type-aliases/RotationLimits.md) | `undefined`

##### 戻り値

`void`

Optional rotation constraints (start and end angles)

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotationBoundaries`](../interfaces/ObservableBoardCamera.md#rotationboundaries)

***

### viewPortHeight

#### 署名を取得する

> **get** **viewPortHeight**(): `number`

定義: [packages/board/src/camera/default-camera.ts:180](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L180)

##### Description

The height of the viewport. (The height of the canvas in css pixels)

##### 戻り値

`number`

#### 署名を設定する

> **set** **viewPortHeight**(`height`): `void`

定義: [packages/board/src/camera/default-camera.ts:184](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L184)

Height of the viewport in CSS pixels

##### パラメータ

###### height

`number`

##### 戻り値

`void`

Height of the viewport in CSS pixels

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortHeight`](../interfaces/ObservableBoardCamera.md#viewportheight)

***

### viewPortWidth

#### 署名を取得する

> **get** **viewPortWidth**(): `number`

定義: [packages/board/src/camera/default-camera.ts:167](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L167)

##### Description

The width of the viewport. (The width of the canvas in css pixels)

##### 戻り値

`number`

#### 署名を設定する

> **set** **viewPortWidth**(`width`): `void`

定義: [packages/board/src/camera/default-camera.ts:171](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L171)

Width of the viewport in CSS pixels

##### パラメータ

###### width

`number`

##### 戻り値

`void`

Width of the viewport in CSS pixels

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortWidth`](../interfaces/ObservableBoardCamera.md#viewportwidth)

***

### zoomBoundaries

#### 署名を取得する

> **get** **zoomBoundaries**(): [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

定義: [packages/board/src/camera/default-camera.ts:246](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L246)

##### Description

The boundaries of the zoom level of the camera.

##### 戻り値

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) \| `undefined`

#### 署名を設定する

> **set** **zoomBoundaries**(`zoomBoundaries`): `void`

定義: [packages/board/src/camera/default-camera.ts:250](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L250)

Optional zoom level constraints (min and max zoom)

##### パラメータ

###### zoomBoundaries

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

##### 戻り値

`void`

Optional zoom level constraints (min and max zoom)

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomBoundaries`](../interfaces/ObservableBoardCamera.md#zoomboundaries)

***

### zoomLevel

#### 署名を取得する

> **get** **zoomLevel**(): `number`

定義: [packages/board/src/camera/default-camera.ts:237](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L237)

##### Description

The zoom level of the camera.

##### 戻り値

`number`

Current zoom level (1.0 = 100%, 2.0 = 200%, etc.)

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`zoomLevel`](../interfaces/ObservableBoardCamera.md#zoomlevel)

## Other

### rotation

#### 署名を取得する

> **get** **rotation**(): `number`

定義: [packages/board/src/camera/default-camera.ts:318](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L318)

Gets the current camera rotation in radians.

##### 戻り値

`number`

Current rotation angle (0 to 2π)

Current rotation in radians (0 to 2π), normalized

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`rotation`](../interfaces/ObservableBoardCamera.md#rotation)

***

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

定義: [packages/board/src/camera/default-camera.ts:407](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L407)

#### パラメータ

##### point

`Point`

The point in the viewport coordinate system.

#### 戻り値

`Point`

The point in the world coordinate system.

#### Description

Converts a point from the viewport coordinate system to the world coordinate system.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromViewPort2WorldSpace`](../interfaces/ObservableBoardCamera.md#convertfromviewport2worldspace)

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

定義: [packages/board/src/camera/default-camera.ts:422](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L422)

#### パラメータ

##### point

`Point`

The point in the world coordinate system.

#### 戻り値

`Point`

The point in the viewport coordinate system.

#### Description

Converts a point from the world coordinate system to the viewport coordinate system.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`convertFromWorld2ViewPort`](../interfaces/ObservableBoardCamera.md#convertfromworld2viewport)

***

### ~~getCameraOriginInWindow()~~

> **getCameraOriginInWindow**(`centerInWindow`): `Point`

定義: [packages/board/src/camera/default-camera.ts:397](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L397)

#### パラメータ

##### centerInWindow

`Point`

The center of the camera in the window coordinate system.

#### 戻り値

`Point`

The origin of the camera in the window coordinate system.

#### Description

The origin of the camera in the window coordinate system.

#### Deprecated

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoorindate`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

定義: [packages/board/src/camera/default-camera.ts:347](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L347)

#### パラメータ

##### devicePixelRatio

`number` = `1`

The device pixel ratio of the canvas

##### alignCoorindate

`boolean` = `true`

Whether to align the coordinate system to the camera's position

#### 戻り値

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix

#### Description

The order of the transformation is as follows:
1. Scale (scale the context using the device pixel ratio)
2. Translation (move the origin of the context to the center of the canvas)
3. Rotation (rotate the context negatively the rotation of the camera)
4. Zoom (scale the context using the zoom level of the camera)
5. Translation (move the origin of the context to the position of the camera in the context coordinate system)

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTransform`](../interfaces/ObservableBoardCamera.md#gettransform)

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

定義: [packages/board/src/camera/default-camera.ts:554](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L554)

Decomposes the camera transformation into Translation, Rotation, and Scale components.

#### パラメータ

##### devicePixelRatio

`number` = `1`

Device pixel ratio for high-DPI displays

##### alignCoordinateSystem

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 戻り値

`object`

Object containing separate scale, rotation, and translation values

##### cached

> **cached**: `boolean`

##### rotation

> **rotation**: `number`

##### scale

> **scale**: `object`

###### scale.x

> **x**: `number`

###### scale.y

> **y**: `number`

##### translation

> **translation**: `object`

###### translation.x

> **x**: `number`

###### translation.y

> **y**: `number`

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`getTRS`](../interfaces/ObservableBoardCamera.md#gettrs)

***

### invertFromWorldSpace2ViewPort()

> **invertFromWorldSpace2ViewPort**(`point`): `Point`

定義: [packages/board/src/camera/default-camera.ts:437](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L437)

#### パラメータ

##### point

`Point`

The point in the world coordinate system.

#### 戻り値

`Point`

The point in the viewport coordinate system.

#### Description

Inverts a point from the world coordinate system to the viewport coordinate system.

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [packages/board/src/camera/default-camera.ts:546](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L546)

Subscribes to camera events with optional AbortController for cancellation.

#### 型パラメーター

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

The event type key from CameraEventMap

#### パラメータ

##### eventName

`K`

Event type to listen for: 'pan', 'zoom', 'rotate', or 'all'

##### callback

(`event`, `cameraState`) => `void`

Function called when event occurs, receives event data and camera state

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription configuration including AbortController signal

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

Function to unsubscribe from this event

#### Remarks

Available events:
- 'pan': Triggered when camera position changes
- 'zoom': Triggered when zoom level changes
- 'rotate': Triggered when rotation changes
- 'all': Triggered for any camera change (pan, zoom, or rotate)

Use the AbortController pattern to manage multiple subscriptions:

#### 例

```typescript
// Basic subscription
const unsubscribe = camera.on('pan', (event, state) => {
  console.log(`Panned by (${event.diff.x}, ${event.diff.y})`);
  console.log(`New position: (${state.position.x}, ${state.position.y})`);
});

// Later: unsubscribe
unsubscribe();

// Subscribe to all events
camera.on('all', (event, state) => {
  if (event.type === 'pan') {
    console.log('Pan event:', event.diff);
  } else if (event.type === 'zoom') {
    console.log('Zoom event:', event.deltaZoomAmount);
  } else if (event.type === 'rotate') {
    console.log('Rotate event:', event.deltaRotation);
  }
});

// Using AbortController for batch unsubscribe
const controller = new AbortController();
camera.on('pan', handlePan, { signal: controller.signal });
camera.on('zoom', handleZoom, { signal: controller.signal });
camera.on('rotate', handleRotate, { signal: controller.signal });

// Unsubscribe all at once
controller.abort();
```

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`on`](../interfaces/ObservableBoardCamera.md#on)

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

定義: [packages/board/src/camera/default-camera.ts:454](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L454)

Sets horizontal (x-axis) movement boundaries for the camera.

#### パラメータ

##### min

`number`

Minimum x coordinate in world space

##### max

`number`

Maximum x coordinate in world space

#### 戻り値

`void`

#### Remarks

If min > max, values are automatically swapped.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setHorizontalBoundaries`](../interfaces/ObservableBoardCamera.md#sethorizontalboundaries)

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `boolean`

定義: [packages/board/src/camera/default-camera.ts:254](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L254)

Updates the maximum allowed zoom level.

#### パラメータ

##### maxZoomLevel

`number`

Maximum zoom level constraint

#### 戻り値

`boolean`

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMaxZoomLevel`](../interfaces/ObservableBoardCamera.md#setmaxzoomlevel)

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `boolean`

定義: [packages/board/src/camera/default-camera.ts:270](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L270)

Updates the minimum allowed zoom level.

#### パラメータ

##### minZoomLevel

`number`

Minimum zoom level constraint

#### 戻り値

`boolean`

#### Remarks

If current zoom is below the new minimum, camera will zoom in to match the minimum.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setMinZoomLevel`](../interfaces/ObservableBoardCamera.md#setminzoomlevel)

***

### setPosition()

> **setPosition**(`destination`): `boolean`

定義: [packages/board/src/camera/default-camera.ts:216](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L216)

Sets the camera position and notifies observers if successful.

#### パラメータ

##### destination

`Point`

Target position in world coordinates

#### 戻り値

`boolean`

True if position was updated, false if rejected by boundaries or negligible change

#### Remarks

If the position changes, a 'pan' event is triggered with the position delta and new camera state.
All 'pan' and 'all' event subscribers will be notified.

#### 例

```typescript
camera.on('pan', (event, state) => {
  console.log(`Camera moved by (${event.diff.x}, ${event.diff.y})`);
});

camera.setPosition({ x: 100, y: 200 }); // Triggers pan event
```

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setPosition`](../interfaces/ObservableBoardCamera.md#setposition)

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

定義: [packages/board/src/camera/default-camera.ts:374](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L374)

Sets the camera rotation and notifies observers if successful.

#### パラメータ

##### rotation

`number`

Target rotation in radians

#### 戻り値

`boolean`

True if rotation was updated, false if outside boundaries or already at limit

#### Remarks

If the rotation changes, a 'rotate' event is triggered with the rotation delta and new camera state.
All 'rotate' and 'all' event subscribers will be notified.
Rotation is automatically normalized to 0-2π range.

#### 例

```typescript
camera.on('rotate', (event, state) => {
  console.log(`Camera rotated by ${event.deltaRotation} radians`);
});

camera.setRotation(Math.PI / 4); // Triggers rotate event
```

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setRotation`](../interfaces/ObservableBoardCamera.md#setrotation)

***

### setUsingTransformationMatrix()

> **setUsingTransformationMatrix**(`transformationMatrix`, `devicePixelRatio`): `void`

定義: [packages/board/src/camera/default-camera.ts:566](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L566)

#### パラメータ

##### transformationMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

##### devicePixelRatio

`number` = `1`

#### 戻り値

`void`

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

定義: [packages/board/src/camera/default-camera.ts:477](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L477)

Sets vertical (y-axis) movement boundaries for the camera.

#### パラメータ

##### min

`number`

Minimum y coordinate in world space

##### max

`number`

Maximum y coordinate in world space

#### 戻り値

`void`

#### Remarks

If min > max, values are automatically swapped.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setVerticalBoundaries`](../interfaces/ObservableBoardCamera.md#setverticalboundaries)

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

定義: [packages/board/src/camera/default-camera.ts:297](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L297)

Sets the camera zoom level and notifies observers if successful.

#### パラメータ

##### zoomLevel

`number`

Target zoom level (1.0 = 100%, 2.0 = 200%, etc.)

#### 戻り値

`boolean`

True if zoom was updated, false if outside boundaries or already at limit

#### Remarks

If the zoom changes, a 'zoom' event is triggered with the zoom delta and new camera state.
All 'zoom' and 'all' event subscribers will be notified.

#### 例

```typescript
camera.on('zoom', (event, state) => {
  console.log(`Zoom changed by ${event.deltaZoomAmount}`);
  console.log(`New zoom: ${state.zoomLevel}`);
});

camera.setZoomLevel(2.0); // Triggers zoom event
```

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`setZoomLevel`](../interfaces/ObservableBoardCamera.md#setzoomlevel)

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate`): `object`

定義: [packages/board/src/camera/default-camera.ts:583](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L583)

Calculates the axis-aligned bounding box (AABB) of the viewport in world space.

#### パラメータ

##### alignCoordinate

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 戻り値

`object`

Object with min and max points defining the bounding box

##### max

> **max**: `Point`

##### min

> **min**: `Point`

#### Remarks

Useful for culling and determining which objects are visible in the current viewport.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortAABB`](../interfaces/ObservableBoardCamera.md#viewportaabb)

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate`): `object`

定義: [packages/board/src/camera/default-camera.ts:576](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/default-camera.ts#L576)

Calculates the four corners of the viewport in world space, accounting for rotation.

#### パラメータ

##### alignCoordinate

`boolean` = `true`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 戻り値

`object`

Object containing the four corner points (top-left, top-right, bottom-left, bottom-right)

##### bottom

> **bottom**: `object`

###### bottom.left

> **left**: `Point`

###### bottom.right

> **right**: `Point`

##### top

> **top**: `object`

###### top.left

> **left**: `Point`

###### top.right

> **right**: `Point`

#### Remarks

Returns the actual rotated viewport corners, not an AABB. Use this for precise viewport bounds.

#### の実装

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md).[`viewPortInWorldSpace`](../interfaces/ObservableBoardCamera.md#viewportinworldspace)

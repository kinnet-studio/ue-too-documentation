[@ue-too/board](../../modules.md) / [index](../index.md) / ObservableBoardCamera

# 介面: ObservableBoardCamera

定義於: [packages/board/src/camera/interface.ts:29](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L29)

Observable camera interface that extends [BoardCamera](BoardCamera.md) with event subscription capabilities.
Allows observers to subscribe to camera state changes such as pan, zoom, and rotation events.

## 範例

```typescript
const camera: ObservableBoardCamera = new DefaultBoardCamera();

// Subscribe to pan events
const unsubscribe = camera.on('pan', (event, state) => {
  console.log('Camera panned by:', event.diff);
});

// Later, unsubscribe
unsubscribe();
```

## Extends

- [`BoardCamera`](BoardCamera.md)

## 屬性

### boundaries?

> `optional` **boundaries**: [`Boundaries`](../type-aliases/Boundaries.md)

定義於: [packages/board/src/camera/interface.ts:102](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L102)

Optional position boundaries for the camera in world coordinates

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`boundaries`](BoardCamera.md#boundaries)

***

### position

> **position**: `Point`

定義於: [packages/board/src/camera/interface.ts:87](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L87)

Current camera position in world coordinates (center of viewport)

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`position`](BoardCamera.md#position)

***

### rotation

> **rotation**: `number`

定義於: [packages/board/src/camera/interface.ts:90](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L90)

Current rotation in radians (0 to 2π), normalized

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`rotation`](BoardCamera.md#rotation)

***

### rotationBoundaries?

> `optional` **rotationBoundaries**: [`RotationLimits`](../type-aliases/RotationLimits.md)

定義於: [packages/board/src/camera/interface.ts:108](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L108)

Optional rotation constraints (start and end angles)

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`rotationBoundaries`](BoardCamera.md#rotationboundaries)

***

### viewPortHeight

> **viewPortHeight**: `number`

定義於: [packages/board/src/camera/interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L99)

Height of the viewport in CSS pixels

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`viewPortHeight`](BoardCamera.md#viewportheight)

***

### viewPortWidth

> **viewPortWidth**: `number`

定義於: [packages/board/src/camera/interface.ts:96](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L96)

Width of the viewport in CSS pixels

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`viewPortWidth`](BoardCamera.md#viewportwidth)

***

### zoomBoundaries?

> `optional` **zoomBoundaries**: [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

定義於: [packages/board/src/camera/interface.ts:105](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L105)

Optional zoom level constraints (min and max zoom)

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`zoomBoundaries`](BoardCamera.md#zoomboundaries)

***

### zoomLevel

> **zoomLevel**: `number`

定義於: [packages/board/src/camera/interface.ts:93](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L93)

Current zoom level (1.0 = 100%, 2.0 = 200%, etc.)

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`zoomLevel`](BoardCamera.md#zoomlevel)

## 方法

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

定義於: [packages/board/src/camera/interface.ts:221](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L221)

Converts a point from viewport coordinates to world coordinates.

#### 參數

##### point

`Point`

Point in viewport space (pixels from viewport center)

#### 回傳

`Point`

Corresponding point in world coordinates

#### 範例

```typescript
// Convert mouse position (relative to viewport center) to world position
const mouseViewport = { x: mouseX - canvas.width/2, y: mouseY - canvas.height/2 };
const worldPos = camera.convertFromViewPort2WorldSpace(mouseViewport);
```

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`convertFromViewPort2WorldSpace`](BoardCamera.md#convertfromviewport2worldspace)

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

定義於: [packages/board/src/camera/interface.ts:235](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L235)

Converts a point from world coordinates to viewport coordinates.

#### 參數

##### point

`Point`

Point in world coordinates

#### 回傳

`Point`

Corresponding point in viewport space (pixels from viewport center)

#### 範例

```typescript
// Find viewport position of a world object
const viewportPos = camera.convertFromWorld2ViewPort(objectWorldPos);
```

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`convertFromWorld2ViewPort`](BoardCamera.md#convertfromworld2viewport)

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

定義於: [packages/board/src/camera/interface.ts:272](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L272)

Calculates the complete transformation matrix for rendering.
This matrix transforms from world space to canvas pixel space.

#### 參數

##### devicePixelRatio

`number`

Device pixel ratio for high-DPI displays (typically window.devicePixelRatio)

##### alignCoordinateSystem

`boolean`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 回傳

`object`

2D transformation matrix in standard form {a, b, c, d, e, f}

##### a

> **a**: `number`

##### b

> **b**: `number`

##### c

> **c**: `number`

##### d

> **d**: `number`

##### e

> **e**: `number`

##### f

> **f**: `number`

#### 備註

Apply this matrix to canvas context: `ctx.setTransform(a, b, c, d, e, f)`
The transformation includes devicePixelRatio scaling, viewport centering, rotation, zoom, and camera position.

#### 範例

```typescript
const transform = camera.getTransform(window.devicePixelRatio, true);
ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.e, transform.f);
// Now draw in world coordinates
```

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`getTransform`](BoardCamera.md#gettransform)

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

定義於: [packages/board/src/camera/interface.ts:244](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L244)

Decomposes the camera transformation into Translation, Rotation, and Scale components.

#### 參數

##### devicePixelRatio

`number`

Device pixel ratio for high-DPI displays

##### alignCoordinateSystem

`boolean`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 回傳

`object`

Object containing separate scale, rotation, and translation values

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

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`getTRS`](BoardCamera.md#gettrs)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [packages/board/src/camera/interface.ts:55](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L55)

Subscribes to camera events with an optional AbortController for cancellation.

#### 型別參數

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

The event type key from CameraEventMap

#### 參數

##### eventName

`K`

The type of camera event to listen for ('pan', 'zoom', 'rotate', or 'all')

##### callback

(`event`, `cameraState`) => `void`

Function called when the event occurs, receives event data and current camera state

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

Optional subscription configuration including AbortController signal

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

Function to unsubscribe from the event

#### 範例

```typescript
// Basic subscription
camera.on('zoom', (event, state) => {
  console.log(`Zoom changed by ${event.deltaZoomAmount}`);
});

// With AbortController for batch unsubscribing
const controller = new AbortController();
camera.on('pan', handlePan, { signal: controller.signal });
camera.on('zoom', handleZoom, { signal: controller.signal });

// Unsubscribe all at once
controller.abort();
```

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

定義於: [packages/board/src/camera/interface.ts:195](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L195)

Sets horizontal (x-axis) movement boundaries for the camera.

#### 參數

##### min

`number`

Minimum x coordinate in world space

##### max

`number`

Maximum x coordinate in world space

#### 回傳

`void`

#### 備註

If min > max, values are automatically swapped.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setHorizontalBoundaries`](BoardCamera.md#sethorizontalboundaries)

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `void`

定義於: [packages/board/src/camera/interface.ts:184](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L184)

Updates the maximum allowed zoom level.

#### 參數

##### maxZoomLevel

`number`

Maximum zoom level constraint

#### 回傳

`void`

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setMaxZoomLevel`](BoardCamera.md#setmaxzoomlevel)

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `void`

定義於: [packages/board/src/camera/interface.ts:177](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L177)

Updates the minimum allowed zoom level.

#### 參數

##### minZoomLevel

`number`

Minimum zoom level constraint

#### 回傳

`void`

#### 備註

If current zoom is below the new minimum, camera will zoom in to match the minimum.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setMinZoomLevel`](BoardCamera.md#setminzoomlevel)

***

### setPosition()

> **setPosition**(`destination`): `boolean`

定義於: [packages/board/src/camera/interface.ts:145](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L145)

Sets the camera position in world coordinates.

#### 參數

##### destination

`Point`

Target position for the camera center

#### 回傳

`boolean`

True if position was updated, false if rejected by boundaries or no significant change

#### 備註

Position changes smaller than 10E-10 or 1/zoomLevel are ignored to prevent floating-point jitter.
Position is clamped to boundaries if set.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setPosition`](BoardCamera.md#setposition)

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

定義於: [packages/board/src/camera/interface.ts:167](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L167)

Sets the camera rotation in radians.

#### 參數

##### rotation

`number`

Target rotation angle in radians

#### 回傳

`boolean`

True if rotation was updated, false if outside boundaries or already at limit

#### 備註

Rotation is automatically normalized to 0-2π range. Clamped to rotationBoundaries if set.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setRotation`](BoardCamera.md#setrotation)

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

定義於: [packages/board/src/camera/interface.ts:206](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L206)

Sets vertical (y-axis) movement boundaries for the camera.

#### 參數

##### min

`number`

Minimum y coordinate in world space

##### max

`number`

Maximum y coordinate in world space

#### 回傳

`void`

#### 備註

If min > max, values are automatically swapped.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setVerticalBoundaries`](BoardCamera.md#setverticalboundaries)

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

定義於: [packages/board/src/camera/interface.ts:156](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L156)

Sets the camera zoom level.

#### 參數

##### zoomLevel

`number`

Target zoom level (1.0 = 100%)

#### 回傳

`boolean`

True if zoom was updated, false if outside boundaries or already at limit

#### 備註

Zoom is clamped to zoomBoundaries if set. Values are clamped, not rejected.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`setZoomLevel`](BoardCamera.md#setzoomlevel)

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate?`): `object`

定義於: [packages/board/src/camera/interface.ts:119](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L119)

Calculates the axis-aligned bounding box (AABB) of the viewport in world space.

#### 參數

##### alignCoordinate?

`boolean`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 回傳

`object`

Object with min and max points defining the bounding box

##### max

> **max**: `Point`

##### min

> **min**: `Point`

#### 備註

Useful for culling and determining which objects are visible in the current viewport.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`viewPortAABB`](BoardCamera.md#viewportaabb)

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate?`): `object`

定義於: [packages/board/src/camera/interface.ts:130](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/interface.ts#L130)

Calculates the four corners of the viewport in world space, accounting for rotation.

#### 參數

##### alignCoordinate?

`boolean`

If true, uses standard coordinate system (y-up). If false, uses inverted y-axis

#### 回傳

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

#### 備註

Returns the actual rotated viewport corners, not an AABB. Use this for precise viewport bounds.

#### 繼承自

[`BoardCamera`](BoardCamera.md).[`viewPortInWorldSpace`](BoardCamera.md#viewportinworldspace)

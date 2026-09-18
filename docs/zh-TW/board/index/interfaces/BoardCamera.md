[@ue-too/board](../../modules.md) / [index](../index.md) / BoardCamera

# 介面: BoardCamera

定義於: [packages/board/src/camera/interface.ts:85](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L85)

Core camera interface for the infinite canvas board system.
Manages camera position, rotation, zoom, and coordinate transformations between viewport and world space.

The camera uses a center-anchored coordinate system where the camera position represents
the center of the viewport in world coordinates.

## 備註

Transformation order: Scale (devicePixelRatio) → Translation (viewport center) → Rotation → Zoom → Translation (camera position)

## 範例

```typescript
const camera: BoardCamera = new BaseCamera(1920, 1080);
camera.setPosition({ x: 100, y: 100 });
camera.setZoomLevel(2.0);
camera.setRotation(Math.PI / 4); // 45 degrees

// Convert mouse position to world coordinates
const worldPos = camera.convertFromViewPort2WorldSpace(mousePos);
```

## Extended by

- [`ObservableBoardCamera`](ObservableBoardCamera.md)

## 屬性

### boundaries?

> `optional` **boundaries**: [`Boundaries`](../type-aliases/Boundaries.md)

定義於: [packages/board/src/camera/interface.ts:102](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L102)

Optional position boundaries for the camera in world coordinates

***

### position

> **position**: `Point`

定義於: [packages/board/src/camera/interface.ts:87](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L87)

Current camera position in world coordinates (center of viewport)

***

### rotation

> **rotation**: `number`

定義於: [packages/board/src/camera/interface.ts:90](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L90)

Current rotation in radians (0 to 2π), normalized

***

### rotationBoundaries?

> `optional` **rotationBoundaries**: [`RotationLimits`](../type-aliases/RotationLimits.md)

定義於: [packages/board/src/camera/interface.ts:108](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L108)

Optional rotation constraints (start and end angles)

***

### viewPortHeight

> **viewPortHeight**: `number`

定義於: [packages/board/src/camera/interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L99)

Height of the viewport in CSS pixels

***

### viewPortWidth

> **viewPortWidth**: `number`

定義於: [packages/board/src/camera/interface.ts:96](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L96)

Width of the viewport in CSS pixels

***

### zoomBoundaries?

> `optional` **zoomBoundaries**: [`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md)

定義於: [packages/board/src/camera/interface.ts:105](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L105)

Optional zoom level constraints (min and max zoom)

***

### zoomLevel

> **zoomLevel**: `number`

定義於: [packages/board/src/camera/interface.ts:93](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L93)

Current zoom level (1.0 = 100%, 2.0 = 200%, etc.)

## 方法

### convertFromViewPort2WorldSpace()

> **convertFromViewPort2WorldSpace**(`point`): `Point`

定義於: [packages/board/src/camera/interface.ts:221](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L221)

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

***

### convertFromWorld2ViewPort()

> **convertFromWorld2ViewPort**(`point`): `Point`

定義於: [packages/board/src/camera/interface.ts:235](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L235)

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

***

### getTransform()

> **getTransform**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

定義於: [packages/board/src/camera/interface.ts:272](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L272)

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

***

### getTRS()

> **getTRS**(`devicePixelRatio`, `alignCoordinateSystem`): `object`

定義於: [packages/board/src/camera/interface.ts:244](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L244)

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

***

### setHorizontalBoundaries()

> **setHorizontalBoundaries**(`min`, `max`): `void`

定義於: [packages/board/src/camera/interface.ts:195](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L195)

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

***

### setMaxZoomLevel()

> **setMaxZoomLevel**(`maxZoomLevel`): `void`

定義於: [packages/board/src/camera/interface.ts:184](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L184)

Updates the maximum allowed zoom level.

#### 參數

##### maxZoomLevel

`number`

Maximum zoom level constraint

#### 回傳

`void`

***

### setMinZoomLevel()

> **setMinZoomLevel**(`minZoomLevel`): `void`

定義於: [packages/board/src/camera/interface.ts:177](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L177)

Updates the minimum allowed zoom level.

#### 參數

##### minZoomLevel

`number`

Minimum zoom level constraint

#### 回傳

`void`

#### 備註

If current zoom is below the new minimum, camera will zoom in to match the minimum.

***

### setPosition()

> **setPosition**(`destination`): `boolean`

定義於: [packages/board/src/camera/interface.ts:145](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L145)

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

***

### setRotation()

> **setRotation**(`rotation`): `boolean`

定義於: [packages/board/src/camera/interface.ts:167](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L167)

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

***

### setVerticalBoundaries()

> **setVerticalBoundaries**(`min`, `max`): `void`

定義於: [packages/board/src/camera/interface.ts:206](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L206)

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

***

### setZoomLevel()

> **setZoomLevel**(`zoomLevel`): `boolean`

定義於: [packages/board/src/camera/interface.ts:156](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L156)

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

***

### viewPortAABB()

> **viewPortAABB**(`alignCoordinate?`): `object`

定義於: [packages/board/src/camera/interface.ts:119](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L119)

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

***

### viewPortInWorldSpace()

> **viewPortInWorldSpace**(`alignCoordinate?`): `object`

定義於: [packages/board/src/camera/interface.ts:130](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/interface.ts#L130)

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

[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisualPolygonBody

# クラス: VisualPolygonBody

定義: [rigidbody.ts:546](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L546)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## 実装

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## コンストラクター

### コンストラクター

> **new VisualPolygonBody**(`center`, `vertices`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisualPolygonBody`

定義: [rigidbody.ts:559](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L559)

#### パラメータ

##### center

`Point` = `...`

##### vertices

`Point`[]

##### drawingContext

`CanvasRenderingContext2D`

##### \_orientationAngle

`number` = `0`

##### mass

`number` = `50`

##### isStatic

`boolean` = `false`

##### frictionEnabled

`boolean` = `true`

#### 戻り値

`VisualPolygonBody`

## プロパティ

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義: [rigidbody.ts:551](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L551)

Collision filtering configuration

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義: [rigidbody.ts:554](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L554)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義: [rigidbody.ts:555](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L555)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義: [rigidbody.ts:556](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L556)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義: [rigidbody.ts:557](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L557)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## アクセッサー

### AABB

#### 署名を取得する

> **get** **AABB**(): `object`

定義: [rigidbody.ts:666](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L666)

Axis-Aligned Bounding Box for broad phase collision

##### 戻り値

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### 署名を取得する

> **get** **angularVelocity**(): `number`

定義: [rigidbody.ts:646](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L646)

Angular velocity (radians/second)

##### 戻り値

`number`

#### 署名を設定する

> **set** **angularVelocity**(`angularVelocity`): `void`

定義: [rigidbody.ts:650](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L650)

Angular velocity (radians/second)

##### パラメータ

###### angularVelocity

`number`

##### 戻り値

`void`

Angular velocity (radians/second)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### 署名を取得する

> **get** **center**(): `Point`

定義: [rigidbody.ts:630](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L630)

Center position in world coordinates

##### 戻り値

`Point`

#### 署名を設定する

> **set** **center**(`dest`): `void`

定義: [rigidbody.ts:634](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L634)

Center position in world coordinates

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Center position in world coordinates

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### 署名を取得する

> **get** **linearVelocity**(): `Point`

定義: [rigidbody.ts:638](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L638)

Linear velocity (pixels/second)

##### 戻り値

`Point`

#### 署名を設定する

> **set** **linearVelocity**(`dest`): `void`

定義: [rigidbody.ts:642](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L642)

Linear velocity (pixels/second)

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Linear velocity (pixels/second)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### 署名を取得する

> **get** **mass**(): `number`

定義: [rigidbody.ts:670](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L670)

Mass in arbitrary units (affects force response)

##### 戻り値

`number`

Mass in arbitrary units (affects force response)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### 署名を取得する

> **get** **momentOfInertia**(): `number`

定義: [rigidbody.ts:682](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L682)

Moment of inertia (rotational mass)

##### 戻り値

`number`

Moment of inertia (rotational mass)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### 署名を取得する

> **get** **orientationAngle**(): `number`

定義: [rigidbody.ts:654](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L654)

Rotation angle in radians

##### 戻り値

`number`

Rotation angle in radians

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### 署名を取得する

> **get** **staticFrictionCoeff**(): `number`

定義: [rigidbody.ts:674](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L674)

Static friction coefficient (0-1)

##### 戻り値

`number`

#### 署名を設定する

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義: [rigidbody.ts:678](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L678)

Static friction coefficient (0-1)

##### パラメータ

###### coeff

`number`

##### 戻り値

`void`

Static friction coefficient (0-1)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## メソッド

### applyForce()

> **applyForce**(`force`): `void`

定義: [rigidbody.ts:614](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L614)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義: [rigidbody.ts:618](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L618)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

定義: [rigidbody.ts:579](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L579)

#### パラメータ

##### ctx

`CanvasRenderingContext2D`

#### 戻り値

`void`

#### の実装

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

定義: [rigidbody.ts:690](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L690)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`object`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義: [rigidbody.ts:610](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L610)

#### パラメータ

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

`Point`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義: [rigidbody.ts:606](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L606)

#### パラメータ

##### unitvector

`Point`

#### 戻り値

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義: [rigidbody.ts:686](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L686)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義: [rigidbody.ts:662](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L662)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義: [rigidbody.ts:602](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L602)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義: [rigidbody.ts:598](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L598)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義: [rigidbody.ts:626](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L626)

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義: [rigidbody.ts:622](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L622)

#### パラメータ

##### linearVelocity

`Point`

#### 戻り値

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義: [rigidbody.ts:698](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L698)

#### パラメータ

##### sleeping

`boolean`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義: [rigidbody.ts:658](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L658)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義: [rigidbody.ts:593](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L593)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義: [rigidbody.ts:709](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L709)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)

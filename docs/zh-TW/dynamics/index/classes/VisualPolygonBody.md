[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisualPolygonBody

# 類別: VisualPolygonBody

定義於: [rigidbody.ts:546](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L546)

Rigid body interface for 2D physics simulation.

## 備註

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## 實作

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## 建構函式

### 建構函式

> **new VisualPolygonBody**(`center`, `vertices`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisualPolygonBody`

定義於: [rigidbody.ts:559](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L559)

#### 參數

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

#### 回傳

`VisualPolygonBody`

## 屬性

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義於: [rigidbody.ts:551](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L551)

Collision filtering configuration

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義於: [rigidbody.ts:554](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L554)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義於: [rigidbody.ts:555](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L555)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義於: [rigidbody.ts:556](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L556)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義於: [rigidbody.ts:557](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L557)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## 存取器

### AABB

#### Getter 簽章

> **get** **AABB**(): `object`

定義於: [rigidbody.ts:666](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L666)

Axis-Aligned Bounding Box for broad phase collision

##### 回傳

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### Getter 簽章

> **get** **angularVelocity**(): `number`

定義於: [rigidbody.ts:646](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L646)

Angular velocity (radians/second)

##### 回傳

`number`

#### Setter 簽章

> **set** **angularVelocity**(`angularVelocity`): `void`

定義於: [rigidbody.ts:650](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L650)

Angular velocity (radians/second)

##### 參數

###### angularVelocity

`number`

##### 回傳

`void`

Angular velocity (radians/second)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### Getter 簽章

> **get** **center**(): `Point`

定義於: [rigidbody.ts:630](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L630)

Center position in world coordinates

##### 回傳

`Point`

#### Setter 簽章

> **set** **center**(`dest`): `void`

定義於: [rigidbody.ts:634](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L634)

Center position in world coordinates

##### 參數

###### dest

`Point`

##### 回傳

`void`

Center position in world coordinates

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### Getter 簽章

> **get** **linearVelocity**(): `Point`

定義於: [rigidbody.ts:638](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L638)

Linear velocity (pixels/second)

##### 回傳

`Point`

#### Setter 簽章

> **set** **linearVelocity**(`dest`): `void`

定義於: [rigidbody.ts:642](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L642)

Linear velocity (pixels/second)

##### 參數

###### dest

`Point`

##### 回傳

`void`

Linear velocity (pixels/second)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Getter 簽章

> **get** **mass**(): `number`

定義於: [rigidbody.ts:670](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L670)

Mass in arbitrary units (affects force response)

##### 回傳

`number`

Mass in arbitrary units (affects force response)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Getter 簽章

> **get** **momentOfInertia**(): `number`

定義於: [rigidbody.ts:682](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L682)

Moment of inertia (rotational mass)

##### 回傳

`number`

Moment of inertia (rotational mass)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Getter 簽章

> **get** **orientationAngle**(): `number`

定義於: [rigidbody.ts:654](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L654)

Rotation angle in radians

##### 回傳

`number`

Rotation angle in radians

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Getter 簽章

> **get** **staticFrictionCoeff**(): `number`

定義於: [rigidbody.ts:674](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L674)

Static friction coefficient (0-1)

##### 回傳

`number`

#### Setter 簽章

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義於: [rigidbody.ts:678](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L678)

Static friction coefficient (0-1)

##### 參數

###### coeff

`number`

##### 回傳

`void`

Static friction coefficient (0-1)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## 方法

### applyForce()

> **applyForce**(`force`): `void`

定義於: [rigidbody.ts:614](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L614)

#### 參數

##### force

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義於: [rigidbody.ts:618](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L618)

#### 參數

##### force

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

定義於: [rigidbody.ts:579](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L579)

#### 參數

##### ctx

`CanvasRenderingContext2D`

#### 回傳

`void`

#### 實作了

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

定義於: [rigidbody.ts:690](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L690)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`object`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義於: [rigidbody.ts:610](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L610)

#### 參數

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

`Point`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義於: [rigidbody.ts:606](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L606)

#### 參數

##### unitvector

`Point`

#### 回傳

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:686](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L686)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義於: [rigidbody.ts:662](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L662)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義於: [rigidbody.ts:602](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L602)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義於: [rigidbody.ts:598](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L598)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義於: [rigidbody.ts:626](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L626)

#### 參數

##### delta

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義於: [rigidbody.ts:622](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L622)

#### 參數

##### linearVelocity

`Point`

#### 回傳

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義於: [rigidbody.ts:698](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L698)

#### 參數

##### sleeping

`boolean`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:658](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L658)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義於: [rigidbody.ts:593](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L593)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義於: [rigidbody.ts:709](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L709)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)

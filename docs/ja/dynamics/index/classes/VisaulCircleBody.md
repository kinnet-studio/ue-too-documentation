[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisaulCircleBody

# クラス: VisaulCircleBody

定義: [rigidbody.ts:365](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L365)

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

> **new VisaulCircleBody**(`center`, `radius`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisaulCircleBody`

定義: [rigidbody.ts:378](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L378)

#### パラメータ

##### center

`Point` = `...`

##### radius

`number`

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

`VisaulCircleBody`

## プロパティ

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義: [rigidbody.ts:370](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L370)

Collision filtering configuration

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義: [rigidbody.ts:373](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L373)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義: [rigidbody.ts:374](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L374)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義: [rigidbody.ts:375](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L375)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義: [rigidbody.ts:376](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L376)

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## アクセッサー

### AABB

#### 署名を取得する

> **get** **AABB**(): `object`

定義: [rigidbody.ts:435](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L435)

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

定義: [rigidbody.ts:483](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L483)

Angular velocity (radians/second)

##### 戻り値

`number`

#### 署名を設定する

> **set** **angularVelocity**(`angularVelocity`): `void`

定義: [rigidbody.ts:479](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L479)

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

定義: [rigidbody.ts:455](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L455)

Center position in world coordinates

##### 戻り値

`Point`

#### 署名を設定する

> **set** **center**(`dest`): `void`

定義: [rigidbody.ts:459](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L459)

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

定義: [rigidbody.ts:463](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L463)

Linear velocity (pixels/second)

##### 戻り値

`Point`

#### 署名を設定する

> **set** **linearVelocity**(`dest`): `void`

定義: [rigidbody.ts:467](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L467)

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

定義: [rigidbody.ts:487](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L487)

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

定義: [rigidbody.ts:510](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L510)

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

定義: [rigidbody.ts:471](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L471)

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

定義: [rigidbody.ts:495](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L495)

Static friction coefficient (0-1)

##### 戻り値

`number`

#### 署名を設定する

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義: [rigidbody.ts:499](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L499)

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

定義: [rigidbody.ts:431](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L431)

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

定義: [rigidbody.ts:443](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L443)

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

定義: [rigidbody.ts:398](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L398)

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

定義: [rigidbody.ts:503](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L503)

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

定義: [rigidbody.ts:427](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L427)

#### パラメータ

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

`Point`[]

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMass()

> **getMass**(): `number`

定義: [rigidbody.ts:439](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L439)

#### 戻り値

`number`

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義: [rigidbody.ts:423](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L423)

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

定義: [rigidbody.ts:491](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L491)

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

定義: [rigidbody.ts:451](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L451)

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

定義: [rigidbody.ts:419](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L419)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義: [rigidbody.ts:415](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L415)

#### 戻り値

`boolean`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義: [rigidbody.ts:447](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L447)

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義: [rigidbody.ts:515](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L515)

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

定義: [rigidbody.ts:475](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L475)

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

定義: [rigidbody.ts:410](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L410)

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

定義: [rigidbody.ts:526](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L526)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)

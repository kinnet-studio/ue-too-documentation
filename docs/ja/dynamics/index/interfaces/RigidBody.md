[@ue-too/dynamics](../../modules.md) / [index](../index.md) / RigidBody

# インターフェイス: RigidBody

定義: [rigidbody.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L17)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](../classes/Circle.md) and [Polygon](../classes/Polygon.md) classes.

## プロパティ

### AABB

> **AABB**: `object`

定義: [rigidbody.ts:27](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L27)

Axis-Aligned Bounding Box for broad phase collision

#### max

> **max**: `Point`

#### min

> **min**: `Point`

***

### angularVelocity

> **angularVelocity**: `number`

定義: [rigidbody.ts:25](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L25)

Angular velocity (radians/second)

***

### center

> **center**: `Point`

定義: [rigidbody.ts:19](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L19)

Center position in world coordinates

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](CollisionFilter.md)

定義: [rigidbody.ts:36](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L36)

Collision filtering configuration

***

### isSleeping

> **isSleeping**: `boolean`

定義: [rigidbody.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L39)

***

### linearVelocity

> **linearVelocity**: `Point`

定義: [rigidbody.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L23)

Linear velocity (pixels/second)

***

### mass

> **mass**: `number`

定義: [rigidbody.ts:29](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L29)

Mass in arbitrary units (affects force response)

***

### momentOfInertia

> **momentOfInertia**: `number`

定義: [rigidbody.ts:33](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L33)

Moment of inertia (rotational mass)

***

### orientationAngle

> **orientationAngle**: `number`

定義: [rigidbody.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L21)

Rotation angle in radians

***

### sleepThreshold

> **sleepThreshold**: `number`

定義: [rigidbody.ts:40](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L40)

***

### sleepTime

> **sleepTime**: `number`

定義: [rigidbody.ts:41](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L41)

***

### staticFrictionCoeff

> **staticFrictionCoeff**: `number`

定義: [rigidbody.ts:31](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L31)

Static friction coefficient (0-1)

***

### timeAtRest

> **timeAtRest**: `number`

定義: [rigidbody.ts:42](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L42)

## メソッド

### applyForce()

> **applyForce**(`force`): `void`

定義: [rigidbody.ts:49](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L49)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義: [rigidbody.ts:50](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L50)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

定義: [rigidbody.ts:56](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L56)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`object`[]

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義: [rigidbody.ts:48](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L48)

#### パラメータ

##### relativeBody

`RigidBody`

#### 戻り値

`Point`[]

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義: [rigidbody.ts:47](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L47)

#### パラメータ

##### unitvector

`Point`

#### 戻り値

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義: [rigidbody.ts:55](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L55)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義: [rigidbody.ts:54](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L54)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`[]

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義: [rigidbody.ts:46](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L46)

#### 戻り値

`boolean`

***

### isStatic()

> **isStatic**(): `boolean`

定義: [rigidbody.ts:45](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L45)

#### 戻り値

`boolean`

***

### move()

> **move**(`delta`): `void`

定義: [rigidbody.ts:52](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L52)

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義: [rigidbody.ts:62](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L62)

#### パラメータ

##### sleeping

`boolean`

#### 戻り値

`void`

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義: [rigidbody.ts:53](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L53)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

***

### step()

> **step**(`deltaTime`): `void`

定義: [rigidbody.ts:44](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L44)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義: [rigidbody.ts:63](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/rigidbody.ts#L63)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

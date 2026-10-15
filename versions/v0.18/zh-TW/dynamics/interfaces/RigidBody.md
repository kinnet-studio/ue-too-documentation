[@ue-too/dynamics](../globals.md) / RigidBody

# Interface: RigidBody

Defined in: [rigidbody.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L17)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](../classes/Circle.md) and [Polygon](../classes/Polygon.md) classes.

## Properties

### AABB

> **AABB**: `object`

Defined in: [rigidbody.ts:27](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L27)

Axis-Aligned Bounding Box for broad phase collision

#### max

> **max**: `Point`

#### min

> **min**: `Point`

***

### angularVelocity

> **angularVelocity**: `number`

Defined in: [rigidbody.ts:25](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L25)

Angular velocity (radians/second)

***

### center

> **center**: `Point`

Defined in: [rigidbody.ts:19](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L19)

Center position in world coordinates

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](CollisionFilter.md)

Defined in: [rigidbody.ts:36](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L36)

Collision filtering configuration

***

### isSleeping

> **isSleeping**: `boolean`

Defined in: [rigidbody.ts:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L39)

***

### linearVelocity

> **linearVelocity**: `Point`

Defined in: [rigidbody.ts:23](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L23)

Linear velocity (pixels/second)

***

### mass

> **mass**: `number`

Defined in: [rigidbody.ts:29](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L29)

Mass in arbitrary units (affects force response)

***

### momentOfInertia

> **momentOfInertia**: `number`

Defined in: [rigidbody.ts:33](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L33)

Moment of inertia (rotational mass)

***

### orientationAngle

> **orientationAngle**: `number`

Defined in: [rigidbody.ts:21](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L21)

Rotation angle in radians

***

### sleepThreshold

> **sleepThreshold**: `number`

Defined in: [rigidbody.ts:40](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L40)

***

### sleepTime

> **sleepTime**: `number`

Defined in: [rigidbody.ts:41](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L41)

***

### staticFrictionCoeff

> **staticFrictionCoeff**: `number`

Defined in: [rigidbody.ts:31](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L31)

Static friction coefficient (0-1)

***

### timeAtRest

> **timeAtRest**: `number`

Defined in: [rigidbody.ts:42](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L42)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: [rigidbody.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L49)

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: [rigidbody.ts:50](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L50)

#### Parameters

##### force

`Point`

#### Returns

`void`

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:56](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L56)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L48)

#### Parameters

##### relativeBody

`RigidBody`

#### Returns

`Point`[]

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:47](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L47)

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L55)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:54](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L54)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: [rigidbody.ts:46](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L46)

#### Returns

`boolean`

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:45](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L45)

#### Returns

`boolean`

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L52)

#### Parameters

##### delta

`Point`

#### Returns

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:62](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L62)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L53)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [rigidbody.ts:44](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L44)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: [rigidbody.ts:63](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L63)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

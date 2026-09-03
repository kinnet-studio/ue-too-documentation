[@ue-too/dynamics](../../modules.md) / [index](../index.md) / VisaulCircleBody

# Class: VisaulCircleBody

Defined in: [rigidbody.ts:365](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L365)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## Implements

- [`VisualComponent`](../interfaces/VisualComponent.md)
- [`RigidBody`](../interfaces/RigidBody.md)

## Constructors

### Constructor

> **new VisaulCircleBody**(`center`, `radius`, `drawingContext`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `VisaulCircleBody`

Defined in: [rigidbody.ts:378](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L378)

#### Parameters

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

#### Returns

`VisaulCircleBody`

## Properties

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: [rigidbody.ts:370](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L370)

Collision filtering configuration

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

Defined in: [rigidbody.ts:373](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L373)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

Defined in: [rigidbody.ts:374](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L374)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

Defined in: [rigidbody.ts:375](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L375)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

Defined in: [rigidbody.ts:376](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L376)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [rigidbody.ts:435](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L435)

Axis-Aligned Bounding Box for broad phase collision

##### Returns

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`AABB`](../interfaces/RigidBody.md#aabb)

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `number`

Defined in: [rigidbody.ts:483](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L483)

Angular velocity (radians/second)

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: [rigidbody.ts:479](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L479)

Angular velocity (radians/second)

##### Parameters

###### angularVelocity

`number`

##### Returns

`void`

Angular velocity (radians/second)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`angularVelocity`](../interfaces/RigidBody.md#angularvelocity)

***

### center

#### Get Signature

> **get** **center**(): `Point`

Defined in: [rigidbody.ts:455](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L455)

Center position in world coordinates

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: [rigidbody.ts:459](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L459)

Center position in world coordinates

##### Parameters

###### dest

`Point`

##### Returns

`void`

Center position in world coordinates

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`center`](../interfaces/RigidBody.md#center)

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Point`

Defined in: [rigidbody.ts:463](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L463)

Linear velocity (pixels/second)

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: [rigidbody.ts:467](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L467)

Linear velocity (pixels/second)

##### Parameters

###### dest

`Point`

##### Returns

`void`

Linear velocity (pixels/second)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`linearVelocity`](../interfaces/RigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [rigidbody.ts:487](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L487)

Mass in arbitrary units (affects force response)

##### Returns

`number`

Mass in arbitrary units (affects force response)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** **momentOfInertia**(): `number`

Defined in: [rigidbody.ts:510](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L510)

Moment of inertia (rotational mass)

##### Returns

`number`

Moment of inertia (rotational mass)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`momentOfInertia`](../interfaces/RigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: [rigidbody.ts:471](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L471)

Rotation angle in radians

##### Returns

`number`

Rotation angle in radians

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`orientationAngle`](../interfaces/RigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Get Signature

> **get** **staticFrictionCoeff**(): `number`

Defined in: [rigidbody.ts:495](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L495)

Static friction coefficient (0-1)

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: [rigidbody.ts:499](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L499)

Static friction coefficient (0-1)

##### Parameters

###### coeff

`number`

##### Returns

`void`

Static friction coefficient (0-1)

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`staticFrictionCoeff`](../interfaces/RigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: [rigidbody.ts:431](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L431)

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`applyForce`](../interfaces/RigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: [rigidbody.ts:443](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L443)

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### draw()

> **draw**(`ctx`): `void`

Defined in: [rigidbody.ts:398](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L398)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`VisualComponent`](../interfaces/VisualComponent.md).[`draw`](../interfaces/VisualComponent.md#draw)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:503](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L503)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:427](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L427)

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMass()

> **getMass**(): `number`

Defined in: [rigidbody.ts:439](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L439)

#### Returns

`number`

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:423](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L423)

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getMinMaxProjection`](../interfaces/RigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:491](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L491)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:451](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L451)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`getSignificantVertices`](../interfaces/RigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: [rigidbody.ts:419](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L419)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:415](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L415)

#### Returns

`boolean`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:447](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L447)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:515](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L515)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:475](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L475)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`significantVertex`](../interfaces/RigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [rigidbody.ts:410](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L410)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`step`](../interfaces/RigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: [rigidbody.ts:526](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/rigidbody.ts#L526)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)

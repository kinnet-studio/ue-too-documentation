[@ue-too/dynamics](../globals.md) / Circle

# Class: Circle

Defined in: [rigidbody.ts:943](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L943)

Rigid body interface for 2D physics simulation.

## Remarks

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by Circle and [Polygon](Polygon.md) classes.

## Extends

- [`BaseRigidBody`](BaseRigidBody.md)

## Constructors

### Constructor

> **new Circle**(`center`, `radius`, `_orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `Circle`

Defined in: [rigidbody.ts:947](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L947)

#### Parameters

##### center

`Point` = `...`

##### radius

`number`

##### \_orientationAngle

`number` = `0`

##### mass

`number` = `50`

##### isStatic

`boolean` = `false`

##### frictionEnabled

`boolean` = `true`

#### Returns

`Circle`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`constructor`](BaseRigidBody.md#constructor)

## Properties

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

Defined in: [rigidbody.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L74)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### \_center

> `protected` **\_center**: `Point`

Defined in: [rigidbody.ts:71](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L71)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_center`](BaseRigidBody.md#center)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

Defined in: [rigidbody.ts:73](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L73)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### \_mass

> `protected` **\_mass**: `number` = `50`

Defined in: [rigidbody.ts:72](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L72)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_mass`](BaseRigidBody.md#mass)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number` = `0`

Defined in: [rigidbody.ts:75](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L75)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_orientationAngle`](BaseRigidBody.md#orientationangle)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number` = `0.3`

Defined in: [rigidbody.ts:79](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L79)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`_staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number` = `0.005`

Defined in: [rigidbody.ts:83](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L83)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`angularDampingFactor`](BaseRigidBody.md#angulardampingfactor)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: [rigidbody.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L86)

Collision filtering configuration

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`collisionFilter`](BaseRigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number` = `0.3`

Defined in: [rigidbody.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L80)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`dynamicFrictionCoeff`](BaseRigidBody.md#dynamicfrictioncoeff)

***

### force

> `protected` **force**: `Point`

Defined in: [rigidbody.ts:77](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L77)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`force`](BaseRigidBody.md#force)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean` = `false`

Defined in: [rigidbody.ts:81](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L81)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`frictionEnabled`](BaseRigidBody.md#frictionenabled)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean` = `false`

Defined in: [rigidbody.ts:82](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L82)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStaticBody`](BaseRigidBody.md#ismovingstaticbody)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

Defined in: [rigidbody.ts:89](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L89)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isSleeping`](BaseRigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean` = `false`

Defined in: [rigidbody.ts:78](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L78)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isStaticBody`](BaseRigidBody.md#isstaticbody)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

Defined in: [rigidbody.ts:76](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L76)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`linearAcceleartion`](BaseRigidBody.md#linearacceleartion)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

Defined in: [rigidbody.ts:90](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L90)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`sleepThreshold`](BaseRigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

Defined in: [rigidbody.ts:91](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L91)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`sleepTime`](BaseRigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

Defined in: [rigidbody.ts:92](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L92)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`timeAtRest`](BaseRigidBody.md#timeatrest)

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [rigidbody.ts:984](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L984)

Axis-Aligned Bounding Box for broad phase collision

##### Returns

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`AABB`](BaseRigidBody.md#aabb)

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `number`

Defined in: [rigidbody.ts:130](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L130)

Angular velocity (radians/second)

##### Returns

`number`

#### Set Signature

> **set** **angularVelocity**(`angularVelocity`): `void`

Defined in: [rigidbody.ts:134](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L134)

Angular velocity (radians/second)

##### Parameters

###### angularVelocity

`number`

##### Returns

`void`

Angular velocity (radians/second)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### center

#### Get Signature

> **get** **center**(): `Point`

Defined in: [rigidbody.ts:284](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L284)

Center position in world coordinates

##### Returns

`Point`

#### Set Signature

> **set** **center**(`dest`): `void`

Defined in: [rigidbody.ts:288](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L288)

Center position in world coordinates

##### Parameters

###### dest

`Point`

##### Returns

`void`

Center position in world coordinates

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`center`](BaseRigidBody.md#center)

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Point`

Defined in: [rigidbody.ts:292](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L292)

Linear velocity (pixels/second)

##### Returns

`Point`

#### Set Signature

> **set** **linearVelocity**(`dest`): `void`

Defined in: [rigidbody.ts:296](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L296)

Linear velocity (pixels/second)

##### Parameters

###### dest

`Point`

##### Returns

`void`

Linear velocity (pixels/second)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [rigidbody.ts:300](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L300)

Mass in arbitrary units (affects force response)

##### Returns

`number`

Mass in arbitrary units (affects force response)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`mass`](BaseRigidBody.md#mass)

***

### momentOfInertia

#### Get Signature

> **get** **momentOfInertia**(): `number`

Defined in: [rigidbody.ts:1028](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L1028)

Moment of inertia (rotational mass)

##### Returns

`number`

Moment of inertia (rotational mass)

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`momentOfInertia`](BaseRigidBody.md#momentofinertia)

***

### orientationAngle

#### Get Signature

> **get** **orientationAngle**(): `number`

Defined in: [rigidbody.ts:138](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L138)

Rotation angle in radians

##### Returns

`number`

Rotation angle in radians

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`orientationAngle`](BaseRigidBody.md#orientationangle)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [rigidbody.ts:1004](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L1004)

##### Returns

`number`

***

### staticFrictionCoeff

#### Get Signature

> **get** **staticFrictionCoeff**(): `number`

Defined in: [rigidbody.ts:304](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L304)

Static friction coefficient (0-1)

##### Returns

`number`

#### Set Signature

> **set** **staticFrictionCoeff**(`coeff`): `void`

Defined in: [rigidbody.ts:308](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L308)

Static friction coefficient (0-1)

##### Parameters

###### coeff

`number`

##### Returns

`void`

Static friction coefficient (0-1)

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

## Methods

### applyForce()

> **applyForce**(`force`): `void`

Defined in: [rigidbody.ts:162](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L162)

#### Parameters

##### force

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`applyForce`](BaseRigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

Defined in: [rigidbody.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L170)

#### Parameters

##### force

`number` | `Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`applyForceInOrientation`](BaseRigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`collisionNormal`): `object`[]

Defined in: [rigidbody.ts:1021](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L1021)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`object`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getAdjacentFaces`](BaseRigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

Defined in: [rigidbody.ts:122](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L122)

#### Returns

`Point`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`getCenter`](BaseRigidBody.md#getcenter)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

Defined in: [rigidbody.ts:976](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L976)

#### Parameters

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`Point`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getCollisionAxes`](BaseRigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

Defined in: [rigidbody.ts:961](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L961)

#### Parameters

##### unitvector

`Point`

#### Returns

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getMinMaxProjection`](BaseRigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:1017](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L1017)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getNormalOfSignificantFace`](BaseRigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

Defined in: [rigidbody.ts:126](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L126)

#### Returns

`number`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`getOrientationAngle`](BaseRigidBody.md#getorientationangle)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

Defined in: [rigidbody.ts:1008](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L1008)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`[]

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`getSignificantVertices`](BaseRigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

Defined in: [rigidbody.ts:146](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L146)

#### Returns

`boolean`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStatic`](BaseRigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

Defined in: [rigidbody.ts:142](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L142)

#### Returns

`boolean`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`isStatic`](BaseRigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

Defined in: [rigidbody.ts:112](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L112)

#### Parameters

##### delta

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`move`](BaseRigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

Defined in: [rigidbody.ts:118](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L118)

#### Parameters

##### angle

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`rotateRadians`](BaseRigidBody.md#rotateradians)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

Defined in: [rigidbody.ts:150](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L150)

#### Parameters

##### linearVelocity

`Point`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setLinearVelocity`](BaseRigidBody.md#setlinearvelocity)

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

Defined in: [rigidbody.ts:154](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L154)

#### Parameters

##### movingStatic

`boolean`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setMovingStatic`](BaseRigidBody.md#setmovingstatic)

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

Defined in: [rigidbody.ts:158](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L158)

#### Parameters

##### angle

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setOrientationAngle`](BaseRigidBody.md#setorientationangle)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

Defined in: [rigidbody.ts:328](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L328)

#### Parameters

##### sleeping

`boolean`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`setSleeping`](BaseRigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

Defined in: [rigidbody.ts:997](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L997)

#### Parameters

##### collisionNormal

`Point`

#### Returns

`Point`

#### Overrides

[`BaseRigidBody`](BaseRigidBody.md).[`significantVertex`](BaseRigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [rigidbody.ts:186](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L186)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`step`](BaseRigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

Defined in: [rigidbody.ts:339](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/rigidbody.ts#L339)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BaseRigidBody`](BaseRigidBody.md).[`updateSleeping`](BaseRigidBody.md#updatesleeping)

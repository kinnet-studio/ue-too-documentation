[@ue-too/dynamics](../../modules.md) / [index](../index.md) / Crescent

# 類別: Crescent

定義於: [crescent-fan.ts:14](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L14)

Static rigid body shaped as a circular arc barrier (outer rail segment).
SAT projection logic matches the Python `Crescent` used in hrphysics-simulation.

## 參數

Arc center (same as track JSON `center`)

## 參數

Arc radius

## 參數

Signed sweep in radians; normalized internally like Python

## 參數

Angle from +x to the first arc endpoint (radians)

## Extends

- [`BaseRigidBody`](BaseRigidBody.md)

## 建構函式

### 建構函式

> **new Crescent**(`center`, `radius`, `angleSpan`, `orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `Crescent`

定義於: [crescent-fan.ts:20](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L20)

#### 參數

##### center

`Point` = `...`

##### radius

`number`

##### angleSpan

`number`

##### orientationAngle

`number` = `0`

##### mass

`number` = `500`

##### isStatic

`boolean` = `true`

##### frictionEnabled

`boolean` = `false`

#### 回傳

`Crescent`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`constructor`](BaseRigidBody.md#constructor)

## 屬性

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

定義於: [rigidbody.ts:74](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L74)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### \_center

> `protected` **\_center**: `Point`

定義於: [rigidbody.ts:71](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L71)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_center`](BaseRigidBody.md#center)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

定義於: [rigidbody.ts:73](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L73)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### \_mass

> `protected` **\_mass**: `number` = `50`

定義於: [rigidbody.ts:72](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L72)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_mass`](BaseRigidBody.md#mass)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number` = `0`

定義於: [rigidbody.ts:75](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L75)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_orientationAngle`](BaseRigidBody.md#orientationangle)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number` = `0.3`

定義於: [rigidbody.ts:79](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L79)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`_staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number` = `0.005`

定義於: [rigidbody.ts:83](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L83)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`angularDampingFactor`](BaseRigidBody.md#angulardampingfactor)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義於: [rigidbody.ts:86](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L86)

Collision filtering configuration

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`collisionFilter`](BaseRigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number` = `0.3`

定義於: [rigidbody.ts:80](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L80)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`dynamicFrictionCoeff`](BaseRigidBody.md#dynamicfrictioncoeff)

***

### force

> `protected` **force**: `Point`

定義於: [rigidbody.ts:77](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L77)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`force`](BaseRigidBody.md#force)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean` = `false`

定義於: [rigidbody.ts:81](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L81)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`frictionEnabled`](BaseRigidBody.md#frictionenabled)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean` = `false`

定義於: [rigidbody.ts:82](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L82)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStaticBody`](BaseRigidBody.md#ismovingstaticbody)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義於: [rigidbody.ts:89](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L89)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`isSleeping`](BaseRigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean` = `false`

定義於: [rigidbody.ts:78](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L78)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`isStaticBody`](BaseRigidBody.md#isstaticbody)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

定義於: [rigidbody.ts:76](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L76)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`linearAcceleartion`](BaseRigidBody.md#linearacceleartion)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義於: [rigidbody.ts:90](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L90)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`sleepThreshold`](BaseRigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義於: [rigidbody.ts:91](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L91)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`sleepTime`](BaseRigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義於: [rigidbody.ts:92](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L92)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`timeAtRest`](BaseRigidBody.md#timeatrest)

## 存取器

### AABB

#### Getter 簽章

> **get** **AABB**(): `object`

定義於: [crescent-fan.ts:119](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L119)

Axis-Aligned Bounding Box for broad phase collision

##### 回傳

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`AABB`](BaseRigidBody.md#aabb)

***

### angularVelocity

#### Getter 簽章

> **get** **angularVelocity**(): `number`

定義於: [rigidbody.ts:130](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L130)

Angular velocity (radians/second)

##### 回傳

`number`

#### Setter 簽章

> **set** **angularVelocity**(`angularVelocity`): `void`

定義於: [rigidbody.ts:134](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L134)

Angular velocity (radians/second)

##### 參數

###### angularVelocity

`number`

##### 回傳

`void`

Angular velocity (radians/second)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### center

#### Getter 簽章

> **get** **center**(): `Point`

定義於: [rigidbody.ts:290](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L290)

Center position in world coordinates

##### 回傳

`Point`

#### Setter 簽章

> **set** **center**(`dest`): `void`

定義於: [rigidbody.ts:294](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L294)

Center position in world coordinates

##### 參數

###### dest

`Point`

##### 回傳

`void`

Center position in world coordinates

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`center`](BaseRigidBody.md#center)

***

### linearVelocity

#### Getter 簽章

> **get** **linearVelocity**(): `Point`

定義於: [rigidbody.ts:298](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L298)

Linear velocity (pixels/second)

##### 回傳

`Point`

#### Setter 簽章

> **set** **linearVelocity**(`dest`): `void`

定義於: [rigidbody.ts:302](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L302)

Linear velocity (pixels/second)

##### 參數

###### dest

`Point`

##### 回傳

`void`

Linear velocity (pixels/second)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### mass

#### Getter 簽章

> **get** **mass**(): `number`

定義於: [rigidbody.ts:306](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L306)

Mass in arbitrary units (affects force response)

##### 回傳

`number`

Mass in arbitrary units (affects force response)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`mass`](BaseRigidBody.md#mass)

***

### momentOfInertia

#### Getter 簽章

> **get** **momentOfInertia**(): `number`

定義於: [crescent-fan.ts:66](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L66)

Moment of inertia (rotational mass)

##### 回傳

`number`

Moment of inertia (rotational mass)

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`momentOfInertia`](BaseRigidBody.md#momentofinertia)

***

### orientationAngle

#### Getter 簽章

> **get** **orientationAngle**(): `number`

定義於: [rigidbody.ts:138](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L138)

Rotation angle in radians

##### 回傳

`number`

Rotation angle in radians

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`orientationAngle`](BaseRigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### Getter 簽章

> **get** **staticFrictionCoeff**(): `number`

定義於: [rigidbody.ts:310](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L310)

Static friction coefficient (0-1)

##### 回傳

`number`

#### Setter 簽章

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義於: [rigidbody.ts:314](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L314)

Static friction coefficient (0-1)

##### 參數

###### coeff

`number`

##### 回傳

`void`

Static friction coefficient (0-1)

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

## 方法

### applyForce()

> **applyForce**(`force`): `void`

定義於: [rigidbody.ts:162](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L162)

#### 參數

##### force

`Point`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`applyForce`](BaseRigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義於: [rigidbody.ts:170](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L170)

#### 參數

##### force

`number` | `Point`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`applyForceInOrientation`](BaseRigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`_collisionNormal`): `object`[]

定義於: [crescent-fan.ts:159](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L159)

#### 參數

##### \_collisionNormal

`Point`

#### 回傳

`object`[]

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`getAdjacentFaces`](BaseRigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

定義於: [rigidbody.ts:122](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L122)

#### 回傳

`Point`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`getCenter`](BaseRigidBody.md#getcenter)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義於: [crescent-fan.ts:106](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L106)

#### 參數

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

`Point`[]

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`getCollisionAxes`](BaseRigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義於: [crescent-fan.ts:70](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L70)

#### 參數

##### unitvector

`Point`

#### 回傳

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`getMinMaxProjection`](BaseRigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義於: [crescent-fan.ts:155](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L155)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`getNormalOfSignificantFace`](BaseRigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

定義於: [rigidbody.ts:126](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L126)

#### 回傳

`number`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`getOrientationAngle`](BaseRigidBody.md#getorientationangle)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義於: [crescent-fan.ts:151](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L151)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`[]

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`getSignificantVertices`](BaseRigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義於: [rigidbody.ts:146](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L146)

#### 回傳

`boolean`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStatic`](BaseRigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義於: [rigidbody.ts:142](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L142)

#### 回傳

`boolean`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`isStatic`](BaseRigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義於: [crescent-fan.ts:61](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L61)

#### 參數

##### delta

`Point`

#### 回傳

`void`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`move`](BaseRigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

定義於: [rigidbody.ts:118](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L118)

#### 參數

##### angle

`number`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`rotateRadians`](BaseRigidBody.md#rotateradians)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義於: [rigidbody.ts:150](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L150)

#### 參數

##### linearVelocity

`Point`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`setLinearVelocity`](BaseRigidBody.md#setlinearvelocity)

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

定義於: [rigidbody.ts:154](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L154)

#### 參數

##### movingStatic

`boolean`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`setMovingStatic`](BaseRigidBody.md#setmovingstatic)

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

定義於: [rigidbody.ts:158](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L158)

#### 參數

##### angle

`number`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`setOrientationAngle`](BaseRigidBody.md#setorientationangle)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義於: [rigidbody.ts:334](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L334)

#### 參數

##### sleeping

`boolean`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`setSleeping`](BaseRigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義於: [crescent-fan.ts:137](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L137)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`significantVertex`](BaseRigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義於: [crescent-fan.ts:52](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/crescent-fan.ts#L52)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 覆寫了

[`BaseRigidBody`](BaseRigidBody.md).[`step`](BaseRigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義於: [rigidbody.ts:345](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/rigidbody.ts#L345)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 繼承自

[`BaseRigidBody`](BaseRigidBody.md).[`updateSleeping`](BaseRigidBody.md#updatesleeping)

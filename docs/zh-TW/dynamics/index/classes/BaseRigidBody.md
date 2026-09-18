[@ue-too/dynamics](../../modules.md) / [index](../index.md) / BaseRigidBody

# 抽象 類別: BaseRigidBody

定義於: [rigidbody.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L70)

Rigid body interface for 2D physics simulation.

## 備註

Represents a physical object in the physics world with mass, velocity,
rotation, and collision properties. Can be either static (immovable) or
dynamic (responds to forces).

Implemented by [Circle](Circle.md) and [Polygon](Polygon.md) classes.

## Extended by

- [`Crescent`](Crescent.md)
- [`Fan`](Fan.md)
- [`Polygon`](Polygon.md)
- [`Circle`](Circle.md)

## 實作

- [`RigidBody`](../interfaces/RigidBody.md)

## 建構函式

### 建構函式

> **new BaseRigidBody**(`center`, `_orientationAngle`, `mass`, `isStaticBody`, `frictionEnabled`): `BaseRigidBody`

定義於: [rigidbody.ts:94](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L94)

#### 參數

##### center

`Point`

##### \_orientationAngle

`number` = `0`

##### mass

`number` = `50`

##### isStaticBody

`boolean` = `false`

##### frictionEnabled

`boolean` = `false`

#### 回傳

`BaseRigidBody`

## 屬性

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

定義於: [rigidbody.ts:74](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L74)

***

### \_center

> `protected` **\_center**: `Point`

定義於: [rigidbody.ts:71](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L71)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

定義於: [rigidbody.ts:73](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L73)

***

### \_mass

> `protected` **\_mass**: `number` = `50`

定義於: [rigidbody.ts:72](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L72)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number` = `0`

定義於: [rigidbody.ts:75](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L75)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number` = `0.3`

定義於: [rigidbody.ts:79](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L79)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number` = `0.005`

定義於: [rigidbody.ts:83](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L83)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義於: [rigidbody.ts:86](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L86)

Collision filtering configuration

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`collisionFilter`](../interfaces/RigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number` = `0.3`

定義於: [rigidbody.ts:80](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L80)

***

### force

> `protected` **force**: `Point`

定義於: [rigidbody.ts:77](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L77)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean` = `false`

定義於: [rigidbody.ts:81](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L81)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean` = `false`

定義於: [rigidbody.ts:82](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L82)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義於: [rigidbody.ts:89](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L89)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isSleeping`](../interfaces/RigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean` = `false`

定義於: [rigidbody.ts:78](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L78)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

定義於: [rigidbody.ts:76](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L76)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義於: [rigidbody.ts:90](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L90)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepThreshold`](../interfaces/RigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義於: [rigidbody.ts:91](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L91)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`sleepTime`](../interfaces/RigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義於: [rigidbody.ts:92](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L92)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`timeAtRest`](../interfaces/RigidBody.md#timeatrest)

## 存取器

### AABB

#### Getter 簽章

> **get** `abstract` **AABB**(): `object`

定義於: [rigidbody.ts:324](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L324)

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

定義於: [rigidbody.ts:130](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L130)

Angular velocity (radians/second)

##### 回傳

`number`

#### Setter 簽章

> **set** **angularVelocity**(`angularVelocity`): `void`

定義於: [rigidbody.ts:134](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L134)

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

定義於: [rigidbody.ts:290](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L290)

Center position in world coordinates

##### 回傳

`Point`

#### Setter 簽章

> **set** **center**(`dest`): `void`

定義於: [rigidbody.ts:294](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L294)

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

定義於: [rigidbody.ts:298](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L298)

Linear velocity (pixels/second)

##### 回傳

`Point`

#### Setter 簽章

> **set** **linearVelocity**(`dest`): `void`

定義於: [rigidbody.ts:302](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L302)

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

定義於: [rigidbody.ts:306](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L306)

Mass in arbitrary units (affects force response)

##### 回傳

`number`

Mass in arbitrary units (affects force response)

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`mass`](../interfaces/RigidBody.md#mass)

***

### momentOfInertia

#### Getter 簽章

> **get** `abstract` **momentOfInertia**(): `number`

定義於: [rigidbody.ts:318](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L318)

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

定義於: [rigidbody.ts:138](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L138)

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

定義於: [rigidbody.ts:310](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L310)

Static friction coefficient (0-1)

##### 回傳

`number`

#### Setter 簽章

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義於: [rigidbody.ts:314](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L314)

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

定義於: [rigidbody.ts:162](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L162)

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

定義於: [rigidbody.ts:170](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L170)

#### 參數

##### force

`number` | `Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`applyForceInOrientation`](../interfaces/RigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> `abstract` **getAdjacentFaces**(`collisionNormal`): `object`[]

定義於: [rigidbody.ts:328](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L328)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`object`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getAdjacentFaces`](../interfaces/RigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

定義於: [rigidbody.ts:122](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L122)

#### 回傳

`Point`

***

### getCollisionAxes()

> `abstract` **getCollisionAxes**(`relativeBody`): `Point`[]

定義於: [rigidbody.ts:323](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L323)

#### 參數

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

`Point`[]

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getCollisionAxes`](../interfaces/RigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> `abstract` **getMinMaxProjection**(`unitvector`): `object`

定義於: [rigidbody.ts:319](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L319)

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

> `abstract` **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:327](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L327)

#### 參數

##### collisionNormal

`Point`

#### 回傳

`Point`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`getNormalOfSignificantFace`](../interfaces/RigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

定義於: [rigidbody.ts:126](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L126)

#### 回傳

`number`

***

### getSignificantVertices()

> `abstract` **getSignificantVertices**(`collisionNormal`): `Point`[]

定義於: [rigidbody.ts:326](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L326)

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

定義於: [rigidbody.ts:146](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L146)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isMovingStatic`](../interfaces/RigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義於: [rigidbody.ts:142](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L142)

#### 回傳

`boolean`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`isStatic`](../interfaces/RigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義於: [rigidbody.ts:112](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L112)

#### 參數

##### delta

`Point`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`move`](../interfaces/RigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

定義於: [rigidbody.ts:118](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L118)

#### 參數

##### angle

`number`

#### 回傳

`void`

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義於: [rigidbody.ts:150](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L150)

#### 參數

##### linearVelocity

`Point`

#### 回傳

`void`

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

定義於: [rigidbody.ts:154](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L154)

#### 參數

##### movingStatic

`boolean`

#### 回傳

`void`

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

定義於: [rigidbody.ts:158](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L158)

#### 參數

##### angle

`number`

#### 回傳

`void`

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義於: [rigidbody.ts:334](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L334)

#### 參數

##### sleeping

`boolean`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`setSleeping`](../interfaces/RigidBody.md#setsleeping)

***

### significantVertex()

> `abstract` **significantVertex**(`collisionNormal`): `Point`

定義於: [rigidbody.ts:325](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L325)

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

定義於: [rigidbody.ts:186](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L186)

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

定義於: [rigidbody.ts:345](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/rigidbody.ts#L345)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`RigidBody`](../interfaces/RigidBody.md).[`updateSleeping`](../interfaces/RigidBody.md#updatesleeping)

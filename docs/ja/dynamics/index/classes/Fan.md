[@ue-too/dynamics](../../modules.md) / [index](../index.md) / Fan

# クラス: Fan

定義: [crescent-fan.ts:170](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L170)

Fan-shaped rigid body (arc plus wedge toward center). SAT logic matches Python `Fan`.

## 拡張

- [`BaseRigidBody`](BaseRigidBody.md)

## コンストラクター

### コンストラクター

> **new Fan**(`center`, `radius`, `angleSpan`, `orientationAngle`, `mass`, `isStatic`, `frictionEnabled`): `Fan`

定義: [crescent-fan.ts:176](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L176)

#### パラメータ

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

#### 戻り値

`Fan`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`constructor`](BaseRigidBody.md#constructor)

## プロパティ

### \_angularVelocity

> `protected` **\_angularVelocity**: `number`

定義: [rigidbody.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L74)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### \_center

> `protected` **\_center**: `Point`

定義: [rigidbody.ts:71](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L71)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_center`](BaseRigidBody.md#center)

***

### \_linearVelocity

> `protected` **\_linearVelocity**: `Point`

定義: [rigidbody.ts:73](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L73)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### \_mass

> `protected` **\_mass**: `number` = `50`

定義: [rigidbody.ts:72](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L72)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_mass`](BaseRigidBody.md#mass)

***

### \_orientationAngle

> `protected` **\_orientationAngle**: `number` = `0`

定義: [rigidbody.ts:75](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L75)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_orientationAngle`](BaseRigidBody.md#orientationangle)

***

### \_staticFrictionCoeff

> `protected` **\_staticFrictionCoeff**: `number` = `0.3`

定義: [rigidbody.ts:79](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L79)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`_staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

***

### angularDampingFactor

> `protected` **angularDampingFactor**: `number` = `0.005`

定義: [rigidbody.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L83)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`angularDampingFactor`](BaseRigidBody.md#angulardampingfactor)

***

### collisionFilter

> **collisionFilter**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義: [rigidbody.ts:86](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L86)

Collision filtering configuration

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`collisionFilter`](BaseRigidBody.md#collisionfilter)

***

### dynamicFrictionCoeff

> `protected` **dynamicFrictionCoeff**: `number` = `0.3`

定義: [rigidbody.ts:80](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L80)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`dynamicFrictionCoeff`](BaseRigidBody.md#dynamicfrictioncoeff)

***

### force

> `protected` **force**: `Point`

定義: [rigidbody.ts:77](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L77)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`force`](BaseRigidBody.md#force)

***

### frictionEnabled

> `protected` **frictionEnabled**: `boolean` = `false`

定義: [rigidbody.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L81)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`frictionEnabled`](BaseRigidBody.md#frictionenabled)

***

### isMovingStaticBody

> `protected` **isMovingStaticBody**: `boolean` = `false`

定義: [rigidbody.ts:82](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L82)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStaticBody`](BaseRigidBody.md#ismovingstaticbody)

***

### isSleeping

> **isSleeping**: `boolean` = `false`

定義: [rigidbody.ts:89](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L89)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`isSleeping`](BaseRigidBody.md#issleeping)

***

### isStaticBody

> `protected` **isStaticBody**: `boolean` = `false`

定義: [rigidbody.ts:78](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L78)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`isStaticBody`](BaseRigidBody.md#isstaticbody)

***

### linearAcceleartion

> `protected` **linearAcceleartion**: `Point`

定義: [rigidbody.ts:76](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L76)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`linearAcceleartion`](BaseRigidBody.md#linearacceleartion)

***

### sleepThreshold

> **sleepThreshold**: `number` = `0.01`

定義: [rigidbody.ts:90](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L90)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`sleepThreshold`](BaseRigidBody.md#sleepthreshold)

***

### sleepTime

> **sleepTime**: `number` = `0.5`

定義: [rigidbody.ts:91](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L91)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`sleepTime`](BaseRigidBody.md#sleeptime)

***

### timeAtRest

> **timeAtRest**: `number` = `0`

定義: [rigidbody.ts:92](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L92)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`timeAtRest`](BaseRigidBody.md#timeatrest)

## アクセッサー

### AABB

#### 署名を取得する

> **get** **AABB**(): `object`

定義: [crescent-fan.ts:281](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L281)

Axis-Aligned Bounding Box for broad phase collision

##### 戻り値

`object`

###### max

> **max**: `Point`

###### min

> **min**: `Point`

Axis-Aligned Bounding Box for broad phase collision

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`AABB`](BaseRigidBody.md#aabb)

***

### angularVelocity

#### 署名を取得する

> **get** **angularVelocity**(): `number`

定義: [rigidbody.ts:130](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L130)

Angular velocity (radians/second)

##### 戻り値

`number`

#### 署名を設定する

> **set** **angularVelocity**(`angularVelocity`): `void`

定義: [rigidbody.ts:134](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L134)

Angular velocity (radians/second)

##### パラメータ

###### angularVelocity

`number`

##### 戻り値

`void`

Angular velocity (radians/second)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`angularVelocity`](BaseRigidBody.md#angularvelocity)

***

### center

#### 署名を取得する

> **get** **center**(): `Point`

定義: [rigidbody.ts:290](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L290)

Center position in world coordinates

##### 戻り値

`Point`

#### 署名を設定する

> **set** **center**(`dest`): `void`

定義: [rigidbody.ts:294](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L294)

Center position in world coordinates

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Center position in world coordinates

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`center`](BaseRigidBody.md#center)

***

### linearVelocity

#### 署名を取得する

> **get** **linearVelocity**(): `Point`

定義: [rigidbody.ts:298](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L298)

Linear velocity (pixels/second)

##### 戻り値

`Point`

#### 署名を設定する

> **set** **linearVelocity**(`dest`): `void`

定義: [rigidbody.ts:302](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L302)

Linear velocity (pixels/second)

##### パラメータ

###### dest

`Point`

##### 戻り値

`void`

Linear velocity (pixels/second)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`linearVelocity`](BaseRigidBody.md#linearvelocity)

***

### mass

#### 署名を取得する

> **get** **mass**(): `number`

定義: [rigidbody.ts:306](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L306)

Mass in arbitrary units (affects force response)

##### 戻り値

`number`

Mass in arbitrary units (affects force response)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`mass`](BaseRigidBody.md#mass)

***

### momentOfInertia

#### 署名を取得する

> **get** **momentOfInertia**(): `number`

定義: [crescent-fan.ts:222](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L222)

Moment of inertia (rotational mass)

##### 戻り値

`number`

Moment of inertia (rotational mass)

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`momentOfInertia`](BaseRigidBody.md#momentofinertia)

***

### orientationAngle

#### 署名を取得する

> **get** **orientationAngle**(): `number`

定義: [rigidbody.ts:138](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L138)

Rotation angle in radians

##### 戻り値

`number`

Rotation angle in radians

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`orientationAngle`](BaseRigidBody.md#orientationangle)

***

### staticFrictionCoeff

#### 署名を取得する

> **get** **staticFrictionCoeff**(): `number`

定義: [rigidbody.ts:310](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L310)

Static friction coefficient (0-1)

##### 戻り値

`number`

#### 署名を設定する

> **set** **staticFrictionCoeff**(`coeff`): `void`

定義: [rigidbody.ts:314](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L314)

Static friction coefficient (0-1)

##### パラメータ

###### coeff

`number`

##### 戻り値

`void`

Static friction coefficient (0-1)

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`staticFrictionCoeff`](BaseRigidBody.md#staticfrictioncoeff)

## メソッド

### applyForce()

> **applyForce**(`force`): `void`

定義: [rigidbody.ts:162](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L162)

#### パラメータ

##### force

`Point`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`applyForce`](BaseRigidBody.md#applyforce)

***

### applyForceInOrientation()

> **applyForceInOrientation**(`force`): `void`

定義: [rigidbody.ts:170](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L170)

#### パラメータ

##### force

`number` | `Point`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`applyForceInOrientation`](BaseRigidBody.md#applyforceinorientation)

***

### getAdjacentFaces()

> **getAdjacentFaces**(`_collisionNormal`): `object`[]

定義: [crescent-fan.ts:347](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L347)

#### パラメータ

##### \_collisionNormal

`Point`

#### 戻り値

`object`[]

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`getAdjacentFaces`](BaseRigidBody.md#getadjacentfaces)

***

### getCenter()

> **getCenter**(): `Point`

定義: [rigidbody.ts:122](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L122)

#### 戻り値

`Point`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`getCenter`](BaseRigidBody.md#getcenter)

***

### getCollisionAxes()

> **getCollisionAxes**(`relativeBody`): `Point`[]

定義: [crescent-fan.ts:263](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L263)

#### パラメータ

##### relativeBody

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

`Point`[]

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`getCollisionAxes`](BaseRigidBody.md#getcollisionaxes)

***

### getMinMaxProjection()

> **getMinMaxProjection**(`unitvector`): `object`

定義: [crescent-fan.ts:226](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L226)

#### パラメータ

##### unitvector

`Point`

#### 戻り値

`object`

##### max

> **max**: `number`

##### min

> **min**: `number`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`getMinMaxProjection`](BaseRigidBody.md#getminmaxprojection)

***

### getNormalOfSignificantFace()

> **getNormalOfSignificantFace**(`collisionNormal`): `Point`

定義: [crescent-fan.ts:343](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L343)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`getNormalOfSignificantFace`](BaseRigidBody.md#getnormalofsignificantface)

***

### getOrientationAngle()

> **getOrientationAngle**(): `number`

定義: [rigidbody.ts:126](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L126)

#### 戻り値

`number`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`getOrientationAngle`](BaseRigidBody.md#getorientationangle)

***

### getSignificantVertices()

> **getSignificantVertices**(`collisionNormal`): `Point`[]

定義: [crescent-fan.ts:339](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L339)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`[]

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`getSignificantVertices`](BaseRigidBody.md#getsignificantvertices)

***

### isMovingStatic()

> **isMovingStatic**(): `boolean`

定義: [rigidbody.ts:146](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L146)

#### 戻り値

`boolean`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`isMovingStatic`](BaseRigidBody.md#ismovingstatic)

***

### isStatic()

> **isStatic**(): `boolean`

定義: [rigidbody.ts:142](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L142)

#### 戻り値

`boolean`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`isStatic`](BaseRigidBody.md#isstatic)

***

### move()

> **move**(`delta`): `void`

定義: [crescent-fan.ts:217](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L217)

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`move`](BaseRigidBody.md#move)

***

### rotateRadians()

> **rotateRadians**(`angle`): `void`

定義: [rigidbody.ts:118](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L118)

#### パラメータ

##### angle

`number`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`rotateRadians`](BaseRigidBody.md#rotateradians)

***

### setLinearVelocity()

> **setLinearVelocity**(`linearVelocity`): `void`

定義: [rigidbody.ts:150](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L150)

#### パラメータ

##### linearVelocity

`Point`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`setLinearVelocity`](BaseRigidBody.md#setlinearvelocity)

***

### setMovingStatic()

> **setMovingStatic**(`movingStatic`): `void`

定義: [rigidbody.ts:154](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L154)

#### パラメータ

##### movingStatic

`boolean`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`setMovingStatic`](BaseRigidBody.md#setmovingstatic)

***

### setOrientationAngle()

> **setOrientationAngle**(`angle`): `void`

定義: [rigidbody.ts:158](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L158)

#### パラメータ

##### angle

`number`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`setOrientationAngle`](BaseRigidBody.md#setorientationangle)

***

### setSleeping()

> **setSleeping**(`sleeping`): `void`

定義: [rigidbody.ts:334](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L334)

#### パラメータ

##### sleeping

`boolean`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`setSleeping`](BaseRigidBody.md#setsleeping)

***

### significantVertex()

> **significantVertex**(`collisionNormal`): `Point`

定義: [crescent-fan.ts:319](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L319)

#### パラメータ

##### collisionNormal

`Point`

#### 戻り値

`Point`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`significantVertex`](BaseRigidBody.md#significantvertex)

***

### step()

> **step**(`deltaTime`): `void`

定義: [crescent-fan.ts:208](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/crescent-fan.ts#L208)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### 上書き

[`BaseRigidBody`](BaseRigidBody.md).[`step`](BaseRigidBody.md#step)

***

### updateSleeping()

> **updateSleeping**(`deltaTime`): `void`

定義: [rigidbody.ts:345](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/rigidbody.ts#L345)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### 継承元

[`BaseRigidBody`](BaseRigidBody.md).[`updateSleeping`](BaseRigidBody.md#updatesleeping)

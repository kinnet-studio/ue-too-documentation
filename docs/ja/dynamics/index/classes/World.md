[@ue-too/dynamics](../../modules.md) / [index](../index.md) / World

# クラス: World

定義: [world.ts:65](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L65)

Main physics world managing rigid body simulation.

## Remarks

The World class is the main entry point for physics simulation. It manages
all rigid bodies, runs collision detection and response, enforces constraints,
and provides performance optimizations like sleeping and spatial indexing.

### Simulation Loop

Call `world.step(deltaTime)` each frame to advance the simulation. This:
1. Updates sleeping states
2. Detects collisions (broad and narrow phase)
3. Resolves collisions with impulses
4. Enforces constraints
5. Updates body positions and velocities

### Performance Tuning

- Choose appropriate spatial index for your use case
- Enable sleeping for better performance with many bodies
- Use collision filtering to reduce collision checks

## 例

Basic setup
```typescript
const world = new World(2000, 2000, 'dynamictree');

// Add bodies
const ball = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
world.addRigidBody('ball', ball);

// Simulation loop
function update(dt: number) {
  world.step(dt);
}
```

## コンストラクター

### コンストラクター

> **new World**(`maxTransWidth`, `maxTransHeight`, `spatialIndexType`): `World`

定義: [world.ts:82](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L82)

#### パラメータ

##### maxTransWidth

`number`

##### maxTransHeight

`number`

##### spatialIndexType

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md) = `'dynamictree'`

#### 戻り値

`World`

## プロパティ

### \_context

> **\_context**: `CanvasRenderingContext2D` \| `null` = `null`

定義: [world.ts:80](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L80)

## アクセッサー

### currentSpatialIndexType

#### 署名を取得する

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

定義: [world.ts:284](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L284)

##### 戻り値

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### 署名を取得する

> **get** **resolveCollision**(): `boolean`

定義: [world.ts:231](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L231)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **resolveCollision**(`resolveCollision`): `void`

定義: [world.ts:235](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L235)

##### パラメータ

###### resolveCollision

`boolean`

##### 戻り値

`void`

***

### sleepingEnabled

#### 署名を取得する

> **get** **sleepingEnabled**(): `boolean`

定義: [world.ts:314](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L314)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **sleepingEnabled**(`enabled`): `void`

定義: [world.ts:318](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L318)

##### パラメータ

###### enabled

`boolean`

##### 戻り値

`void`

***

### useLinearCollisionResolution

#### 署名を取得する

> **get** **useLinearCollisionResolution**(): `boolean`

定義: [world.ts:239](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L239)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **useLinearCollisionResolution**(`value`): `void`

定義: [world.ts:243](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L243)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

## メソッド

### addConstraint()

> **addConstraint**(`constraint`): `void`

定義: [world.ts:267](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L267)

#### パラメータ

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### 戻り値

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

定義: [world.ts:275](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L275)

#### パラメータ

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### 戻り値

`void`

***

### addRigidBody()

> **addRigidBody**(`ident`, `body`): `void`

定義: [world.ts:112](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L112)

#### パラメータ

##### ident

`string`

##### body

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

`void`

***

### getCollisionStats()

> **getCollisionStats**(): `object`

定義: [world.ts:336](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L336)

#### 戻り値

`object`

##### activePairs

> **activePairs**: `number`

##### frameNumber

> **frameNumber**: `number`

##### sleepingBodies

> **sleepingBodies**: `number`

##### totalBodies

> **totalBodies**: `number`

##### totalPairs

> **totalPairs**: `number`

***

### getConstraints()

> **getConstraints**(): [`Constraint`](../interfaces/Constraint.md)[]

定義: [world.ts:271](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L271)

#### 戻り値

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

定義: [world.ts:331](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L331)

#### 戻り値

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

定義: [world.ts:247](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L247)

#### 戻り値

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

定義: [world.ts:255](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L255)

#### 戻り値

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

定義: [world.ts:301](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L301)

#### 戻り値

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

定義: [world.ts:122](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L122)

#### パラメータ

##### ident

`string`

#### 戻り値

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

定義: [world.ts:175](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L175)

#### 戻り値

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

定義: [world.ts:259](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L259)

#### パラメータ

##### height

`number`

#### 戻り値

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

定義: [world.ts:263](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L263)

#### パラメータ

##### width

`number`

#### 戻り値

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

定義: [world.ts:288](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L288)

#### パラメータ

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### 戻り値

`void`

***

### step()

> **step**(`deltaTime`): `void`

定義: [world.ts:144](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/world.ts#L144)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

[@ue-too/dynamics](../../modules.md) / [index](../index.md) / World

# Class: World

Defined in: [world.ts:65](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L65)

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

## Example

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

## Constructors

### Constructor

> **new World**(`maxTransWidth`, `maxTransHeight`, `spatialIndexType`): `World`

Defined in: [world.ts:82](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L82)

#### Parameters

##### maxTransWidth

`number`

##### maxTransHeight

`number`

##### spatialIndexType

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md) = `'dynamictree'`

#### Returns

`World`

## Properties

### \_context

> **\_context**: `CanvasRenderingContext2D` \| `null` = `null`

Defined in: [world.ts:80](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L80)

## Accessors

### currentSpatialIndexType

#### Get Signature

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

Defined in: [world.ts:284](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L284)

##### Returns

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### Get Signature

> **get** **resolveCollision**(): `boolean`

Defined in: [world.ts:231](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L231)

##### Returns

`boolean`

#### Set Signature

> **set** **resolveCollision**(`resolveCollision`): `void`

Defined in: [world.ts:235](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L235)

##### Parameters

###### resolveCollision

`boolean`

##### Returns

`void`

***

### sleepingEnabled

#### Get Signature

> **get** **sleepingEnabled**(): `boolean`

Defined in: [world.ts:314](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L314)

##### Returns

`boolean`

#### Set Signature

> **set** **sleepingEnabled**(`enabled`): `void`

Defined in: [world.ts:318](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L318)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### useLinearCollisionResolution

#### Get Signature

> **get** **useLinearCollisionResolution**(): `boolean`

Defined in: [world.ts:239](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L239)

##### Returns

`boolean`

#### Set Signature

> **set** **useLinearCollisionResolution**(`value`): `void`

Defined in: [world.ts:243](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L243)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### addConstraint()

> **addConstraint**(`constraint`): `void`

Defined in: [world.ts:267](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L267)

#### Parameters

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### Returns

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

Defined in: [world.ts:275](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L275)

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### Returns

`void`

***

### addRigidBody()

> **addRigidBody**(`ident`, `body`): `void`

Defined in: [world.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L112)

#### Parameters

##### ident

`string`

##### body

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

`void`

***

### getCollisionStats()

> **getCollisionStats**(): `object`

Defined in: [world.ts:336](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L336)

#### Returns

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

Defined in: [world.ts:271](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L271)

#### Returns

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

Defined in: [world.ts:331](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L331)

#### Returns

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

Defined in: [world.ts:247](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L247)

#### Returns

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

Defined in: [world.ts:255](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L255)

#### Returns

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

Defined in: [world.ts:301](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L301)

#### Returns

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

Defined in: [world.ts:122](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L122)

#### Parameters

##### ident

`string`

#### Returns

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

Defined in: [world.ts:175](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L175)

#### Returns

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

Defined in: [world.ts:259](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L259)

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

Defined in: [world.ts:263](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L263)

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

Defined in: [world.ts:288](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L288)

#### Parameters

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### Returns

`void`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [world.ts:144](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/world.ts#L144)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

[@ue-too/dynamics](../globals.md) / World

# Class: World

Defined in: [world.ts:65](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L65)

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

Defined in: [world.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L80)

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

Defined in: [world.ts:78](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L78)

## Accessors

### currentSpatialIndexType

#### Get Signature

> **get** **currentSpatialIndexType**(): [`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

Defined in: [world.ts:273](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L273)

##### Returns

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

***

### resolveCollision

#### Get Signature

> **get** **resolveCollision**(): `boolean`

Defined in: [world.ts:228](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L228)

##### Returns

`boolean`

#### Set Signature

> **set** **resolveCollision**(`resolveCollision`): `void`

Defined in: [world.ts:232](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L232)

##### Parameters

###### resolveCollision

`boolean`

##### Returns

`void`

***

### sleepingEnabled

#### Get Signature

> **get** **sleepingEnabled**(): `boolean`

Defined in: [world.ts:303](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L303)

##### Returns

`boolean`

#### Set Signature

> **set** **sleepingEnabled**(`enabled`): `void`

Defined in: [world.ts:307](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L307)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

## Methods

### addConstraint()

> **addConstraint**(`constraint`): `void`

Defined in: [world.ts:256](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L256)

#### Parameters

##### constraint

[`Constraint`](../interfaces/Constraint.md)

#### Returns

`void`

***

### addPinJoint()

> **addPinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `void`

Defined in: [world.ts:264](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L264)

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

Defined in: [world.ts:110](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L110)

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

Defined in: [world.ts:325](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L325)

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

Defined in: [world.ts:260](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L260)

#### Returns

[`Constraint`](../interfaces/Constraint.md)[]

***

### getPairManager()

> **getPairManager**(): [`PairManager`](PairManager.md)

Defined in: [world.ts:320](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L320)

#### Returns

[`PairManager`](PairManager.md)

***

### getRigidBodyList()

> **getRigidBodyList**(): [`RigidBody`](../interfaces/RigidBody.md)[]

Defined in: [world.ts:236](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L236)

#### Returns

[`RigidBody`](../interfaces/RigidBody.md)[]

***

### getRigidBodyMap()

> **getRigidBodyMap**(): `Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

Defined in: [world.ts:244](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L244)

#### Returns

`Map`\<`string`, [`RigidBody`](../interfaces/RigidBody.md)\>

***

### getSpatialIndexStats()

> **getSpatialIndexStats**(): `any`

Defined in: [world.ts:290](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L290)

#### Returns

`any`

***

### removeRigidBody()

> **removeRigidBody**(`ident`): `void`

Defined in: [world.ts:120](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L120)

#### Parameters

##### ident

`string`

#### Returns

`void`

***

### resolveCollisionPhase()

> **resolveCollisionPhase**(): `Point`[]

Defined in: [world.ts:173](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L173)

#### Returns

`Point`[]

***

### setMaxTransHeight()

> **setMaxTransHeight**(`height`): `void`

Defined in: [world.ts:248](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L248)

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setMaxTransWidth()

> **setMaxTransWidth**(`width`): `void`

Defined in: [world.ts:252](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L252)

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setSpatialIndexType()

> **setSpatialIndexType**(`type`): `void`

Defined in: [world.ts:277](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L277)

#### Parameters

##### type

[`SpatialIndexType`](../type-aliases/SpatialIndexType.md)

#### Returns

`void`

***

### step()

> **step**(`deltaTime`): `void`

Defined in: [world.ts:142](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/world.ts#L142)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

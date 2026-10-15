[@ue-too/dynamics](../globals.md) / PairManager

# Class: PairManager

Defined in: [pair-manager.ts:59](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L59)

Manages collision pairs across frames.

## Remarks

Tracks which bodies are colliding and for how long, enabling
collision lifecycle events (start, update, end). This is useful for
game logic like damage on collision start or triggers.

Automatically cleans up old inactive pairs to prevent memory leaks.

## Example

Using collision events
```typescript
const pairManager = world.getPairManager();

world.step(dt);

const events = pairManager.getActivePairs();
events.forEach(pair => {
  if (pair.frameCreated === world.currentFrame) {
    console.log('Collision started!');
  }
});
```

## Constructors

### Constructor

> **new PairManager**(): `PairManager`

Defined in: [pair-manager.ts:64](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L64)

#### Returns

`PairManager`

## Methods

### clear()

> **clear**(): `void`

Defined in: [pair-manager.ts:164](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L164)

#### Returns

`void`

***

### getActivePairs()

> **getActivePairs**(): [`CollisionPair`](../interfaces/CollisionPair.md)[]

Defined in: [pair-manager.ts:153](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L153)

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md)[]

***

### getPair()

> **getPair**(`bodyA`, `bodyB`): [`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

Defined in: [pair-manager.ts:158](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L158)

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

#### Returns

[`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

***

### getStats()

> **getStats**(): `object`

Defined in: [pair-manager.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L170)

#### Returns

`object`

##### activePairs

> **activePairs**: `number`

##### frameNumber

> **frameNumber**: `number`

##### totalPairs

> **totalPairs**: `number`

***

### updatePairs()

> **updatePairs**(`newCollisions`): [`PairEvents`](../interfaces/PairEvents.md)

Defined in: [pair-manager.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/pair-manager.ts#L80)

#### Parameters

##### newCollisions

`object`[]

#### Returns

[`PairEvents`](../interfaces/PairEvents.md)

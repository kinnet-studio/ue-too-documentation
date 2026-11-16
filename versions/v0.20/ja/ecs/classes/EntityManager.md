[@ue-too/ecs](../globals.md) / EntityManager

# Class: EntityManager

Defined in: [index.ts:480](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L480)

Manages entity lifecycle and signatures.

## Remarks

The EntityManager handles:
- Creating new entities (recycling IDs from a pool)
- Destroying entities (returning IDs to the pool)
- Storing and updating component signatures for each entity

Entities are represented as simple numbers (IDs) and the manager maintains
a signature (bit field) for each entity indicating which components it has.

## Constructors

### Constructor

> **new EntityManager**(`maxEntities`): `EntityManager`

Defined in: [index.ts:487](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L487)

#### Parameters

##### maxEntities

`number` = `MAX_ENTITIES`

#### Returns

`EntityManager`

## Methods

### createEntity()

> **createEntity**(): `number`

Defined in: [index.ts:495](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L495)

#### Returns

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

Defined in: [index.ts:508](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L508)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

Defined in: [index.ts:553](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L553)

Check if an entity exists (is currently active, not in the available pool).

#### Parameters

##### entity

`number`

The entity ID to check

#### Returns

`boolean`

true if the entity exists, false otherwise

***

### getAllLivingEntities()

> **getAllLivingEntities**(): `number`[]

Defined in: [index.ts:535](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L535)

Get all living entities (entities that are currently active, not in the available pool).

#### Returns

`number`[]

Array of all living entity IDs

***

### getSignature()

> **getSignature**(`entity`): `number` \| `null`

Defined in: [index.ts:524](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L524)

#### Parameters

##### entity

`number`

#### Returns

`number` \| `null`

***

### setSignature()

> **setSignature**(`entity`, `signature`): `void`

Defined in: [index.ts:517](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L517)

#### Parameters

##### entity

`number`

##### signature

`number`

#### Returns

`void`

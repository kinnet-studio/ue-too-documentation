[@ue-too/ecs](../../modules.md) / [index](../index.md) / EntityManager

# 類別: EntityManager

定義於: [index.ts:480](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L480)

Manages entity lifecycle and signatures.

## 備註

The EntityManager handles:
- Creating new entities (recycling IDs from a pool)
- Destroying entities (returning IDs to the pool)
- Storing and updating component signatures for each entity

Entities are represented as simple numbers (IDs) and the manager maintains
a signature (bit field) for each entity indicating which components it has.

## 建構函式

### 建構函式

> **new EntityManager**(`maxEntities`): `EntityManager`

定義於: [index.ts:487](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L487)

#### 參數

##### maxEntities

`number` = `MAX_ENTITIES`

#### 回傳

`EntityManager`

## 方法

### createEntity()

> **createEntity**(): `number`

定義於: [index.ts:495](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L495)

#### 回傳

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

定義於: [index.ts:508](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L508)

#### 參數

##### entity

`number`

#### 回傳

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

定義於: [index.ts:553](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L553)

Check if an entity exists (is currently active, not in the available pool).

#### 參數

##### entity

`number`

The entity ID to check

#### 回傳

`boolean`

true if the entity exists, false otherwise

***

### getAllLivingEntities()

> **getAllLivingEntities**(): `number`[]

定義於: [index.ts:535](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L535)

Get all living entities (entities that are currently active, not in the available pool).

#### 回傳

`number`[]

Array of all living entity IDs

***

### getSignature()

> **getSignature**(`entity`): `number` \| `null`

定義於: [index.ts:524](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L524)

#### 參數

##### entity

`number`

#### 回傳

`number` \| `null`

***

### setSignature()

> **setSignature**(`entity`, `signature`): `void`

定義於: [index.ts:517](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L517)

#### 參數

##### entity

`number`

##### signature

`number`

#### 回傳

`void`

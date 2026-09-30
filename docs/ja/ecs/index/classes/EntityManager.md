[@ue-too/ecs](../../modules.md) / [index](../index.md) / EntityManager

# クラス: EntityManager

定義: [index.ts:480](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L480)

Manages entity lifecycle and signatures.

## Remarks

The EntityManager handles:
- Creating new entities (recycling IDs from a pool)
- Destroying entities (returning IDs to the pool)
- Storing and updating component signatures for each entity

Entities are represented as simple numbers (IDs) and the manager maintains
a signature (bit field) for each entity indicating which components it has.

## コンストラクター

### コンストラクター

> **new EntityManager**(`maxEntities`): `EntityManager`

定義: [index.ts:487](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L487)

#### パラメータ

##### maxEntities

`number` = `MAX_ENTITIES`

#### 戻り値

`EntityManager`

## メソッド

### createEntity()

> **createEntity**(): `number`

定義: [index.ts:495](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L495)

#### 戻り値

`number`

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

定義: [index.ts:508](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L508)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

定義: [index.ts:553](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L553)

Check if an entity exists (is currently active, not in the available pool).

#### パラメータ

##### entity

`number`

The entity ID to check

#### 戻り値

`boolean`

true if the entity exists, false otherwise

***

### getAllLivingEntities()

> **getAllLivingEntities**(): `number`[]

定義: [index.ts:535](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L535)

Get all living entities (entities that are currently active, not in the available pool).

#### 戻り値

`number`[]

Array of all living entity IDs

***

### getSignature()

> **getSignature**(`entity`): `number` \| `null`

定義: [index.ts:524](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L524)

#### パラメータ

##### entity

`number`

#### 戻り値

`number` \| `null`

***

### setSignature()

> **setSignature**(`entity`, `signature`): `void`

定義: [index.ts:517](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L517)

#### パラメータ

##### entity

`number`

##### signature

`number`

#### 戻り値

`void`

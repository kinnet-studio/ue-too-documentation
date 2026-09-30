[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentArray

# クラス: ComponentArray\<T\>

定義: [index.ts:601](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L601)

Efficient sparse-set data structure for storing component data.

## Remarks

ComponentArray uses a sparse-set implementation for O(1) insertion, deletion,
and lookup while maintaining dense packing for cache-efficient iteration.

The sparse-set consists of:
- **Dense array**: Packed component data for iteration
- **Sparse array**: Maps entity ID to dense array index
- **Reverse array**: Maps dense array index back to entity ID

This structure allows fast component access by entity ID and fast iteration
over all components without gaps.

## 型パラメーター

### T

`T`

The component data type

## 実装

- [`CArray`](../interfaces/CArray.md)

## コンストラクター

### コンストラクター

> **new ComponentArray**\<`T`\>(`maxEntities`): `ComponentArray`\<`T`\>

定義: [index.ts:607](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L607)

#### パラメータ

##### maxEntities

`number`

#### 戻り値

`ComponentArray`\<`T`\>

## メソッド

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義: [index.ts:677](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L677)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

#### の実装

[`CArray`](../interfaces/CArray.md).[`entityDestroyed`](../interfaces/CArray.md#entitydestroyed)

***

### getAllEntities()

> **getAllEntities**(): `number`[]

定義: [index.ts:685](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L685)

Get all entities that have this component.

#### 戻り値

`number`[]

Array of entity IDs that have this component

***

### getCount()

> **getCount**(): `number`

定義: [index.ts:700](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L700)

Get the count of entities with this component.

#### 戻り値

`number`

Number of entities with this component

***

### getData()

> **getData**(`entity`): `T` \| `null`

定義: [index.ts:632](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L632)

#### パラメータ

##### entity

`number`

#### 戻り値

`T` \| `null`

***

### insertData()

> **insertData**(`entity`, `data`): `void`

定義: [index.ts:614](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L614)

#### パラメータ

##### entity

`number`

##### data

`T`

#### 戻り値

`void`

***

### removeData()

> **removeData**(`entity`): `void`

定義: [index.ts:653](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L653)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

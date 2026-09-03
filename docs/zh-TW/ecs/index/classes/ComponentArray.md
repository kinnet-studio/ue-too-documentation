[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentArray

# 類別: ComponentArray\<T\>

定義於: [index.ts:601](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L601)

Efficient sparse-set data structure for storing component data.

## 備註

ComponentArray uses a sparse-set implementation for O(1) insertion, deletion,
and lookup while maintaining dense packing for cache-efficient iteration.

The sparse-set consists of:
- **Dense array**: Packed component data for iteration
- **Sparse array**: Maps entity ID to dense array index
- **Reverse array**: Maps dense array index back to entity ID

This structure allows fast component access by entity ID and fast iteration
over all components without gaps.

## 型別參數

### T

`T`

The component data type

## 實作

- [`CArray`](../interfaces/CArray.md)

## 建構函式

### 建構函式

> **new ComponentArray**\<`T`\>(`maxEntities`): `ComponentArray`\<`T`\>

定義於: [index.ts:607](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L607)

#### 參數

##### maxEntities

`number`

#### 回傳

`ComponentArray`\<`T`\>

## 方法

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義於: [index.ts:677](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L677)

#### 參數

##### entity

`number`

#### 回傳

`void`

#### 實作了

[`CArray`](../interfaces/CArray.md).[`entityDestroyed`](../interfaces/CArray.md#entitydestroyed)

***

### getAllEntities()

> **getAllEntities**(): `number`[]

定義於: [index.ts:685](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L685)

Get all entities that have this component.

#### 回傳

`number`[]

Array of entity IDs that have this component

***

### getCount()

> **getCount**(): `number`

定義於: [index.ts:700](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L700)

Get the count of entities with this component.

#### 回傳

`number`

Number of entities with this component

***

### getData()

> **getData**(`entity`): `T` \| `null`

定義於: [index.ts:632](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L632)

#### 參數

##### entity

`number`

#### 回傳

`T` \| `null`

***

### insertData()

> **insertData**(`entity`, `data`): `void`

定義於: [index.ts:614](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L614)

#### 參數

##### entity

`number`

##### data

`T`

#### 回傳

`void`

***

### removeData()

> **removeData**(`entity`): `void`

定義於: [index.ts:653](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L653)

#### 參數

##### entity

`number`

#### 回傳

`void`

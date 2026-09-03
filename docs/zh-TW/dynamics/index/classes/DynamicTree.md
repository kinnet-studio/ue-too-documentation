[@ue-too/dynamics](../../modules.md) / [index](../index.md) / DynamicTree

# 類別: DynamicTree\<T\>

定義於: [dynamic-tree.ts:318](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L318)

Dynamic AABB tree for efficient spatial queries.

## 型別參數

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## 實作

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## 建構函式

### 建構函式

> **new DynamicTree**\<`T`\>(): `DynamicTree`\<`T`\>

#### 回傳

`DynamicTree`\<`T`\>

## 方法

### clear()

> **clear**(): `void`

定義於: [dynamic-tree.ts:325](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L325)

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

定義於: [dynamic-tree.ts:567](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L567)

#### 參數

##### context

`CanvasRenderingContext2D`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getStats()

> **getStats**(): `object`

定義於: [dynamic-tree.ts:623](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L623)

#### 回傳

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### insert()

> **insert**(`object`): `void`

定義於: [dynamic-tree.ts:330](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L330)

#### 參數

##### object

`T`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`object`): `T`[]

定義於: [dynamic-tree.ts:543](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L543)

#### 參數

##### object

`T`

#### 回傳

`T`[]

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

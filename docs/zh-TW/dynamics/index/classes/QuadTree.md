[@ue-too/dynamics](../../modules.md) / [index](../index.md) / QuadTree

# 類別: QuadTree\<T\>

定義於: [quadtree.ts:36](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L36)

QuadTree spatial indexing structure for efficient collision detection.

## 型別參數

### T

`T` *extends* [`QuadTreeObject`](../type-aliases/QuadTreeObject.md)

## 實作

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## 建構函式

### 建構函式

> **new QuadTree**\<`T`\>(`level`, `bounds`): `QuadTree`\<`T`\>

定義於: [quadtree.ts:45](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L45)

#### 參數

##### level

`number`

##### bounds

[`RectangleBound`](RectangleBound.md)

#### 回傳

`QuadTree`\<`T`\>

## 方法

### clear()

> **clear**(): `void`

定義於: [quadtree.ts:70](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L70)

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

定義於: [quadtree.ts:52](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L52)

#### 參數

##### context

`CanvasRenderingContext2D`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getIndex()

> **getIndex**(`vBody`): `-1` \| `0` \| `1` \| `2` \| `3`

定義於: [quadtree.ts:121](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L121)

#### 參數

##### vBody

`T`

#### 回傳

`-1` \| `0` \| `1` \| `2` \| `3`

***

### insert()

> **insert**(`vBody`): `void`

定義於: [quadtree.ts:148](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L148)

#### 參數

##### vBody

`T`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`vBody`): `T`[]

定義於: [quadtree.ts:183](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L183)

#### 參數

##### vBody

`T`

#### 回傳

`T`[]

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### split()

> **split**(): `void`

定義於: [quadtree.ts:81](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/quadtree.ts#L81)

#### 回傳

`void`

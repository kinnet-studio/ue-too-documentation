[@ue-too/dynamics](../../modules.md) / [index](../index.md) / QuadTree

# クラス: QuadTree\<T\>

定義: [quadtree.ts:36](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L36)

QuadTree spatial indexing structure for efficient collision detection.

## 型パラメーター

### T

`T` *extends* [`QuadTreeObject`](../type-aliases/QuadTreeObject.md)

## 実装

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## コンストラクター

### コンストラクター

> **new QuadTree**\<`T`\>(`level`, `bounds`): `QuadTree`\<`T`\>

定義: [quadtree.ts:45](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L45)

#### パラメータ

##### level

`number`

##### bounds

[`RectangleBound`](RectangleBound.md)

#### 戻り値

`QuadTree`\<`T`\>

## メソッド

### clear()

> **clear**(): `void`

定義: [quadtree.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L70)

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

定義: [quadtree.ts:52](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L52)

#### パラメータ

##### context

`CanvasRenderingContext2D`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getIndex()

> **getIndex**(`vBody`): `-1` \| `0` \| `1` \| `2` \| `3`

定義: [quadtree.ts:121](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L121)

#### パラメータ

##### vBody

`T`

#### 戻り値

`-1` \| `0` \| `1` \| `2` \| `3`

***

### insert()

> **insert**(`vBody`): `void`

定義: [quadtree.ts:148](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L148)

#### パラメータ

##### vBody

`T`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`vBody`): `T`[]

定義: [quadtree.ts:183](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L183)

#### パラメータ

##### vBody

`T`

#### 戻り値

`T`[]

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### split()

> **split**(): `void`

定義: [quadtree.ts:81](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/quadtree.ts#L81)

#### 戻り値

`void`

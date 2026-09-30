[@ue-too/dynamics](../../modules.md) / [index](../index.md) / DynamicTree

# クラス: DynamicTree\<T\>

定義: [dynamic-tree.ts:318](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L318)

Dynamic AABB tree for efficient spatial queries.

## 型パラメーター

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## 実装

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## コンストラクター

### コンストラクター

> **new DynamicTree**\<`T`\>(): `DynamicTree`\<`T`\>

#### 戻り値

`DynamicTree`\<`T`\>

## メソッド

### clear()

> **clear**(): `void`

定義: [dynamic-tree.ts:325](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L325)

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

定義: [dynamic-tree.ts:567](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L567)

#### パラメータ

##### context

`CanvasRenderingContext2D`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getStats()

> **getStats**(): `object`

定義: [dynamic-tree.ts:623](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L623)

#### 戻り値

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### insert()

> **insert**(`object`): `void`

定義: [dynamic-tree.ts:330](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L330)

#### パラメータ

##### object

`T`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`object`): `T`[]

定義: [dynamic-tree.ts:543](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L543)

#### パラメータ

##### object

`T`

#### 戻り値

`T`[]

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

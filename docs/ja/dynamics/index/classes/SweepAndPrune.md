[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SweepAndPrune

# クラス: SweepAndPrune\<T\>

定義: [dynamic-tree.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L112)

Sweep and Prune (SAP) spatial indexing algorithm.

## 型パラメーター

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## 実装

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## コンストラクター

### コンストラクター

> **new SweepAndPrune**\<`T`\>(): `SweepAndPrune`\<`T`\>

#### 戻り値

`SweepAndPrune`\<`T`\>

## メソッド

### clear()

> **clear**(): `void`

定義: [dynamic-tree.ts:122](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L122)

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()?

> `optional` **draw**(`context`): `void`

定義: [dynamic-tree.ts:281](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L281)

#### パラメータ

##### context

`CanvasRenderingContext2D`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### findAllOverlaps()

> **findAllOverlaps**(): `object`[]

定義: [dynamic-tree.ts:212](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L212)

#### 戻り値

`object`[]

***

### getStats()

> **getStats**(): `object`

定義: [dynamic-tree.ts:306](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L306)

#### 戻り値

`object`

##### endpointCount

> **endpointCount**: `number`

##### objectCount

> **objectCount**: `number`

***

### insert()

> **insert**(`object`): `void`

定義: [dynamic-tree.ts:128](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L128)

#### パラメータ

##### object

`T`

#### 戻り値

`void`

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### remove()

> **remove**(`object`): `void`

定義: [dynamic-tree.ts:172](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L172)

#### パラメータ

##### object

`T`

#### 戻り値

`void`

***

### retrieve()

> **retrieve**(`queryObject`): `T`[]

定義: [dynamic-tree.ts:181](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L181)

#### パラメータ

##### queryObject

`T`

#### 戻り値

`T`[]

#### の実装

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### update()

> **update**(`object`): `void`

定義: [dynamic-tree.ts:151](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/dynamic-tree.ts#L151)

#### パラメータ

##### object

`T`

#### 戻り値

`void`

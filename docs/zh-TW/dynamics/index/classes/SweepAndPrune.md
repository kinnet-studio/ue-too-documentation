[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SweepAndPrune

# 類別: SweepAndPrune\<T\>

定義於: [dynamic-tree.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L112)

Sweep and Prune (SAP) spatial indexing algorithm.

## 型別參數

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## 實作

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## 建構函式

### 建構函式

> **new SweepAndPrune**\<`T`\>(): `SweepAndPrune`\<`T`\>

#### 回傳

`SweepAndPrune`\<`T`\>

## 方法

### clear()

> **clear**(): `void`

定義於: [dynamic-tree.ts:122](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L122)

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()?

> `optional` **draw**(`context`): `void`

定義於: [dynamic-tree.ts:281](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L281)

#### 參數

##### context

`CanvasRenderingContext2D`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### findAllOverlaps()

> **findAllOverlaps**(): `object`[]

定義於: [dynamic-tree.ts:212](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L212)

#### 回傳

`object`[]

***

### getStats()

> **getStats**(): `object`

定義於: [dynamic-tree.ts:306](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L306)

#### 回傳

`object`

##### endpointCount

> **endpointCount**: `number`

##### objectCount

> **objectCount**: `number`

***

### insert()

> **insert**(`object`): `void`

定義於: [dynamic-tree.ts:128](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L128)

#### 參數

##### object

`T`

#### 回傳

`void`

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### remove()

> **remove**(`object`): `void`

定義於: [dynamic-tree.ts:172](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L172)

#### 參數

##### object

`T`

#### 回傳

`void`

***

### retrieve()

> **retrieve**(`queryObject`): `T`[]

定義於: [dynamic-tree.ts:181](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L181)

#### 參數

##### queryObject

`T`

#### 回傳

`T`[]

#### 實作了

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### update()

> **update**(`object`): `void`

定義於: [dynamic-tree.ts:151](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/dynamic-tree.ts#L151)

#### 參數

##### object

`T`

#### 回傳

`void`

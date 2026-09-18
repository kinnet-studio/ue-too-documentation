[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndex

# 介面: SpatialIndex\<T\>

定義於: [dynamic-tree.ts:15](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/dynamic-tree.ts#L15)

Interface for spatial indexing data structures.

## 型別參數

### T

`T` *extends* [`SpatialIndexObject`](SpatialIndexObject.md)

## 方法

### clear()

> **clear**(): `void`

定義於: [dynamic-tree.ts:16](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/dynamic-tree.ts#L16)

#### 回傳

`void`

***

### draw()?

> `optional` **draw**(`context`): `void`

定義於: [dynamic-tree.ts:19](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/dynamic-tree.ts#L19)

#### 參數

##### context

`CanvasRenderingContext2D`

#### 回傳

`void`

***

### insert()

> **insert**(`object`): `void`

定義於: [dynamic-tree.ts:17](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/dynamic-tree.ts#L17)

#### 參數

##### object

`T`

#### 回傳

`void`

***

### retrieve()

> **retrieve**(`object`): `T`[]

定義於: [dynamic-tree.ts:18](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/dynamic-tree.ts#L18)

#### 參數

##### object

`T`

#### 回傳

`T`[]

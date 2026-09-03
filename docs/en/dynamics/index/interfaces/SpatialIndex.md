[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndex

# Interface: SpatialIndex\<T\>

Defined in: [dynamic-tree.ts:15](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L15)

Interface for spatial indexing data structures.

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](SpatialIndexObject.md)

## Methods

### clear()

> **clear**(): `void`

Defined in: [dynamic-tree.ts:16](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L16)

#### Returns

`void`

***

### draw()?

> `optional` **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:19](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L19)

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:17](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L17)

#### Parameters

##### object

`T`

#### Returns

`void`

***

### retrieve()

> **retrieve**(`object`): `T`[]

Defined in: [dynamic-tree.ts:18](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/dynamic-tree.ts#L18)

#### Parameters

##### object

`T`

#### Returns

`T`[]

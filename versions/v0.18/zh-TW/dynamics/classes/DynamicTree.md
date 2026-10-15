[@ue-too/dynamics](../globals.md) / DynamicTree

# Class: DynamicTree\<T\>

Defined in: [dynamic-tree.ts:318](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L318)

Dynamic AABB tree for efficient spatial queries.

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new DynamicTree**\<`T`\>(): `DynamicTree`\<`T`\>

#### Returns

`DynamicTree`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: [dynamic-tree.ts:325](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L325)

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:567](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L567)

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getStats()

> **getStats**(): `object`

Defined in: [dynamic-tree.ts:623](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L623)

#### Returns

`object`

##### height

> **height**: `number`

##### nodeCount

> **nodeCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:330](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L330)

#### Parameters

##### object

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`object`): `T`[]

Defined in: [dynamic-tree.ts:543](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L543)

#### Parameters

##### object

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

[@ue-too/dynamics](../globals.md) / SweepAndPrune

# Class: SweepAndPrune\<T\>

Defined in: [dynamic-tree.ts:112](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L112)

Sweep and Prune (SAP) spatial indexing algorithm.

## Type Parameters

### T

`T` *extends* [`SpatialIndexObject`](../interfaces/SpatialIndexObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new SweepAndPrune**\<`T`\>(): `SweepAndPrune`\<`T`\>

#### Returns

`SweepAndPrune`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: [dynamic-tree.ts:122](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L122)

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()?

> `optional` **draw**(`context`): `void`

Defined in: [dynamic-tree.ts:281](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L281)

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### findAllOverlaps()

> **findAllOverlaps**(): `object`[]

Defined in: [dynamic-tree.ts:212](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L212)

#### Returns

`object`[]

***

### getStats()

> **getStats**(): `object`

Defined in: [dynamic-tree.ts:306](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L306)

#### Returns

`object`

##### endpointCount

> **endpointCount**: `number`

##### objectCount

> **objectCount**: `number`

***

### insert()

> **insert**(`object`): `void`

Defined in: [dynamic-tree.ts:128](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L128)

#### Parameters

##### object

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### remove()

> **remove**(`object`): `void`

Defined in: [dynamic-tree.ts:172](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L172)

#### Parameters

##### object

`T`

#### Returns

`void`

***

### retrieve()

> **retrieve**(`queryObject`): `T`[]

Defined in: [dynamic-tree.ts:181](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L181)

#### Parameters

##### queryObject

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### update()

> **update**(`object`): `void`

Defined in: [dynamic-tree.ts:151](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/dynamic-tree.ts#L151)

#### Parameters

##### object

`T`

#### Returns

`void`

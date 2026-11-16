[@ue-too/dynamics](../globals.md) / QuadTree

# Class: QuadTree\<T\>

Defined in: [quadtree.ts:36](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L36)

QuadTree spatial indexing structure for efficient collision detection.

## Type Parameters

### T

`T` *extends* [`QuadTreeObject`](../type-aliases/QuadTreeObject.md)

## Implements

- [`SpatialIndex`](../interfaces/SpatialIndex.md)\<`T`\>

## Constructors

### Constructor

> **new QuadTree**\<`T`\>(`level`, `bounds`): `QuadTree`\<`T`\>

Defined in: [quadtree.ts:45](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L45)

#### Parameters

##### level

`number`

##### bounds

[`RectangleBound`](RectangleBound.md)

#### Returns

`QuadTree`\<`T`\>

## Methods

### clear()

> **clear**(): `void`

Defined in: [quadtree.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L70)

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`clear`](../interfaces/SpatialIndex.md#clear)

***

### draw()

> **draw**(`context`): `void`

Defined in: [quadtree.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L52)

#### Parameters

##### context

`CanvasRenderingContext2D`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`draw`](../interfaces/SpatialIndex.md#draw)

***

### getIndex()

> **getIndex**(`vBody`): `-1` \| `0` \| `1` \| `2` \| `3`

Defined in: [quadtree.ts:121](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L121)

#### Parameters

##### vBody

`T`

#### Returns

`-1` \| `0` \| `1` \| `2` \| `3`

***

### insert()

> **insert**(`vBody`): `void`

Defined in: [quadtree.ts:148](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L148)

#### Parameters

##### vBody

`T`

#### Returns

`void`

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`insert`](../interfaces/SpatialIndex.md#insert)

***

### retrieve()

> **retrieve**(`vBody`): `T`[]

Defined in: [quadtree.ts:183](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L183)

#### Parameters

##### vBody

`T`

#### Returns

`T`[]

#### Implementation of

[`SpatialIndex`](../interfaces/SpatialIndex.md).[`retrieve`](../interfaces/SpatialIndex.md#retrieve)

***

### split()

> **split**(): `void`

Defined in: [quadtree.ts:81](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/quadtree.ts#L81)

#### Returns

`void`

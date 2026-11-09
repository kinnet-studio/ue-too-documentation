[@ue-too/curve](../globals.md) / Path

# Class: Path

Defined in: [packages/curve/src/path.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L53)

Path made of sequential line segments.

## Constructors

### Constructor

> **new Path**(`lines`): `Path`

Defined in: [packages/curve/src/path.ts:56](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L56)

#### Parameters

##### lines

[`Line`](Line.md)[]

#### Returns

`Path`

## Methods

### append()

> **append**(`line`): `void`

Defined in: [packages/curve/src/path.ts:60](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L60)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/curve/src/path.ts:64](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L64)

#### Returns

`void`

***

### getLength()

> **getLength**(): `number`

Defined in: [packages/curve/src/path.ts:76](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L76)

#### Returns

`number`

***

### getLines()

> **getLines**(): [`Line`](Line.md)[]

Defined in: [packages/curve/src/path.ts:72](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L72)

#### Returns

[`Line`](Line.md)[]

***

### getPercentages()

> **getPercentages**(): `object`[]

Defined in: [packages/curve/src/path.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L86)

#### Returns

`object`[]

***

### getPointByPercentage()

> **getPointByPercentage**(`percentage`): `Point`

Defined in: [packages/curve/src/path.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L102)

#### Parameters

##### percentage

`number`

#### Returns

`Point`

***

### prepend()

> **prepend**(`line`): `void`

Defined in: [packages/curve/src/path.ts:68](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/path.ts#L68)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`void`

[@ue-too/math](../globals.md) / Matrix

# Class: Matrix

Defined in: [matrix.ts:3](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L3)

## Constructors

### Constructor

> **new Matrix**(`_matrix`): `Matrix`

Defined in: [matrix.ts:6](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L6)

#### Parameters

##### \_matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### Returns

`Matrix`

## Accessors

### inverse

#### Get Signature

> **get** **inverse**(): [`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

Defined in: [matrix.ts:10](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L10)

##### Returns

[`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

## Methods

### invertPoint()

> **invertPoint**(`point`): [`Point`](../type-aliases/Point-1.md) \| `null`

Defined in: [matrix.ts:23](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L23)

#### Parameters

##### point

[`Point`](../type-aliases/Point-1.md)

#### Returns

[`Point`](../type-aliases/Point-1.md) \| `null`

***

### setMatrix()

> **setMatrix**(`matrix`): `void`

Defined in: [matrix.ts:14](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L14)

#### Parameters

##### matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### Returns

`void`

***

### transformPoint()

> **transformPoint**(`point`): [`Point`](../type-aliases/Point-1.md)

Defined in: [matrix.ts:19](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/matrix.ts#L19)

#### Parameters

##### point

[`Point`](../type-aliases/Point-1.md)

#### Returns

[`Point`](../type-aliases/Point-1.md)

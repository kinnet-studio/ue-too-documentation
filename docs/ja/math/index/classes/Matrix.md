[@ue-too/math](../../modules.md) / [index](../index.md) / Matrix

# クラス: Matrix

定義: [matrix.ts:3](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L3)

## コンストラクター

### コンストラクター

> **new Matrix**(`_matrix`): `Matrix`

定義: [matrix.ts:6](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L6)

#### パラメータ

##### \_matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### 戻り値

`Matrix`

## アクセッサー

### inverse

#### 署名を取得する

> **get** **inverse**(): [`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

定義: [matrix.ts:10](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L10)

##### 戻り値

[`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

## メソッド

### invertPoint()

> **invertPoint**(`point`): [`Point`](../type-aliases/Point-1.md) \| `null`

定義: [matrix.ts:23](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L23)

#### パラメータ

##### point

[`Point`](../type-aliases/Point-1.md)

#### 戻り値

[`Point`](../type-aliases/Point-1.md) \| `null`

***

### setMatrix()

> **setMatrix**(`matrix`): `void`

定義: [matrix.ts:14](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L14)

#### パラメータ

##### matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### 戻り値

`void`

***

### transformPoint()

> **transformPoint**(`point`): [`Point`](../type-aliases/Point-1.md)

定義: [matrix.ts:19](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/math/src/matrix.ts#L19)

#### パラメータ

##### point

[`Point`](../type-aliases/Point-1.md)

#### 戻り値

[`Point`](../type-aliases/Point-1.md)

[@ue-too/math](../../modules.md) / [index](../index.md) / Matrix

# 類別: Matrix

定義於: [matrix.ts:3](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L3)

## 建構函式

### 建構函式

> **new Matrix**(`_matrix`): `Matrix`

定義於: [matrix.ts:6](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L6)

#### 參數

##### \_matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### 回傳

`Matrix`

## 存取器

### inverse

#### Getter 簽章

> **get** **inverse**(): [`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

定義於: [matrix.ts:10](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L10)

##### 回傳

[`Matrix3x3`](../interfaces/Matrix3x3.md) \| `null`

## 方法

### invertPoint()

> **invertPoint**(`point`): [`Point`](../type-aliases/Point-1.md) \| `null`

定義於: [matrix.ts:23](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L23)

#### 參數

##### point

[`Point`](../type-aliases/Point-1.md)

#### 回傳

[`Point`](../type-aliases/Point-1.md) \| `null`

***

### setMatrix()

> **setMatrix**(`matrix`): `void`

定義於: [matrix.ts:14](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L14)

#### 參數

##### matrix

[`Matrix3x3`](../interfaces/Matrix3x3.md)

#### 回傳

`void`

***

### transformPoint()

> **transformPoint**(`point`): [`Point`](../type-aliases/Point-1.md)

定義於: [matrix.ts:19](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/matrix.ts#L19)

#### 參數

##### point

[`Point`](../type-aliases/Point-1.md)

#### 回傳

[`Point`](../type-aliases/Point-1.md)

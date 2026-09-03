[@ue-too/curve](../../modules.md) / [index](../index.md) / CompositeBCurve

# 類別: CompositeBCurve

定義於: [packages/curve/src/composite-curve.ts:358](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L358)

Composite Bezier curve made of multiple control points with handles.

## 建構函式

### 建構函式

> **new CompositeBCurve**(`controlPoints`): `CompositeBCurve`

定義於: [packages/curve/src/composite-curve.ts:361](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L361)

#### 參數

##### controlPoints

[`ControlPoint`](ControlPoint.md)[] = `[]`

#### 回傳

`CompositeBCurve`

## 方法

### appendControlPoint()

> **appendControlPoint**(`position`): `void`

定義於: [packages/curve/src/composite-curve.ts:369](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L369)

#### 參數

##### position

`Point`

#### 回傳

`void`

***

### getControlPoints()

> **getControlPoints**(): [`ControlPoint`](ControlPoint.md)[]

定義於: [packages/curve/src/composite-curve.ts:365](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L365)

#### 回傳

[`ControlPoint`](ControlPoint.md)[]

***

### setLeftHandlePositionOfControlPoint()

> **setLeftHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義於: [packages/curve/src/composite-curve.ts:395](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L395)

#### 參數

##### controlPointIndex

`number`

##### destPos

`Point`

#### 回傳

`void`

***

### setPositionOfControlPoint()

> **setPositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義於: [packages/curve/src/composite-curve.ts:421](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L421)

#### 參數

##### controlPointIndex

`number`

##### destPos

`Point`

#### 回傳

`void`

***

### setRightHandlePositionOfControlPoint()

> **setRightHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義於: [packages/curve/src/composite-curve.ts:408](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/composite-curve.ts#L408)

#### 參數

##### controlPointIndex

`number`

##### destPos

`Point`

#### 回傳

`void`

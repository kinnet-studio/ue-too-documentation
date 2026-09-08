[@ue-too/curve](../../modules.md) / [index](../index.md) / CompositeBCurve

# クラス: CompositeBCurve

定義: [packages/curve/src/composite-curve.ts:358](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L358)

Composite Bezier curve made of multiple control points with handles.

## コンストラクター

### コンストラクター

> **new CompositeBCurve**(`controlPoints`): `CompositeBCurve`

定義: [packages/curve/src/composite-curve.ts:361](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L361)

#### パラメータ

##### controlPoints

[`ControlPoint`](ControlPoint.md)[] = `[]`

#### 戻り値

`CompositeBCurve`

## メソッド

### appendControlPoint()

> **appendControlPoint**(`position`): `void`

定義: [packages/curve/src/composite-curve.ts:369](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L369)

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### getControlPoints()

> **getControlPoints**(): [`ControlPoint`](ControlPoint.md)[]

定義: [packages/curve/src/composite-curve.ts:365](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L365)

#### 戻り値

[`ControlPoint`](ControlPoint.md)[]

***

### setLeftHandlePositionOfControlPoint()

> **setLeftHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義: [packages/curve/src/composite-curve.ts:395](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L395)

#### パラメータ

##### controlPointIndex

`number`

##### destPos

`Point`

#### 戻り値

`void`

***

### setPositionOfControlPoint()

> **setPositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義: [packages/curve/src/composite-curve.ts:421](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L421)

#### パラメータ

##### controlPointIndex

`number`

##### destPos

`Point`

#### 戻り値

`void`

***

### setRightHandlePositionOfControlPoint()

> **setRightHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

定義: [packages/curve/src/composite-curve.ts:408](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/composite-curve.ts#L408)

#### パラメータ

##### controlPointIndex

`number`

##### destPos

`Point`

#### 戻り値

`void`

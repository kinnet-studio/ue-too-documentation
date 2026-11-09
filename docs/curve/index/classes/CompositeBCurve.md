[@ue-too/curve](../../modules.md) / [index](../index.md) / CompositeBCurve

# Class: CompositeBCurve

Defined in: [packages/curve/src/composite-curve.ts:358](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L358)

Composite Bezier curve made of multiple control points with handles.

## Constructors

### Constructor

> **new CompositeBCurve**(`controlPoints`): `CompositeBCurve`

Defined in: [packages/curve/src/composite-curve.ts:361](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L361)

#### Parameters

##### controlPoints

[`ControlPoint`](ControlPoint.md)[] = `[]`

#### Returns

`CompositeBCurve`

## Methods

### appendControlPoint()

> **appendControlPoint**(`position`): `void`

Defined in: [packages/curve/src/composite-curve.ts:369](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L369)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### getControlPoints()

> **getControlPoints**(): [`ControlPoint`](ControlPoint.md)[]

Defined in: [packages/curve/src/composite-curve.ts:365](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L365)

#### Returns

[`ControlPoint`](ControlPoint.md)[]

***

### setLeftHandlePositionOfControlPoint()

> **setLeftHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:395](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L395)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`

***

### setPositionOfControlPoint()

> **setPositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:421](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L421)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`

***

### setRightHandlePositionOfControlPoint()

> **setRightHandlePositionOfControlPoint**(`controlPointIndex`, `destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:408](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/curve/src/composite-curve.ts#L408)

#### Parameters

##### controlPointIndex

`number`

##### destPos

`Point`

#### Returns

`void`

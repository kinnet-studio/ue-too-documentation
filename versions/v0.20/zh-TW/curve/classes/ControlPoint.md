[@ue-too/curve](../globals.md) / ControlPoint

# Class: ControlPoint

Defined in: [packages/curve/src/composite-curve.ts:22](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L22)

Control point with left and right handles for composite Bezier curves.

## Constructors

### Constructor

> **new ControlPoint**(`position`, `leftHandle`, `rightHandle`): `ControlPoint`

Defined in: [packages/curve/src/composite-curve.ts:27](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L27)

#### Parameters

##### position

`Point`

##### leftHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

##### rightHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

#### Returns

`ControlPoint`

## Methods

### getLeftHandle()

> **getLeftHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

Defined in: [packages/curve/src/composite-curve.ts:345](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L345)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### getPosition()

> **getPosition**(): `Point`

Defined in: [packages/curve/src/composite-curve.ts:149](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L149)

#### Returns

`Point`

***

### getRightHandle()

> **getRightHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

Defined in: [packages/curve/src/composite-curve.ts:349](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L349)

#### Returns

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### setLeftHandlePosition()

> **setLeftHandlePosition**(`destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:249](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L249)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setLeftHandleTypeAligned()

> **setLeftHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:179](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L179)

#### Returns

`void`

***

### setLeftHandleTypeFree()

> **setLeftHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:197](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L197)

#### Returns

`void`

***

### setLeftHandleTypeVector()

> **setLeftHandleTypeVector**(`prevControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:153](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L153)

#### Parameters

##### prevControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

***

### setPosition()

> **setPosition**(`destinationPosition`, `prevControlPoint`, `nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:37](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L37)

#### Parameters

##### destinationPosition

`Point`

##### prevControlPoint

`ControlPoint` | `undefined`

##### nextControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

***

### setRightHandlePosition()

> **setRightHandlePosition**(`destPos`): `void`

Defined in: [packages/curve/src/composite-curve.ts:297](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L297)

#### Parameters

##### destPos

`Point`

#### Returns

`void`

***

### setRightHandleTypeAligned()

> **setRightHandleTypeAligned**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:227](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L227)

#### Returns

`void`

***

### setRightHandleTypeFree()

> **setRightHandleTypeFree**(): `void`

Defined in: [packages/curve/src/composite-curve.ts:245](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L245)

#### Returns

`void`

***

### setRightHandleTypeVector()

> **setRightHandleTypeVector**(`nextControlPoint`): `void`

Defined in: [packages/curve/src/composite-curve.ts:201](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/composite-curve.ts#L201)

#### Parameters

##### nextControlPoint

`ControlPoint` | `undefined`

#### Returns

`void`

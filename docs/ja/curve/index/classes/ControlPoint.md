[@ue-too/curve](../../modules.md) / [index](../index.md) / ControlPoint

# クラス: ControlPoint

定義: [packages/curve/src/composite-curve.ts:22](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L22)

Control point with left and right handles for composite Bezier curves.

## コンストラクター

### コンストラクター

> **new ControlPoint**(`position`, `leftHandle`, `rightHandle`): `ControlPoint`

定義: [packages/curve/src/composite-curve.ts:27](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L27)

#### パラメータ

##### position

`Point`

##### leftHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

##### rightHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

#### 戻り値

`ControlPoint`

## メソッド

### getLeftHandle()

> **getLeftHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

定義: [packages/curve/src/composite-curve.ts:345](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L345)

#### 戻り値

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### getPosition()

> **getPosition**(): `Point`

定義: [packages/curve/src/composite-curve.ts:149](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L149)

#### 戻り値

`Point`

***

### getRightHandle()

> **getRightHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

定義: [packages/curve/src/composite-curve.ts:349](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L349)

#### 戻り値

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### setLeftHandlePosition()

> **setLeftHandlePosition**(`destPos`): `void`

定義: [packages/curve/src/composite-curve.ts:249](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L249)

#### パラメータ

##### destPos

`Point`

#### 戻り値

`void`

***

### setLeftHandleTypeAligned()

> **setLeftHandleTypeAligned**(): `void`

定義: [packages/curve/src/composite-curve.ts:179](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L179)

#### 戻り値

`void`

***

### setLeftHandleTypeFree()

> **setLeftHandleTypeFree**(): `void`

定義: [packages/curve/src/composite-curve.ts:197](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L197)

#### 戻り値

`void`

***

### setLeftHandleTypeVector()

> **setLeftHandleTypeVector**(`prevControlPoint`): `void`

定義: [packages/curve/src/composite-curve.ts:153](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L153)

#### パラメータ

##### prevControlPoint

`ControlPoint` | `undefined`

#### 戻り値

`void`

***

### setPosition()

> **setPosition**(`destinationPosition`, `prevControlPoint`, `nextControlPoint`): `void`

定義: [packages/curve/src/composite-curve.ts:37](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L37)

#### パラメータ

##### destinationPosition

`Point`

##### prevControlPoint

`ControlPoint` | `undefined`

##### nextControlPoint

`ControlPoint` | `undefined`

#### 戻り値

`void`

***

### setRightHandlePosition()

> **setRightHandlePosition**(`destPos`): `void`

定義: [packages/curve/src/composite-curve.ts:297](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L297)

#### パラメータ

##### destPos

`Point`

#### 戻り値

`void`

***

### setRightHandleTypeAligned()

> **setRightHandleTypeAligned**(): `void`

定義: [packages/curve/src/composite-curve.ts:227](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L227)

#### 戻り値

`void`

***

### setRightHandleTypeFree()

> **setRightHandleTypeFree**(): `void`

定義: [packages/curve/src/composite-curve.ts:245](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L245)

#### 戻り値

`void`

***

### setRightHandleTypeVector()

> **setRightHandleTypeVector**(`nextControlPoint`): `void`

定義: [packages/curve/src/composite-curve.ts:201](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/composite-curve.ts#L201)

#### パラメータ

##### nextControlPoint

`ControlPoint` | `undefined`

#### 戻り値

`void`

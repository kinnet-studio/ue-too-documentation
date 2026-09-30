[@ue-too/curve](../../modules.md) / [index](../index.md) / ControlPoint

# 類別: ControlPoint

定義於: [packages/curve/src/composite-curve.ts:22](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L22)

Control point with left and right handles for composite Bezier curves.

## 建構函式

### 建構函式

> **new ControlPoint**(`position`, `leftHandle`, `rightHandle`): `ControlPoint`

定義於: [packages/curve/src/composite-curve.ts:27](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L27)

#### 參數

##### position

`Point`

##### leftHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

##### rightHandle

[`HandlePoint`](../type-aliases/HandlePoint.md)

#### 回傳

`ControlPoint`

## 方法

### getLeftHandle()

> **getLeftHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

定義於: [packages/curve/src/composite-curve.ts:345](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L345)

#### 回傳

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### getPosition()

> **getPosition**(): `Point`

定義於: [packages/curve/src/composite-curve.ts:149](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L149)

#### 回傳

`Point`

***

### getRightHandle()

> **getRightHandle**(): [`HandlePoint`](../type-aliases/HandlePoint.md)

定義於: [packages/curve/src/composite-curve.ts:349](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L349)

#### 回傳

[`HandlePoint`](../type-aliases/HandlePoint.md)

***

### setLeftHandlePosition()

> **setLeftHandlePosition**(`destPos`): `void`

定義於: [packages/curve/src/composite-curve.ts:249](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L249)

#### 參數

##### destPos

`Point`

#### 回傳

`void`

***

### setLeftHandleTypeAligned()

> **setLeftHandleTypeAligned**(): `void`

定義於: [packages/curve/src/composite-curve.ts:179](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L179)

#### 回傳

`void`

***

### setLeftHandleTypeFree()

> **setLeftHandleTypeFree**(): `void`

定義於: [packages/curve/src/composite-curve.ts:197](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L197)

#### 回傳

`void`

***

### setLeftHandleTypeVector()

> **setLeftHandleTypeVector**(`prevControlPoint`): `void`

定義於: [packages/curve/src/composite-curve.ts:153](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L153)

#### 參數

##### prevControlPoint

`ControlPoint` | `undefined`

#### 回傳

`void`

***

### setPosition()

> **setPosition**(`destinationPosition`, `prevControlPoint`, `nextControlPoint`): `void`

定義於: [packages/curve/src/composite-curve.ts:37](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L37)

#### 參數

##### destinationPosition

`Point`

##### prevControlPoint

`ControlPoint` | `undefined`

##### nextControlPoint

`ControlPoint` | `undefined`

#### 回傳

`void`

***

### setRightHandlePosition()

> **setRightHandlePosition**(`destPos`): `void`

定義於: [packages/curve/src/composite-curve.ts:297](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L297)

#### 參數

##### destPos

`Point`

#### 回傳

`void`

***

### setRightHandleTypeAligned()

> **setRightHandleTypeAligned**(): `void`

定義於: [packages/curve/src/composite-curve.ts:227](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L227)

#### 回傳

`void`

***

### setRightHandleTypeFree()

> **setRightHandleTypeFree**(): `void`

定義於: [packages/curve/src/composite-curve.ts:245](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L245)

#### 回傳

`void`

***

### setRightHandleTypeVector()

> **setRightHandleTypeVector**(`nextControlPoint`): `void`

定義於: [packages/curve/src/composite-curve.ts:201](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/composite-curve.ts#L201)

#### 參數

##### nextControlPoint

`ControlPoint` | `undefined`

#### 回傳

`void`

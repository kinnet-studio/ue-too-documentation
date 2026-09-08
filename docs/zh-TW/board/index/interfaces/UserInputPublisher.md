[@ue-too/board](../../modules.md) / [index](../index.md) / UserInputPublisher

# 介面: UserInputPublisher

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:140](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L140)

Interface for publishing raw user input events to observers.

## 備註

This interface defines the contract for broadcasting user input events
to external subscribers. Implementations provide the observable pattern
for input event distribution.

## 方法

### notifyPan()

> **notifyPan**(`diff`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:142](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L142)

Notifies subscribers of a pan gesture

#### 參數

##### diff

`Point`

#### 回傳

`void`

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:146](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L146)

Notifies subscribers of a rotate gesture

#### 參數

##### deltaRotation

`number`

#### 回傳

`void`

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:144](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L144)

Notifies subscribers of a zoom gesture

#### 參數

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### 回傳

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:148](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L148)

Subscribes to input events

#### 型別參數

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### 參數

##### eventName

`K`

##### callback

(`event`) => `void`

#### 回傳

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

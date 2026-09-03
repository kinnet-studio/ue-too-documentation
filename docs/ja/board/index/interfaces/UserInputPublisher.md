[@ue-too/board](../../modules.md) / [index](../index.md) / UserInputPublisher

# インターフェイス: UserInputPublisher

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:140](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L140)

Interface for publishing raw user input events to observers.

## Remarks

This interface defines the contract for broadcasting user input events
to external subscribers. Implementations provide the observable pattern
for input event distribution.

## メソッド

### notifyPan()

> **notifyPan**(`diff`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:142](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L142)

Notifies subscribers of a pan gesture

#### パラメータ

##### diff

`Point`

#### 戻り値

`void`

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:146](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L146)

Notifies subscribers of a rotate gesture

#### パラメータ

##### deltaRotation

`number`

#### 戻り値

`void`

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:144](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L144)

Notifies subscribers of a zoom gesture

#### パラメータ

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### 戻り値

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:148](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L148)

Subscribes to input events

#### 型パラメーター

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### パラメータ

##### eventName

`K`

##### callback

(`event`) => `void`

#### 戻り値

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

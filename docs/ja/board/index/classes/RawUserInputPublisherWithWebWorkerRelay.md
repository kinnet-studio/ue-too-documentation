[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputPublisherWithWebWorkerRelay

# クラス: RawUserInputPublisherWithWebWorkerRelay

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:307](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L307)

Interface for publishing raw user input events to observers.

## Remarks

This interface defines the contract for broadcasting user input events
to external subscribers. Implementations provide the observable pattern
for input event distribution.

## 実装

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## コンストラクター

### コンストラクター

> **new RawUserInputPublisherWithWebWorkerRelay**(`webWorker`): `RawUserInputPublisherWithWebWorkerRelay`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:314](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L314)

#### パラメータ

##### webWorker

`Worker`

#### 戻り値

`RawUserInputPublisherWithWebWorkerRelay`

## メソッド

### notifyPan()

> **notifyPan**(`diff`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:330](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L330)

Notifies subscribers of a pan gesture

#### パラメータ

##### diff

`Point`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyPan`](../interfaces/UserInputPublisher.md#notifypan)

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:359](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L359)

Notifies subscribers of a rotate gesture

#### パラメータ

##### deltaRotation

`number`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyRotate`](../interfaces/UserInputPublisher.md#notifyrotate)

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:339](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L339)

Notifies subscribers of a zoom gesture

#### パラメータ

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyZoom`](../interfaces/UserInputPublisher.md#notifyzoom)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:368](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L368)

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

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`on`](../interfaces/UserInputPublisher.md#on)

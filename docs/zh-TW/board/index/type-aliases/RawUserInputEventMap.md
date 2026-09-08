[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputEventMap

# 型別別名: RawUserInputEventMap

> **RawUserInputEventMap** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:99](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L99)

Mapping of event names to their payload types.

## 備註

This type enables type-safe event subscription:
- Subscribe to specific events ("pan", "zoom", "rotate") to receive only those payloads
- Subscribe to "all" to receive all events with discriminated type property

## 屬性

### all

> **all**: [`RawUserInputEvent`](RawUserInputEvent.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:103](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L103)

***

### pan

> **pan**: [`RawUserPanInputEventPayload`](RawUserPanInputEventPayload.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:100](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L100)

***

### rotate

> **rotate**: [`RawUserRotateInputEventPayload`](RawUserRotateInputEventPayload.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:102](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L102)

***

### zoom

> **zoom**: [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:101](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L101)

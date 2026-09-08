[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserPanInputEvent

# 型別別名: RawUserPanInputEvent

> **RawUserPanInputEvent** = `object` & [`RawUserPanInputEventPayload`](RawUserPanInputEventPayload.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:35](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L35)

Pan input event with discriminated type.

## 型別宣告

### type

> **type**: `"pan"`

## 備註

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

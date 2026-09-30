[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserPanInputEvent

# 型エイリアス: RawUserPanInputEvent

> **RawUserPanInputEvent** = `object` & [`RawUserPanInputEventPayload`](RawUserPanInputEventPayload.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:35](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L35)

Pan input event with discriminated type.

## 型宣言

### type

> **type**: `"pan"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

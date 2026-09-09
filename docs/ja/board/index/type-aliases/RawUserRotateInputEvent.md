[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserRotateInputEvent

# 型エイリアス: RawUserRotateInputEvent

> **RawUserRotateInputEvent** = `object` & [`RawUserRotateInputEventPayload`](RawUserRotateInputEventPayload.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:85](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L85)

Rotate input event with discriminated type.

## 型宣言

### type

> **type**: `"rotate"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

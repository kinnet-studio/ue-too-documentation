[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserZoomInputEvent

# 型エイリアス: RawUserZoomInputEvent

> **RawUserZoomInputEvent** = `object` & [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:61](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L61)

Zoom input event with discriminated type.

## 型宣言

### type

> **type**: `"zoom"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserZoomInputEvent

# 型別別名: RawUserZoomInputEvent

> **RawUserZoomInputEvent** = `object` & [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:61](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L61)

Zoom input event with discriminated type.

## 型別宣告

### type

> **type**: `"zoom"`

## 備註

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

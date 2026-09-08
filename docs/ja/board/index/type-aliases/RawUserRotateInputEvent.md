[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserRotateInputEvent

# 型エイリアス: RawUserRotateInputEvent

> **RawUserRotateInputEvent** = `object` & [`RawUserRotateInputEventPayload`](RawUserRotateInputEventPayload.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:85](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L85)

Rotate input event with discriminated type.

## 型宣言

### type

> **type**: `"rotate"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

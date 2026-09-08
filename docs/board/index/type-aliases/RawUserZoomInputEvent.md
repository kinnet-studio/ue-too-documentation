[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserZoomInputEvent

# Type Alias: RawUserZoomInputEvent

> **RawUserZoomInputEvent** = `object` & [`RawUserZoomInputEventPayload`](RawUserZoomInputEventPayload.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:61](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L61)

Zoom input event with discriminated type.

## Type Declaration

### type

> **type**: `"zoom"`

## Remarks

The `type` property allows TypeScript discriminated unions to distinguish
between different event types when subscribing to the "all" event stream.

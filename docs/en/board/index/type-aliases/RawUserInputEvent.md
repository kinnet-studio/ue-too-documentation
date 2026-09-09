[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputEvent

# Type Alias: RawUserInputEvent

> **RawUserInputEvent** = [`RawUserPanInputEvent`](RawUserPanInputEvent.md) \| [`RawUserZoomInputEvent`](RawUserZoomInputEvent.md) \| [`RawUserRotateInputEvent`](RawUserRotateInputEvent.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:114](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L114)

Union type of all raw user input events.

## Remarks

Use the `type` discriminator property to determine which event variant you have.

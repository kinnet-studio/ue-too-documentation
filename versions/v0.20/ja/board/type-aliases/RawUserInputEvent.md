[@ue-too/board](../globals.md) / RawUserInputEvent

# Type Alias: RawUserInputEvent

> **RawUserInputEvent** = [`RawUserPanInputEvent`](RawUserPanInputEvent.md) \| [`RawUserZoomInputEvent`](RawUserZoomInputEvent.md) \| [`RawUserRotateInputEvent`](RawUserRotateInputEvent.md)

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:114](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L114)

Union type of all raw user input events.

## Remarks

Use the `type` discriminator property to determine which event variant you have.

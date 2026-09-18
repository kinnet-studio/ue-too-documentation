[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputEvent

# 型エイリアス: RawUserInputEvent

> **RawUserInputEvent** = [`RawUserPanInputEvent`](RawUserPanInputEvent.md) \| [`RawUserZoomInputEvent`](RawUserZoomInputEvent.md) \| [`RawUserRotateInputEvent`](RawUserRotateInputEvent.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:114](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L114)

Union type of all raw user input events.

## Remarks

Use the `type` discriminator property to determine which event variant you have.

[@ue-too/board](../../modules.md) / [index](../index.md) / OutputEvent

# 型別別名: OutputEvent

> **OutputEvent** = [`KmtOutputEvent`](KmtOutputEvent.md) \| [`TouchOutputEvent`](TouchOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:23](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/input-interpretation/input-orchestrator.ts#L23)

Union type of all output events from state machines.

## 備註

This type represents the unified output from both KMT (Keyboard/Mouse/Trackpad) and Touch state machines.
By unifying these outputs, the orchestrator can handle events from different input modalities uniformly.

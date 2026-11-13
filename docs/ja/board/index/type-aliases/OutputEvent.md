[@ue-too/board](../../modules.md) / [index](../index.md) / OutputEvent

# 型エイリアス: OutputEvent

> **OutputEvent** = [`KmtOutputEvent`](KmtOutputEvent.md) \| [`TouchOutputEvent`](TouchOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-orchestrator.ts:23](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/input-interpretation/input-orchestrator.ts#L23)

Union type of all output events from state machines.

## Remarks

This type represents the unified output from both KMT (Keyboard/Mouse/Trackpad) and Touch state machines.
By unifying these outputs, the orchestrator can handle events from different input modalities uniformly.

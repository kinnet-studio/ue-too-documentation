[@ue-too/board](../../modules.md) / [index](../index.md) / OutputEvent

# 型別別名: OutputEvent

> **OutputEvent** = [`KmtOutputEvent`](KmtOutputEvent.md) \| [`TouchOutputEvent`](TouchOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-orchestrator.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-orchestrator.ts#L23)

Union type of all output events from state machines.

## 備註

This type represents the unified output from both KMT (Keyboard/Mouse/Trackpad) and Touch state machines.
By unifying these outputs, the orchestrator can handle events from different input modalities uniformly.

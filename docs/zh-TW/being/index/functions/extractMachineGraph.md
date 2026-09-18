[@ue-too/being](../../modules.md) / [index](../index.md) / extractMachineGraph

# 函式: extractMachineGraph()

> **extractMachineGraph**(`machine`): [`MachineGraph`](../type-aliases/MachineGraph.md)

定義於: [introspect.ts:60](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/introspect.ts#L60)

Extracts a machine's states and transitions as a directed graph.

## 參數

### machine

[`StateMachine`](../interfaces/StateMachine.md)\<`any`, `any`, `any`, `any`\>

## 回傳

[`MachineGraph`](../type-aliases/MachineGraph.md)

## 備註

Reads only the machine's public surface (`possibleStates`, each state's
`eventReactions`, `eventGuards`, and `eventPreconditions`) — the machine's
behavior is untouched. Per state and event, emits one edge to the
reaction's `defaultTargetState` (or a self-loop when it has none), plus
one guard-labeled edge per `eventGuards` mapping; every edge carries the
event's declared preconditions, if any.

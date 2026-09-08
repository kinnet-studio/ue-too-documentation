[@ue-too/being](../../modules.md) / [index](../index.md) / extractMachineGraph

# 関数: extractMachineGraph()

> **extractMachineGraph**(`machine`): [`MachineGraph`](../type-aliases/MachineGraph.md)

定義: [introspect.ts:60](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/introspect.ts#L60)

Extracts a machine's states and transitions as a directed graph.

## パラメータ

### machine

[`StateMachine`](../interfaces/StateMachine.md)\<`any`, `any`, `any`, `any`\>

## 戻り値

[`MachineGraph`](../type-aliases/MachineGraph.md)

## Remarks

Reads only the machine's public surface (`possibleStates`, each state's
`eventReactions`, `eventGuards`, and `eventPreconditions`) — the machine's
behavior is untouched. Per state and event, emits one edge to the
reaction's `defaultTargetState` (or a self-loop when it has none), plus
one guard-labeled edge per `eventGuards` mapping; every edge carries the
event's declared preconditions, if any.

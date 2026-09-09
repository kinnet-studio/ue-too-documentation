[@ue-too/being](../../modules.md) / [index](../index.md) / extractMachineGraph

# Function: extractMachineGraph()

> **extractMachineGraph**(`machine`): [`MachineGraph`](../type-aliases/MachineGraph.md)

Defined in: [introspect.ts:60](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L60)

Extracts a machine's states and transitions as a directed graph.

## Parameters

### machine

[`StateMachine`](../interfaces/StateMachine.md)\<`any`, `any`, `any`, `any`\>

## Returns

[`MachineGraph`](../type-aliases/MachineGraph.md)

## Remarks

Reads only the machine's public surface (`possibleStates`, each state's
`eventReactions`, `eventGuards`, and `eventPreconditions`) — the machine's
behavior is untouched. Per state and event, emits one edge to the
reaction's `defaultTargetState` (or a self-loop when it has none), plus
one guard-labeled edge per `eventGuards` mapping; every edge carries the
event's declared preconditions, if any.

[@ue-too/being](../../modules.md) / [index](../index.md) / MachineGraphEdge

# Type Alias: MachineGraphEdge

> **MachineGraphEdge** = `object`

Defined in: [introspect.ts:29](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L29)

A directed edge in an extracted machine graph.

## Remarks

`guard` is set when the edge comes from an `eventGuards` mapping; it holds
the guard's key in the state's guard registry. Edges with `to === from` are
self-loops (a reaction without a `defaultTargetState`).

`preconditions` is set when the source state declares `eventPreconditions`
for the edge's event: the named guards that must all pass before the event
is handled. All edges for that event carry the same list, since a failed
precondition vetoes the event as a whole. The key is absent for events
without declared preconditions.

## Properties

### event

> **event**: `string`

Defined in: [introspect.ts:32](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L32)

***

### from

> **from**: `string`

Defined in: [introspect.ts:30](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L30)

***

### guard?

> `optional` **guard**: `string`

Defined in: [introspect.ts:33](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L33)

***

### preconditions?

> `optional` **preconditions**: `string`[]

Defined in: [introspect.ts:34](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L34)

***

### to

> **to**: `string`

Defined in: [introspect.ts:31](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/introspect.ts#L31)

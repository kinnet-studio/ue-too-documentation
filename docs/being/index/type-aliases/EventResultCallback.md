[@ue-too/being](../../modules.md) / [index](../index.md) / EventResultCallback

# Type Alias: EventResultCallback()\<EventPayloadMapping, Context, States\>

> **EventResultCallback**\<`EventPayloadMapping`, `Context`, `States`\> = (`args`, `result`, `context`) => `void`

Defined in: [interface.ts:322](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L322)

Callback invoked after a state has handled an event, with the event's
full [EventResult](EventResult.md).

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string`

## Parameters

### args

[`EventArgs`](EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping` \| `string`\>

### result

[`EventResult`](EventResult.md)\<`States`, `unknown`\>

### context

`Context`

## Returns

`void`

## Remarks

Unlike [StateChangeCallback](StateChangeCallback.md), this fires for *every* dispatch that
reaches a state — including a precondition veto (`{ handled: false }`)
and a self-transition, neither of which triggers a state change. Intended
for tooling/introspection; do not mutate the context from here.

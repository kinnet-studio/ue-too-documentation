[@ue-too/being](../../modules.md) / [index](../index.md) / EventResultCallback

# 型エイリアス: EventResultCallback()\<EventPayloadMapping, Context, States\>

> **EventResultCallback**\<`EventPayloadMapping`, `Context`, `States`\> = (`args`, `result`, `context`) => `void`

定義: [interface.ts:322](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L322)

Callback invoked after a state has handled an event, with the event's
full [EventResult](EventResult.md).

## 型パラメーター

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string`

## パラメータ

### args

[`EventArgs`](EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping` \| `string`\>

### result

[`EventResult`](EventResult.md)\<`States`, `unknown`\>

### context

`Context`

## 戻り値

`void`

## Remarks

Unlike [StateChangeCallback](StateChangeCallback.md), this fires for *every* dispatch that
reaches a state — including a precondition veto (`{ handled: false }`)
and a self-transition, neither of which triggers a state change. Intended
for tooling/introspection; do not mutate the context from here.

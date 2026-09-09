[@ue-too/being](../../modules.md) / [index](../index.md) / EventResultCallback

# 型別別名: EventResultCallback()\<EventPayloadMapping, Context, States\>

> **EventResultCallback**\<`EventPayloadMapping`, `Context`, `States`\> = (`args`, `result`, `context`) => `void`

定義於: [interface.ts:322](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L322)

Callback invoked after a state has handled an event, with the event's
full [EventResult](EventResult.md).

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string`

## 參數

### args

[`EventArgs`](EventArgs.md)\<`EventPayloadMapping`, keyof `EventPayloadMapping` \| `string`\>

### result

[`EventResult`](EventResult.md)\<`States`, `unknown`\>

### context

`Context`

## 回傳

`void`

## 備註

Unlike [StateChangeCallback](StateChangeCallback.md), this fires for *every* dispatch that
reaches a state — including a precondition veto (`{ handled: false }`)
and a self-transition, neither of which triggers a state change. Intended
for tooling/introspection; do not mutate the context from here.

[@ue-too/being](../../modules.md) / [index](../index.md) / EventResult

# 型別別名: EventResult\<States, Output\>

> **EventResult**\<`States`, `Output`\> = [`EventNotHandled`](EventNotHandled.md) \| [`EventHandled`](EventHandled.md)\<`States`, `Output`\>

定義於: [interface.ts:159](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L159)

Discriminated union representing the result of event handling.

## 型別參數

### States

`States` *extends* `string`

Union of all possible state names

### Output

`Output` = `void`

The output type for handled events

## 備註

Every event handler returns an EventResult, which is either:
- [EventHandled](EventHandled.md): The event was processed successfully
- [EventNotHandled](EventNotHandled.md): The event was not recognized/handled

Use the `handled` discriminant to narrow the type in TypeScript.

[@ue-too/being](../../modules.md) / [index](../index.md) / EventResult

# 型エイリアス: EventResult\<States, Output\>

> **EventResult**\<`States`, `Output`\> = [`EventNotHandled`](EventNotHandled.md) \| [`EventHandled`](EventHandled.md)\<`States`, `Output`\>

定義: [interface.ts:159](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L159)

Discriminated union representing the result of event handling.

## 型パラメーター

### States

`States` *extends* `string`

Union of all possible state names

### Output

`Output` = `void`

The output type for handled events

## Remarks

Every event handler returns an EventResult, which is either:
- [EventHandled](EventHandled.md): The event was processed successfully
- [EventNotHandled](EventNotHandled.md): The event was not recognized/handled

Use the `handled` discriminant to narrow the type in TypeScript.

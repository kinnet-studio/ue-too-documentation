[@ue-too/being](../../modules.md) / [index](../index.md) / DefaultOutputMapping

# Type Alias: DefaultOutputMapping\<EventPayloadMapping\>

> **DefaultOutputMapping**\<`EventPayloadMapping`\> = `{ [K in keyof EventPayloadMapping]: void }`

Defined in: [interface.ts:169](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/being/src/interface.ts#L169)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

## Description

A default output mapping that maps all events to void.
Used as default when no output mapping is provided.

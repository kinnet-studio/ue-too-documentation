[@ue-too/being-devtools](../globals.md) / AttachOptions

# 型エイリアス: AttachOptions

> **AttachOptions** = `object`

定義: [registry.ts:35](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L35)

Options for attaching one machine.

## プロパティ

### name?

> `optional` **name**: `string`

定義: [registry.ts:37](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L37)

Tab label. Must be unique within a panel; a collision throws.

***

### samplePayloads?

> `optional` **samplePayloads**: `Record`\<`string`, `unknown`\>

定義: [registry.ts:39](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L39)

Default payload JSON shown under each event's fire button.

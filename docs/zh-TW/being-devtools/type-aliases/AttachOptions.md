[@ue-too/being-devtools](../globals.md) / AttachOptions

# 型別別名: AttachOptions

> **AttachOptions** = `object`

定義於: [registry.ts:35](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L35)

Options for attaching one machine.

## 屬性

### name?

> `optional` **name**: `string`

定義於: [registry.ts:37](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L37)

Tab label. Must be unique within a panel; a collision throws.

***

### samplePayloads?

> `optional` **samplePayloads**: `Record`\<`string`, `unknown`\>

定義於: [registry.ts:39](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L39)

Default payload JSON shown under each event's fire button.

[@ue-too/being-devtools](../globals.md) / AttachOptions

# Type Alias: AttachOptions

> **AttachOptions** = `object`

Defined in: [registry.ts:35](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/registry.ts#L35)

Options for attaching one machine.

## Properties

### name?

> `optional` **name**: `string`

Defined in: [registry.ts:37](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/registry.ts#L37)

Tab label. Must be unique within a panel; a collision throws.

***

### samplePayloads?

> `optional` **samplePayloads**: `Record`\<`string`, `unknown`\>

Defined in: [registry.ts:39](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/registry.ts#L39)

Default payload JSON shown under each event's fire button.

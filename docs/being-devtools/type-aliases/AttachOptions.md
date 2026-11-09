[@ue-too/being-devtools](../globals.md) / AttachOptions

# Type Alias: AttachOptions

> **AttachOptions** = `object`

Defined in: [registry.ts:35](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-devtools/src/registry.ts#L35)

Options for attaching one machine.

## Properties

### name?

> `optional` **name**: `string`

Defined in: [registry.ts:37](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-devtools/src/registry.ts#L37)

Tab label. Must be unique within a panel; a collision throws.

***

### samplePayloads?

> `optional` **samplePayloads**: `Record`\<`string`, `unknown`\>

Defined in: [registry.ts:39](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-devtools/src/registry.ts#L39)

Default payload JSON shown under each event's fire button.

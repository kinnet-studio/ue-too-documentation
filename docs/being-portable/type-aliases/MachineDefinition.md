[@ue-too/being-portable](../globals.md) / MachineDefinition

# Type Alias: MachineDefinition

> **MachineDefinition** = [`MachineBody`](MachineBody.md) & `object`

Defined in: [being-portable/src/format/types.ts:170](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/format/types.ts#L170)

A complete portable machine definition document.

## Type Declaration

### effects?

> `readonly` `optional` **effects**: `Readonly`\<`Record`\<`string`, [`EffectDeclaration`](EffectDeclaration.md)\>\>

### format

> `readonly` **format**: `"being-machine@1"`

### id

> `readonly` **id**: `string`

### machines?

> `readonly` `optional` **machines**: `Readonly`\<`Record`\<`string`, [`MachineBody`](MachineBody.md)\>\>

### revision

> `readonly` **revision**: `number`

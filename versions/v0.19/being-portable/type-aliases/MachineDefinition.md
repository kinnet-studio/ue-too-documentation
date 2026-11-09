[@ue-too/being-portable](../globals.md) / MachineDefinition

# Type Alias: MachineDefinition

> **MachineDefinition** = [`MachineBody`](MachineBody.md) & `object`

Defined in: [being-portable/src/format/types.ts:170](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/format/types.ts#L170)

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

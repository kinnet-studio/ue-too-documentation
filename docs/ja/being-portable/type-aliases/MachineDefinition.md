[@ue-too/being-portable](../globals.md) / MachineDefinition

# 型エイリアス: MachineDefinition

> **MachineDefinition** = [`MachineBody`](MachineBody.md) & `object`

定義: [being-portable/src/format/types.ts:170](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/being-portable/src/format/types.ts#L170)

A complete portable machine definition document.

## 型宣言

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

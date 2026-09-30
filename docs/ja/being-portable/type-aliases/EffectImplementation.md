[@ue-too/being-portable](../globals.md) / EffectImplementation

# 型エイリアス: EffectImplementation

> **EffectImplementation** = `object`

定義: [being-portable/src/host.ts:18](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L18)

One host capability, as the host writes it.

## プロパティ

### args

> `readonly` **args**: `Readonly`\<`Record`\<`string`, [`TypeSpec`](TypeSpec.md)\>\>

定義: [being-portable/src/host.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L20)

Argument names and types; must match the document's declaration exactly.

***

### returns?

> `readonly` `optional` **returns**: [`TypeSpec`](TypeSpec.md)

定義: [being-portable/src/host.ts:22](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L22)

Return type; must match the document's declaration exactly.

***

### run()

> `readonly` **run**: (`args`) => [`Value`](Value.md) \| `void`

定義: [being-portable/src/host.ts:24](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L24)

Receives validated, frozen arguments.

#### パラメータ

##### args

`Readonly`\<`Record`\<`string`, [`Value`](Value.md)\>\>

#### 戻り値

[`Value`](Value.md) \| `void`

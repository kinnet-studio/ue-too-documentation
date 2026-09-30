[@ue-too/being-portable](../globals.md) / EffectImplementation

# 型別別名: EffectImplementation

> **EffectImplementation** = `object`

定義於: [being-portable/src/host.ts:18](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L18)

One host capability, as the host writes it.

## 屬性

### args

> `readonly` **args**: `Readonly`\<`Record`\<`string`, [`TypeSpec`](TypeSpec.md)\>\>

定義於: [being-portable/src/host.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L20)

Argument names and types; must match the document's declaration exactly.

***

### returns?

> `readonly` `optional` **returns**: [`TypeSpec`](TypeSpec.md)

定義於: [being-portable/src/host.ts:22](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L22)

Return type; must match the document's declaration exactly.

***

### run()

> `readonly` **run**: (`args`) => [`Value`](Value.md) \| `void`

定義於: [being-portable/src/host.ts:24](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L24)

Receives validated, frozen arguments.

#### 參數

##### args

`Readonly`\<`Record`\<`string`, [`Value`](Value.md)\>\>

#### 回傳

[`Value`](Value.md) \| `void`

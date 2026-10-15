[@ue-too/being](../../modules.md) / [index](../index.md) / ExtractStateNames

# 型エイリアス: ExtractStateNames\<StatesArray\>

> **ExtractStateNames**\<`StatesArray`\> = `StatesArray` *extends* readonly infer S[] ? `S` *extends* `string` ? `S` : `string` : `StatesArray` *extends* infer S[] ? `S` *extends* `string` ? `S` : `string` : `string`

定義: [schema-factory.ts:202](https://github.com/kinnet-studio/ue-too/blob/930a76bbea33e382298c04824ccf0063a87cf0f3/packages/being/src/schema-factory.ts#L202)

Helper type to extract state names from a states array.
If the array is a readonly tuple of string literals, it extracts the union type.
Otherwise, it falls back to string.

## 型パラメーター

### StatesArray

`StatesArray`

The states array type

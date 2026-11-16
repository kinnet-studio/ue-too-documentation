[@ue-too/being](../../modules.md) / [index](../index.md) / ExtractStateNames

# 型別別名: ExtractStateNames\<StatesArray\>

> **ExtractStateNames**\<`StatesArray`\> = `StatesArray` *extends* readonly infer S[] ? `S` *extends* `string` ? `S` : `string` : `StatesArray` *extends* infer S[] ? `S` *extends* `string` ? `S` : `string` : `string`

定義於: [schema-factory.ts:202](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being/src/schema-factory.ts#L202)

Helper type to extract state names from a states array.
If the array is a readonly tuple of string literals, it extracts the union type.
Otherwise, it falls back to string.

## 型別參數

### StatesArray

`StatesArray`

The states array type

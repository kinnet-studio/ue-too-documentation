[@ue-too/being-portable](../globals.md) / HostEffect

# 型エイリアス: HostEffect

> **HostEffect** = `object`

定義: [being-portable/src/host.ts:54](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L54)

An effect after [defineHost](../functions/defineHost.md) parsed its types.

## プロパティ

### args

> `readonly` **args**: `ReadonlyMap`\<`string`, [`ValueType`](ValueType.md)\>

定義: [being-portable/src/host.ts:55](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L55)

***

### returns

> `readonly` **returns**: [`ValueType`](ValueType.md) \| `null`

定義: [being-portable/src/host.ts:56](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L56)

***

### run()

> `readonly` **run**: (`args`) => [`Value`](Value.md) \| `void`

定義: [being-portable/src/host.ts:57](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L57)

#### パラメータ

##### args

`Readonly`\<`Record`\<`string`, [`Value`](Value.md)\>\>

#### 戻り値

[`Value`](Value.md) \| `void`

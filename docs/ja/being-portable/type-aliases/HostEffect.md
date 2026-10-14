[@ue-too/being-portable](../globals.md) / HostEffect

# 型エイリアス: HostEffect

> **HostEffect** = `object`

定義: [being-portable/src/host.ts:54](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L54)

An effect after [defineHost](../functions/defineHost.md) parsed its types.

## プロパティ

### args

> `readonly` **args**: `ReadonlyMap`\<`string`, [`ValueType`](ValueType.md)\>

定義: [being-portable/src/host.ts:55](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L55)

***

### returns

> `readonly` **returns**: [`ValueType`](ValueType.md) \| `null`

定義: [being-portable/src/host.ts:56](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L56)

***

### run()

> `readonly` **run**: (`args`) => [`Value`](Value.md) \| `void`

定義: [being-portable/src/host.ts:57](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L57)

#### パラメータ

##### args

`Readonly`\<`Record`\<`string`, [`Value`](Value.md)\>\>

#### 戻り値

[`Value`](Value.md) \| `void`

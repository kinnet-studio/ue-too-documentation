[@ue-too/being-portable](../globals.md) / HostDefinition

# 型エイリアス: HostDefinition

> **HostDefinition** = `object`

定義: [being-portable/src/host.ts:44](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L44)

What a host passes to [defineHost](../functions/defineHost.md).

## プロパティ

### effects?

> `readonly` `optional` **effects**: `Readonly`\<`Record`\<`string`, [`EffectImplementation`](EffectImplementation.md)\>\>

定義: [being-portable/src/host.ts:45](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L45)

***

### limits?

> `readonly` `optional` **limits**: `Partial`\<[`Limits`](Limits.md)\>

定義: [being-portable/src/host.ts:48](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L48)

***

### onError()?

> `readonly` `optional` **onError**: (`error`) => `void`

定義: [being-portable/src/host.ts:50](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L50)

Receives every runtime failure. Defaults to `console.error`.

#### パラメータ

##### error

[`RuntimeError`](RuntimeError.md)

#### 戻り値

`void`

***

### services?

> `readonly` `optional` **services**: `Partial`\<[`Services`](Services.md)\>

定義: [being-portable/src/host.ts:47](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L47)

Defaults to `Math.random` and `Date.now`.

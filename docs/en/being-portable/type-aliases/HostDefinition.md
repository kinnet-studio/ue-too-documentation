[@ue-too/being-portable](../globals.md) / HostDefinition

# Type Alias: HostDefinition

> **HostDefinition** = `object`

Defined in: [being-portable/src/host.ts:44](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L44)

What a host passes to [defineHost](../functions/defineHost.md).

## Properties

### effects?

> `readonly` `optional` **effects**: `Readonly`\<`Record`\<`string`, [`EffectImplementation`](EffectImplementation.md)\>\>

Defined in: [being-portable/src/host.ts:45](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L45)

***

### limits?

> `readonly` `optional` **limits**: `Partial`\<[`Limits`](Limits.md)\>

Defined in: [being-portable/src/host.ts:48](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L48)

***

### onError()?

> `readonly` `optional` **onError**: (`error`) => `void`

Defined in: [being-portable/src/host.ts:50](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L50)

Receives every runtime failure. Defaults to `console.error`.

#### Parameters

##### error

[`RuntimeError`](RuntimeError.md)

#### Returns

`void`

***

### services?

> `readonly` `optional` **services**: `Partial`\<[`Services`](Services.md)\>

Defined in: [being-portable/src/host.ts:47](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/host.ts#L47)

Defaults to `Math.random` and `Date.now`.

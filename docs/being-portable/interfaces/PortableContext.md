[@ue-too/being-portable](../globals.md) / PortableContext

# Interface: PortableContext

Defined in: [being-portable/src/api-types.ts:26](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/api-types.ts#L26)

A read-only view of a portable machine's context. Only events change it.

## Extends

- `BaseContext`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: being/dist/interface.d.ts:31

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### fields()

> **fields**(): `Readonly`\<`Record`\<`string`, [`Value`](../type-aliases/Value.md)\>\>

Defined in: [being-portable/src/api-types.ts:30](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/api-types.ts#L30)

Every field's current value, frozen.

#### Returns

`Readonly`\<`Record`\<`string`, [`Value`](../type-aliases/Value.md)\>\>

***

### get()

> **get**(`field`): [`Value`](../type-aliases/Value.md)

Defined in: [being-portable/src/api-types.ts:28](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/api-types.ts#L28)

The field's current value. Lists are frozen. Throws for an unknown field.

#### Parameters

##### field

`string`

#### Returns

[`Value`](../type-aliases/Value.md)

***

### setup()

> **setup**(): `void`

Defined in: being/dist/interface.d.ts:30

#### Returns

`void`

#### Inherited from

`BaseContext.setup`

[@ue-too/being-portable](../globals.md) / PortableContext

# インターフェイス: PortableContext

定義: [being-portable/src/api-types.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L26)

A read-only view of a portable machine's context. Only events change it.

## 拡張

- `BaseContext`

## メソッド

### cleanup()

> **cleanup**(): `void`

定義: being/dist/interface.d.ts:31

#### 戻り値

`void`

#### 継承元

`BaseContext.cleanup`

***

### fields()

> **fields**(): `Readonly`\<`Record`\<`string`, [`Value`](../type-aliases/Value.md)\>\>

定義: [being-portable/src/api-types.ts:30](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L30)

Every field's current value, frozen.

#### 戻り値

`Readonly`\<`Record`\<`string`, [`Value`](../type-aliases/Value.md)\>\>

***

### get()

> **get**(`field`): [`Value`](../type-aliases/Value.md)

定義: [being-portable/src/api-types.ts:28](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L28)

The field's current value. Lists are frozen. Throws for an unknown field.

#### パラメータ

##### field

`string`

#### 戻り値

[`Value`](../type-aliases/Value.md)

***

### setup()

> **setup**(): `void`

定義: being/dist/interface.d.ts:30

#### 戻り値

`void`

#### 継承元

`BaseContext.setup`

[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentPrimitiveField

# インターフェイス: ComponentPrimitiveField

定義: [index.ts:179](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L179)

Definition for a primitive (non-array) field in a component schema.

## 拡張

- `BaseComponentField`

## プロパティ

### defaultValue?

> `optional` **defaultValue**: `unknown`

定義: [index.ts:172](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L172)

Default value for the field (used when creating new instances)

#### 継承元

`BaseComponentField.defaultValue`

***

### name

> **name**: `string`

定義: [index.ts:168](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L168)

The name of the field

#### 継承元

`BaseComponentField.name`

***

### optional?

> `optional` **optional**: `boolean`

定義: [index.ts:170](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L170)

Whether the field is optional (default: false)

#### 継承元

`BaseComponentField.optional`

***

### type

> **type**: `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"entity"`

定義: [index.ts:181](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L181)

Discriminator for the union type

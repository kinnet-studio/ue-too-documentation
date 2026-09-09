[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentArrayField

# インターフェイス: ComponentArrayField

定義: [index.ts:188](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L188)

Definition for an array field in a component schema.

## 拡張

- `BaseComponentField`

## プロパティ

### arrayElementType

> **arrayElementType**: [`ArrayElementType`](../type-aliases/ArrayElementType.md)

定義: [index.ts:196](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L196)

The element type for array fields (required).
Specifies what type each element in the array should be.
Can be a built-in type or a custom component type name.

***

### defaultValue?

> `optional` **defaultValue**: `unknown`

定義: [index.ts:172](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L172)

Default value for the field (used when creating new instances)

#### 継承元

`BaseComponentField.defaultValue`

***

### name

> **name**: `string`

定義: [index.ts:168](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L168)

The name of the field

#### 継承元

`BaseComponentField.name`

***

### optional?

> `optional` **optional**: `boolean`

定義: [index.ts:170](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L170)

Whether the field is optional (default: false)

#### 継承元

`BaseComponentField.optional`

***

### type

> **type**: `"array"`

定義: [index.ts:190](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L190)

Discriminator for the union type

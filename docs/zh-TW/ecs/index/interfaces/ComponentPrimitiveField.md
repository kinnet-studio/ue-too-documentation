[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentPrimitiveField

# 介面: ComponentPrimitiveField

定義於: [index.ts:179](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L179)

Definition for a primitive (non-array) field in a component schema.

## Extends

- `BaseComponentField`

## 屬性

### defaultValue?

> `optional` **defaultValue**: `unknown`

定義於: [index.ts:172](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L172)

Default value for the field (used when creating new instances)

#### 繼承自

`BaseComponentField.defaultValue`

***

### name

> **name**: `string`

定義於: [index.ts:168](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L168)

The name of the field

#### 繼承自

`BaseComponentField.name`

***

### optional?

> `optional` **optional**: `boolean`

定義於: [index.ts:170](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L170)

Whether the field is optional (default: false)

#### 繼承自

`BaseComponentField.optional`

***

### type

> **type**: `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"entity"`

定義於: [index.ts:181](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L181)

Discriminator for the union type

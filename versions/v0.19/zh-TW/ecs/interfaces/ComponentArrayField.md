[@ue-too/ecs](../globals.md) / ComponentArrayField

# Interface: ComponentArrayField

Defined in: [index.ts:188](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L188)

Definition for an array field in a component schema.

## Extends

- `BaseComponentField`

## Properties

### arrayElementType

> **arrayElementType**: [`ArrayElementType`](../type-aliases/ArrayElementType.md)

Defined in: [index.ts:196](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L196)

The element type for array fields (required).
Specifies what type each element in the array should be.
Can be a built-in type or a custom component type name.

***

### defaultValue?

> `optional` **defaultValue**: `unknown`

Defined in: [index.ts:172](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L172)

Default value for the field (used when creating new instances)

#### Inherited from

`BaseComponentField.defaultValue`

***

### name

> **name**: `string`

Defined in: [index.ts:168](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L168)

The name of the field

#### Inherited from

`BaseComponentField.name`

***

### optional?

> `optional` **optional**: `boolean`

Defined in: [index.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L170)

Whether the field is optional (default: false)

#### Inherited from

`BaseComponentField.optional`

***

### type

> **type**: `"array"`

Defined in: [index.ts:190](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L190)

Discriminator for the union type

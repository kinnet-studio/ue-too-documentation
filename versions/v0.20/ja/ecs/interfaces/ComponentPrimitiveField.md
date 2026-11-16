[@ue-too/ecs](../globals.md) / ComponentPrimitiveField

# Interface: ComponentPrimitiveField

Defined in: [index.ts:179](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L179)

Definition for a primitive (non-array) field in a component schema.

## Extends

- `BaseComponentField`

## Properties

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

> **type**: `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"entity"`

Defined in: [index.ts:181](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L181)

Discriminator for the union type

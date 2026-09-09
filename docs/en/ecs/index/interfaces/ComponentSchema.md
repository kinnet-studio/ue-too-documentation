[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentSchema

# Interface: ComponentSchema

Defined in: [index.ts:212](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L212)

Schema definition for a component type that can be defined at runtime.

## Properties

### componentName

> **componentName**: `symbol`

Defined in: [index.ts:214](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L214)

The name of the component type (using Symbol for type safety)

***

### fields

> **fields**: [`ComponentFieldDefinition`](../type-aliases/ComponentFieldDefinition.md)[]

Defined in: [index.ts:216](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L216)

Array of field definitions

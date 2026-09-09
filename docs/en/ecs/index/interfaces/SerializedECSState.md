[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedECSState

# Interface: SerializedECSState

Defined in: [index.ts:370](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L370)

Serialized representation of the entire ECS state.

## Properties

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

Defined in: [index.ts:372](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L372)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

Defined in: [index.ts:374](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L374)

Optional: Array of component schemas (if using schema-based components)

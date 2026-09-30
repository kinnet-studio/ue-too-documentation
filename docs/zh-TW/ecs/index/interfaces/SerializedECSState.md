[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedECSState

# 介面: SerializedECSState

定義於: [index.ts:370](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L370)

Serialized representation of the entire ECS state.

## 屬性

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

定義於: [index.ts:372](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L372)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

定義於: [index.ts:374](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L374)

Optional: Array of component schemas (if using schema-based components)

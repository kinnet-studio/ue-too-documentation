[@ue-too/ecs](../../modules.md) / [index](../index.md) / SerializedECSState

# インターフェイス: SerializedECSState

定義: [index.ts:370](https://github.com/kinnet-studio/ue-too/blob/c904ff4e862cacf9f57c33ab487edde188a7d671/packages/ecs/src/index.ts#L370)

Serialized representation of the entire ECS state.

## プロパティ

### entities

> **entities**: [`SerializedEntity`](SerializedEntity.md)[]

定義: [index.ts:372](https://github.com/kinnet-studio/ue-too/blob/c904ff4e862cacf9f57c33ab487edde188a7d671/packages/ecs/src/index.ts#L372)

Array of all entities with their component data

***

### schemas?

> `optional` **schemas**: [`SerializedComponentSchema`](SerializedComponentSchema.md)[]

定義: [index.ts:374](https://github.com/kinnet-studio/ue-too/blob/c904ff4e862cacf9f57c33ab487edde188a7d671/packages/ecs/src/index.ts#L374)

Optional: Array of component schemas (if using schema-based components)

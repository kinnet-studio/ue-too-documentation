[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentFieldDefinition

# 型エイリアス: ComponentFieldDefinition

> **ComponentFieldDefinition** = [`ComponentPrimitiveField`](../interfaces/ComponentPrimitiveField.md) \| [`ComponentArrayField`](../interfaces/ComponentArrayField.md)

定義: [index.ts:204](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/ecs/src/index.ts#L204)

Discriminated union for field definitions in a component schema.
Use type guards to distinguish between primitive and array fields.

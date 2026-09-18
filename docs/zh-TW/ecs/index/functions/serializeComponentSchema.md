[@ue-too/ecs](../../modules.md) / [index](../index.md) / serializeComponentSchema

# 函式: serializeComponentSchema()

> **serializeComponentSchema**(`schema`): [`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

定義於: [index.ts:387](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/ecs/src/index.ts#L387)

Serialize a component schema to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for).

## 參數

### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema to serialize

## 回傳

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

A serializable representation of the schema

## 拋出

Error if component name is not a global symbol

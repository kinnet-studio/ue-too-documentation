[@ue-too/ecs](../../modules.md) / [index](../index.md) / serializeComponentSchema

# Function: serializeComponentSchema()

> **serializeComponentSchema**(`schema`): [`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

Defined in: [index.ts:387](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L387)

Serialize a component schema to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for).

## Parameters

### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema to serialize

## Returns

[`SerializedComponentSchema`](../interfaces/SerializedComponentSchema.md)

A serializable representation of the schema

## Throws

Error if component name is not a global symbol

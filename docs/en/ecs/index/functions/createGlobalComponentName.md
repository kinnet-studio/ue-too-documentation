[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalComponentName

# Function: createGlobalComponentName()

> **createGlobalComponentName**(`key`): `symbol`

Defined in: [index.ts:268](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L268)

Helper function to create a component name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## Parameters

### key

`string`

The string key for the global symbol

## Returns

`symbol`

A global symbol for the component name

## Example

```typescript
const Position = createGlobalComponentName('Position');
coordinator.registerComponent<Position>(Position);
// Can be retrieved later with Symbol.for('Position')
```

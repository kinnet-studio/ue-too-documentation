[@ue-too/ecs](../../modules.md) / [index](../index.md) / createSystemName

# Function: createSystemName()

> **createSystemName**(`name`): `symbol`

Defined in: [index.ts:287](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/ecs/src/index.ts#L287)

Helper function to create a system name from a string.
This creates a unique symbol for the system name.

## Parameters

### name

`string`

The string name for the system

## Returns

`symbol`

A unique symbol for the system name

## Example

```typescript
const Movement = createSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
```

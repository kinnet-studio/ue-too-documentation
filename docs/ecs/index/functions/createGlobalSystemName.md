[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalSystemName

# Function: createGlobalSystemName()

> **createGlobalSystemName**(`key`): `symbol`

Defined in: [index.ts:321](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L321)

Helper function to create a system name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## Parameters

### key

`string`

The string key for the global symbol

## Returns

`symbol`

A global symbol for the system name

## Example

```typescript
const Movement = createGlobalSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
// Can be retrieved later with Symbol.for('Movement')
```

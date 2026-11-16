[@ue-too/ecs](../../modules.md) / [index](../index.md) / createComponentName

# Function: createComponentName()

> **createComponentName**(`name`): `symbol`

Defined in: [index.ts:234](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/ecs/src/index.ts#L234)

Helper function to create a component name from a string.
This creates a unique symbol for the component name.

## Parameters

### name

`string`

The string name for the component

## Returns

`symbol`

A unique symbol for the component name

## Example

```typescript
const Position = createComponentName('Position');
coordinator.registerComponent<Position>(Position);
```

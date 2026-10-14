[@ue-too/ecs](../../modules.md) / [index](../index.md) / createSystemName

# 関数: createSystemName()

> **createSystemName**(`name`): `symbol`

定義: [index.ts:287](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/ecs/src/index.ts#L287)

Helper function to create a system name from a string.
This creates a unique symbol for the system name.

## パラメータ

### name

`string`

The string name for the system

## 戻り値

`symbol`

A unique symbol for the system name

## 例

```typescript
const Movement = createSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
```

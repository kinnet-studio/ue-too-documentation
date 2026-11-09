[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalSystemName

# 関数: createGlobalSystemName()

> **createGlobalSystemName**(`key`): `symbol`

定義: [index.ts:321](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/ecs/src/index.ts#L321)

Helper function to create a system name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## パラメータ

### key

`string`

The string key for the global symbol

## 戻り値

`symbol`

A global symbol for the system name

## 例

```typescript
const Movement = createGlobalSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);
// Can be retrieved later with Symbol.for('Movement')
```

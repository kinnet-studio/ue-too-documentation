[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalComponentName

# 函式: createGlobalComponentName()

> **createGlobalComponentName**(`key`): `symbol`

定義於: [index.ts:268](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L268)

Helper function to create a component name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## 參數

### key

`string`

The string key for the global symbol

## 回傳

`symbol`

A global symbol for the component name

## 範例

```typescript
const Position = createGlobalComponentName('Position');
coordinator.registerComponent<Position>(Position);
// Can be retrieved later with Symbol.for('Position')
```

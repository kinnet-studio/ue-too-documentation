[@ue-too/ecs](../../modules.md) / [index](../index.md) / createGlobalComponentName

# 関数: createGlobalComponentName()

> **createGlobalComponentName**(`key`): `symbol`

定義: [index.ts:268](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L268)

Helper function to create a component name using Symbol.for().
This creates a global symbol that can be looked up by string key,
which is useful for serialization and cross-module access.

## パラメータ

### key

`string`

The string key for the global symbol

## 戻り値

`symbol`

A global symbol for the component name

## 例

```typescript
const Position = createGlobalComponentName('Position');
coordinator.registerComponent<Position>(Position);
// Can be retrieved later with Symbol.for('Position')
```

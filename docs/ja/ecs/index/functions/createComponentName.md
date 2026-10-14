[@ue-too/ecs](../../modules.md) / [index](../index.md) / createComponentName

# 関数: createComponentName()

> **createComponentName**(`name`): `symbol`

定義: [index.ts:234](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/ecs/src/index.ts#L234)

Helper function to create a component name from a string.
This creates a unique symbol for the component name.

## パラメータ

### name

`string`

The string name for the component

## 戻り値

`symbol`

A unique symbol for the component name

## 例

```typescript
const Position = createComponentName('Position');
coordinator.registerComponent<Position>(Position);
```

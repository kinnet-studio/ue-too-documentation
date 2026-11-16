[@ue-too/ecs](../../modules.md) / [index](../index.md) / createComponentName

# 函式: createComponentName()

> **createComponentName**(`name`): `symbol`

定義於: [index.ts:234](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/ecs/src/index.ts#L234)

Helper function to create a component name from a string.
This creates a unique symbol for the component name.

## 參數

### name

`string`

The string name for the component

## 回傳

`symbol`

A unique symbol for the component name

## 範例

```typescript
const Position = createComponentName('Position');
coordinator.registerComponent<Position>(Position);
```

[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / NumberModificationEffect

# 類別: NumberModificationEffect\<T\>

定義於: [action-system/effect.ts:26](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L26)

Unified number modification effect that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## 範例

```typescript
// With custom schema component
const effect1 = new NumberModificationEffect(
    coordinator, 25, HEALTH_COMPONENT, entity, 'health', 'subtract'
);

// With typed component (type-safe)
type HealthComponent = { health: number; maxHealth: number };
const effect2 = new NumberModificationEffect<HealthComponent>(
    coordinator, HEALTH_COMPONENT, entity, 'health', 25, 'subtract'
);
```

## 型別參數

### T

`T` = `Record`\<`string`, `unknown`\>

## 實作

- [`Effect`](../interfaces/Effect.md)

## 建構函式

### 建構函式

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `amount`, `operation?`): `NumberModificationEffect`\<`T`\>

定義於: [action-system/effect.ts:38](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L38)

#### 參數

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

keyof `T`

##### amount

`number`

##### operation?

`"add"` | `"subtract"` | `"set"`

#### 回傳

`NumberModificationEffect`\<`T`\>

### 建構函式

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `amount`, `componentName`, `entity`, `valuePath`, `operation?`): `NumberModificationEffect`\<`T`\>

定義於: [action-system/effect.ts:47](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L47)

#### 參數

##### coordinator

`Coordinator`

##### amount

`number`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### operation?

`"add"` | `"subtract"` | `"set"`

#### 回傳

`NumberModificationEffect`\<`T`\>

## 方法

### apply()

> **apply**(): `void`

定義於: [action-system/effect.ts:89](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L89)

#### 回傳

`void`

#### 實作了

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)

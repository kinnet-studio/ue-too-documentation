[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / ValueComparisonPrecondition

# 類別: ValueComparisonPrecondition\<T\>

定義於: [action-system/precondition.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/action-system/precondition.ts#L26)

Unified value comparison precondition that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## 範例

```typescript
// With custom schema component
const precondition1 = new ValueComparisonPrecondition(
    100, '>', coordinator, HEALTH_COMPONENT, entity, 'health'
);

// With typed component (type-safe)
type HealthComponent = { health: number; maxHealth: number };
const precondition2 = new ValueComparisonPrecondition<HealthComponent>(
    coordinator, HEALTH_COMPONENT, entity, 'health', 100, '>'
);
```

## 型別參數

### T

`T` = `Record`\<`string`, `unknown`\>

## 實作

- [`Precondition`](../interfaces/Precondition.md)

## 建構函式

### 建構函式

> **new ValueComparisonPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `value`, `operator`): `ValueComparisonPrecondition`\<`T`\>

定義於: [action-system/precondition.ts:37](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/action-system/precondition.ts#L37)

#### 參數

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

keyof `T`

##### value

`number`

##### operator

`">"` | `"<"` | `">="` | `"<="` | `"=="` | `"!="`

#### 回傳

`ValueComparisonPrecondition`\<`T`\>

### 建構函式

> **new ValueComparisonPrecondition**\<`T`\>(`value`, `operator`, `coordinator`, `componentName`, `entity`, `valuePath`): `ValueComparisonPrecondition`\<`T`\>

定義於: [action-system/precondition.ts:46](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/action-system/precondition.ts#L46)

#### 參數

##### value

`number`

##### operator

`">"` | `"<"` | `">="` | `"<="` | `"=="` | `"!="`

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

#### 回傳

`ValueComparisonPrecondition`\<`T`\>

## 方法

### check()

> **check**(): `boolean`

定義於: [action-system/precondition.ts:102](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/action-system/precondition.ts#L102)

#### 回傳

`boolean`

#### 實作了

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)

[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / ValueComparisonPrecondition

# クラス: ValueComparisonPrecondition\<T\>

定義: [action-system/precondition.ts:26](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/precondition.ts#L26)

Unified value comparison precondition that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## 例

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

## 型パラメーター

### T

`T` = `Record`\<`string`, `unknown`\>

## 実装

- [`Precondition`](../interfaces/Precondition.md)

## コンストラクター

### コンストラクター

> **new ValueComparisonPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `value`, `operator`): `ValueComparisonPrecondition`\<`T`\>

定義: [action-system/precondition.ts:37](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/precondition.ts#L37)

#### パラメータ

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

#### 戻り値

`ValueComparisonPrecondition`\<`T`\>

### コンストラクター

> **new ValueComparisonPrecondition**\<`T`\>(`value`, `operator`, `coordinator`, `componentName`, `entity`, `valuePath`): `ValueComparisonPrecondition`\<`T`\>

定義: [action-system/precondition.ts:46](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/precondition.ts#L46)

#### パラメータ

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

#### 戻り値

`ValueComparisonPrecondition`\<`T`\>

## メソッド

### check()

> **check**(): `boolean`

定義: [action-system/precondition.ts:102](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/precondition.ts#L102)

#### 戻り値

`boolean`

#### の実装

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)

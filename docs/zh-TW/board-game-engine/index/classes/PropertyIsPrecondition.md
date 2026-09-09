[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / PropertyIsPrecondition

# 類別: PropertyIsPrecondition\<T\>

定義於: [action-system/precondition.ts:191](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/precondition.ts#L191)

Precondition that checks if a property in a component of an entity equals a certain value.
Supports multiple types (number, string, boolean, etc.) and works with both custom schema
components and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## 範例

```typescript
// With custom schema component
const precondition1 = new PropertyIsPrecondition(
    coordinator, HEALTH_COMPONENT, entity, 'status', 'active'
);

// With typed component (type-safe)
type PlayerComponent = { name: string; level: number; isActive: boolean };
const precondition2 = new PropertyIsPrecondition<PlayerComponent>(
    coordinator, PLAYER_COMPONENT, entity, 'name', 'John'
);
```

## 型別參數

### T

`T` = `Record`\<`string`, `unknown`\>

## 實作

- [`Precondition`](../interfaces/Precondition.md)

## 建構函式

### 建構函式

> **new PropertyIsPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `property`, `value`): `PropertyIsPrecondition`\<`T`\>

定義於: [action-system/precondition.ts:200](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/precondition.ts#L200)

#### 參數

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### property

`string` | keyof `T`

##### value

`unknown`

#### 回傳

`PropertyIsPrecondition`\<`T`\>

## 方法

### check()

> **check**(): `boolean`

定義於: [action-system/precondition.ts:214](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/precondition.ts#L214)

#### 回傳

`boolean`

#### 實作了

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)

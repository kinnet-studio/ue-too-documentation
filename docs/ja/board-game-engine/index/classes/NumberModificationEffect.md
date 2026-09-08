[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / NumberModificationEffect

# クラス: NumberModificationEffect\<T\>

定義: [action-system/effect.ts:26](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L26)

Unified number modification effect that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## 例

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

## 型パラメーター

### T

`T` = `Record`\<`string`, `unknown`\>

## 実装

- [`Effect`](../interfaces/Effect.md)

## コンストラクター

### コンストラクター

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `amount`, `operation?`): `NumberModificationEffect`\<`T`\>

定義: [action-system/effect.ts:38](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L38)

#### パラメータ

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

#### 戻り値

`NumberModificationEffect`\<`T`\>

### コンストラクター

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `amount`, `componentName`, `entity`, `valuePath`, `operation?`): `NumberModificationEffect`\<`T`\>

定義: [action-system/effect.ts:47](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L47)

#### パラメータ

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

#### 戻り値

`NumberModificationEffect`\<`T`\>

## メソッド

### apply()

> **apply**(): `void`

定義: [action-system/effect.ts:89](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L89)

#### 戻り値

`void`

#### の実装

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)

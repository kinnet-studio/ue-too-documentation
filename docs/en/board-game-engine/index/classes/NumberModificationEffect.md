[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / NumberModificationEffect

# Class: NumberModificationEffect\<T\>

Defined in: [action-system/effect.ts:26](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/action-system/effect.ts#L26)

Unified number modification effect that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## Example

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

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `amount`, `operation?`): `NumberModificationEffect`\<`T`\>

Defined in: [action-system/effect.ts:38](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/action-system/effect.ts#L38)

#### Parameters

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

#### Returns

`NumberModificationEffect`\<`T`\>

### Constructor

> **new NumberModificationEffect**\<`T`\>(`coordinator`, `amount`, `componentName`, `entity`, `valuePath`, `operation?`): `NumberModificationEffect`\<`T`\>

Defined in: [action-system/effect.ts:47](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/action-system/effect.ts#L47)

#### Parameters

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

#### Returns

`NumberModificationEffect`\<`T`\>

## Methods

### apply()

> **apply**(): `void`

Defined in: [action-system/effect.ts:89](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/action-system/effect.ts#L89)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)

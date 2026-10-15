[@ue-too/board-game-engine](../globals.md) / ValueComparisonPrecondition

# Class: ValueComparisonPrecondition\<T\>

Defined in: [action-system/precondition.ts:26](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L26)

Unified value comparison precondition that works with both custom schema components
and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## Example

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

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Implements

- [`Precondition`](../interfaces/Precondition.md)

## Constructors

### Constructor

> **new ValueComparisonPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `value`, `operator`): `ValueComparisonPrecondition`\<`T`\>

Defined in: [action-system/precondition.ts:37](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L37)

#### Parameters

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

#### Returns

`ValueComparisonPrecondition`\<`T`\>

### Constructor

> **new ValueComparisonPrecondition**\<`T`\>(`value`, `operator`, `coordinator`, `componentName`, `entity`, `valuePath`): `ValueComparisonPrecondition`\<`T`\>

Defined in: [action-system/precondition.ts:46](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L46)

#### Parameters

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

#### Returns

`ValueComparisonPrecondition`\<`T`\>

## Methods

### check()

> **check**(): `boolean`

Defined in: [action-system/precondition.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L102)

#### Returns

`boolean`

#### Implementation of

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)

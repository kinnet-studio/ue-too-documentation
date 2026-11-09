[@ue-too/board-game-engine](../globals.md) / PropertyIsPrecondition

# Class: PropertyIsPrecondition\<T\>

Defined in: [action-system/precondition.ts:191](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L191)

Precondition that checks if a property in a component of an entity equals a certain value.
Supports multiple types (number, string, boolean, etc.) and works with both custom schema
components and typed components. Automatically detects which approach to use based on whether
the component has a registered schema.

## Example

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

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Implements

- [`Precondition`](../interfaces/Precondition.md)

## Constructors

### Constructor

> **new PropertyIsPrecondition**\<`T`\>(`coordinator`, `componentName`, `entity`, `property`, `value`): `PropertyIsPrecondition`\<`T`\>

Defined in: [action-system/precondition.ts:200](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L200)

#### Parameters

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

#### Returns

`PropertyIsPrecondition`\<`T`\>

## Methods

### check()

> **check**(): `boolean`

Defined in: [action-system/precondition.ts:214](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/precondition.ts#L214)

#### Returns

`boolean`

#### Implementation of

[`Precondition`](../interfaces/Precondition.md).[`check`](../interfaces/Precondition.md#check)

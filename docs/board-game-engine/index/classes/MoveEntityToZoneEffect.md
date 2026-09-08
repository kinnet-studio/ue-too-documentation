[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / MoveEntityToZoneEffect

# Class: MoveEntityToZoneEffect

Defined in: [zone-system/effect.ts:13](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/effect.ts#L13)

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new MoveEntityToZoneEffect**(`coordinator`, `entity`, `zoneEntity`, `addToIfZoneOrdered`): `MoveEntityToZoneEffect`

Defined in: [zone-system/effect.ts:19](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/effect.ts#L19)

#### Parameters

##### coordinator

`Coordinator`

##### entity

`number`

##### zoneEntity

`number`

##### addToIfZoneOrdered

`"top"` | `"bottom"`

#### Returns

`MoveEntityToZoneEffect`

## Methods

### apply()

> **apply**(): `void`

Defined in: [zone-system/effect.ts:31](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/effect.ts#L31)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)

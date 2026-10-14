[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / MoveEntityToZoneEffect

# クラス: MoveEntityToZoneEffect

定義: [zone-system/effect.ts:13](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board-game-engine/src/zone-system/effect.ts#L13)

## 実装

- [`Effect`](../interfaces/Effect.md)

## コンストラクター

### コンストラクター

> **new MoveEntityToZoneEffect**(`coordinator`, `entity`, `zoneEntity`, `addToIfZoneOrdered`): `MoveEntityToZoneEffect`

定義: [zone-system/effect.ts:19](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board-game-engine/src/zone-system/effect.ts#L19)

#### パラメータ

##### coordinator

`Coordinator`

##### entity

`number`

##### zoneEntity

`number`

##### addToIfZoneOrdered

`"top"` | `"bottom"`

#### 戻り値

`MoveEntityToZoneEffect`

## メソッド

### apply()

> **apply**(): `void`

定義: [zone-system/effect.ts:31](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board-game-engine/src/zone-system/effect.ts#L31)

#### 戻り値

`void`

#### の実装

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)

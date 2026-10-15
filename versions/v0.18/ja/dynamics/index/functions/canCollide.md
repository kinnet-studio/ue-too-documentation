[@ue-too/dynamics](../../modules.md) / [index](../index.md) / canCollide

# 関数: canCollide()

> **canCollide**(`filterA`, `filterB`): `boolean`

定義: [collision-filter.ts:103](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/collision-filter.ts#L103)

Determines if two bodies can collide based on their collision filters.

## パラメータ

### filterA

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of first body

### filterB

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of second body

## 戻り値

`boolean`

True if the bodies should collide

## Remarks

Checks group rules first, then falls back to category/mask matching.
This is used internally by the physics engine during broad phase collision detection.

## 例

```typescript
const player: CollisionFilter = {
  category: CollisionCategory.PLAYER,
  mask: 0xFFFF,
  group: 0
};

const enemy: CollisionFilter = {
  category: CollisionCategory.ENEMY,
  mask: CollisionCategory.PLAYER | CollisionCategory.STATIC,
  group: 0
};

console.log(canCollide(player, enemy)); // true
```

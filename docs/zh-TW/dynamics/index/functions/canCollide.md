[@ue-too/dynamics](../../modules.md) / [index](../index.md) / canCollide

# 函式: canCollide()

> **canCollide**(`filterA`, `filterB`): `boolean`

定義於: [collision-filter.ts:103](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/collision-filter.ts#L103)

Determines if two bodies can collide based on their collision filters.

## 參數

### filterA

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of first body

### filterB

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of second body

## 回傳

`boolean`

True if the bodies should collide

## 備註

Checks group rules first, then falls back to category/mask matching.
This is used internally by the physics engine during broad phase collision detection.

## 範例

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

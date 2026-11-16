[@ue-too/dynamics](../globals.md) / canCollide

# Function: canCollide()

> **canCollide**(`filterA`, `filterB`): `boolean`

Defined in: [collision-filter.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L103)

Determines if two bodies can collide based on their collision filters.

## Parameters

### filterA

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of first body

### filterB

[`CollisionFilter`](../interfaces/CollisionFilter.md)

Collision filter of second body

## Returns

`boolean`

True if the bodies should collide

## Remarks

Checks group rules first, then falls back to category/mask matching.
This is used internally by the physics engine during broad phase collision detection.

## Example

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

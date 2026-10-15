[@ue-too/dynamics](../globals.md) / CollisionFilter

# Interface: CollisionFilter

Defined in: [collision-filter.ts:18](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L18)

Collision filtering configuration for rigid bodies.

## Remarks

Collision filters use a bitmask system to control which bodies can collide
with each other. This is useful for creating layers, groups, and special
collision rules in your physics simulation.

### How Filtering Works

Two bodies A and B can collide if ALL of these conditions are met:
1. `(A.category & B.mask) !== 0` - A's category matches B's mask
2. `(B.category & A.mask) !== 0` - B's category matches A's mask
3. Group rules are satisfied (see group field)

## Properties

### category

> **category**: `number`

Defined in: [collision-filter.ts:27](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L27)

What category this body belongs to (bitmask).

#### Example

```typescript
category: CollisionCategory.PLAYER  // 0x0004
```

***

### group

> **group**: `number`

Defined in: [collision-filter.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L55)

Collision group for special rules.
- 0: No group (use category/mask rules)
- Positive: Bodies in same group ALWAYS collide
- Negative: Bodies in same group NEVER collide

#### Example

```typescript
// Ragdoll parts shouldn't collide with each other
group: -1

// Team members always collide (for physics interactions)
group: 1
```

***

### mask

> **mask**: `number`

Defined in: [collision-filter.ts:38](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L38)

What categories this body can collide with (bitmask).

#### Example

```typescript
// Collide with everything except other players
mask: ~CollisionCategory.PLAYER & 0xFFFF
```

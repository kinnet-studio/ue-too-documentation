[@ue-too/dynamics](../../modules.md) / [index](../index.md) / CollisionFilter

# インターフェイス: CollisionFilter

定義: [collision-filter.ts:18](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/collision-filter.ts#L18)

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

## プロパティ

### category

> **category**: `number`

定義: [collision-filter.ts:27](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/collision-filter.ts#L27)

What category this body belongs to (bitmask).

#### 例

```typescript
category: CollisionCategory.PLAYER  // 0x0004
```

***

### group

> **group**: `number`

定義: [collision-filter.ts:55](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/collision-filter.ts#L55)

Collision group for special rules.
- 0: No group (use category/mask rules)
- Positive: Bodies in same group ALWAYS collide
- Negative: Bodies in same group NEVER collide

#### 例

```typescript
// Ragdoll parts shouldn't collide with each other
group: -1

// Team members always collide (for physics interactions)
group: 1
```

***

### mask

> **mask**: `number`

定義: [collision-filter.ts:38](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/collision-filter.ts#L38)

What categories this body can collide with (bitmask).

#### 例

```typescript
// Collide with everything except other players
mask: ~CollisionCategory.PLAYER & 0xFFFF
```

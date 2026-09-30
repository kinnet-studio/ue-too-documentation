[@ue-too/dynamics](../../modules.md) / [index](../index.md) / CollisionCategory

# 變數: CollisionCategory

> `const` **CollisionCategory**: `object`

定義於: [collision-filter.ts:146](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/collision-filter.ts#L146)

Predefined collision categories for common game entities.

## 型別宣告

### DYNAMIC

> `readonly` **DYNAMIC**: `2` = `0x0002`

### ENEMY

> `readonly` **ENEMY**: `8` = `0x0008`

### PICKUP

> `readonly` **PICKUP**: `64` = `0x0040`

### PLATFORM

> `readonly` **PLATFORM**: `128` = `0x0080`

### PLAYER

> `readonly` **PLAYER**: `4` = `0x0004`

### PROJECTILE

> `readonly` **PROJECTILE**: `16` = `0x0010`

### SENSOR

> `readonly` **SENSOR**: `32` = `0x0020`

### STATIC

> `readonly` **STATIC**: `1` = `0x0001`

## 備註

These are bitmask constants (powers of 2) that can be combined using bitwise OR.
You can define up to 16 categories using values from 0x0001 to 0x8000.

## 範例

Using predefined categories
```typescript
// Player collides with everything except other players
player.collisionFilter = {
  category: CollisionCategory.PLAYER,
  mask: ~CollisionCategory.PLAYER & 0xFFFF,
  group: 0
};

// Projectile only collides with enemies and static objects
projectile.collisionFilter = {
  category: CollisionCategory.PROJECTILE,
  mask: CollisionCategory.ENEMY | CollisionCategory.STATIC,
  group: 0
};
```

[@ue-too/dynamics](../globals.md) / CollisionCategory

# Variable: CollisionCategory

> `const` **CollisionCategory**: `object`

Defined in: [collision-filter.ts:146](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L146)

Predefined collision categories for common game entities.

## Type Declaration

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

## Remarks

These are bitmask constants (powers of 2) that can be combined using bitwise OR.
You can define up to 16 categories using values from 0x0001 to 0x8000.

## Example

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

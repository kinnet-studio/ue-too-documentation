[@ue-too/board](../../modules.md) / [index](../index.md) / Boundaries

# 型別別名: Boundaries

> **Boundaries** = `object`

定義於: [packages/board/src/camera/utils/position.ts:45](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/position.ts#L45)

Position boundaries for camera movement in world space.
Allows optional constraints on x and y axes independently.

## 備註

All coordinates are in world space. Each axis (x, y) can be:
- Fully constrained: both min and max defined
- Partially constrained: only min or max defined
- Unconstrained: neither min nor max defined

This allows for flexible boundary configurations like:
- Horizontal-only boundaries (x constrained, y free)
- Vertical-only boundaries (y constrained, x free)
- One-sided boundaries (e.g., minimum x but no maximum)

## 範例

```typescript
// Fully constrained rectangular boundary
const rect: Boundaries = {
  min: { x: -1000, y: -1000 },
  max: { x: 1000, y: 1000 }
};

// Horizontal constraints only
const horizontal: Boundaries = {
  min: { x: -500 },
  max: { x: 500 }
};

// One-sided constraint (can't go below y=0)
const floor: Boundaries = {
  min: { y: 0 }
};
```

## 屬性

### max?

> `optional` **max**: `object`

定義於: [packages/board/src/camera/utils/position.ts:47](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/position.ts#L47)

Maximum position constraints (both x and y are optional)

#### x?

> `optional` **x**: `number`

#### y?

> `optional` **y**: `number`

***

### min?

> `optional` **min**: `object`

定義於: [packages/board/src/camera/utils/position.ts:46](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/position.ts#L46)

Minimum position constraints (both x and y are optional)

#### x?

> `optional` **x**: `number`

#### y?

> `optional` **y**: `number`

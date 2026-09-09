[@ue-too/dynamics](../../modules.md) / [index](../index.md) / DEFAULT\_COLLISION\_FILTER

# 変数: DEFAULT\_COLLISION\_FILTER

> `const` **DEFAULT\_COLLISION\_FILTER**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

定義: [collision-filter.ts:67](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/collision-filter.ts#L67)

Default collision filter that collides with everything.

## Remarks

Uses category 0x0001 and mask 0xFFFF, meaning it belongs to the first
category and can collide with all 16 categories.

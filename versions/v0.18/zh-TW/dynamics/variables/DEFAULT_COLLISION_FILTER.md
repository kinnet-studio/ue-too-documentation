[@ue-too/dynamics](../globals.md) / DEFAULT\_COLLISION\_FILTER

# Variable: DEFAULT\_COLLISION\_FILTER

> `const` **DEFAULT\_COLLISION\_FILTER**: [`CollisionFilter`](../interfaces/CollisionFilter.md)

Defined in: [collision-filter.ts:67](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/collision-filter.ts#L67)

Default collision filter that collides with everything.

## Remarks

Uses category 0x0001 and mask 0xFFFF, meaning it belongs to the first
category and can collide with all 16 categories.

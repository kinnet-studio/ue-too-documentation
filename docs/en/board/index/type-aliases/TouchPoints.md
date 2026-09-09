[@ue-too/board](../../modules.md) / [index](../index.md) / TouchPoints

# Type Alias: TouchPoints

> **TouchPoints** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:18](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L18)

Represents a single touch point in window coordinates.

## Remarks

Touch points are tracked by their identifiers to maintain consistency across touch events.
Each finger/contact point maintains its identifier for the duration of the touch interaction.

## Properties

### ident

> **ident**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:19](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L19)

The unique identifier for this touch point (from TouchEvent.identifier)

***

### x

> **x**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:20](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L20)

X coordinate in window space

***

### y

> **y**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:21](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L21)

Y coordinate in window space

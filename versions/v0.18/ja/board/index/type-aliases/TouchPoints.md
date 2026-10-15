[@ue-too/board](../../modules.md) / [index](../index.md) / TouchPoints

# 型エイリアス: TouchPoints

> **TouchPoints** = `object`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:18](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L18)

Represents a single touch point in window coordinates.

## Remarks

Touch points are tracked by their identifiers to maintain consistency across touch events.
Each finger/contact point maintains its identifier for the duration of the touch interaction.

## プロパティ

### ident

> **ident**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:19](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L19)

The unique identifier for this touch point (from TouchEvent.identifier)

***

### x

> **x**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:20](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L20)

X coordinate in window space

***

### y

> **y**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:21](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L21)

Y coordinate in window space

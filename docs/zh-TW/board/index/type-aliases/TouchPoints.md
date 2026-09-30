[@ue-too/board](../../modules.md) / [index](../index.md) / TouchPoints

# 型別別名: TouchPoints

> **TouchPoints** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:18](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L18)

Represents a single touch point in window coordinates.

## 備註

Touch points are tracked by their identifiers to maintain consistency across touch events.
Each finger/contact point maintains its identifier for the duration of the touch interaction.

## 屬性

### ident

> **ident**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:19](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L19)

The unique identifier for this touch point (from TouchEvent.identifier)

***

### x

> **x**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L20)

X coordinate in window space

***

### y

> **y**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:21](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L21)

Y coordinate in window space

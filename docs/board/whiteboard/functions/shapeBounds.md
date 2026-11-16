[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / shapeBounds

# Function: shapeBounds()

> **shapeBounds**(`shape`, `env`): [`Box`](../interfaces/Box.md)

Defined in: [packages/board/src/whiteboard/geometry/bounds.ts:41](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/bounds.ts#L41)

The box a shape covers in world units, including half its stroke.

## Parameters

### shape

[`Shape`](../type-aliases/Shape.md)

### env

[`TextEnv`](../interfaces/TextEnv.md)

## Returns

[`Box`](../interfaces/Box.md)

## Remarks

Text measures its widest line (at least half a font size wide) and is as
tall as its lines.

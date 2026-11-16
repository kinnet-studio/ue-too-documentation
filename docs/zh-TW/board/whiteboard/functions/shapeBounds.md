[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / shapeBounds

# 函式: shapeBounds()

> **shapeBounds**(`shape`, `env`): [`Box`](../interfaces/Box.md)

定義於: [packages/board/src/whiteboard/geometry/bounds.ts:41](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/bounds.ts#L41)

The box a shape covers in world units, including half its stroke.

## 參數

### shape

[`Shape`](../type-aliases/Shape.md)

### env

[`TextEnv`](../interfaces/TextEnv.md)

## 回傳

[`Box`](../interfaces/Box.md)

## 備註

Text measures its widest line (at least half a font size wide) and is as
tall as its lines.

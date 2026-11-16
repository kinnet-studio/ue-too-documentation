[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / sketchShape

# 函式: sketchShape()

> **sketchShape**(`shape`): [`SketchPart`](../interfaces/SketchPart.md)[]

定義於: [packages/board/src/whiteboard/render/sketch.ts:297](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/render/sketch.ts#L297)

The hand-drawn paths for a shape, in world units, fills first.

## 參數

### shape

[`Shape`](../type-aliases/Shape.md)

## 回傳

[`SketchPart`](../interfaces/SketchPart.md)[]

## 備註

A pure function of the record: all of its randomness comes from the
shape's seed, so a shape looks the same every frame and for everyone.
Text has no paths (it is drawn with the handwriting font instead).

[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / sketchShape

# Function: sketchShape()

> **sketchShape**(`shape`): [`SketchPart`](../interfaces/SketchPart.md)[]

Defined in: [packages/board/src/whiteboard/render/sketch.ts:270](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/sketch.ts#L270)

The hand-drawn paths for a shape, in world units, fills first.

## Parameters

### shape

[`Shape`](../type-aliases/Shape.md)

## Returns

[`SketchPart`](../interfaces/SketchPart.md)[]

## Remarks

A pure function of the record: all of its randomness comes from the
shape's seed, so a shape looks the same every frame and for everyone.
Text has no paths (it is drawn with the handwriting font instead).

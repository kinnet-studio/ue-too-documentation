[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / ShapePainter

# Class: ShapePainter

Defined in: [packages/board/src/whiteboard/render/painter.ts:65](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/painter.ts#L65)

Paints shapes onto a 2D canvas in their sketchy style.

## Remarks

Each record's paths are built once and cached against the record object
(records are immutable, so an edited shape is a new object and gets new
paths). Colours and widths are applied when painting, so a theme switch
reuses the cache. Paint inside the board's transform: shapes are in world
units.

## Constructors

### Constructor

> **new ShapePainter**(`options`): `ShapePainter`

Defined in: [packages/board/src/whiteboard/render/painter.ts:71](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/painter.ts#L71)

#### Parameters

##### options

###### createPath?

() => `Path2D`

Makes an empty path; `new Path2D()` by default

#### Returns

`ShapePainter`

## Accessors

### cacheSize

#### Get Signature

> **get** **cacheSize**(): `number`

Defined in: [packages/board/src/whiteboard/render/painter.ts:76](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/painter.ts#L76)

How many records have had their paths built (for tests)

##### Returns

`number`

## Methods

### paint()

> **paint**(`ctx`, `shape`, `theme`, `env`, `options`): `void`

Defined in: [packages/board/src/whiteboard/render/painter.ts:81](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/render/painter.ts#L81)

Paints one shape

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### shape

[`Shape`](../type-aliases/Shape.md)

##### theme

[`WhiteboardTheme`](../interfaces/WhiteboardTheme.md)

##### env

[`TextEnv`](../interfaces/TextEnv.md)

##### options

[`PaintOptions`](../interfaces/PaintOptions.md) = `{}`

#### Returns

`void`

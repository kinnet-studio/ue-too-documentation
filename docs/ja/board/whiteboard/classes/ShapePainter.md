[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / ShapePainter

# クラス: ShapePainter

定義: [packages/board/src/whiteboard/render/painter.ts:65](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/render/painter.ts#L65)

Paints shapes onto a 2D canvas in their sketchy style.

## Remarks

Each record's paths are built once and cached against the record object
(records are immutable, so an edited shape is a new object and gets new
paths). Colours and widths are applied when painting, so a theme switch
reuses the cache. Paint inside the board's transform: shapes are in world
units.

## コンストラクター

### コンストラクター

> **new ShapePainter**(`options`): `ShapePainter`

定義: [packages/board/src/whiteboard/render/painter.ts:71](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/render/painter.ts#L71)

#### パラメータ

##### options

###### createPath?

() => `Path2D`

Makes an empty path; `new Path2D()` by default

#### 戻り値

`ShapePainter`

## アクセッサー

### cacheSize

#### 署名を取得する

> **get** **cacheSize**(): `number`

定義: [packages/board/src/whiteboard/render/painter.ts:76](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/render/painter.ts#L76)

How many records have had their paths built (for tests)

##### 戻り値

`number`

## メソッド

### paint()

> **paint**(`ctx`, `shape`, `theme`, `env`, `options`): `void`

定義: [packages/board/src/whiteboard/render/painter.ts:81](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/render/painter.ts#L81)

Paints one shape

#### パラメータ

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

#### 戻り値

`void`

[@ue-too/board](../modules.md) / whiteboard

# whiteboard

The whiteboard editor for `@ue-too/board`: a document of shapes, a
sketchy renderer and drawing tools. Import it from
`@ue-too/board/whiteboard`.

## 備註

It reaches board only through the `@ue-too/board` package name, so it can
move into its own package later without changing its imports.

## Whiteboard Document

- [History](classes/History.md)
- [SnapshotError](classes/SnapshotError.md)
- [WhiteboardDocument](classes/WhiteboardDocument.md)
- [ArrowShape](interfaces/ArrowShape.md)
- [Change](interfaces/Change.md)
- [EllipseShape](interfaces/EllipseShape.md)
- [LineShape](interfaces/LineShape.md)
- [NoteShape](interfaces/NoteShape.md)
- [PenShape](interfaces/PenShape.md)
- [RectShape](interfaces/RectShape.md)
- [ShapeBase](interfaces/ShapeBase.md)
- [ShapeStyle](interfaces/ShapeStyle.md)
- [Snapshot](interfaces/Snapshot.md)
- [TextShape](interfaces/TextShape.md)
- [ChangeSource](type-aliases/ChangeSource.md)
- [ColorName](type-aliases/ColorName.md)
- [RandomBytes](type-aliases/RandomBytes.md)
- [Shape](type-aliases/Shape.md)
- [ShapeFill](type-aliases/ShapeFill.md)
- [ShapeSize](type-aliases/ShapeSize.md)
- [ShapeType](type-aliases/ShapeType.md)
- [COLOR\_NAMES](variables/COLOR_NAMES.md)
- [DEFAULT\_STYLE](variables/DEFAULT_STYLE.md)
- [FONT\_SIZE](variables/FONT_SIZE.md)
- [NOTE\_SIZE](variables/NOTE_SIZE.md)
- [SNAPSHOT\_SCHEMA](variables/SNAPSHOT_SCHEMA.md)
- [SNAPSHOT\_VERSION](variables/SNAPSHOT_VERSION.md)
- [STROKE\_WIDTH](variables/STROKE_WIDTH.md)
- [compareShapes](functions/compareShapes.md)
- [createId](functions/createId.md)
- [createSeed](functions/createSeed.md)
- [indexBetween](functions/indexBetween.md)
- [isShape](functions/isShape.md)
- [parseSnapshot](functions/parseSnapshot.md)

## Whiteboard Editor

- [DomTextInput](classes/DomTextInput.md)
- [Editor](classes/Editor.md)
- [PointerInput](classes/PointerInput.md)
- [EditorBackground](interfaces/EditorBackground.md)
- [EditorOptions](interfaces/EditorOptions.md)
- [EditorState](interfaces/EditorState.md)
- [KeyLike](interfaces/KeyLike.md)
- [PointerInputDeps](interfaces/PointerInputDeps.md)
- [PointerSample](interfaces/PointerSample.md)
- [TextInput](interfaces/TextInput.md)
- [TextInputSession](interfaces/TextInputSession.md)
- [ToolPointer](interfaces/ToolPointer.md)
- [EditorCommand](type-aliases/EditorCommand.md)
- [ToolName](type-aliases/ToolName.md)
- [TOOL\_NAMES](variables/TOOL_NAMES.md)
- [shortcutFor](functions/shortcutFor.md)

## Whiteboard Geometry

- [Box](interfaces/Box.md)
- [TextEnv](interfaces/TextEnv.md)
- [PointPair](type-aliases/PointPair.md)
- [TextMeasure](type-aliases/TextMeasure.md)
- [LINE\_HEIGHT](variables/LINE_HEIGHT.md)
- [NOTE\_PADDING](variables/NOTE_PADDING.md)
- [boxContainsBox](functions/boxContainsBox.md)
- [boxesOverlap](functions/boxesOverlap.md)
- [hitShape](functions/hitShape.md)
- [normalizeBox](functions/normalizeBox.md)
- [roundPoints](functions/roundPoints.md)
- [shapeBounds](functions/shapeBounds.md)
- [shapesInBox](functions/shapesInBox.md)
- [simplifyPoints](functions/simplifyPoints.md)
- [textFont](functions/textFont.md)
- [textLines](functions/textLines.md)
- [unionBoxes](functions/unionBoxes.md)

## Whiteboard Rendering

- [ShapePainter](classes/ShapePainter.md)
- [Handle](interfaces/Handle.md)
- [PaintOptions](interfaces/PaintOptions.md)
- [SelectionOverlay](interfaces/SelectionOverlay.md)
- [SketchPart](interfaces/SketchPart.md)
- [WhiteboardTheme](interfaces/WhiteboardTheme.md)
- [HandleId](type-aliases/HandleId.md)
- [PathOp](type-aliases/PathOp.md)
- [DEFAULT\_THEME](variables/DEFAULT_THEME.md)
- [drawSelectionOverlay](functions/drawSelectionOverlay.md)
- [noteTilt](functions/noteTilt.md)
- [seededRandom](functions/seededRandom.md)
- [sketchShape](functions/sketchShape.md)

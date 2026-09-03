[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / usePixiCanvas

# 函式: usePixiCanvas()

> **usePixiCanvas**\<`C`\>(): `PixiCanvasContextType`\<`C`\>

定義於: [board-pixi-react-integration/src/contexts/pixi/index.tsx:68](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-react-integration/src/contexts/pixi/index.tsx#L68)

Access the PixiJS canvas context with typed components.

## 型別參數

### C

`C` *extends* `BaseAppComponents` = `BaseAppComponents`

The component type to resolve. Defaults to [ResolvedComponents](../type-aliases/ResolvedComponents.md)
which uses the global [PixiCanvasRegistry](../interfaces/PixiCanvasRegistry.md) augmentation if available,
otherwise falls back to BaseAppComponents.
For multi-page apps with different component types per page, pass the
specific component type explicitly.

## 回傳

`PixiCanvasContextType`\<`C`\>

The pixi canvas context with typed result and setResult

## 範例

```typescript
// Single-app project with module augmentation (no generic needed):
const { result } = usePixiCanvas();

// Multi-page project with explicit type:
const { result } = usePixiCanvas<TrainEditorComponents>();
```

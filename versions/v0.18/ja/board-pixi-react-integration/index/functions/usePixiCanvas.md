[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / usePixiCanvas

# 関数: usePixiCanvas()

> **usePixiCanvas**\<`C`\>(): `PixiCanvasContextType`\<`C`\>

定義: [board-pixi-react-integration/src/contexts/pixi/index.tsx:68](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/contexts/pixi/index.tsx#L68)

Access the PixiJS canvas context with typed components.

## 型パラメーター

### C

`C` *extends* `BaseAppComponents` = `BaseAppComponents`

The component type to resolve. Defaults to [ResolvedComponents](../type-aliases/ResolvedComponents.md)
which uses the global [PixiCanvasRegistry](../interfaces/PixiCanvasRegistry.md) augmentation if available,
otherwise falls back to BaseAppComponents.
For multi-page apps with different component types per page, pass the
specific component type explicitly.

## 戻り値

`PixiCanvasContextType`\<`C`\>

The pixi canvas context with typed result and setResult

## 例

```typescript
// Single-app project with module augmentation (no generic needed):
const { result } = usePixiCanvas();

// Multi-page project with explicit type:
const { result } = usePixiCanvas<TrainEditorComponents>();
```

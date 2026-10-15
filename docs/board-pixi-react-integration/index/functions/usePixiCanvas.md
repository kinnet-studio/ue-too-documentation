[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / usePixiCanvas

# Function: usePixiCanvas()

> **usePixiCanvas**\<`C`\>(): `PixiCanvasContextType`\<`C`\>

Defined in: [board-pixi-react-integration/src/contexts/pixi/index.tsx:68](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board-pixi-react-integration/src/contexts/pixi/index.tsx#L68)

Access the PixiJS canvas context with typed components.

## Type Parameters

### C

`C` *extends* `BaseAppComponents` = `BaseAppComponents`

The component type to resolve. Defaults to [ResolvedComponents](../type-aliases/ResolvedComponents.md)
which uses the global [PixiCanvasRegistry](../interfaces/PixiCanvasRegistry.md) augmentation if available,
otherwise falls back to BaseAppComponents.
For multi-page apps with different component types per page, pass the
specific component type explicitly.

## Returns

`PixiCanvasContextType`\<`C`\>

The pixi canvas context with typed result and setResult

## Example

```typescript
// Single-app project with module augmentation (no generic needed):
const { result } = usePixiCanvas();

// Multi-page project with explicit type:
const { result } = usePixiCanvas<TrainEditorComponents>();
```

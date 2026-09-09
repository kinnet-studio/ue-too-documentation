[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProvider

# 関数: BoardProvider()

> **BoardProvider**(`props`): `Element`

定義: [hooks/useBoardify.tsx:384](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/hooks/useBoardify.tsx#L384)

Provider component for sharing a Board instance across the component tree.

## パラメータ

### props

Component props

#### children

`ReactNode`

Child components that will have access to the board

## 戻り値

`Element`

## Remarks

This component creates a single Board instance and makes it available to all child
components via the [useBoard](useBoard.md) hook. This is the recommended way to use the
board in React applications when you need to access it from multiple components.

The board instance is created once when the provider mounts and persists for the
lifetime of the provider.

## 例

```tsx
function App() {
  return (
    <BoardProvider>
      <Board width={800} height={600} />
      <CameraControls />
      <CameraStateDisplay />
    </BoardProvider>
  );
}
```

## 参照

[useBoard](useBoard.md) for accessing the board instance

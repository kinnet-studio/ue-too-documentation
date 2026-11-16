[@ue-too/board-react-adapter](../globals.md) / BoardProvider

# Function: BoardProvider()

> **BoardProvider**(`props`): `Element`

Defined in: [hooks/useBoardify.tsx:383](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useBoardify.tsx#L383)

Provider component for sharing a Board instance across the component tree.

## Parameters

### props

Component props

#### children

`ReactNode`

Child components that will have access to the board

## Returns

`Element`

## Remarks

This component creates a single Board instance and makes it available to all child
components via the [useBoard](useBoard.md) hook. This is the recommended way to use the
board in React applications when you need to access it from multiple components.

The board instance is created once when the provider mounts and persists for the
lifetime of the provider.

## Example

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

## See

[useBoard](useBoard.md) for accessing the board instance

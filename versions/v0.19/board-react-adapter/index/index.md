[@ue-too/board-react-adapter](../modules.md) / index

# index

React adapter for the @ue-too/board infinite canvas library.

## Remarks

This package provides React components and hooks to integrate the @ue-too/board
infinite canvas into React applications. It handles lifecycle management, state
synchronization, and provides idiomatic React patterns for working with the board.

## Core Components

- **[Board](functions/Board.md)**: Main component that renders the canvas and manages the board instance
- **[BoardProvider](functions/BoardProvider.md)**: Context provider for sharing board across components

## State Hooks

- **[useBoardCameraState](functions/useBoardCameraState.md)**: Subscribe to specific camera state (position, rotation, zoomLevel)
- **[useAllBoardCameraState](functions/useAllBoardCameraState.md)**: Subscribe to all camera state at once
- **[useBoard](functions/useBoard.md)**: Access the board instance from context
- **[useBoardCamera](functions/useBoardCamera.md)**: Access the camera instance from context

## Control Hooks

- **[useCameraInput](functions/useCameraInput.md)**: Get camera control functions (pan, zoom, rotate)
- **[useCustomCameraMux](functions/useCustomCameraMux.md)**: Set a custom camera multiplexer
- **useBoardify**: Create a standalone board instance (alternative to provider)

## Animation Hooks

- **[useAnimationFrame](functions/useAnimationFrame.md)**: Generic animation frame hook
- **[useAnimationFrameWithBoard](functions/useAnimationFrameWithBoard.md)**: Animation loop integrated with board.step()

## Key Features

- **Automatic State Sync**: Camera state changes trigger React re-renders
- **Performance Optimized**: Uses `useSyncExternalStore` for efficient subscriptions
- **Type-Safe**: Full TypeScript support with type inference
- **Context-Based**: Share board instance across component tree
- **Lifecycle Management**: Automatic cleanup and resource management

## Examples

Basic usage
```tsx
import Board from '@ue-too/board-react-adapter';

function App() {
  return (
    <Board
      width={800}
      height={600}
      animationCallback={(timestamp, ctx) => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 100, 100);
      }}
    />
  );
}
```

With camera controls
```tsx
import Board, {
  useBoardCameraState,
  useCameraInput
} from '@ue-too/board-react-adapter';

function Controls() {
  const position = useBoardCameraState('position');
  const { panToWorld, zoomTo } = useCameraInput();

  return (
    <div>
      <p>Position: {position.x}, {position.y}</p>
      <button onClick={() => panToWorld({ x: 0, y: 0 })}>Center</button>
      <button onClick={() => zoomTo(1.0)}>Reset Zoom</button>
    </div>
  );
}

function App() {
  return (
    <Board width={800} height={600}>
      <Controls />
    </Board>
  );
}
```

## See

[Board](functions/Board.md) for the main component

## Components

- [BoardProps](type-aliases/BoardProps.md)
- [Board](functions/Board.md)
- [BoardProvider](functions/BoardProvider.md)

## Hooks

- [useAllBoardCameraState](functions/useAllBoardCameraState.md)
- [useAnimationFrame](functions/useAnimationFrame.md)
- [useAnimationFrameWithBoard](functions/useAnimationFrameWithBoard.md)
- [useBoard](functions/useBoard.md)
- [useBoardCamera](functions/useBoardCamera.md)
- [useBoardCameraState](functions/useBoardCameraState.md)
- [useCameraInput](functions/useCameraInput.md)
- [useCustomCameraMux](functions/useCustomCameraMux.md)

## Other

- [useCanvasDimension](functions/useCanvasDimension.md)
- [useCanvasProxy](functions/useCanvasProxy.md)
- [useCanvasProxyWithRef](functions/useCanvasProxyWithRef.md)
- [useCoordinateConversion](functions/useCoordinateConversion.md)
- [useCustomInputHandling](functions/useCustomInputHandling.md)
- [useCustomKMTEventParser](functions/useCustomKMTEventParser.md)
- [useCustomTouchEventParser](functions/useCustomTouchEventParser.md)

[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / Board

# 関数: Board()

> **Board**(`props`): `Element`

定義: [components/Board.tsx:185](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-react-adapter/src/components/Board.tsx#L185)

Main Board component with provider wrapper for React applications.

## パラメータ

### props

[`BoardProps`](../type-aliases/BoardProps.md)

Component props

## 戻り値

`Element`

## Remarks

This component provides a complete infinite canvas solution for React. It combines:
- A [BoardProvider](BoardProvider.md) to share the board instance across components
- A canvas element configured with the @ue-too/board package
- An integrated animation loop for drawing
- Support for child components that can access board state and controls

## Features

- **Infinite Canvas**: Pan, zoom, and rotate with mouse/touch input
- **Animation Loop**: Automatic rendering loop with customizable draw callback
- **React Integration**: Use hooks to access camera state and controls
- **Fullscreen Support**: Optional auto-resize with window
- **Type-Safe**: Full TypeScript support

## Usage Pattern

1. Render the Board component
2. Provide an animation callback for drawing
3. Use child components with board hooks for UI controls
4. Access camera state reactively via hooks

## Examples

Basic usage with drawing
```tsx
function App() {
  return (
    <Board
      width={800}
      height={600}
      animationCallback={(timestamp, ctx) => {
        // Draw a rectangle at world position (0, 0)
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 100, 100);
      }}
    />
  );
}
```

With child components and camera controls
```tsx
function CameraControls() {
  const { panToWorld, zoomTo } = useCameraInput();
  const position = useBoardCameraState('position');

  return (
    <div style={{ position: 'absolute', top: 10, left: 10 }}>
      <p>Position: ({position.x.toFixed(0)}, {position.y.toFixed(0)})</p>
      <button onClick={() => panToWorld({ x: 0, y: 0 })}>Center</button>
      <button onClick={() => zoomTo(1.0)}>Reset Zoom</button>
    </div>
  );
}

function App() {
  return (
    <Board width={800} height={600} animationCallback={drawScene}>
      <CameraControls />
    </Board>
  );
}
```

Fullscreen mode
```tsx
function App() {
  return (
    <Board
      fullScreen
      animationCallback={(timestamp, ctx) => {
        // Canvas automatically resizes to window size
        ctx.fillStyle = 'green';
        ctx.fillRect(-50, -50, 100, 100);
      }}
    />
  );
}
```

## 参照

 - [useBoardCameraState](useBoardCameraState.md) for accessing camera state
 - [useCameraInput](useCameraInput.md) for camera control functions
 - [useBoard](useBoard.md) for accessing the board instance

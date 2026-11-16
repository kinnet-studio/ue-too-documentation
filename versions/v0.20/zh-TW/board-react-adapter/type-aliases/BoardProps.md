[@ue-too/board-react-adapter](../globals.md) / BoardProps

# Type Alias: BoardProps

> **BoardProps** = `object`

Defined in: [components/Board.tsx:31](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L31)

Props for the Board component.

## Properties

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

Defined in: [components/Board.tsx:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L39)

Callback function for drawing on each animation frame

#### Parameters

##### timestamp

`number`

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### children?

> `optional` **children**: `React.ReactNode`

Defined in: [components/Board.tsx:44](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L44)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

Defined in: [components/Board.tsx:33](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L33)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

Defined in: [components/Board.tsx:37](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L37)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

Defined in: [components/Board.tsx:35](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/components/Board.tsx#L35)

Canvas width in pixels

[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProps

# Type Alias: BoardProps

> **BoardProps** = `object`

Defined in: [components/Board.tsx:30](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L30)

Props for the Board component.

## Properties

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

Defined in: [components/Board.tsx:38](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L38)

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

Defined in: [components/Board.tsx:43](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L43)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

Defined in: [components/Board.tsx:32](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L32)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

Defined in: [components/Board.tsx:36](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L36)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

Defined in: [components/Board.tsx:34](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/components/Board.tsx#L34)

Canvas width in pixels

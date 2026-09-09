[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / BoardProps

# 型別別名: BoardProps

> **BoardProps** = `object`

定義於: [components/Board.tsx:30](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L30)

Props for the Board component.

## 屬性

### animationCallback()?

> `optional` **animationCallback**: (`timestamp`, `ctx`) => `void`

定義於: [components/Board.tsx:38](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L38)

Callback function for drawing on each animation frame

#### 參數

##### timestamp

`number`

##### ctx

`CanvasRenderingContext2D`

#### 回傳

`void`

***

### children?

> `optional` **children**: `React.ReactNode`

定義於: [components/Board.tsx:43](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L43)

Child components that can access the board via hooks

***

### fullScreen?

> `optional` **fullScreen**: `boolean`

定義於: [components/Board.tsx:32](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L32)

Enable fullscreen mode (canvas resizes with window)

***

### height?

> `optional` **height**: `number`

定義於: [components/Board.tsx:36](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L36)

Canvas height in pixels

***

### width?

> `optional` **width**: `number`

定義於: [components/Board.tsx:34](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/components/Board.tsx#L34)

Canvas width in pixels

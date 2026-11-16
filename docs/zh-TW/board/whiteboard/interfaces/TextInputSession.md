[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / TextInputSession

# 介面: TextInputSession

定義於: [packages/board/src/whiteboard/editor/text-input.ts:8](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L8)

One text-editing session: where the text sits and what to report back.

## 屬性

### color

> **color**: `string`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:12](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L12)

***

### font

> **font**: `string`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:11](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L11)

CSS font at zoom 1

***

### lineHeight

> **lineHeight**: `number`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:14](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L14)

In CSS pixels at zoom 1

***

### rect

> **rect**: [`Box`](Box.md)

定義於: [packages/board/src/whiteboard/editor/text-input.ts:19](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L19)

Where the text sits: `x`, `y` in window (client) CSS pixels, `w`, `h`
its size at zoom 1

***

### scale

> **scale**: `number`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:21](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L21)

Camera zoom

***

### text

> **text**: `string`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:9](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L9)

***

### wrap

> **wrap**: `boolean`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:23](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L23)

Notes wrap to their width; text shapes grow to fit

## 方法

### onCommit()

> **onCommit**(`text`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:25](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L25)

#### 參數

##### text

`string`

#### 回傳

`void`

***

### onInput()

> **onInput**(`text`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:24](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L24)

#### 參數

##### text

`string`

#### 回傳

`void`

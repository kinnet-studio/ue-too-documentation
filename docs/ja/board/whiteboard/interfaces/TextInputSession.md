[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / TextInputSession

# インターフェイス: TextInputSession

定義: [packages/board/src/whiteboard/editor/text-input.ts:8](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L8)

One text-editing session: where the text sits and what to report back.

## プロパティ

### color

> **color**: `string`

定義: [packages/board/src/whiteboard/editor/text-input.ts:12](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L12)

***

### font

> **font**: `string`

定義: [packages/board/src/whiteboard/editor/text-input.ts:11](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L11)

CSS font at zoom 1

***

### lineHeight

> **lineHeight**: `number`

定義: [packages/board/src/whiteboard/editor/text-input.ts:14](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L14)

In CSS pixels at zoom 1

***

### rect

> **rect**: [`Box`](Box.md)

定義: [packages/board/src/whiteboard/editor/text-input.ts:19](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L19)

Where the text sits: `x`, `y` in window (client) CSS pixels, `w`, `h`
its size at zoom 1

***

### scale

> **scale**: `number`

定義: [packages/board/src/whiteboard/editor/text-input.ts:21](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L21)

Camera zoom

***

### text

> **text**: `string`

定義: [packages/board/src/whiteboard/editor/text-input.ts:9](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L9)

***

### wrap

> **wrap**: `boolean`

定義: [packages/board/src/whiteboard/editor/text-input.ts:23](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L23)

Notes wrap to their width; text shapes grow to fit

## メソッド

### onCommit()

> **onCommit**(`text`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:25](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L25)

#### パラメータ

##### text

`string`

#### 戻り値

`void`

***

### onInput()

> **onInput**(`text`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:24](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L24)

#### パラメータ

##### text

`string`

#### 戻り値

`void`

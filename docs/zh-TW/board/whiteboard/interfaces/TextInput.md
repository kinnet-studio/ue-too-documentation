[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / TextInput

# 介面: TextInput

定義於: [packages/board/src/whiteboard/editor/text-input.ts:35](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L35)

Where typing happens while a text shape or note is edited. The editor
ships a `<textarea>` overlay (`DomTextInput`); tests and other hosts can
supply their own.

## 屬性

### active

> `readonly` **active**: `boolean`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:41](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L41)

## 方法

### close()

> **close**(): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L40)

Ends editing, committing the text

#### 回傳

`void`

***

### open()

> **open**(`session`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:36](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L36)

#### 參數

##### session

[`TextInputSession`](TextInputSession.md)

#### 回傳

`void`

***

### reposition()

> **reposition**(`rect`, `scale`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L38)

Follows the camera while editing

#### 參數

##### rect

[`Box`](Box.md)

##### scale

`number`

#### 回傳

`void`

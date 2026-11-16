[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / TextInput

# インターフェイス: TextInput

定義: [packages/board/src/whiteboard/editor/text-input.ts:35](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L35)

Where typing happens while a text shape or note is edited. The editor
ships a `<textarea>` overlay (`DomTextInput`); tests and other hosts can
supply their own.

## プロパティ

### active

> `readonly` **active**: `boolean`

定義: [packages/board/src/whiteboard/editor/text-input.ts:41](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L41)

## メソッド

### close()

> **close**(): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:40](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L40)

Ends editing, committing the text

#### 戻り値

`void`

***

### open()

> **open**(`session`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:36](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L36)

#### パラメータ

##### session

[`TextInputSession`](TextInputSession.md)

#### 戻り値

`void`

***

### reposition()

> **reposition**(`rect`, `scale`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:38](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L38)

Follows the camera while editing

#### パラメータ

##### rect

[`Box`](Box.md)

##### scale

`number`

#### 戻り値

`void`

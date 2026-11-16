[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / DomTextInput

# 類別: DomTextInput

定義於: [packages/board/src/whiteboard/editor/text-input.ts:56](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L56)

The editor's built-in [TextInput](../interfaces/TextInput.md): a transparent `<textarea>` laid
over the shape, so typing, IME composition (Japanese, Chinese), selection
and the clipboard all work as in any text field.

## 備註

The textarea is `position: fixed` at the session's window coordinates and
scaled with the camera. Enter adds a line; Escape or leaving the field
ends editing.

## 實作

- [`TextInput`](../interfaces/TextInput.md)

## 建構函式

### 建構函式

> **new DomTextInput**(`_parent`): `DomTextInput`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:61](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L61)

#### 參數

##### \_parent

`HTMLElement`

The element the textarea is added to

#### 回傳

`DomTextInput`

## 存取器

### active

#### Getter 簽章

> **get** **active**(): `boolean`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:63](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L63)

##### 回傳

`boolean`

#### 實作了

[`TextInput`](../interfaces/TextInput.md).[`active`](../interfaces/TextInput.md#active)

## 方法

### close()

> **close**(): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:123](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L123)

Ends editing, committing the text

#### 回傳

`void`

#### 實作了

[`TextInput`](../interfaces/TextInput.md).[`close`](../interfaces/TextInput.md#close)

***

### open()

> **open**(`session`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:67](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L67)

#### 參數

##### session

[`TextInputSession`](../interfaces/TextInputSession.md)

#### 回傳

`void`

#### 實作了

[`TextInput`](../interfaces/TextInput.md).[`open`](../interfaces/TextInput.md#open)

***

### reposition()

> **reposition**(`rect`, `scale`): `void`

定義於: [packages/board/src/whiteboard/editor/text-input.ts:119](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/text-input.ts#L119)

Follows the camera while editing

#### 參數

##### rect

[`Box`](../interfaces/Box.md)

##### scale

`number`

#### 回傳

`void`

#### 實作了

[`TextInput`](../interfaces/TextInput.md).[`reposition`](../interfaces/TextInput.md#reposition)

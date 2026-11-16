[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / DomTextInput

# クラス: DomTextInput

定義: [packages/board/src/whiteboard/editor/text-input.ts:56](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L56)

The editor's built-in [TextInput](../interfaces/TextInput.md): a transparent `<textarea>` laid
over the shape, so typing, IME composition (Japanese, Chinese), selection
and the clipboard all work as in any text field.

## Remarks

The textarea is `position: fixed` at the session's window coordinates and
scaled with the camera. Enter adds a line; Escape or leaving the field
ends editing.

## 実装

- [`TextInput`](../interfaces/TextInput.md)

## コンストラクター

### コンストラクター

> **new DomTextInput**(`_parent`): `DomTextInput`

定義: [packages/board/src/whiteboard/editor/text-input.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L61)

#### パラメータ

##### \_parent

`HTMLElement`

The element the textarea is added to

#### 戻り値

`DomTextInput`

## アクセッサー

### active

#### 署名を取得する

> **get** **active**(): `boolean`

定義: [packages/board/src/whiteboard/editor/text-input.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L63)

##### 戻り値

`boolean`

#### の実装

[`TextInput`](../interfaces/TextInput.md).[`active`](../interfaces/TextInput.md#active)

## メソッド

### close()

> **close**(): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:123](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L123)

Ends editing, committing the text

#### 戻り値

`void`

#### の実装

[`TextInput`](../interfaces/TextInput.md).[`close`](../interfaces/TextInput.md#close)

***

### open()

> **open**(`session`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:67](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L67)

#### パラメータ

##### session

[`TextInputSession`](../interfaces/TextInputSession.md)

#### 戻り値

`void`

#### の実装

[`TextInput`](../interfaces/TextInput.md).[`open`](../interfaces/TextInput.md#open)

***

### reposition()

> **reposition**(`rect`, `scale`): `void`

定義: [packages/board/src/whiteboard/editor/text-input.ts:119](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L119)

Follows the camera while editing

#### パラメータ

##### rect

[`Box`](../interfaces/Box.md)

##### scale

`number`

#### 戻り値

`void`

#### の実装

[`TextInput`](../interfaces/TextInput.md).[`reposition`](../interfaces/TextInput.md#reposition)

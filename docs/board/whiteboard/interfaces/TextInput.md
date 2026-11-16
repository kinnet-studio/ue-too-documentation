[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / TextInput

# Interface: TextInput

Defined in: [packages/board/src/whiteboard/editor/text-input.ts:35](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L35)

Where typing happens while a text shape or note is edited. The editor
ships a `<textarea>` overlay (`DomTextInput`); tests and other hosts can
supply their own.

## Properties

### active

> `readonly` **active**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/text-input.ts:41](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L41)

## Methods

### close()

> **close**(): `void`

Defined in: [packages/board/src/whiteboard/editor/text-input.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L40)

Ends editing, committing the text

#### Returns

`void`

***

### open()

> **open**(`session`): `void`

Defined in: [packages/board/src/whiteboard/editor/text-input.ts:36](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L36)

#### Parameters

##### session

[`TextInputSession`](TextInputSession.md)

#### Returns

`void`

***

### reposition()

> **reposition**(`rect`, `scale`): `void`

Defined in: [packages/board/src/whiteboard/editor/text-input.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/text-input.ts#L38)

Follows the camera while editing

#### Parameters

##### rect

[`Box`](Box.md)

##### scale

`number`

#### Returns

`void`

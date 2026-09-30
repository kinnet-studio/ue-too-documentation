[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumKeyboardEvent

# 型別別名: MinimumKeyboardEvent

> **MinimumKeyboardEvent** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:96](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L96)

Minimal keyboard event interface for framework interoperability.

## 備註

This subset of the DOM KeyboardEvent interface allows the parser to work with
both vanilla JavaScript KeyboardEvents and framework-wrapped events.

## 屬性

### key

> **key**: `string`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:100](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L100)

The key that was pressed

***

### preventDefault()

> **preventDefault**: () => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:98](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L98)

Prevents default keyboard behavior

#### 回傳

`void`

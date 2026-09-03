[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumKeyboardEvent

# 型エイリアス: MinimumKeyboardEvent

> **MinimumKeyboardEvent** = `object`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:96](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L96)

Minimal keyboard event interface for framework interoperability.

## Remarks

This subset of the DOM KeyboardEvent interface allows the parser to work with
both vanilla JavaScript KeyboardEvents and framework-wrapped events.

## プロパティ

### key

> **key**: `string`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:100](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L100)

The key that was pressed

***

### preventDefault()

> **preventDefault**: () => `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:98](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L98)

Prevents default keyboard behavior

#### 戻り値

`void`

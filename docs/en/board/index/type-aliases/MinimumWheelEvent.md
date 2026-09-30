[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumWheelEvent

# Type Alias: MinimumWheelEvent

> **MinimumWheelEvent** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:72](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L72)

Minimal wheel event interface for framework interoperability.

## Remarks

This subset of the DOM WheelEvent interface allows the parser to work with
both vanilla JavaScript WheelEvents and framework-wrapped events.

## Properties

### clientX

> **clientX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:82](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L82)

X coordinate in window space

***

### clientY

> **clientY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:84](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L84)

Y coordinate in window space

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:80](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L80)

Whether Ctrl key is pressed (for zoom)

***

### deltaX

> **deltaX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:76](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L76)

Horizontal scroll delta

***

### deltaY

> **deltaY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:78](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L78)

Vertical scroll delta

***

### preventDefault()

> **preventDefault**: () => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:74](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L74)

Prevents default scroll behavior

#### Returns

`void`

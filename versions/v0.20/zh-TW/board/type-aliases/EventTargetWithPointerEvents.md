[@ue-too/board](../globals.md) / EventTargetWithPointerEvents

# Type Alias: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:105](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L105)

Minimal event target interface for framework interoperability.

## Remarks

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## Properties

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L106)

#### Parameters

##### type

`string`

##### listener

(`event`) => `void`

##### options?

###### passive

`boolean`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**: (`type`, `listener`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:111](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L111)

#### Parameters

##### type

`string`

##### listener

(`event`) => `void`

#### Returns

`void`

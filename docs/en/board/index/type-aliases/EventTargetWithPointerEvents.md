[@ue-too/board](../../modules.md) / [index](../index.md) / EventTargetWithPointerEvents

# Type Alias: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:112](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L112)

Minimal event target interface for framework interoperability.

## Remarks

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## Properties

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:113](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L113)

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

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:118](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L118)

#### Parameters

##### type

`string`

##### listener

(`event`) => `void`

#### Returns

`void`

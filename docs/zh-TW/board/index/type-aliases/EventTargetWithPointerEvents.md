[@ue-too/board](../../modules.md) / [index](../index.md) / EventTargetWithPointerEvents

# 型別別名: EventTargetWithPointerEvents

> **EventTargetWithPointerEvents** = `object`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L112)

Minimal event target interface for framework interoperability.

## 備註

This interface allows the parser to attach event listeners to different
types of event targets (HTMLElement, Canvas, PixiJS Container, etc.).

## 屬性

### addEventListener()

> **addEventListener**: (`type`, `listener`, `options?`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:113](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L113)

#### 參數

##### type

`string`

##### listener

(`event`) => `void`

##### options?

###### passive

`boolean`

#### 回傳

`void`

***

### removeEventListener()

> **removeEventListener**: (`type`, `listener`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:118](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L118)

#### 參數

##### type

`string`

##### listener

(`event`) => `void`

#### 回傳

`void`

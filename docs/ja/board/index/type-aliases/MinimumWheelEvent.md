[@ue-too/board](../../modules.md) / [index](../index.md) / MinimumWheelEvent

# 型エイリアス: MinimumWheelEvent

> **MinimumWheelEvent** = `object`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:72](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L72)

Minimal wheel event interface for framework interoperability.

## Remarks

This subset of the DOM WheelEvent interface allows the parser to work with
both vanilla JavaScript WheelEvents and framework-wrapped events.

## プロパティ

### clientX

> **clientX**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:82](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L82)

X coordinate in window space

***

### clientY

> **clientY**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:84](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L84)

Y coordinate in window space

***

### ctrlKey

> **ctrlKey**: `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:80](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L80)

Whether Ctrl key is pressed (for zoom)

***

### deltaX

> **deltaX**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:76](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L76)

Horizontal scroll delta

***

### deltaY

> **deltaY**: `number`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:78](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L78)

Vertical scroll delta

***

### preventDefault()

> **preventDefault**: () => `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:74](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L74)

Prevents default scroll behavior

#### 戻り値

`void`

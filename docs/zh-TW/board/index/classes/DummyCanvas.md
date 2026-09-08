[@ue-too/board](../../modules.md) / [index](../index.md) / DummyCanvas

# 類別: DummyCanvas

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:98](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L98)

No-op implementation of Canvas interface for web worker relay contexts.

## 備註

This class is used when an input state machine is configured to relay events to a web worker
rather than perform actual canvas operations. The state machine requires a Canvas in its context,
but in the relay scenario, no actual canvas operations are needed - events are simply forwarded
to the worker thread.

All properties return default/empty values and all methods are no-ops.

## 參閱

[DummyKmtInputContext](DummyKmtInputContext.md)

## 實作

- [`Canvas`](../interfaces/Canvas.md)

## 建構函式

### 建構函式

> **new DummyCanvas**(): `DummyCanvas`

#### 回傳

`DummyCanvas`

## 屬性

### detached

> **detached**: `boolean` = `false`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:108](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L108)

Whether the canvas is currently detached from the DOM

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

> **dimensions**: `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:103](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L103)

Combined dimensions and position information

#### height

> **height**: `number`

#### position

> **position**: `Point`

#### width

> **width**: `number`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

> **height**: `number` = `0`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:100](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L100)

The canvas height in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

> **position**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:101](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L101)

The top-left position of the canvas in window coordinates

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### setCursor()

> **setCursor**: (`style`) => `void` = `NO_OP`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:102](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L102)

Sets the CSS cursor style for visual feedback

#### 參數

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**: () => `void` = `NO_OP`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:109](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L109)

Cleanup method to dispose of resources and event listeners

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)

***

### width

> **width**: `number` = `0`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:99](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L99)

The canvas width in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

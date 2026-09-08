[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputEventOutputMapping

# 型エイリアス: KmtInputEventOutputMapping

> **KmtInputEventOutputMapping** = `object`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:193](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L193)

Mapping of events to their output types.

## Remarks

Defines which events produce outputs. Not all events produce outputs - some only
cause state transitions. This mapping is used by the state machine framework for
type-safe output handling.

## プロパティ

### leftPointerMove

> **leftPointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:197](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L197)

***

### middlePointerMove

> **middlePointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:194](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L194)

***

### scroll

> **scroll**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:195](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L195)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:196](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L196)

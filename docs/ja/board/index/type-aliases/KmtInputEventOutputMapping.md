[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputEventOutputMapping

# 型エイリアス: KmtInputEventOutputMapping

> **KmtInputEventOutputMapping** = `object`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:196](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L196)

Mapping of events to their output types.

## Remarks

Defines which events produce outputs. Not all events produce outputs - some only
cause state transitions. This mapping is used by the state machine framework for
type-safe output handling.

## プロパティ

### leftPointerMove

> **leftPointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:200](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L200)

***

### middlePointerMove

> **middlePointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:197](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L197)

***

### scroll

> **scroll**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:198](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L198)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`KmtOutputEvent`](KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:199](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L199)

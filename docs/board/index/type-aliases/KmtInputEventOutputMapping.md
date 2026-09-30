[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputEventOutputMapping

# Type Alias: KmtInputEventOutputMapping

> **KmtInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:196](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L196)

Mapping of events to their output types.

## Remarks

Defines which events produce outputs. Not all events produce outputs - some only
cause state transitions. This mapping is used by the state machine framework for
type-safe output handling.

## Properties

### leftPointerMove

> **leftPointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:200](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L200)

***

### middlePointerMove

> **middlePointerMove**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:197](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L197)

***

### scroll

> **scroll**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:198](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L198)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`KmtOutputEvent`](KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:199](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L199)

[@ue-too/being](../../modules.md) / [index](../index.md) / createVendingMachine

# 函式: createVendingMachine()

> **createVendingMachine**(): [`TemplateStateMachine`](../classes/TemplateStateMachine.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md), [`BaseContext`](../interfaces/BaseContext.md), [`VendingMachineStates`](../type-aliases/VendingMachineStates.md), [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md)\>\>

定義於: [vending-machine-example.ts:193](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/vending-machine-example.ts#L193)

Creates a demo vending machine used by tests and the examples visualizer.

## 回傳

[`TemplateStateMachine`](../classes/TemplateStateMachine.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md), [`BaseContext`](../interfaces/BaseContext.md), [`VendingMachineStates`](../type-aliases/VendingMachineStates.md), [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md)\>\>

## 備註

A 4-state machine (`IDLE`, `ONE_DOLLAR_INSERTED`, `TWO_DOLLARS_INSERTED`,
`THREE_DOLLARS_INSERTED`) modeling a simple vending machine that accepts
one-dollar bills and dispenses a Coke, Red Bull, or water once enough
money has been inserted, with a `cancelTransaction` event to refund and
return to `IDLE`. Each call returns a machine with its own context.

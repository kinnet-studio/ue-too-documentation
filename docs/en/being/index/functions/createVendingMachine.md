[@ue-too/being](../../modules.md) / [index](../index.md) / createVendingMachine

# Function: createVendingMachine()

> **createVendingMachine**(): [`TemplateStateMachine`](../classes/TemplateStateMachine.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md), [`BaseContext`](../interfaces/BaseContext.md), [`VendingMachineStates`](../type-aliases/VendingMachineStates.md), [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md)\>\>

Defined in: [vending-machine-example.ts:193](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/vending-machine-example.ts#L193)

Creates a demo vending machine used by tests and the examples visualizer.

## Returns

[`TemplateStateMachine`](../classes/TemplateStateMachine.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md), [`BaseContext`](../interfaces/BaseContext.md), [`VendingMachineStates`](../type-aliases/VendingMachineStates.md), [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<[`VendingMachineEvents`](../type-aliases/VendingMachineEvents.md)\>\>

## Remarks

A 4-state machine (`IDLE`, `ONE_DOLLAR_INSERTED`, `TWO_DOLLARS_INSERTED`,
`THREE_DOLLARS_INSERTED`) modeling a simple vending machine that accepts
one-dollar bills and dispenses a Coke, Red Bull, or water once enough
money has been inserted, with a `cancelTransaction` event to refund and
return to `IDLE`. Each call returns a machine with its own context.

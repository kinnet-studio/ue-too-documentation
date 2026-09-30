[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# Type Alias: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

Defined in: [interface.ts:297](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L297)

## Type Parameters

### States

`States` *extends* `string` = `"IDLE"`

## Parameters

### currentState

`States`

### nextState

`States`

## Returns

`void`

## Description

This is the type for the callback that is called when the state changes.

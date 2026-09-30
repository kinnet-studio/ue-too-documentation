[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputCallback

# Type Alias: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

Defined in: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:126](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L126)

Callback function type for raw user input events.

## Type Parameters

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

The event name key from RawUserInputEventMap

## Parameters

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## Returns

`void`

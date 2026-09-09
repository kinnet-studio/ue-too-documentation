[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputCallback

# 型別別名: RawUserInputCallback()\<K\>

> **RawUserInputCallback**\<`K`\> = (`event`) => `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:126](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L126)

Callback function type for raw user input events.

## 型別參數

### K

`K` *extends* keyof [`RawUserInputEventMap`](RawUserInputEventMap.md)

The event name key from RawUserInputEventMap

## 參數

### event

[`RawUserInputEventMap`](RawUserInputEventMap.md)\[`K`\]

## 回傳

`void`

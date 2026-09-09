[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# 型別別名: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

定義於: [interface.ts:297](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L297)

## 型別參數

### States

`States` *extends* `string` = `"IDLE"`

## 參數

### currentState

`States`

### nextState

`States`

## 回傳

`void`

## Description

This is the type for the callback that is called when the state changes.

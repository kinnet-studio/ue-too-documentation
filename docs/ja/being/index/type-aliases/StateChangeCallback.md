[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# 型エイリアス: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

定義: [interface.ts:297](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being/src/interface.ts#L297)

## 型パラメーター

### States

`States` *extends* `string` = `"IDLE"`

## パラメータ

### currentState

`States`

### nextState

`States`

## 戻り値

`void`

## Description

This is the type for the callback that is called when the state changes.

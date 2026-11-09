[@ue-too/being](../../modules.md) / [index](../index.md) / StateChangeCallback

# 型エイリアス: StateChangeCallback()\<States\>

> **StateChangeCallback**\<`States`\> = (`currentState`, `nextState`) => `void`

定義: [interface.ts:297](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being/src/interface.ts#L297)

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

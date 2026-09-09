[@ue-too/being](../../modules.md) / [index](../index.md) / GuardEvaluation

# 型エイリアス: GuardEvaluation()\<Context\>

> **GuardEvaluation**\<`Context`\> = (`context`) => `boolean`

定義: [interface.ts:463](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L463)

## 型パラメーター

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

## パラメータ

### context

`Context`

## 戻り値

`boolean`

## Description

This is the type for the guard evaluation when a state transition is happening.

Guard evaluations are evaluated after the state has handled the event with the action.
Guard evaluations can be defined in an array and the first guard that evaluates to true will be used to determine the next state.

Generic parameters:
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)

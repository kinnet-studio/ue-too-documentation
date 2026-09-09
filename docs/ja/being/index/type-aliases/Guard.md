[@ue-too/being](../../modules.md) / [index](../index.md) / Guard

# 型エイリアス: Guard\<Context, K\>

> **Guard**\<`Context`, `K`\> = `{ [P in K]: GuardEvaluation<Context> }`

定義: [interface.ts:476](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L476)

## 型パラメーター

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### K

`K` *extends* `string` = `string`

## Description

This is the type for the guard of a state.

guard is an object that maps a key to a guard evaluation.
K is all the possible keys that can be used to evaluate the guard.
K is optional but if it is not provided, typescript won't be able to type guard in the EventGuards type.

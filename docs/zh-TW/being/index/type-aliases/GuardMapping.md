[@ue-too/being](../../modules.md) / [index](../index.md) / GuardMapping

# 型別別名: GuardMapping\<Context, G, States\>

> **GuardMapping**\<`Context`, `G`, `States`\> = `object`

定義於: [interface.ts:528](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L528)

## Description

This is a mapping of a guard to a target state.

Generic parameters:
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- G: The guard type.
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"

You probably don't need to use this type directly.

## 參閱

[\['eventGuards'\]](../classes/TemplateState.md)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### G

`G`

### States

`States` *extends* `string`

## 屬性

### guard

> **guard**: `G` *extends* [`Guard`](Guard.md)\<`Context`, infer K\> ? `K` : `never`

定義於: [interface.ts:533](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L533)

***

### target

> **target**: `States`

定義於: [interface.ts:534](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L534)

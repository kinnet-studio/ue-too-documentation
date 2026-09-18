[@ue-too/board](../../modules.md) / [index](../index.md) / createHandlerChain

# 関数: createHandlerChain()

> **createHandlerChain**\<`T`, `Args`\>(...`handlers`): [`Handler`](../type-aliases/Handler.md)\<`T`, `Args`\>

定義: [packages/board/src/utils/handler-pipeline.ts:31](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/handler-pipeline.ts#L31)

## 型パラメーター

### T

`T`

### Args

`Args` *extends* `any`[]

## パラメータ

### handlers

Array of handler functions to be chained

[`Handler`](../type-aliases/Handler.md)\<`T`, `Args`\>[] | \[[`Handler`](../type-aliases/Handler.md)\<`T`, `Args`\>[]\]

## 戻り値

[`Handler`](../type-aliases/Handler.md)\<`T`, `Args`\>

A single handler function that executes all handlers in sequence

## Description

Creates a handler chain from an array of handlers.

Use it like this:
```typescript
const handlerChain = createHandlerChain(handler1, handler2, handler3);
```
or like this:
```typescript
const handlers = [handler1, handler2, handler3];
const handlerChain = createHandlerChain(handlers);
```

The function signature of all the handlers must be the same. (if they're not, you need to explicitly specify the type for the handler chain)

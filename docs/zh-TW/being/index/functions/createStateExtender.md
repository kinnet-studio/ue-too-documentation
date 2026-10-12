[@ue-too/being](../../modules.md) / [index](../index.md) / createStateExtender

# 函式: createStateExtender()

> **createStateExtender**\<`E`, `C`, `S`, `O`\>(): [`StateExtender`](../type-aliases/StateExtender.md)\<`E`, `C`, `S`, `O`\>

定義於: [expansion.ts:271](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being/src/expansion.ts#L271)

Binds the target generics of [extendState](extendState.md) once so several states can
be extended without repeating them. Mirrors [createStateWidener](createStateWidener.md).

## 型別參數

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`E`\>

## 回傳

[`StateExtender`](../type-aliases/StateExtender.md)\<`E`, `C`, `S`, `O`\>

## 範例

```typescript
const extend = createStateExtender<ExpEvents, ExpContext, ExpStates, ExpOut>();
const idle = extend(new KmtIdleState(), { eventReactions: { ... } });
```

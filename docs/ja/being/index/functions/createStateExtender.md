[@ue-too/being](../../modules.md) / [index](../index.md) / createStateExtender

# 関数: createStateExtender()

> **createStateExtender**\<`E`, `C`, `S`, `O`\>(): [`StateExtender`](../type-aliases/StateExtender.md)\<`E`, `C`, `S`, `O`\>

定義: [expansion.ts:271](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being/src/expansion.ts#L271)

Binds the target generics of [extendState](extendState.md) once so several states can
be extended without repeating them. Mirrors [createStateWidener](createStateWidener.md).

## 型パラメーター

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`E`\>

## 戻り値

[`StateExtender`](../type-aliases/StateExtender.md)\<`E`, `C`, `S`, `O`\>

## 例

```typescript
const extend = createStateExtender<ExpEvents, ExpContext, ExpStates, ExpOut>();
const idle = extend(new KmtIdleState(), { eventReactions: { ... } });
```

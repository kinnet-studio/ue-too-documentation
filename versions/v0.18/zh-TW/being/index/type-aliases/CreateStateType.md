[@ue-too/being](../../modules.md) / [index](../index.md) / CreateStateType

# 型別別名: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

定義於: [interface.ts:57](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L57)

Utility type to derive a string literal union from a readonly array of string literals.

## 型別參數

### ArrayLiteral

`ArrayLiteral` *extends* readonly `string`[]

## 備註

This helper type extracts the element types from a readonly array to create a union type.
Useful for defining state machine states from an array.

## 範例

```typescript
const TEST_STATES = ["one", "two", "three"] as const;
type TestStates = CreateStateType<typeof TEST_STATES>; // "one" | "two" | "three"
```

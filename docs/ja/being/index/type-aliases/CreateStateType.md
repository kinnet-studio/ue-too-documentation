[@ue-too/being](../../modules.md) / [index](../index.md) / CreateStateType

# 型エイリアス: CreateStateType\<ArrayLiteral\>

> **CreateStateType**\<`ArrayLiteral`\> = `ArrayLiteral`\[`number`\]

定義: [interface.ts:57](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L57)

Utility type to derive a string literal union from a readonly array of string literals.

## 型パラメーター

### ArrayLiteral

`ArrayLiteral` *extends* readonly `string`[]

## Remarks

This helper type extracts the element types from a readonly array to create a union type.
Useful for defining state machine states from an array.

## 例

```typescript
const TEST_STATES = ["one", "two", "three"] as const;
type TestStates = CreateStateType<typeof TEST_STATES>; // "one" | "two" | "three"
```

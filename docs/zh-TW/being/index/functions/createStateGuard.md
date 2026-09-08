[@ue-too/being](../../modules.md) / [index](../index.md) / createStateGuard

# 函式: createStateGuard()

> **createStateGuard**\<`T`\>(`set`): (`s`) => `s is T`

定義於: [interface.ts:1191](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1191)

Creates a type guard function for checking if a value belongs to a specific set of states.

## 型別參數

### T

`T` *extends* `string`

String literal type to guard for

## 參數

### set

readonly `T`[]

Readonly array of string literals defining the valid states

## 回傳

A type guard function that checks if a string is in the set

> (`s`): `s is T`

### 參數

#### s

`string`

### 回傳

`s is T`

## 備註

This utility function generates a TypeScript type guard that narrows a string type
to a specific union of string literals. Useful when you have multiple state types
and need to distinguish between them at runtime.

## 範例

Creating state guards for hierarchical state machines
```typescript
type MainStates = "idle" | "active" | "paused";
type SubStates = "loading" | "processing" | "complete";
type AllStates = MainStates | SubStates;

const MAIN_STATES = ["idle", "active", "paused"] as const;
const isMainState = createStateGuard(MAIN_STATES);

function handleState(state: AllStates) {
  if (isMainState(state)) {
    // TypeScript knows state is MainStates here
    console.log('Main state:', state);
  } else {
    // TypeScript knows state is SubStates here
    console.log('Sub state:', state);
  }
}
```

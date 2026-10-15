[@ue-too/being](../../modules.md) / [index](../index.md) / createStateGuard

# Function: createStateGuard()

> **createStateGuard**\<`T`\>(`set`): (`s`) => `s is T`

Defined in: [interface.ts:1191](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L1191)

Creates a type guard function for checking if a value belongs to a specific set of states.

## Type Parameters

### T

`T` *extends* `string`

String literal type to guard for

## Parameters

### set

readonly `T`[]

Readonly array of string literals defining the valid states

## Returns

A type guard function that checks if a string is in the set

> (`s`): `s is T`

### Parameters

#### s

`string`

### Returns

`s is T`

## Remarks

This utility function generates a TypeScript type guard that narrows a string type
to a specific union of string literals. Useful when you have multiple state types
and need to distinguish between them at runtime.

## Example

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

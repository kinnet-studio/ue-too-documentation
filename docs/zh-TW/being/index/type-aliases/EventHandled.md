[@ue-too/being](../../modules.md) / [index](../index.md) / EventHandled

# 型別別名: EventHandled\<States, Output\>

> **EventHandled**\<`States`, `Output`\> = `object` & `WithOutput`\<`Output`\>

定義於: [interface.ts:139](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L139)

Result type when an event is successfully handled by a state.

## 型別宣告

### handled

> **handled**: `true`

### nextState?

> `optional` **nextState**: `States`

## 型別參數

### States

`States` *extends* `string`

Union of all possible state names in the state machine

### Output

`Output` = `void`

The output type for this event (defaults to void)

## 備註

This type represents a successful event handling result. It can optionally include:
- `nextState`: The state to transition to (if different from current)
- `output`: A return value from the event handler (only present when Output is not void)

## 範例

```typescript
// Simple transition without output
const result: EventHandled<"IDLE" | "ACTIVE"> = {
  handled: true,
  nextState: "ACTIVE"
  // output property does not exist when Output is void
};

// With output value
const resultWithOutput: EventHandled<"IDLE" | "ACTIVE", number> = {
  handled: true,
  nextState: "IDLE",
  output: 42
};
```

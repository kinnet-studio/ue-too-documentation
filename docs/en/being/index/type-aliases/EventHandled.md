[@ue-too/being](../../modules.md) / [index](../index.md) / EventHandled

# Type Alias: EventHandled\<States, Output\>

> **EventHandled**\<`States`, `Output`\> = `object` & `WithOutput`\<`Output`\>

Defined in: [interface.ts:139](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L139)

Result type when an event is successfully handled by a state.

## Type Declaration

### handled

> **handled**: `true`

### nextState?

> `optional` **nextState**: `States`

## Type Parameters

### States

`States` *extends* `string`

Union of all possible state names in the state machine

### Output

`Output` = `void`

The output type for this event (defaults to void)

## Remarks

This type represents a successful event handling result. It can optionally include:
- `nextState`: The state to transition to (if different from current)
- `output`: A return value from the event handler (only present when Output is not void)

## Example

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

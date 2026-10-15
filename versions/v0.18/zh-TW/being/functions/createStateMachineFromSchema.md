[@ue-too/being](../globals.md) / createStateMachineFromSchema

# Function: createStateMachineFromSchema()

> **createStateMachineFromSchema**\<`Schema`\>(`schema`, `context`): `Schema` *extends* [`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`C`, `EPM`, `any`, `EOM`\> ? [`StateMachine`](../interfaces/StateMachine.md)\<`EPM`, `C`, `any`, `EOM`\> : [`StateMachine`](../interfaces/StateMachine.md)\<`any`, [`BaseContext`](../interfaces/BaseContext.md), `any`, `any`\>

Defined in: [schema-factory.ts:404](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L404)

Creates a state machine from a schema definition.

## Type Parameters

### Schema

`Schema` *extends* [`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`any`, `any`, `any`, `any`\>

## Parameters

### schema

`Schema`

The schema definition for the state machine

### context

`Schema` *extends* [`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`C`, `any`, `any`, `any`\> ? `C` : [`BaseContext`](../interfaces/BaseContext.md)

The context instance to use for the state machine

## Returns

`Schema` *extends* [`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`C`, `EPM`, `any`, `EOM`\> ? [`StateMachine`](../interfaces/StateMachine.md)\<`EPM`, `C`, `any`, `EOM`\> : [`StateMachine`](../interfaces/StateMachine.md)\<`any`, [`BaseContext`](../interfaces/BaseContext.md), `any`, `any`\>

A fully configured state machine instance

## Remarks

This factory function takes a schema and creates a fully functional state machine
at runtime. The resulting state machine uses type erasure (`any` types) but maintains
full runtime functionality.

Actions can return values that will be included in the event result. To enable
typed outputs, provide an EventOutputMapping type parameter that maps event names
to their output types.

## Examples

Basic state machine without outputs
```typescript
const schema: StateMachineSchema = {
  states: ["IDLE", "RUNNING", "PAUSED"],
  events: {
    start: {},
    stop: {},
    pause: {},
    resume: {}
  },
  initialState: "IDLE",
  stateDefinitions: [
    {
      name: "IDLE",
      transitions: [
        {
          event: "start",
          targetState: "RUNNING",
          action: (context) => console.log("Starting...")
        }
      ]
    }
  ]
};

const machine = createStateMachineFromSchema(schema, context);
machine.happens("start");
```

State machine with typed outputs
```typescript
type Events = { calculate: { value: number }; getResult: {} };
type Outputs = { calculate: number; getResult: number };

const schema: StateMachineSchema<MyContext, Events, Outputs> = {
  states: ["READY"],
  events: { calculate: { value: 0 }, getResult: {} },
  initialState: "READY",
  stateDefinitions: [
    {
      name: "READY",
      transitions: [
        {
          event: "calculate",
          targetState: "READY",
          action: (context, payload) => {
            context.total += payload.value;
            return context.total; // Return value included in result
          }
        },
        {
          event: "getResult",
          targetState: "READY",
          action: (context) => context.total // Return current total
        }
      ]
    }
  ]
};

const machine = createStateMachineFromSchema<MyContext, Events, Outputs>(schema, context);
const result = machine.happens("calculate", { value: 10 });
if (result.handled && "output" in result) {
  console.log(result.output); // Typed as number
}
```

[@ue-too/being](../../modules.md) / [index](../index.md) / createStateMachineSchemaWithInferredStates

# 関数: createStateMachineSchemaWithInferredStates()

> **createStateMachineSchemaWithInferredStates**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\>(`schema`): [`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`Context`, `EventPayloadMapping`, [`ExtractStateNames`](../type-aliases/ExtractStateNames.md)\<`States`\>, `EventOutputMapping`\>

定義: [schema-factory.ts:249](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/schema-factory.ts#L249)

Helper function to create a typed state machine schema with inferred state names.
Use this when you have a const states array and want TypeScript to infer the state names.

## 型パラメーター

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* readonly `string`[]

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## パラメータ

### schema

`Omit`\<[`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`Context`, `EventPayloadMapping`, [`ExtractStateNames`](../type-aliases/ExtractStateNames.md)\<`States`\>, `EventOutputMapping`\>, `"states"`\> & `object`

## 戻り値

[`StateMachineSchema`](../interfaces/StateMachineSchema.md)\<`Context`, `EventPayloadMapping`, [`ExtractStateNames`](../type-aliases/ExtractStateNames.md)\<`States`\>, `EventOutputMapping`\>

## 例

```typescript
const states = ["IDLE", "RUNNING", "PAUSED"] as const;
const schema = createStateMachineSchemaWithInferredStates<TimerContext, TimerEvents>({
  states,
  events: { start: {}, stop: {} },
  initialState: "IDLE",
  stateDefinitions: [
    {
      name: "IDLE", // TypeScript knows this must be one of the states
      transitions: [
        {
          event: "start",
          targetState: "RUNNING", // TypeScript knows this must be one of the states
        }
      ]
    }
  ]
});
```

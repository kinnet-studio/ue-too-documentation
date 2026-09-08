[@ue-too/being](../../modules.md) / [index](../index.md) / StateDefinition

# 介面: StateDefinition\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

定義於: [schema-factory.ts:163](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L163)

Definition of a single state in the state machine.

## 範例

```typescript
{
  name: "PAYING",
  guards: {
    hasEnoughBalance: (context) => context.balance >= context.itemPrice,
    hasInsufficientBalance: (context) => context.balance < context.itemPrice,
  },
  transitions: [
    {
      event: "pay",
      targetState: "SELECTING",
      guards: [
        { guard: "hasEnoughBalance", targetState: "CONFIRMED" },
        { guard: "hasInsufficientBalance", targetState: "PAYING" },
      ],
    },
  ],
}
```

## 型別參數

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## 屬性

### guards?

> `optional` **guards**: `Record`\<`string`, [`GuardFunction`](../type-aliases/GuardFunction.md)\<`Context`\>\>

定義於: [schema-factory.ts:188](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L188)

Optional mapping of guard names to guard functions.
Guards defined here can be reused across multiple transitions within this state
by referencing them by name in the transition's guards array.

The guard functions receive the context parameter typed with the Context type parameter,
not BaseContext, so you get full type safety for your context properties.

***

### name

> **name**: `StateNames`

定義於: [schema-factory.ts:172](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L172)

Name of this state

***

### onEnter()?

> `optional` **onEnter**: (`context`, `fromState`) => `void`

定義於: [schema-factory.ts:190](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L190)

Optional callback when entering this state

#### 參數

##### context

`Context`

##### fromState

`StateNames`

#### 回傳

`void`

***

### onExit()?

> `optional` **onExit**: (`context`, `toState`) => `void`

定義於: [schema-factory.ts:192](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L192)

Optional callback when exiting this state

#### 參數

##### context

`Context`

##### toState

`StateNames`

#### 回傳

`void`

***

### transitions

> **transitions**: [`TransitionDefinitionUnion`](../type-aliases/TransitionDefinitionUnion.md)\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\>[]

定義於: [schema-factory.ts:174](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L174)

Transitions available from this state

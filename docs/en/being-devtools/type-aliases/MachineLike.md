[@ue-too/being-devtools](../globals.md) / MachineLike

# Type Alias: MachineLike

> **MachineLike** = `object`

Defined in: [registry.ts:20](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L20)

The structural surface a machine must have to be attached.

## Remarks

Concrete `TemplateStateMachine`s with literal-union States are not
assignable to `StateMachine<any, any, any, any>` (the conditional in
`State['states']` plus method variance defeats `any`-erasure), so the
public parameter type is this minimal shape, which they satisfy without
a cast. The erasure happens once, inside `MachineRegistry.attach`.

## Properties

### context?

> `optional` **context**: `unknown`

Defined in: [registry.ts:25](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L25)

***

### currentState

> **currentState**: `unknown`

Defined in: [registry.ts:22](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L22)

***

### possibleStates

> **possibleStates**: readonly `unknown`[]

Defined in: [registry.ts:24](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L24)

***

### states

> **states**: `object`

Defined in: [registry.ts:23](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L23)

## Methods

### happens()

> **happens**(...`args`): `unknown`

Defined in: [registry.ts:21](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L21)

#### Parameters

##### args

...`any`[]

#### Returns

`unknown`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

Defined in: [registry.ts:27](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L27)

#### Parameters

##### callback

(...`args`) => `void`

#### Returns

`void` \| () => `void`

***

### reset()

> **reset**(): `void`

Defined in: [registry.ts:26](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/registry.ts#L26)

#### Returns

`void`

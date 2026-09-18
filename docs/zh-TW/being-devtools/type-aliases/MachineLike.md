[@ue-too/being-devtools](../globals.md) / MachineLike

# 型別別名: MachineLike

> **MachineLike** = `object`

定義於: [registry.ts:20](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L20)

The structural surface a machine must have to be attached.

## 備註

Concrete `TemplateStateMachine`s with literal-union States are not
assignable to `StateMachine<any, any, any, any>` (the conditional in
`State['states']` plus method variance defeats `any`-erasure), so the
public parameter type is this minimal shape, which they satisfy without
a cast. The erasure happens once, inside `MachineRegistry.attach`.

## 屬性

### context?

> `optional` **context**: `unknown`

定義於: [registry.ts:25](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L25)

***

### currentState

> **currentState**: `unknown`

定義於: [registry.ts:22](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L22)

***

### possibleStates

> **possibleStates**: readonly `unknown`[]

定義於: [registry.ts:24](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L24)

***

### states

> **states**: `object`

定義於: [registry.ts:23](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L23)

## 方法

### happens()

> **happens**(...`args`): `unknown`

定義於: [registry.ts:21](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L21)

#### 參數

##### args

...`any`[]

#### 回傳

`unknown`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

定義於: [registry.ts:27](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L27)

#### 參數

##### callback

(...`args`) => `void`

#### 回傳

`void` \| () => `void`

***

### reset()

> **reset**(): `void`

定義於: [registry.ts:26](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/registry.ts#L26)

#### 回傳

`void`

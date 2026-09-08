[@ue-too/being-devtools](../globals.md) / MachineLike

# 型エイリアス: MachineLike

> **MachineLike** = `object`

定義: [registry.ts:20](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L20)

The structural surface a machine must have to be attached.

## Remarks

Concrete `TemplateStateMachine`s with literal-union States are not
assignable to `StateMachine<any, any, any, any>` (the conditional in
`State['states']` plus method variance defeats `any`-erasure), so the
public parameter type is this minimal shape, which they satisfy without
a cast. The erasure happens once, inside `MachineRegistry.attach`.

## プロパティ

### context?

> `optional` **context**: `unknown`

定義: [registry.ts:25](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L25)

***

### currentState

> **currentState**: `unknown`

定義: [registry.ts:22](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L22)

***

### possibleStates

> **possibleStates**: readonly `unknown`[]

定義: [registry.ts:24](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L24)

***

### states

> **states**: `object`

定義: [registry.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L23)

## メソッド

### happens()

> **happens**(...`args`): `unknown`

定義: [registry.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L21)

#### パラメータ

##### args

...`any`[]

#### 戻り値

`unknown`

***

### onEventResult()?

> `optional` **onEventResult**(`callback`): `void` \| () => `void`

定義: [registry.ts:27](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L27)

#### パラメータ

##### callback

(...`args`) => `void`

#### 戻り値

`void` \| () => `void`

***

### reset()

> **reset**(): `void`

定義: [registry.ts:26](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/registry.ts#L26)

#### 戻り値

`void`

[@ue-too/ecs](../../modules.md) / [index](../index.md) / SystemManager

# クラス: SystemManager

定義: [index.ts:1175](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1175)

Manages system registration and entity-system matching.

## Remarks

The SystemManager handles:
- Registering systems with their component signature requirements
- Maintaining the set of entities that match each system's signature
- Automatically adding/removing entities from systems when signatures change
- Cleaning up system entity sets when entities are destroyed

When an entity's component signature changes (components added/removed),
the SystemManager checks all registered systems and updates their entity sets.
An entity is added to a system's set if its signature contains all components
required by the system's signature.

## コンストラクター

### コンストラクター

> **new SystemManager**(): `SystemManager`

#### 戻り値

`SystemManager`

## メソッド

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義: [index.ts:1206](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1206)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

***

### entitySignatureChanged()

> **entitySignatureChanged**(`entity`, `signature`): `void`

定義: [index.ts:1212](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1212)

#### パラメータ

##### entity

`number`

##### signature

`number`

#### 戻り値

`void`

***

### getSystem()

> **getSystem**\<`T`\>(`systemName`): `T` \| `null`

定義: [index.ts:1223](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1223)

#### 型パラメーター

##### T

`T` *extends* [`System`](../interfaces/System.md)

#### パラメータ

##### systemName

`symbol`

#### 戻り値

`T` \| `null`

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

定義: [index.ts:1181](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1181)

#### パラメータ

##### systemName

`symbol`

##### system

[`System`](../interfaces/System.md)

#### 戻り値

`void`

***

### setSignature()

> **setSignature**(`systemName`, `signature`): `void`

定義: [index.ts:1189](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1189)

#### パラメータ

##### systemName

`symbol`

##### signature

`number`

#### 戻り値

`void`

[@ue-too/ecs](../../modules.md) / [index](../index.md) / SystemManager

# 類別: SystemManager

定義於: [index.ts:1175](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1175)

Manages system registration and entity-system matching.

## 備註

The SystemManager handles:
- Registering systems with their component signature requirements
- Maintaining the set of entities that match each system's signature
- Automatically adding/removing entities from systems when signatures change
- Cleaning up system entity sets when entities are destroyed

When an entity's component signature changes (components added/removed),
the SystemManager checks all registered systems and updates their entity sets.
An entity is added to a system's set if its signature contains all components
required by the system's signature.

## 建構函式

### 建構函式

> **new SystemManager**(): `SystemManager`

#### 回傳

`SystemManager`

## 方法

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義於: [index.ts:1206](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1206)

#### 參數

##### entity

`number`

#### 回傳

`void`

***

### entitySignatureChanged()

> **entitySignatureChanged**(`entity`, `signature`): `void`

定義於: [index.ts:1212](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1212)

#### 參數

##### entity

`number`

##### signature

`number`

#### 回傳

`void`

***

### getSystem()

> **getSystem**\<`T`\>(`systemName`): `T` \| `null`

定義於: [index.ts:1223](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1223)

#### 型別參數

##### T

`T` *extends* [`System`](../interfaces/System.md)

#### 參數

##### systemName

`symbol`

#### 回傳

`T` \| `null`

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

定義於: [index.ts:1181](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1181)

#### 參數

##### systemName

`symbol`

##### system

[`System`](../interfaces/System.md)

#### 回傳

`void`

***

### setSignature()

> **setSignature**(`systemName`, `signature`): `void`

定義於: [index.ts:1189](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1189)

#### 參數

##### systemName

`symbol`

##### signature

`number`

#### 回傳

`void`

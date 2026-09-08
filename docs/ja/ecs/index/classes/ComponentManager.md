[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentManager

# クラス: ComponentManager

定義: [index.ts:720](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L720)

Manages component registration and component data storage.

## Remarks

The ComponentManager handles:
- Registering new component types and assigning unique type IDs
- Creating ComponentArray storage for each component type
- Adding, removing, and querying component data for entities
- Cleaning up component data when entities are destroyed

Each component type gets a unique ID (0-31) and its own ComponentArray
for efficient storage and retrieval.

## コンストラクター

### コンストラクター

> **new ComponentManager**(): `ComponentManager`

#### 戻り値

`ComponentManager`

## メソッド

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

定義: [index.ts:784](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L784)

#### 型パラメーター

##### T

`T`

#### パラメータ

##### componentName

`symbol`

##### entity

`number`

##### component

`T`

#### 戻り値

`void`

***

### addComponentToEntityWithSchema()

> **addComponentToEntityWithSchema**(`componentName`, `entity`, `component`, `validate`): `void`

定義: [index.ts:1101](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L1101)

Add a component to an entity with schema validation.

#### パラメータ

##### componentName

`symbol`

The name of the component type

##### entity

`number`

The entity to add the component to

##### component

`Record`\<`string`, `unknown`\>

The component data

##### validate

`boolean` = `true`

Whether to validate against schema (default: true)

#### 戻り値

`void`

#### Throws

Error if validation fails

***

### componentIsCustomSchema()

> **componentIsCustomSchema**(`componentName`): `boolean`

定義: [index.ts:834](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L834)

#### パラメータ

##### componentName

`symbol`

#### 戻り値

`boolean`

***

### createComponentFromSchema()

> **createComponentFromSchema**(`componentName`, `overrides`): `Record`\<`string`, `unknown`\>

定義: [index.ts:899](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L899)

Create a component instance from a schema with default values.

#### パラメータ

##### componentName

`symbol`

The name of the component type

##### overrides

`Record`\<`string`, `unknown`\> = `{}`

Optional values to override defaults

#### 戻り値

`Record`\<`string`, `unknown`\>

A component instance with all fields initialized

#### Throws

Error if component is not registered with a schema

***

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義: [index.ts:815](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L815)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

***

### getAllComponentSchemas()

> **getAllComponentSchemas**(): [`ComponentSchema`](../interfaces/ComponentSchema.md)[]

定義: [index.ts:760](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L760)

Get all registered component schemas.

#### 戻り値

[`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Array of all component schemas

***

### getAllEntitiesWithComponent()

> **getAllEntitiesWithComponent**(`componentName`): `number`[]

定義: [index.ts:737](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L737)

Get all entities that have a specific component.

#### パラメータ

##### componentName

`symbol`

The name of the component type

#### 戻り値

`number`[]

Array of entity IDs that have this component, or empty array if component not registered

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

定義: [index.ts:804](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L804)

#### 型パラメーター

##### T

`T`

#### パラメータ

##### componentName

`symbol`

##### entity

`number`

#### 戻り値

`T` \| `null`

***

### getComponentSchema()

> **getComponentSchema**(`componentName`): [`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

定義: [index.ts:752](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L752)

Get the schema for a component type, if it was registered with a schema.

#### パラメータ

##### componentName

`symbol`

The name of the component type

#### 戻り値

[`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

The component schema or null if not found

***

### getComponentType()

> **getComponentType**(`componentName`): `number` \| `null`

定義: [index.ts:777](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L777)

#### パラメータ

##### componentName

`symbol`

#### 戻り値

`number` \| `null`

***

### getRegisteredComponentNames()

> **getRegisteredComponentNames**(): `symbol`[]

定義: [index.ts:728](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L728)

#### 戻り値

`symbol`[]

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

定義: [index.ts:764](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L764)

#### 型パラメーター

##### T

`T`

#### パラメータ

##### componentName

`symbol`

#### 戻り値

`void`

***

### registerComponentWithSchema()

> **registerComponentWithSchema**(`schema`): `void`

定義: [index.ts:845](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L845)

Register a component with a runtime-defined schema.
This allows components to be defined dynamically (e.g., through a GUI).

#### パラメータ

##### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema definition

#### 戻り値

`void`

#### Throws

Error if schema validation fails

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

定義: [index.ts:796](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L796)

#### 型パラメーター

##### T

`T`

#### パラメータ

##### componentName

`symbol`

##### entity

`number`

#### 戻り値

`void`

***

### validateComponentData()

> **validateComponentData**(`componentName`, `data`): `boolean`

定義: [index.ts:943](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L943)

Validate component data against its schema.

#### パラメータ

##### componentName

`symbol`

The name of the component type

##### data

`unknown`

The component data to validate

#### 戻り値

`boolean`

true if valid, false otherwise

[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentManager

# 類別: ComponentManager

定義於: [index.ts:720](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L720)

Manages component registration and component data storage.

## 備註

The ComponentManager handles:
- Registering new component types and assigning unique type IDs
- Creating ComponentArray storage for each component type
- Adding, removing, and querying component data for entities
- Cleaning up component data when entities are destroyed

Each component type gets a unique ID (0-31) and its own ComponentArray
for efficient storage and retrieval.

## 建構函式

### 建構函式

> **new ComponentManager**(): `ComponentManager`

#### 回傳

`ComponentManager`

## 方法

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

定義於: [index.ts:784](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L784)

#### 型別參數

##### T

`T`

#### 參數

##### componentName

`symbol`

##### entity

`number`

##### component

`T`

#### 回傳

`void`

***

### addComponentToEntityWithSchema()

> **addComponentToEntityWithSchema**(`componentName`, `entity`, `component`, `validate`): `void`

定義於: [index.ts:1101](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L1101)

Add a component to an entity with schema validation.

#### 參數

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

#### 回傳

`void`

#### 拋出

Error if validation fails

***

### componentIsCustomSchema()

> **componentIsCustomSchema**(`componentName`): `boolean`

定義於: [index.ts:834](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L834)

#### 參數

##### componentName

`symbol`

#### 回傳

`boolean`

***

### createComponentFromSchema()

> **createComponentFromSchema**(`componentName`, `overrides`): `Record`\<`string`, `unknown`\>

定義於: [index.ts:899](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L899)

Create a component instance from a schema with default values.

#### 參數

##### componentName

`symbol`

The name of the component type

##### overrides

`Record`\<`string`, `unknown`\> = `{}`

Optional values to override defaults

#### 回傳

`Record`\<`string`, `unknown`\>

A component instance with all fields initialized

#### 拋出

Error if component is not registered with a schema

***

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

定義於: [index.ts:815](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L815)

#### 參數

##### entity

`number`

#### 回傳

`void`

***

### getAllComponentSchemas()

> **getAllComponentSchemas**(): [`ComponentSchema`](../interfaces/ComponentSchema.md)[]

定義於: [index.ts:760](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L760)

Get all registered component schemas.

#### 回傳

[`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Array of all component schemas

***

### getAllEntitiesWithComponent()

> **getAllEntitiesWithComponent**(`componentName`): `number`[]

定義於: [index.ts:737](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L737)

Get all entities that have a specific component.

#### 參數

##### componentName

`symbol`

The name of the component type

#### 回傳

`number`[]

Array of entity IDs that have this component, or empty array if component not registered

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

定義於: [index.ts:804](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L804)

#### 型別參數

##### T

`T`

#### 參數

##### componentName

`symbol`

##### entity

`number`

#### 回傳

`T` \| `null`

***

### getComponentSchema()

> **getComponentSchema**(`componentName`): [`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

定義於: [index.ts:752](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L752)

Get the schema for a component type, if it was registered with a schema.

#### 參數

##### componentName

`symbol`

The name of the component type

#### 回傳

[`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

The component schema or null if not found

***

### getComponentType()

> **getComponentType**(`componentName`): `number` \| `null`

定義於: [index.ts:777](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L777)

#### 參數

##### componentName

`symbol`

#### 回傳

`number` \| `null`

***

### getRegisteredComponentNames()

> **getRegisteredComponentNames**(): `symbol`[]

定義於: [index.ts:728](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L728)

#### 回傳

`symbol`[]

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

定義於: [index.ts:764](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L764)

#### 型別參數

##### T

`T`

#### 參數

##### componentName

`symbol`

#### 回傳

`void`

***

### registerComponentWithSchema()

> **registerComponentWithSchema**(`schema`): `void`

定義於: [index.ts:845](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L845)

Register a component with a runtime-defined schema.
This allows components to be defined dynamically (e.g., through a GUI).

#### 參數

##### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema definition

#### 回傳

`void`

#### 拋出

Error if schema validation fails

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

定義於: [index.ts:796](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L796)

#### 型別參數

##### T

`T`

#### 參數

##### componentName

`symbol`

##### entity

`number`

#### 回傳

`void`

***

### validateComponentData()

> **validateComponentData**(`componentName`, `data`): `boolean`

定義於: [index.ts:943](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/ecs/src/index.ts#L943)

Validate component data against its schema.

#### 參數

##### componentName

`symbol`

The name of the component type

##### data

`unknown`

The component data to validate

#### 回傳

`boolean`

true if valid, false otherwise

[@ue-too/ecs](../globals.md) / ComponentManager

# Class: ComponentManager

Defined in: [index.ts:720](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L720)

Manages component registration and component data storage.

## Remarks

The ComponentManager handles:
- Registering new component types and assigning unique type IDs
- Creating ComponentArray storage for each component type
- Adding, removing, and querying component data for entities
- Cleaning up component data when entities are destroyed

Each component type gets a unique ID (0-31) and its own ComponentArray
for efficient storage and retrieval.

## Constructors

### Constructor

> **new ComponentManager**(): `ComponentManager`

#### Returns

`ComponentManager`

## Methods

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

Defined in: [index.ts:784](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L784)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

##### component

`T`

#### Returns

`void`

***

### addComponentToEntityWithSchema()

> **addComponentToEntityWithSchema**(`componentName`, `entity`, `component`, `validate`): `void`

Defined in: [index.ts:1101](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L1101)

Add a component to an entity with schema validation.

#### Parameters

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

#### Returns

`void`

#### Throws

Error if validation fails

***

### componentIsCustomSchema()

> **componentIsCustomSchema**(`componentName`): `boolean`

Defined in: [index.ts:834](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L834)

#### Parameters

##### componentName

`symbol`

#### Returns

`boolean`

***

### createComponentFromSchema()

> **createComponentFromSchema**(`componentName`, `overrides`): `Record`\<`string`, `unknown`\>

Defined in: [index.ts:899](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L899)

Create a component instance from a schema with default values.

#### Parameters

##### componentName

`symbol`

The name of the component type

##### overrides

`Record`\<`string`, `unknown`\> = `{}`

Optional values to override defaults

#### Returns

`Record`\<`string`, `unknown`\>

A component instance with all fields initialized

#### Throws

Error if component is not registered with a schema

***

### entityDestroyed()

> **entityDestroyed**(`entity`): `void`

Defined in: [index.ts:815](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L815)

#### Parameters

##### entity

`number`

#### Returns

`void`

***

### getAllComponentSchemas()

> **getAllComponentSchemas**(): [`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Defined in: [index.ts:760](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L760)

Get all registered component schemas.

#### Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Array of all component schemas

***

### getAllEntitiesWithComponent()

> **getAllEntitiesWithComponent**(`componentName`): `number`[]

Defined in: [index.ts:737](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L737)

Get all entities that have a specific component.

#### Parameters

##### componentName

`symbol`

The name of the component type

#### Returns

`number`[]

Array of entity IDs that have this component, or empty array if component not registered

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

Defined in: [index.ts:804](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L804)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

#### Returns

`T` \| `null`

***

### getComponentSchema()

> **getComponentSchema**(`componentName`): [`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

Defined in: [index.ts:752](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L752)

Get the schema for a component type, if it was registered with a schema.

#### Parameters

##### componentName

`symbol`

The name of the component type

#### Returns

[`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

The component schema or null if not found

***

### getComponentType()

> **getComponentType**(`componentName`): `number` \| `null`

Defined in: [index.ts:777](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L777)

#### Parameters

##### componentName

`symbol`

#### Returns

`number` \| `null`

***

### getRegisteredComponentNames()

> **getRegisteredComponentNames**(): `symbol`[]

Defined in: [index.ts:728](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L728)

#### Returns

`symbol`[]

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

Defined in: [index.ts:764](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L764)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

#### Returns

`void`

***

### registerComponentWithSchema()

> **registerComponentWithSchema**(`schema`): `void`

Defined in: [index.ts:845](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L845)

Register a component with a runtime-defined schema.
This allows components to be defined dynamically (e.g., through a GUI).

#### Parameters

##### schema

[`ComponentSchema`](../interfaces/ComponentSchema.md)

The component schema definition

#### Returns

`void`

#### Throws

Error if schema validation fails

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

Defined in: [index.ts:796](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L796)

#### Type Parameters

##### T

`T`

#### Parameters

##### componentName

`symbol`

##### entity

`number`

#### Returns

`void`

***

### validateComponentData()

> **validateComponentData**(`componentName`, `data`): `boolean`

Defined in: [index.ts:943](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/ecs/src/index.ts#L943)

Validate component data against its schema.

#### Parameters

##### componentName

`symbol`

The name of the component type

##### data

`unknown`

The component data to validate

#### Returns

`boolean`

true if valid, false otherwise

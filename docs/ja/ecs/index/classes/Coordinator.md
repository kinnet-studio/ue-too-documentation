[@ue-too/ecs](../../modules.md) / [index](../index.md) / Coordinator

# クラス: Coordinator

定義: [index.ts:1274](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1274)

Main ECS coordinator that manages entities, components, and systems.

## Remarks

The Coordinator is the central API for working with the ECS. It provides a unified
interface for:
- Creating and destroying entities
- Registering and managing components
- Registering and configuring systems
- Querying component data

The Coordinator automatically keeps entity signatures up-to-date and notifies
systems when entities match their component requirements.

## 例

Complete ECS workflow
```typescript
const ecs = new Coordinator();

// Setup
ecs.registerComponent<Position>('Position');
ecs.registerComponent<Velocity>('Velocity');

// Create entity
const entity = ecs.createEntity();
ecs.addComponentToEntity('Position', entity, { x: 0, y: 0 });
ecs.addComponentToEntity('Velocity', entity, { x: 1, y: 0 });

// Update
const pos = ecs.getComponentFromEntity<Position>('Position', entity);
const vel = ecs.getComponentFromEntity<Velocity>('Velocity', entity);
if (pos && vel) {
  pos.x += vel.x;
  pos.y += vel.y;
}

// Cleanup
ecs.destroyEntity(entity);
```

## コンストラクター

### コンストラクター

> **new Coordinator**(): `Coordinator`

定義: [index.ts:1279](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1279)

#### 戻り値

`Coordinator`

## メソッド

### addComponentToEntity()

> **addComponentToEntity**\<`T`\>(`componentName`, `entity`, `component`): `void`

定義: [index.ts:1299](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1299)

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

定義: [index.ts:1558](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1558)

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

### createComponentFromSchema()

> **createComponentFromSchema**(`componentName`, `overrides`): `Record`\<`string`, `unknown`\>

定義: [index.ts:1522](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1522)

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

#### 例

```typescript
// Create component with all defaults
const component1 = coordinator.createComponentFromSchema('PlayerStats');

// Create component with some overrides
const component2 = coordinator.createComponentFromSchema('PlayerStats', {
  health: 200,
  name: 'SuperPlayer'
});
```

***

### createEntity()

> **createEntity**(): `number`

定義: [index.ts:1285](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1285)

#### 戻り値

`number`

***

### deserialize()

> **deserialize**(`serialized`, `options`): `void`

定義: [index.ts:1780](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1780)

Deserialize an ECS state from a JSON-compatible format.
This will restore all entities and their components.

#### パラメータ

##### serialized

[`SerializedECSState`](../interfaces/SerializedECSState.md)

The serialized ECS state

##### options

Options for deserialization

###### clearExisting?

`boolean`

Whether to clear existing entities before deserializing (default: false)

#### 戻り値

`void`

#### Throws

Error if component names cannot be resolved or components are not registered

#### 例

```typescript
const json = fs.readFileSync('state.json', 'utf-8');
const serialized = JSON.parse(json);
coordinator.deserialize(serialized, { clearExisting: true });
```

***

### destroyEntity()

> **destroyEntity**(`entity`): `void`

定義: [index.ts:1289](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1289)

#### パラメータ

##### entity

`number`

#### 戻り値

`void`

***

### entityExists()

> **entityExists**(`entity`): `boolean`

定義: [index.ts:1619](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1619)

Check if an entity exists in the coordinator.

#### パラメータ

##### entity

`number`

The entity ID to check

#### 戻り値

`boolean`

true if the entity exists, false otherwise

#### 例

```typescript
const entity = coordinator.createEntity();
if (coordinator.entityExists(entity)) {
  console.log('Entity exists');
}

coordinator.destroyEntity(entity);
if (!coordinator.entityExists(entity)) {
  console.log('Entity no longer exists');
}
```

***

### getAllComponentSchemas()

> **getAllComponentSchemas**(): [`ComponentSchema`](../interfaces/ComponentSchema.md)[]

定義: [index.ts:1498](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1498)

Get all registered component schemas.

#### 戻り値

[`ComponentSchema`](../interfaces/ComponentSchema.md)[]

Array of all component schemas

***

### getAllEntities()

> **getAllEntities**(): `number`[]

定義: [index.ts:1597](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1597)

Get all living entities in the ECS.

#### 戻り値

`number`[]

Array of all entity IDs that are currently active

#### 例

```typescript
const entities = coordinator.getAllEntities();
console.log(`Total entities: ${entities.length}`);
```

***

### getComponentFromEntity()

> **getComponentFromEntity**\<`T`\>(`componentName`, `entity`): `T` \| `null`

定義: [index.ts:1348](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1348)

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

### getComponentPropertyNames()

> **getComponentPropertyNames**(`componentName`): `string`[]

定義: [index.ts:1458](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1458)

Get the property field names of a component.

This method works in two ways:
1. If the component was registered with a schema, returns field names from the schema
2. If no schema exists, attempts to extract property names from an actual component instance
   (requires at least one entity to have an instance of the component)

#### パラメータ

##### componentName

`symbol`

The name of the component type

#### 戻り値

`string`[]

Array of property field names, or empty array if component has no schema and no instances exist

#### 例

```typescript
const coordinator = new Coordinator();

// Method 1: Using schema
coordinator.registerComponentWithSchema({
  componentName: 'PlayerStats',
  fields: [
    { name: 'health', type: 'number', defaultValue: 100 },
    { name: 'name', type: 'string', defaultValue: 'Player' },
    { name: 'isAlive', type: 'boolean', defaultValue: true }
  ]
});
const fieldNames1 = coordinator.getComponentPropertyNames('PlayerStats');
console.log(fieldNames1); // ['health', 'name', 'isAlive']

// Method 2: From component instance
type LocationComponent = { location: Entity; sortIndex: number };
coordinator.registerComponent<LocationComponent>('LocationComponent');
const entity = coordinator.createEntity();
coordinator.addComponentToEntity('LocationComponent', entity, {
  location: otherEntity,
  sortIndex: 0
});
const fieldNames2 = coordinator.getComponentPropertyNames('LocationComponent');
console.log(fieldNames2); // ['location', 'sortIndex']
```

***

### getComponentSchema()

> **getComponentSchema**(`componentName`): [`ComponentSchema`](../interfaces/ComponentSchema.md) \| `null`

定義: [index.ts:1415](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1415)

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

定義: [index.ts:1358](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1358)

#### パラメータ

##### componentName

`symbol`

#### 戻り値

`number` \| `null`

***

### getEntityComponents()

> **getEntityComponents**(`entity`): `Map`\<`symbol`, `unknown`\> \| `null`

定義: [index.ts:1636](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1636)

Get all components for a specific entity.

#### パラメータ

##### entity

`number`

The entity ID

#### 戻り値

`Map`\<`symbol`, `unknown`\> \| `null`

Map of component names to their data, or null if entity doesn't exist

#### 例

```typescript
const components = coordinator.getEntityComponents(entity);
if (components) {
  console.log('Entity components:', components);
}
```

***

### getFullState()

> **getFullState**(): `object`

定義: [index.ts:1682](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1682)

Get the entire state of the ECS: all entities with all their component values.

#### 戻り値

`object`

Object containing all entities and their components

##### entities

> **entities**: `object`[]

#### 例

```typescript
const state = coordinator.getFullState();
console.log(`Total entities: ${state.entities.length}`);
state.entities.forEach(entityData => {
  console.log(`Entity ${entityData.entity} has ${Object.keys(entityData.components).length} components`);
});
```

***

### getSystem()

> **getSystem**\<`T`\>(`systemName`): `T` \| `null`

定義: [index.ts:1373](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1373)

#### 型パラメーター

##### T

`T` *extends* [`System`](../interfaces/System.md)

#### パラメータ

##### systemName

`symbol`

#### 戻り値

`T` \| `null`

***

### registerComponent()

> **registerComponent**\<`T`\>(`componentName`): `void`

定義: [index.ts:1295](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1295)

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

定義: [index.ts:1405](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1405)

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

#### 例

```typescript
const coordinator = new Coordinator();

// Define a component schema at runtime
coordinator.registerComponentWithSchema({
  componentName: 'PlayerStats',
  fields: [
    { name: 'health', type: 'number', defaultValue: 100 },
    { name: 'name', type: 'string', defaultValue: 'Player' },
    { name: 'isAlive', type: 'boolean', defaultValue: true },
    { name: 'inventory', type: 'array', defaultValue: [] }
  ]
});

// Create an entity with the component
const entity = coordinator.createEntity();
const component = coordinator.createComponentFromSchema('PlayerStats', { health: 150 });
coordinator.addComponentToEntityWithSchema('PlayerStats', entity, component);
```

***

### registerSystem()

> **registerSystem**(`systemName`, `system`): `void`

定義: [index.ts:1362](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1362)

#### パラメータ

##### systemName

`symbol`

##### system

[`System`](../interfaces/System.md)

#### 戻り値

`void`

***

### removeComponentFromEntity()

> **removeComponentFromEntity**\<`T`\>(`componentName`, `entity`): `void`

定義: [index.ts:1326](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1326)

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

### serialize()

> **serialize**(): [`SerializedECSState`](../interfaces/SerializedECSState.md)

定義: [index.ts:1713](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1713)

Serialize the entire ECS state to a JSON-compatible format.
Note: Only works with global symbols (created via Symbol.for or createGlobalComponentName).

#### 戻り値

[`SerializedECSState`](../interfaces/SerializedECSState.md)

A serializable representation of the ECS state

#### Throws

Error if any component name is not a global symbol

#### 例

```typescript
const serialized = coordinator.serialize();
const json = JSON.stringify(serialized);
// Save to file or send over network
```

***

### setSystemSignature()

> **setSystemSignature**(`systemName`, `signature`): `void`

定義: [index.ts:1366](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1366)

#### パラメータ

##### systemName

`symbol`

##### signature

`number`

#### 戻り値

`void`

***

### validateComponentData()

> **validateComponentData**(`componentName`, `data`): `boolean`

定義: [index.ts:1539](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/ecs/src/index.ts#L1539)

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

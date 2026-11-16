# @ue-too/ecs v0.15.0

Entity Component System (ECS) implementation for TypeScript.

## Remarks

The `@ue-too/ecs` package provides a high-performance Entity Component System architecture
based on the tutorial from https://austinmorlan.com/posts/entity_component_system/

## ECS Architecture

- **Entities**: Unique identifiers (numbers) representing game objects
- **Components**: Data containers attached to entities
- **Systems**: Logic that operates on entities with specific component combinations
- **Signatures**: Bit flags indicating which components an entity has

## Key Features

- **Efficient Storage**: Component arrays using sparse-set data structure
- **Fast Iteration**: Dense packing for cache-friendly iteration
- **Type-Safe**: TypeScript generics for component type safety
- **Signature Matching**: Automatic system updates when entity signatures change
- **Pooling**: Entity ID recycling for memory efficiency

## Core Classes

- [Coordinator](classes/Coordinator.md): Main ECS coordinator managing all subsystems
- [EntityManager](classes/EntityManager.md): Creates and destroys entities
- [ComponentManager](classes/ComponentManager.md): Registers components and manages component data
- [SystemManager](classes/SystemManager.md): Registers systems and maintains entity sets
- [ComponentArray](classes/ComponentArray.md): Efficient sparse-set storage for component data

## Examples

Basic ECS usage
```typescript
import { Coordinator } from '@ue-too/ecs';

// Define component types
type Position = { x: number; y: number };
type Velocity = { x: number; y: number };

// Create coordinator
const coordinator = new Coordinator();

// Register components
coordinator.registerComponent<Position>('Position');
coordinator.registerComponent<Velocity>('Velocity');

// Create entity with components
const entity = coordinator.createEntity();
coordinator.addComponentToEntity('Position', entity, { x: 0, y: 0 });
coordinator.addComponentToEntity('Velocity', entity, { x: 1, y: 1 });

// Query components
const pos = coordinator.getComponentFromEntity<Position>('Position', entity);
console.log('Position:', pos);
```

System registration
```typescript
import { Coordinator, System } from '@ue-too/ecs';

const coordinator = new Coordinator();
coordinator.registerComponent<Position>('Position');
coordinator.registerComponent<Velocity>('Velocity');

// Create a movement system
const movementSystem: System = {
  entities: new Set()
};

const Movement = createSystemName('Movement');
coordinator.registerSystem(Movement, movementSystem);

// Set signature (entities with Position AND Velocity)
const Position = createComponentName('Position');
const Velocity = createComponentName('Velocity');
const posType = coordinator.getComponentType(Position)!;
const velType = coordinator.getComponentType(Velocity)!;
const signature = (1 << posType) | (1 << velType);
coordinator.setSystemSignature(Movement, signature);

// Update loop
function update(deltaTime: number) {
  movementSystem.entities.forEach(entity => {
    const pos = coordinator.getComponentFromEntity<Position>('Position', entity)!;
    const vel = coordinator.getComponentFromEntity<Velocity>('Velocity', entity)!;
    pos.x += vel.x * deltaTime;
    pos.y += vel.y * deltaTime;
  });
}
```

## See

[Coordinator](classes/Coordinator.md) for the main ECS API

## Core

- [Coordinator](classes/Coordinator.md)

## Managers

- [ComponentManager](classes/ComponentManager.md)
- [EntityManager](classes/EntityManager.md)
- [SystemManager](classes/SystemManager.md)

## Data Structures

- [ComponentArray](classes/ComponentArray.md)

## Types

- [ComponentArrayField](interfaces/ComponentArrayField.md)
- [ComponentPrimitiveField](interfaces/ComponentPrimitiveField.md)
- [ComponentSchema](interfaces/ComponentSchema.md)
- [SerializedComponentSchema](interfaces/SerializedComponentSchema.md)
- [SerializedECSState](interfaces/SerializedECSState.md)
- [SerializedEntity](interfaces/SerializedEntity.md)
- [System](interfaces/System.md)
- [ArrayElementType](type-aliases/ArrayElementType.md)
- [ComponentFieldDefinition](type-aliases/ComponentFieldDefinition.md)
- [ComponentFieldType](type-aliases/ComponentFieldType.md)
- [ComponentName](type-aliases/ComponentName.md)
- [ComponentSignature](type-aliases/ComponentSignature.md)
- [ComponentType](type-aliases/ComponentType.md)
- [Entity](type-aliases/Entity.md)
- [SystemName](type-aliases/SystemName.md)

## Configuration

- [MAX\_COMPONENTS](variables/MAX_COMPONENTS.md)
- [MAX\_ENTITIES](variables/MAX_ENTITIES.md)

## Other

- [CArray](interfaces/CArray.md)

## Utilities

- [createComponentName](functions/createComponentName.md)
- [createGlobalComponentName](functions/createGlobalComponentName.md)
- [createGlobalSystemName](functions/createGlobalSystemName.md)
- [createSystemName](functions/createSystemName.md)
- [deserializeComponentSchema](functions/deserializeComponentSchema.md)
- [getComponentNameString](functions/getComponentNameString.md)
- [getSystemNameString](functions/getSystemNameString.md)
- [serializeComponentSchema](functions/serializeComponentSchema.md)

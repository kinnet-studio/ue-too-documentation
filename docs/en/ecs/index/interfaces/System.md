[@ue-too/ecs](../../modules.md) / [index](../index.md) / System

# Interface: System

Defined in: [index.ts:1154](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1154)

System interface for processing entities with specific component combinations.

## Remarks

A System maintains a set of entities that match its component signature.
The ECS automatically updates this set when entities are created, destroyed,
or have their components modified.

Systems contain only the logic for processing entities - the `entities` set
is automatically managed by the SystemManager.

## Example

```typescript
const Position = createComponentName('Position');
const Velocity = createComponentName('Velocity');
const movementSystem: System = {
  entities: new Set()
};

// System logic (called in game loop)
function updateMovement(deltaTime: number) {
  movementSystem.entities.forEach(entity => {
    const pos = ecs.getComponentFromEntity<Position>(Position, entity);
    const vel = ecs.getComponentFromEntity<Velocity>(Velocity, entity);
    if (pos && vel) {
      pos.x += vel.x * deltaTime;
      pos.y += vel.y * deltaTime;
    }
  });
}
```

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [index.ts:1155](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/ecs/src/index.ts#L1155)

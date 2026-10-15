[@ue-too/dynamics](../modules.md) / index

# index

2D physics engine with rigid body dynamics and collision detection.

## Remarks

The `@ue-too/dynamics` package provides a complete 2D physics simulation engine
featuring rigid body dynamics, collision detection, constraint solving, and performance
optimizations like spatial indexing and sleeping bodies.

## Core Components

- **[World](classes/World.md)**: Main physics world managing all simulation
- **[RigidBody](interfaces/RigidBody.md)**: Physical objects with mass, velocity, and rotation
- **[Circle](classes/Circle.md)**: Circular rigid body shape
- **[Polygon](classes/Polygon.md)**: Polygonal rigid body shape
- **[Constraint](interfaces/Constraint.md)**: Physics constraints (pin joints, etc.)

## Key Features

### Rigid Body Physics
- Linear and angular velocity
- Mass and moment of inertia
- Static, dynamic, and kinematic bodies
- Friction simulation (static and dynamic)
- Gravity and force application

### Collision Detection
- **Broad Phase**: Spatial indexing (QuadTree, Dynamic Tree, Sweep-and-Prune)
- **Narrow Phase**: Separating Axis Theorem (SAT) for precise collision
- AABB (Axis-Aligned Bounding Box) optimization
- Collision filtering by category, mask, and group

### Collision Response
- Impulse-based resolution
- Rotation and angular momentum
- Contact manifold generation
- Restitution (bounciness)

### Performance Optimizations
- **Sleeping System**: Automatically disable resting bodies
- **Spatial Indexing**: Three algorithms with different trade-offs
  - QuadTree: Good for static worlds
  - Dynamic Tree: Good for mixed static/dynamic
  - Sweep-and-Prune: Best for many dynamic bodies
- **Pair Management**: Efficient collision pair tracking

### Constraints
- Pin joints between bodies
- Fixed pin joints to world
- Baumgarte stabilization

## Main Exports

- [World](classes/World.md) - Physics world container
- [RigidBody](interfaces/RigidBody.md) - Base rigid body interface
- [Circle](classes/Circle.md) - Circle shape
- [Polygon](classes/Polygon.md) - Polygon shape
- [Constraint](interfaces/Constraint.md) - Constraint interface
- [PinJoint](classes/PinJoint.md) - Pin joint constraint
- [CollisionFilter](interfaces/CollisionFilter.md) - Collision filtering system
- [PairManager](classes/PairManager.md) - Collision pair tracking
- [QuadTree](classes/QuadTree.md) - QuadTree spatial index
- [DynamicTree](classes/DynamicTree.md) - Dynamic AABB tree
- [SweepAndPrune](classes/SweepAndPrune.md) - Sweep-and-prune algorithm

## Examples

Basic physics simulation
```typescript
import { World, Circle, Polygon } from '@ue-too/dynamics';

// Create a physics world (2000x2000)
const world = new World(2000, 2000, 'dynamictree');

// Create a static ground
const ground = new Polygon(
  { x: 0, y: -100 },
  [{ x: -1000, y: 0 }, { x: 1000, y: 0 }, { x: 1000, y: 50 }, { x: -1000, y: 50 }],
  0,
  100,
  true  // isStatic
);
world.addRigidBody('ground', ground);

// Create a dynamic circle
const ball = new Circle({ x: 0, y: 200 }, 20, 0, 10, false);
world.addRigidBody('ball', ball);

// Simulation loop
function update(deltaTime: number) {
  world.step(deltaTime);
}

// Run at 60 FPS
setInterval(() => update(1/60), 16);
```

Collision filtering
```typescript
import { Circle, CollisionCategory } from '@ue-too/dynamics';

// Create player (collides with everything except other players)
const player = new Circle({ x: 0, y: 0 }, 20);
player.collisionFilter = {
  category: CollisionCategory.PLAYER,
  mask: ~CollisionCategory.PLAYER & 0xFFFF,
  group: 0
};

// Create enemy (collides with player and static objects)
const enemy = new Circle({ x: 100, y: 0 }, 20);
enemy.collisionFilter = {
  category: CollisionCategory.ENEMY,
  mask: CollisionCategory.PLAYER | CollisionCategory.STATIC,
  group: 0
};

// Create sensor (doesn't physically collide, just detects)
const sensor = new Circle({ x: 200, y: 0 }, 50);
sensor.collisionFilter = {
  category: CollisionCategory.SENSOR,
  mask: CollisionCategory.PLAYER,
  group: -1  // Negative group = never physically collide
};
```

Constraints and joints
```typescript
import { World, Circle, PinJoint, FixedPinJoint } from '@ue-too/dynamics';

const world = new World(2000, 2000);

// Create a pendulum with fixed pin joint
const bob = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
world.addRigidBody('bob', bob);

const fixedJoint = new FixedPinJoint(
  bob,
  { x: 0, y: 0 },  // Local anchor on bob (center)
  { x: 0, y: 0 }   // World anchor (fixed point)
);
world.addConstraint(fixedJoint);

// Create a chain with pin joints between bodies
const link1 = new Circle({ x: 50, y: 0 }, 10, 0, 5, false);
const link2 = new Circle({ x: 100, y: 0 }, 10, 0, 5, false);
world.addRigidBody('link1', link1);
world.addRigidBody('link2', link2);

const joint = new PinJoint(
  link1,
  link2,
  { x: 10, y: 0 },   // Anchor on link1 (right edge)
  { x: -10, y: 0 }   // Anchor on link2 (left edge)
);
world.addConstraint(joint);
```

Performance tuning
```typescript
import { World } from '@ue-too/dynamics';

const world = new World(2000, 2000, 'sap');  // Use sweep-and-prune

// Enable sleeping for performance
world.sleepingEnabled = true;

// Adjust sleeping thresholds on individual bodies
body.sleepThreshold = 0.01;  // Velocity threshold
body.sleepTime = 0.5;        // Time at rest before sleeping

// Change spatial index algorithm at runtime
world.setSpatialIndexType('dynamictree');

// Get performance statistics
const stats = world.getCollisionStats();
console.log('Active pairs:', stats.activePairs);
console.log('Sleeping bodies:', stats.sleepingBodies);

const spatialStats = world.getSpatialIndexStats();
console.log('Spatial index:', spatialStats);
```

## 参照

 - [World](classes/World.md) for the main physics engine
 - [RigidBody](interfaces/RigidBody.md) for physics objects
 - [Constraint](interfaces/Constraint.md) for joints and constraints

## Core

- [BaseRigidBody](classes/BaseRigidBody.md)
- [Circle](classes/Circle.md)
- [Polygon](classes/Polygon.md)
- [VisaulCircleBody](classes/VisaulCircleBody.md)
- [VisualPolygonBody](classes/VisualPolygonBody.md)
- [World](classes/World.md)
- [RigidBody](interfaces/RigidBody.md)
- [SpatialIndexType](type-aliases/SpatialIndexType.md)

## Collision

- [PairManager](classes/PairManager.md)
- [CollisionPair](interfaces/CollisionPair.md)
- [CollisionCategory](variables/CollisionCategory.md)
- [DEFAULT\_COLLISION\_FILTER](variables/DEFAULT_COLLISION_FILTER.md)
- [canCollide](functions/canCollide.md)

## Spatial Indexing

- [DynamicTree](classes/DynamicTree.md)
- [QuadTree](classes/QuadTree.md)
- [SweepAndPrune](classes/SweepAndPrune.md)

## Constraints

- [FixedPinJoint](classes/FixedPinJoint.md)
- [PinJoint](classes/PinJoint.md)
- [Constraint](interfaces/Constraint.md)

## Types

- [CollisionFilter](interfaces/CollisionFilter.md)
- [SpatialIndex](interfaces/SpatialIndex.md)
- [SpatialIndexObject](interfaces/SpatialIndexObject.md)

## Other

- [Crescent](classes/Crescent.md)
- [Fan](classes/Fan.md)
- [RectangleBound](classes/RectangleBound.md)
- [PairEvents](interfaces/PairEvents.md)
- [PinJointConstraint](interfaces/PinJointConstraint.md)
- [VisualComponent](interfaces/VisualComponent.md)
- [WorldPinJointConstraint](interfaces/WorldPinJointConstraint.md)
- [QuadTreeObject](type-aliases/QuadTreeObject.md)
- [aabbIntersects](functions/aabbIntersects.md)
- [broadPhase](functions/broadPhase.md)
- [broadPhaseWithRigidBodyReturned](functions/broadPhaseWithRigidBodyReturned.md)
- [broadPhaseWithSpatialIndex](functions/broadPhaseWithSpatialIndex.md)
- [broadPhaseWithSpatialIndexFiltered](functions/broadPhaseWithSpatialIndexFiltered.md)
- [intersects](functions/intersects.md)
- [narrowPhase](functions/narrowPhase.md)
- [narrowPhaseWithRigidBody](functions/narrowPhaseWithRigidBody.md)
- [narrowPhaseWithRigidBodyAndPairs](functions/narrowPhaseWithRigidBodyAndPairs.md)
- [resolveCollision](functions/resolveCollision.md)
- [resolveCollisionWithRotation](functions/resolveCollisionWithRotation.md)
- [solvePinJointConstraint](functions/solvePinJointConstraint.md)
- [solveWorldPinJointConstraint](functions/solveWorldPinJointConstraint.md)

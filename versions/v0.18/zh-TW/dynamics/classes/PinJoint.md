[@ue-too/dynamics](../globals.md) / PinJoint

# Class: PinJoint

Defined in: [constraint.ts:149](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L149)

Pin joint connecting two bodies together.

## Remarks

Connects two bodies at specified anchor points. The bodies can rotate
relative to each other around the joint.

Useful for creating chains, ragdolls, and mechanical linkages.

## Example

Create a chain
```typescript
const link1 = new Circle({ x: 0, y: 0 }, 10);
const link2 = new Circle({ x: 30, y: 0 }, 10);

const joint = new PinJoint(
  link1,
  link2,
  { x: 10, y: 0 },   // Right edge of link1
  { x: -10, y: 0 }   // Left edge of link2
);

world.addRigidBody('link1', link1);
world.addRigidBody('link2', link2);
world.addConstraint(joint);
```

## Implements

- [`Constraint`](../interfaces/Constraint.md)

## Constructors

### Constructor

> **new PinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `PinJoint`

Defined in: [constraint.ts:155](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L155)

#### Parameters

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### Returns

`PinJoint`

## Methods

### enforce()

> **enforce**(`dt`): `void`

Defined in: [constraint.ts:167](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L167)

Enforces the constraint for one timestep.

#### Parameters

##### dt

`number`

Timestep in seconds

#### Returns

`void`

#### Implementation of

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solvePinJointConstraint()

> **solvePinJointConstraint**(`dt`): `void`

Defined in: [constraint.ts:171](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L171)

#### Parameters

##### dt

`number`

#### Returns

`void`

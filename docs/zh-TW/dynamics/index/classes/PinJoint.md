[@ue-too/dynamics](../../modules.md) / [index](../index.md) / PinJoint

# 類別: PinJoint

定義於: [constraint.ts:149](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L149)

Pin joint connecting two bodies together.

## 備註

Connects two bodies at specified anchor points. The bodies can rotate
relative to each other around the joint.

Useful for creating chains, ragdolls, and mechanical linkages.

## 範例

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

## 實作

- [`Constraint`](../interfaces/Constraint.md)

## 建構函式

### 建構函式

> **new PinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `PinJoint`

定義於: [constraint.ts:155](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L155)

#### 參數

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### 回傳

`PinJoint`

## 方法

### enforce()

> **enforce**(`dt`): `void`

定義於: [constraint.ts:167](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L167)

Enforces the constraint for one timestep.

#### 參數

##### dt

`number`

Timestep in seconds

#### 回傳

`void`

#### 實作了

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solvePinJointConstraint()

> **solvePinJointConstraint**(`dt`): `void`

定義於: [constraint.ts:171](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L171)

#### 參數

##### dt

`number`

#### 回傳

`void`

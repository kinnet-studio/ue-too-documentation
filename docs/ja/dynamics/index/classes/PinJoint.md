[@ue-too/dynamics](../../modules.md) / [index](../index.md) / PinJoint

# クラス: PinJoint

定義: [constraint.ts:149](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/constraint.ts#L149)

Pin joint connecting two bodies together.

## Remarks

Connects two bodies at specified anchor points. The bodies can rotate
relative to each other around the joint.

Useful for creating chains, ragdolls, and mechanical linkages.

## 例

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

## 実装

- [`Constraint`](../interfaces/Constraint.md)

## コンストラクター

### コンストラクター

> **new PinJoint**(`bodyA`, `bodyB`, `anchorA`, `anchorB`): `PinJoint`

定義: [constraint.ts:155](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/constraint.ts#L155)

#### パラメータ

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### anchorB

`Point`

#### 戻り値

`PinJoint`

## メソッド

### enforce()

> **enforce**(`dt`): `void`

定義: [constraint.ts:167](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/constraint.ts#L167)

Enforces the constraint for one timestep.

#### パラメータ

##### dt

`number`

Timestep in seconds

#### 戻り値

`void`

#### の実装

[`Constraint`](../interfaces/Constraint.md).[`enforce`](../interfaces/Constraint.md#enforce)

***

### solvePinJointConstraint()

> **solvePinJointConstraint**(`dt`): `void`

定義: [constraint.ts:171](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/dynamics/src/constraint.ts#L171)

#### パラメータ

##### dt

`number`

#### 戻り値

`void`

[@ue-too/dynamics](../../modules.md) / [index](../index.md) / FixedPinJoint

# クラス: FixedPinJoint

定義: [constraint.ts:50](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L50)

Pin joint connecting a body to a fixed world point.

## Remarks

Creates a pendulum-like constraint where a point on the body is pinned
to a fixed location in world space. The body can rotate around this point.

Uses Baumgarte stabilization to prevent drift.

## 例

Create a pendulum
```typescript
const bob = new Circle({ x: 0, y: 100 }, 20, 0, 10, false);
const joint = new FixedPinJoint(
  bob,
  { x: 0, y: 0 },  // Anchor on bob (center)
  { x: 0, y: 0 }   // World anchor (ceiling)
);
world.addRigidBody('bob', bob);
world.addConstraint(joint);
```

## 実装

- [`Constraint`](../interfaces/Constraint.md)

## コンストラクター

### コンストラクター

> **new FixedPinJoint**(`bodyA`, `anchorA`, `worldAnchorA`): `FixedPinJoint`

定義: [constraint.ts:55](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L55)

#### パラメータ

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### worldAnchorA

`Point`

#### 戻り値

`FixedPinJoint`

## メソッド

### enforce()

> **enforce**(`dt`): `void`

定義: [constraint.ts:61](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L61)

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

### solveWorldPinJointConstraint()

> **solveWorldPinJointConstraint**(`dt`): `void`

定義: [constraint.ts:65](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/dynamics/src/constraint.ts#L65)

#### パラメータ

##### dt

`number`

#### 戻り値

`void`

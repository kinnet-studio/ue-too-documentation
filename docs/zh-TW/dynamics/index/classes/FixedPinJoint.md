[@ue-too/dynamics](../../modules.md) / [index](../index.md) / FixedPinJoint

# 類別: FixedPinJoint

定義於: [constraint.ts:50](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L50)

Pin joint connecting a body to a fixed world point.

## 備註

Creates a pendulum-like constraint where a point on the body is pinned
to a fixed location in world space. The body can rotate around this point.

Uses Baumgarte stabilization to prevent drift.

## 範例

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

## 實作

- [`Constraint`](../interfaces/Constraint.md)

## 建構函式

### 建構函式

> **new FixedPinJoint**(`bodyA`, `anchorA`, `worldAnchorA`): `FixedPinJoint`

定義於: [constraint.ts:55](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L55)

#### 參數

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### anchorA

`Point`

##### worldAnchorA

`Point`

#### 回傳

`FixedPinJoint`

## 方法

### enforce()

> **enforce**(`dt`): `void`

定義於: [constraint.ts:61](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L61)

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

### solveWorldPinJointConstraint()

> **solveWorldPinJointConstraint**(`dt`): `void`

定義於: [constraint.ts:65](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L65)

#### 參數

##### dt

`number`

#### 回傳

`void`

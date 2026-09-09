[@ue-too/dynamics](../../modules.md) / [index](../index.md) / Constraint

# 介面: Constraint

定義於: [constraint.ts:17](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L17)

Physics constraint interface.

## 備註

Constraints restrict the motion of rigid bodies. Common examples include
pin joints, distance constraints, and angle limits.

Constraints are solved using iterative methods and Baumgarte stabilization
to prevent drift over time.

## 方法

### enforce()

> **enforce**(`dt`): `void`

定義於: [constraint.ts:23](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L23)

Enforces the constraint for one timestep.

#### 參數

##### dt

`number`

Timestep in seconds

#### 回傳

`void`

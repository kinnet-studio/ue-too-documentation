[@ue-too/dynamics](../../modules.md) / [index](../index.md) / Constraint

# インターフェイス: Constraint

定義: [constraint.ts:17](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L17)

Physics constraint interface.

## Remarks

Constraints restrict the motion of rigid bodies. Common examples include
pin joints, distance constraints, and angle limits.

Constraints are solved using iterative methods and Baumgarte stabilization
to prevent drift over time.

## メソッド

### enforce()

> **enforce**(`dt`): `void`

定義: [constraint.ts:23](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/dynamics/src/constraint.ts#L23)

Enforces the constraint for one timestep.

#### パラメータ

##### dt

`number`

Timestep in seconds

#### 戻り値

`void`

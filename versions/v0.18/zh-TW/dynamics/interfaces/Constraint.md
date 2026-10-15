[@ue-too/dynamics](../globals.md) / Constraint

# Interface: Constraint

Defined in: [constraint.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L17)

Physics constraint interface.

## Remarks

Constraints restrict the motion of rigid bodies. Common examples include
pin joints, distance constraints, and angle limits.

Constraints are solved using iterative methods and Baumgarte stabilization
to prevent drift over time.

## Methods

### enforce()

> **enforce**(`dt`): `void`

Defined in: [constraint.ts:23](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/dynamics/src/constraint.ts#L23)

Enforces the constraint for one timestep.

#### Parameters

##### dt

`number`

Timestep in seconds

#### Returns

`void`

[@ue-too/dynamics](../../modules.md) / [index](../index.md) / CollisionPair

# Interface: CollisionPair

Defined in: [pair-manager.ts:14](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L14)

Represents a collision pair between two bodies.

## Remarks

Tracks collision information across multiple frames, enabling
detection of collision start, update, and end events.

## Properties

### bodyA

> **bodyA**: [`RigidBody`](RigidBody.md)

Defined in: [pair-manager.ts:15](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L15)

***

### bodyB

> **bodyB**: [`RigidBody`](RigidBody.md)

Defined in: [pair-manager.ts:16](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L16)

***

### contactPoints

> **contactPoints**: `Point`[]

Defined in: [pair-manager.ts:19](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L19)

***

### depth?

> `optional` **depth**: `number`

Defined in: [pair-manager.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L21)

***

### frameCreated

> **frameCreated**: `number`

Defined in: [pair-manager.ts:22](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L22)

***

### frameUpdated

> **frameUpdated**: `number`

Defined in: [pair-manager.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L23)

***

### id

> **id**: `string`

Defined in: [pair-manager.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L17)

***

### isActive

> **isActive**: `boolean`

Defined in: [pair-manager.ts:18](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L18)

***

### normal?

> `optional` **normal**: `Point`

Defined in: [pair-manager.ts:20](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L20)

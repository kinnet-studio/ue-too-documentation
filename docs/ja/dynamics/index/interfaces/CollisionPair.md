[@ue-too/dynamics](../../modules.md) / [index](../index.md) / CollisionPair

# インターフェイス: CollisionPair

定義: [pair-manager.ts:14](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L14)

Represents a collision pair between two bodies.

## Remarks

Tracks collision information across multiple frames, enabling
detection of collision start, update, and end events.

## プロパティ

### bodyA

> **bodyA**: [`RigidBody`](RigidBody.md)

定義: [pair-manager.ts:15](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L15)

***

### bodyB

> **bodyB**: [`RigidBody`](RigidBody.md)

定義: [pair-manager.ts:16](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L16)

***

### contactPoints

> **contactPoints**: `Point`[]

定義: [pair-manager.ts:19](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L19)

***

### depth?

> `optional` **depth**: `number`

定義: [pair-manager.ts:21](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L21)

***

### frameCreated

> **frameCreated**: `number`

定義: [pair-manager.ts:22](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L22)

***

### frameUpdated

> **frameUpdated**: `number`

定義: [pair-manager.ts:23](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L23)

***

### id

> **id**: `string`

定義: [pair-manager.ts:17](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L17)

***

### isActive

> **isActive**: `boolean`

定義: [pair-manager.ts:18](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L18)

***

### normal?

> `optional` **normal**: `Point`

定義: [pair-manager.ts:20](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L20)

[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / BaseTeardownTarget

# Interface: BaseTeardownTarget

Defined in: [base-teardown.ts:3](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L3)

The slice of the app components the base teardown touches. Structural so
 the teardown can be unit-tested without a Pixi renderer.

## Properties

### canvasProxy

> **canvasProxy**: `object`

Defined in: [base-teardown.ts:6](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L6)

#### tearDown()

> **tearDown**(): `void`

##### Returns

`void`

***

### cleanups

> **cleanups**: () => `void`[]

Defined in: [base-teardown.ts:7](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L7)

#### Returns

`void`

***

### kmtParser

> **kmtParser**: `object`

Defined in: [base-teardown.ts:4](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L4)

#### tearDown()

> **tearDown**(): `void`

##### Returns

`void`

***

### touchParser

> **touchParser**: `object`

Defined in: [base-teardown.ts:5](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L5)

#### tearDown()

> **tearDown**(): `void`

##### Returns

`void`

[@ue-too/animate](../../modules.md) / [index](../index.md) / AnimatorContainer

# Interface: AnimatorContainer

Defined in: [composite-animation.ts:70](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L70)

Interface for containers that hold and manage child animators.

## Remarks

Implemented by [CompositeAnimation](../classes/CompositeAnimation.md) to manage hierarchical animation structures.
Handles duration updates and prevents cyclic dependencies.

## Methods

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

Defined in: [composite-animation.ts:72](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L72)

#### Returns

`boolean`

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

Defined in: [composite-animation.ts:73](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L73)

#### Parameters

##### animationInInterest

[`Animator`](Animator.md)

#### Returns

`boolean`

***

### updateDuration()

> **updateDuration**(): `void`

Defined in: [composite-animation.ts:71](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L71)

#### Returns

`void`

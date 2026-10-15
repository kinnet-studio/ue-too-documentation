[@ue-too/animate](../globals.md) / AnimatorContainer

# Interface: AnimatorContainer

Defined in: [composite-animation.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L70)

Interface for containers that hold and manage child animators.

## Remarks

Implemented by [CompositeAnimation](../classes/CompositeAnimation.md) to manage hierarchical animation structures.
Handles duration updates and prevents cyclic dependencies.

## Methods

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

Defined in: [composite-animation.ts:72](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L72)

#### Returns

`boolean`

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

Defined in: [composite-animation.ts:73](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L73)

#### Parameters

##### animationInInterest

[`Animator`](Animator.md)

#### Returns

`boolean`

***

### updateDuration()

> **updateDuration**(): `void`

Defined in: [composite-animation.ts:71](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L71)

#### Returns

`void`

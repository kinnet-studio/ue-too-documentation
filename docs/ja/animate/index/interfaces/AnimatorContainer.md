[@ue-too/animate](../../modules.md) / [index](../index.md) / AnimatorContainer

# インターフェイス: AnimatorContainer

定義: [composite-animation.ts:70](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L70)

Interface for containers that hold and manage child animators.

## Remarks

Implemented by [CompositeAnimation](../classes/CompositeAnimation.md) to manage hierarchical animation structures.
Handles duration updates and prevents cyclic dependencies.

## メソッド

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

定義: [composite-animation.ts:72](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L72)

#### 戻り値

`boolean`

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

定義: [composite-animation.ts:73](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L73)

#### パラメータ

##### animationInInterest

[`Animator`](Animator.md)

#### 戻り値

`boolean`

***

### updateDuration()

> **updateDuration**(): `void`

定義: [composite-animation.ts:71](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L71)

#### 戻り値

`void`

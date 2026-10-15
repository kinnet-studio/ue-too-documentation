[@ue-too/animate](../../modules.md) / [index](../index.md) / AnimatorContainer

# 介面: AnimatorContainer

定義於: [composite-animation.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/composite-animation.ts#L70)

Interface for containers that hold and manage child animators.

## 備註

Implemented by [CompositeAnimation](../classes/CompositeAnimation.md) to manage hierarchical animation structures.
Handles duration updates and prevents cyclic dependencies.

## 方法

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

定義於: [composite-animation.ts:72](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/composite-animation.ts#L72)

#### 回傳

`boolean`

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

定義於: [composite-animation.ts:73](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/composite-animation.ts#L73)

#### 參數

##### animationInInterest

[`Animator`](Animator.md)

#### 回傳

`boolean`

***

### updateDuration()

> **updateDuration**(): `void`

定義於: [composite-animation.ts:71](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/composite-animation.ts#L71)

#### 回傳

`void`

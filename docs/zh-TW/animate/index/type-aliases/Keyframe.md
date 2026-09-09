[@ue-too/animate](../../modules.md) / [index](../index.md) / Keyframe

# 型別別名: Keyframe\<T\>

> **Keyframe**\<`T`\> = `object`

定義於: [animatable-attribute.ts:25](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/animatable-attribute.ts#L25)

Represents a keyframe in an animation timeline.

## 備註

A keyframe defines a value at a specific point in the animation's progress.
Keyframes are defined with a percentage from 0.0 (start) to 1.0 (end), along
with the value at that point and an optional easing function for interpolation
to the next keyframe.

## 範例

```typescript
const keyframe: Keyframe<number> = {
  percentage: 0.5,
  value: 50,
  easingFn: (t) => t * t // Ease-in quadratic
};
```

## 型別參數

### T

`T`

The type of value being animated (number, Point, RGB, etc.)

## 屬性

### easingFn()?

> `optional` **easingFn**: (`percentage`) => `number`

定義於: [animatable-attribute.ts:31](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/animatable-attribute.ts#L31)

Optional easing function for interpolation to next keyframe

#### 參數

##### percentage

`number`

#### 回傳

`number`

***

### percentage

> **percentage**: `number`

定義於: [animatable-attribute.ts:27](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/animatable-attribute.ts#L27)

Animation progress from 0.0 (start) to 1.0 (end)

***

### value

> **value**: `T`

定義於: [animatable-attribute.ts:29](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/animatable-attribute.ts#L29)

Value at this keyframe

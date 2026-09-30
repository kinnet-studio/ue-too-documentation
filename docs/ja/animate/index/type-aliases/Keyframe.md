[@ue-too/animate](../../modules.md) / [index](../index.md) / Keyframe

# 型エイリアス: Keyframe\<T\>

> **Keyframe**\<`T`\> = `object`

定義: [animatable-attribute.ts:25](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L25)

Represents a keyframe in an animation timeline.

## Remarks

A keyframe defines a value at a specific point in the animation's progress.
Keyframes are defined with a percentage from 0.0 (start) to 1.0 (end), along
with the value at that point and an optional easing function for interpolation
to the next keyframe.

## 例

```typescript
const keyframe: Keyframe<number> = {
  percentage: 0.5,
  value: 50,
  easingFn: (t) => t * t // Ease-in quadratic
};
```

## 型パラメーター

### T

`T`

The type of value being animated (number, Point, RGB, etc.)

## プロパティ

### easingFn()?

> `optional` **easingFn**: (`percentage`) => `number`

定義: [animatable-attribute.ts:31](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L31)

Optional easing function for interpolation to next keyframe

#### パラメータ

##### percentage

`number`

#### 戻り値

`number`

***

### percentage

> **percentage**: `number`

定義: [animatable-attribute.ts:27](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L27)

Animation progress from 0.0 (start) to 1.0 (end)

***

### value

> **value**: `T`

定義: [animatable-attribute.ts:29](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L29)

Value at this keyframe

[@ue-too/animate](../globals.md) / Keyframe

# Type Alias: Keyframe\<T\>

> **Keyframe**\<`T`\> = `object`

Defined in: [animatable-attribute.ts:25](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L25)

Represents a keyframe in an animation timeline.

## Remarks

A keyframe defines a value at a specific point in the animation's progress.
Keyframes are defined with a percentage from 0.0 (start) to 1.0 (end), along
with the value at that point and an optional easing function for interpolation
to the next keyframe.

## Example

```typescript
const keyframe: Keyframe<number> = {
  percentage: 0.5,
  value: 50,
  easingFn: (t) => t * t // Ease-in quadratic
};
```

## Type Parameters

### T

`T`

The type of value being animated (number, Point, RGB, etc.)

## Properties

### easingFn()?

> `optional` **easingFn**: (`percentage`) => `number`

Defined in: [animatable-attribute.ts:31](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L31)

Optional easing function for interpolation to next keyframe

#### Parameters

##### percentage

`number`

#### Returns

`number`

***

### percentage

> **percentage**: `number`

Defined in: [animatable-attribute.ts:27](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L27)

Animation progress from 0.0 (start) to 1.0 (end)

***

### value

> **value**: `T`

Defined in: [animatable-attribute.ts:29](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L29)

Value at this keyframe

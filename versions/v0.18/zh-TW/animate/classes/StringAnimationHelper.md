[@ue-too/animate](../globals.md) / StringAnimationHelper

# Class: StringAnimationHelper

Defined in: [animatable-attribute.ts:194](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L194)

Interface for type-specific interpolation helpers.

## Remarks

Animation helpers provide the `lerp` (linear interpolation) logic for specific types.
Different types require different interpolation strategies:
- Numbers: Simple linear interpolation
- Points: Component-wise interpolation
- Colors (RGB): Component-wise color interpolation
- Strings: Step-based (threshold) interpolation

## Example

```typescript
const myHelper: AnimatableAttributeHelper<number> = {
  lerp: (ratio, start, end) => {
    const t = (ratio - start.percentage) / (end.percentage - start.percentage);
    return start.value + t * (end.value - start.value);
  }
};
```

## Implements

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

## Constructors

### Constructor

> **new StringAnimationHelper**(): `StringAnimationHelper`

Defined in: [animatable-attribute.ts:195](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L195)

#### Returns

`StringAnimationHelper`

## Methods

### lerp()

> **lerp**(`ratio`, `start`, `end`): `string`

Defined in: [animatable-attribute.ts:197](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L197)

Interpolates between two keyframes at a given ratio.

#### Parameters

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Ending keyframe

#### Returns

`string`

Interpolated value at the given ratio

#### Implementation of

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

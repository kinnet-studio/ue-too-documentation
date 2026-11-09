[@ue-too/animate](../globals.md) / PointAnimationHelper

# Class: PointAnimationHelper

Defined in: [animatable-attribute.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L103)

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

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`Point`\>

## Constructors

### Constructor

> **new PointAnimationHelper**(): `PointAnimationHelper`

Defined in: [animatable-attribute.ts:104](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L104)

#### Returns

`PointAnimationHelper`

## Methods

### lerp()

> **lerp**(`ratio`, `start`, `end`): `Point`

Defined in: [animatable-attribute.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L106)

Interpolates between two keyframes at a given ratio.

#### Parameters

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`Point`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`Point`\>

Ending keyframe

#### Returns

`Point`

Interpolated value at the given ratio

#### Implementation of

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

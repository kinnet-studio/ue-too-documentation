[@ue-too/animate](../globals.md) / AnimatableAttributeHelper

# Interface: AnimatableAttributeHelper\<T\>

Defined in: [animatable-attribute.ts:59](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L59)

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

## Type Parameters

### T

`T`

The type of value being interpolated

## Methods

### lerp()

> **lerp**(`ratio`, `start`, `end`): `T`

Defined in: [animatable-attribute.ts:68](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/animatable-attribute.ts#L68)

Interpolates between two keyframes at a given ratio.

#### Parameters

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>

Ending keyframe

#### Returns

`T`

Interpolated value at the given ratio

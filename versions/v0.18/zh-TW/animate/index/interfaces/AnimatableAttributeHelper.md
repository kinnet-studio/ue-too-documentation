[@ue-too/animate](../../modules.md) / [index](../index.md) / AnimatableAttributeHelper

# 介面: AnimatableAttributeHelper\<T\>

定義於: [animatable-attribute.ts:59](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L59)

Interface for type-specific interpolation helpers.

## 備註

Animation helpers provide the `lerp` (linear interpolation) logic for specific types.
Different types require different interpolation strategies:
- Numbers: Simple linear interpolation
- Points: Component-wise interpolation
- Colors (RGB): Component-wise color interpolation
- Strings: Step-based (threshold) interpolation

## 範例

```typescript
const myHelper: AnimatableAttributeHelper<number> = {
  lerp: (ratio, start, end) => {
    const t = (ratio - start.percentage) / (end.percentage - start.percentage);
    return start.value + t * (end.value - start.value);
  }
};
```

## 型別參數

### T

`T`

The type of value being interpolated

## 方法

### lerp()

> **lerp**(`ratio`, `start`, `end`): `T`

定義於: [animatable-attribute.ts:68](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L68)

Interpolates between two keyframes at a given ratio.

#### 參數

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>

Ending keyframe

#### 回傳

`T`

Interpolated value at the given ratio

[@ue-too/animate](../../modules.md) / [index](../index.md) / RGBAnimationHelper

# 類別: RGBAnimationHelper

定義於: [animatable-attribute.ts:299](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L299)

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

## 實作

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<[`RGB`](../type-aliases/RGB.md)\>

## 建構函式

### 建構函式

> **new RGBAnimationHelper**(): `RGBAnimationHelper`

定義於: [animatable-attribute.ts:300](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L300)

#### 回傳

`RGBAnimationHelper`

## 方法

### lerp()

> **lerp**(`ratio`, `start`, `end`): [`RGB`](../type-aliases/RGB.md)

定義於: [animatable-attribute.ts:302](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L302)

Interpolates between two keyframes at a given ratio.

#### 參數

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<[`RGB`](../type-aliases/RGB.md)\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<[`RGB`](../type-aliases/RGB.md)\>

Ending keyframe

#### 回傳

[`RGB`](../type-aliases/RGB.md)

Interpolated value at the given ratio

#### 實作了

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

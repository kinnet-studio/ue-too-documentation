[@ue-too/animate](../../modules.md) / [index](../index.md) / NumberAnimationHelper

# 類別: NumberAnimationHelper

定義於: [animatable-attribute.ts:149](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L149)

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

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`number`\>

## 建構函式

### 建構函式

> **new NumberAnimationHelper**(): `NumberAnimationHelper`

定義於: [animatable-attribute.ts:150](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L150)

#### 回傳

`NumberAnimationHelper`

## 方法

### lerp()

> **lerp**(`ratio`, `start`, `end`): `number`

定義於: [animatable-attribute.ts:152](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L152)

Interpolates between two keyframes at a given ratio.

#### 參數

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Ending keyframe

#### 回傳

`number`

Interpolated value at the given ratio

#### 實作了

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

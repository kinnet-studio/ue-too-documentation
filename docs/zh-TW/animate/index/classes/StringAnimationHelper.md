[@ue-too/animate](../../modules.md) / [index](../index.md) / StringAnimationHelper

# 類別: StringAnimationHelper

定義於: [animatable-attribute.ts:194](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L194)

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

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

## 建構函式

### 建構函式

> **new StringAnimationHelper**(): `StringAnimationHelper`

定義於: [animatable-attribute.ts:195](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L195)

#### 回傳

`StringAnimationHelper`

## 方法

### lerp()

> **lerp**(`ratio`, `start`, `end`): `string`

定義於: [animatable-attribute.ts:197](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L197)

Interpolates between two keyframes at a given ratio.

#### 參數

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Ending keyframe

#### 回傳

`string`

Interpolated value at the given ratio

#### 實作了

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

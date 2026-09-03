[@ue-too/animate](../../modules.md) / [index](../index.md) / NumberAnimationHelper

# クラス: NumberAnimationHelper

定義: [animatable-attribute.ts:149](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L149)

Interface for type-specific interpolation helpers.

## Remarks

Animation helpers provide the `lerp` (linear interpolation) logic for specific types.
Different types require different interpolation strategies:
- Numbers: Simple linear interpolation
- Points: Component-wise interpolation
- Colors (RGB): Component-wise color interpolation
- Strings: Step-based (threshold) interpolation

## 例

```typescript
const myHelper: AnimatableAttributeHelper<number> = {
  lerp: (ratio, start, end) => {
    const t = (ratio - start.percentage) / (end.percentage - start.percentage);
    return start.value + t * (end.value - start.value);
  }
};
```

## 実装

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`number`\>

## コンストラクター

### コンストラクター

> **new NumberAnimationHelper**(): `NumberAnimationHelper`

定義: [animatable-attribute.ts:150](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L150)

#### 戻り値

`NumberAnimationHelper`

## メソッド

### lerp()

> **lerp**(`ratio`, `start`, `end`): `number`

定義: [animatable-attribute.ts:152](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/animatable-attribute.ts#L152)

Interpolates between two keyframes at a given ratio.

#### パラメータ

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Ending keyframe

#### 戻り値

`number`

Interpolated value at the given ratio

#### の実装

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

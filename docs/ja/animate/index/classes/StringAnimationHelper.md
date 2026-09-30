[@ue-too/animate](../../modules.md) / [index](../index.md) / StringAnimationHelper

# クラス: StringAnimationHelper

定義: [animatable-attribute.ts:194](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L194)

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

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

## コンストラクター

### コンストラクター

> **new StringAnimationHelper**(): `StringAnimationHelper`

定義: [animatable-attribute.ts:195](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L195)

#### 戻り値

`StringAnimationHelper`

## メソッド

### lerp()

> **lerp**(`ratio`, `start`, `end`): `string`

定義: [animatable-attribute.ts:197](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/animatable-attribute.ts#L197)

Interpolates between two keyframes at a given ratio.

#### パラメータ

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`string`\>

Ending keyframe

#### 戻り値

`string`

Interpolated value at the given ratio

#### の実装

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)

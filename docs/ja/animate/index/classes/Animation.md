[@ue-too/animate](../../modules.md) / [index](../index.md) / Animation

# クラス: Animation\<T\>

定義: [composite-animation.ts:740](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L740)

Keyframe-based animation for a single value.

## Remarks

The Animation class interpolates a value through a series of keyframes over time.
It handles:
- Keyframe interpolation with binary search for efficiency
- Easing functions for smooth motion curves
- Reverse playback
- Looping with optional max loop count
- Delays before start and drag time after completion
- Lifecycle callbacks

## How It Works

1. Define keyframes at percentages (0.0 to 1.0) along the timeline
2. Provide a callback to apply the animated value
3. Provide an interpolation helper for the value type
4. Call `animate(deltaTime)` each frame to progress the animation

## 例

Animating a number with easing
```typescript
let opacity = 0;

const fadeIn = new Animation(
  [
    { percentage: 0, value: 0 },
    { percentage: 1, value: 1, easingFn: (t) => t * t } // Ease-in
  ],
  (value) => { opacity = value; },
  numberHelperFunctions,
  1000 // 1 second duration
);

fadeIn.start();

// In animation loop
function loop(deltaTime: number) {
  fadeIn.animate(deltaTime);
  element.style.opacity = opacity;
}
```

## 型パラメーター

### T

`T`

The type of value being animated

## 実装

- [`Animator`](../interfaces/Animator.md)

## コンストラクター

### コンストラクター

> **new Animation**\<`T`\>(`keyFrames`, `applyAnimationValue`, `animatableAttributeHelper`, `duration`, `loop`, `parent`, `setUpFn`, `tearDownFn`, `easeFn`): `Animation`\<`T`\>

定義: [composite-animation.ts:766](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L766)

#### パラメータ

##### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### applyAnimationValue

(`value`) => `void`

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

##### duration

`number` = `1000`

##### loop

`boolean` = `false`

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md) | `undefined`

##### setUpFn

`Function` = `...`

##### tearDownFn

`Function` = `...`

##### easeFn

(`percentage`) => `number`

#### 戻り値

`Animation`\<`T`\>

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `number`

定義: [composite-animation.ts:1102](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1102)

##### 戻り値

`number`

#### 署名を設定する

> **set** **delay**(`delayTime`): `void`

定義: [composite-animation.ts:1106](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1106)

##### パラメータ

###### delayTime

`number`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`delay`](../interfaces/Animator.md#delay)

***

### drag

#### 署名を取得する

> **get** **drag**(): `number`

定義: [composite-animation.ts:1113](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1113)

##### 戻り値

`number`

#### 署名を設定する

> **set** **drag**(`dragTime`): `void`

定義: [composite-animation.ts:1117](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1117)

##### パラメータ

###### dragTime

`number`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`drag`](../interfaces/Animator.md#drag)

***

### duration

#### 署名を取得する

> **get** **duration**(): `number`

定義: [composite-animation.ts:1054](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1054)

##### 戻り値

`number`

#### 署名を設定する

> **set** **duration**(`duration`): `void`

定義: [composite-animation.ts:1058](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1058)

##### パラメータ

###### duration

`number`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### easeFunction

#### 署名を取得する

> **get** **easeFunction**(): (`percentage`) => `number`

定義: [composite-animation.ts:1156](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1156)

##### 戻り値

> (`percentage`): `number`

###### パラメータ

###### percentage

`number`

###### 戻り値

`number`

#### 署名を設定する

> **set** **easeFunction**(`easeFn`): `void`

定義: [composite-animation.ts:1160](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1160)

##### パラメータ

###### easeFn

(`percentage`) => `number`

##### 戻り値

`void`

***

### keyFrames

#### 署名を取得する

> **get** **keyFrames**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

定義: [composite-animation.ts:1152](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1152)

##### 戻り値

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

#### 署名を設定する

> **set** **keyFrames**(`keyFrames`): `void`

定義: [composite-animation.ts:1143](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1143)

##### パラメータ

###### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### 戻り値

`void`

***

### loops

#### 署名を取得する

> **get** **loops**(): `boolean`

定義: [composite-animation.ts:1046](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1046)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **loops**(`loop`): `void`

定義: [composite-animation.ts:1050](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1050)

##### パラメータ

###### loop

`boolean`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`loops`](../interfaces/Animator.md#loops)

***

### maxLoopCount

#### 署名を取得する

> **get** **maxLoopCount**(): `number` \| `undefined`

定義: [composite-animation.ts:1196](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1196)

##### 戻り値

`number` \| `undefined`

#### 署名を設定する

> **set** **maxLoopCount**(`maxLoopCount`): `void`

定義: [composite-animation.ts:1200](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1200)

##### パラメータ

###### maxLoopCount

`number` | `undefined`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`maxLoopCount`](../interfaces/Animator.md#maxloopcount)

***

### playing

#### 署名を取得する

> **get** **playing**(): `boolean`

定義: [composite-animation.ts:824](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L824)

##### 戻り値

`boolean`

#### の実装

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

***

### trueDuration

#### 署名を取得する

> **get** **trueDuration**(): `number`

定義: [composite-animation.ts:1124](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1124)

##### 戻り値

`number`

#### 署名を設定する

> **set** **trueDuration**(`duration`): `void`

定義: [composite-animation.ts:1128](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1128)

##### パラメータ

###### duration

`number`

##### 戻り値

`void`

## メソッド

### animate()

> **animate**(`deltaTime`): `void`

定義: [composite-animation.ts:828](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L828)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義: [composite-animation.ts:1188](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1188)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

定義: [composite-animation.ts:1192](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1192)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### detachParent()

> **detachParent**(): `void`

定義: [composite-animation.ts:1139](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1139)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### findValue()

> **findValue**(`valuePercentage`, `keyframes`, `animatableAttributeHelper`): `T`

定義: [composite-animation.ts:957](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L957)

#### パラメータ

##### valuePercentage

`number`

##### keyframes

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

#### 戻り値

`T`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義: [composite-animation.ts:1075](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1075)

#### パラメータ

##### newDuration

`number`

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`nonCascadingDuration`](../interfaces/Animator.md#noncascadingduration)

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [composite-animation.ts:1164](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1164)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### の実装

[`Animator`](../interfaces/Animator.md).[`onEnd`](../interfaces/Animator.md#onend)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [composite-animation.ts:1171](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1171)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### の実装

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### onStartAfterDelay()

> **onStartAfterDelay**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [composite-animation.ts:1180](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1180)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

定義: [composite-animation.ts:816](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L816)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義: [composite-animation.ts:1089](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1089)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

定義: [composite-animation.ts:820](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L820)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

定義: [composite-animation.ts:1135](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1135)

#### パラメータ

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`setParent`](../interfaces/Animator.md#setparent)

***

### setUp()

> **setUp**(): `void`

定義: [composite-animation.ts:1037](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1037)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

定義: [composite-animation.ts:801](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L801)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

定義: [composite-animation.ts:809](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L809)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

定義: [composite-animation.ts:1042](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1042)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義: [composite-animation.ts:797](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L797)

#### パラメータ

##### reverse

`boolean`

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### wrapUp()

> **wrapUp**(): `void`

定義: [composite-animation.ts:1096](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1096)

#### 戻り値

`void`

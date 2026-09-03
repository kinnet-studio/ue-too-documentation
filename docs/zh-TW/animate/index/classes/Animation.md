[@ue-too/animate](../../modules.md) / [index](../index.md) / Animation

# 類別: Animation\<T\>

定義於: [composite-animation.ts:740](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L740)

Keyframe-based animation for a single value.

## 備註

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

## 範例

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

## 型別參數

### T

`T`

The type of value being animated

## 實作

- [`Animator`](../interfaces/Animator.md)

## 建構函式

### 建構函式

> **new Animation**\<`T`\>(`keyFrames`, `applyAnimationValue`, `animatableAttributeHelper`, `duration`, `loop`, `parent`, `setUpFn`, `tearDownFn`, `easeFn`): `Animation`\<`T`\>

定義於: [composite-animation.ts:766](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L766)

#### 參數

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

#### 回傳

`Animation`\<`T`\>

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `number`

定義於: [composite-animation.ts:1102](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1102)

##### 回傳

`number`

#### Setter 簽章

> **set** **delay**(`delayTime`): `void`

定義於: [composite-animation.ts:1106](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1106)

##### 參數

###### delayTime

`number`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`delay`](../interfaces/Animator.md#delay)

***

### drag

#### Getter 簽章

> **get** **drag**(): `number`

定義於: [composite-animation.ts:1113](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1113)

##### 回傳

`number`

#### Setter 簽章

> **set** **drag**(`dragTime`): `void`

定義於: [composite-animation.ts:1117](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1117)

##### 參數

###### dragTime

`number`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`drag`](../interfaces/Animator.md#drag)

***

### duration

#### Getter 簽章

> **get** **duration**(): `number`

定義於: [composite-animation.ts:1054](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1054)

##### 回傳

`number`

#### Setter 簽章

> **set** **duration**(`duration`): `void`

定義於: [composite-animation.ts:1058](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1058)

##### 參數

###### duration

`number`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### easeFunction

#### Getter 簽章

> **get** **easeFunction**(): (`percentage`) => `number`

定義於: [composite-animation.ts:1156](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1156)

##### 回傳

> (`percentage`): `number`

###### 參數

###### percentage

`number`

###### 回傳

`number`

#### Setter 簽章

> **set** **easeFunction**(`easeFn`): `void`

定義於: [composite-animation.ts:1160](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1160)

##### 參數

###### easeFn

(`percentage`) => `number`

##### 回傳

`void`

***

### keyFrames

#### Getter 簽章

> **get** **keyFrames**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

定義於: [composite-animation.ts:1152](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1152)

##### 回傳

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

#### Setter 簽章

> **set** **keyFrames**(`keyFrames`): `void`

定義於: [composite-animation.ts:1143](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1143)

##### 參數

###### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### 回傳

`void`

***

### loops

#### Getter 簽章

> **get** **loops**(): `boolean`

定義於: [composite-animation.ts:1046](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1046)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **loops**(`loop`): `void`

定義於: [composite-animation.ts:1050](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1050)

##### 參數

###### loop

`boolean`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`loops`](../interfaces/Animator.md#loops)

***

### maxLoopCount

#### Getter 簽章

> **get** **maxLoopCount**(): `number` \| `undefined`

定義於: [composite-animation.ts:1196](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1196)

##### 回傳

`number` \| `undefined`

#### Setter 簽章

> **set** **maxLoopCount**(`maxLoopCount`): `void`

定義於: [composite-animation.ts:1200](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1200)

##### 參數

###### maxLoopCount

`number` | `undefined`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`maxLoopCount`](../interfaces/Animator.md#maxloopcount)

***

### playing

#### Getter 簽章

> **get** **playing**(): `boolean`

定義於: [composite-animation.ts:824](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L824)

##### 回傳

`boolean`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

***

### trueDuration

#### Getter 簽章

> **get** **trueDuration**(): `number`

定義於: [composite-animation.ts:1124](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1124)

##### 回傳

`number`

#### Setter 簽章

> **set** **trueDuration**(`duration`): `void`

定義於: [composite-animation.ts:1128](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1128)

##### 參數

###### duration

`number`

##### 回傳

`void`

## 方法

### animate()

> **animate**(`deltaTime`): `void`

定義於: [composite-animation.ts:828](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L828)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義於: [composite-animation.ts:1188](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1188)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

定義於: [composite-animation.ts:1192](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1192)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### detachParent()

> **detachParent**(): `void`

定義於: [composite-animation.ts:1139](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1139)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### findValue()

> **findValue**(`valuePercentage`, `keyframes`, `animatableAttributeHelper`): `T`

定義於: [composite-animation.ts:957](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L957)

#### 參數

##### valuePercentage

`number`

##### keyframes

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

#### 回傳

`T`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義於: [composite-animation.ts:1075](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1075)

#### 參數

##### newDuration

`number`

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`nonCascadingDuration`](../interfaces/Animator.md#noncascadingduration)

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [composite-animation.ts:1164](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1164)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### 實作了

[`Animator`](../interfaces/Animator.md).[`onEnd`](../interfaces/Animator.md#onend)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [composite-animation.ts:1171](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1171)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### 實作了

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### onStartAfterDelay()

> **onStartAfterDelay**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [composite-animation.ts:1180](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1180)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

定義於: [composite-animation.ts:816](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L816)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義於: [composite-animation.ts:1089](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1089)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

定義於: [composite-animation.ts:820](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L820)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

定義於: [composite-animation.ts:1135](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1135)

#### 參數

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`setParent`](../interfaces/Animator.md#setparent)

***

### setUp()

> **setUp**(): `void`

定義於: [composite-animation.ts:1037](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1037)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

定義於: [composite-animation.ts:801](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L801)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

定義於: [composite-animation.ts:809](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L809)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

定義於: [composite-animation.ts:1042](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1042)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義於: [composite-animation.ts:797](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L797)

#### 參數

##### reverse

`boolean`

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### wrapUp()

> **wrapUp**(): `void`

定義於: [composite-animation.ts:1096](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L1096)

#### 回傳

`void`

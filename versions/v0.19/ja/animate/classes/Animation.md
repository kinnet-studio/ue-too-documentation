[@ue-too/animate](../globals.md) / Animation

# Class: Animation\<T\>

Defined in: [composite-animation.ts:740](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L740)

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

## Example

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

## Type Parameters

### T

`T`

The type of value being animated

## Implements

- [`Animator`](../interfaces/Animator.md)

## Constructors

### Constructor

> **new Animation**\<`T`\>(`keyFrames`, `applyAnimationValue`, `animatableAttributeHelper`, `duration`, `loop`, `parent`, `setUpFn`, `tearDownFn`, `easeFn`): `Animation`\<`T`\>

Defined in: [composite-animation.ts:766](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L766)

#### Parameters

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

#### Returns

`Animation`\<`T`\>

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [composite-animation.ts:1102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1102)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: [composite-animation.ts:1106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1106)

##### Parameters

###### delayTime

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`delay`](../interfaces/Animator.md#delay)

***

### drag

#### Get Signature

> **get** **drag**(): `number`

Defined in: [composite-animation.ts:1113](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1113)

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: [composite-animation.ts:1117](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1117)

##### Parameters

###### dragTime

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`drag`](../interfaces/Animator.md#drag)

***

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: [composite-animation.ts:1054](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1054)

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: [composite-animation.ts:1058](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1058)

##### Parameters

###### duration

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### easeFunction

#### Get Signature

> **get** **easeFunction**(): (`percentage`) => `number`

Defined in: [composite-animation.ts:1156](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1156)

##### Returns

> (`percentage`): `number`

###### Parameters

###### percentage

`number`

###### Returns

`number`

#### Set Signature

> **set** **easeFunction**(`easeFn`): `void`

Defined in: [composite-animation.ts:1160](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1160)

##### Parameters

###### easeFn

(`percentage`) => `number`

##### Returns

`void`

***

### keyFrames

#### Get Signature

> **get** **keyFrames**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: [composite-animation.ts:1152](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1152)

##### Returns

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

#### Set Signature

> **set** **keyFrames**(`keyFrames`): `void`

Defined in: [composite-animation.ts:1143](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1143)

##### Parameters

###### keyFrames

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### Returns

`void`

***

### loops

#### Get Signature

> **get** **loops**(): `boolean`

Defined in: [composite-animation.ts:1046](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1046)

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: [composite-animation.ts:1050](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1050)

##### Parameters

###### loop

`boolean`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`loops`](../interfaces/Animator.md#loops)

***

### maxLoopCount

#### Get Signature

> **get** **maxLoopCount**(): `number` \| `undefined`

Defined in: [composite-animation.ts:1196](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1196)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: [composite-animation.ts:1200](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1200)

##### Parameters

###### maxLoopCount

`number` | `undefined`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`maxLoopCount`](../interfaces/Animator.md#maxloopcount)

***

### playing

#### Get Signature

> **get** **playing**(): `boolean`

Defined in: [composite-animation.ts:824](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L824)

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

***

### trueDuration

#### Get Signature

> **get** **trueDuration**(): `number`

Defined in: [composite-animation.ts:1124](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1124)

##### Returns

`number`

#### Set Signature

> **set** **trueDuration**(`duration`): `void`

Defined in: [composite-animation.ts:1128](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1128)

##### Parameters

###### duration

`number`

##### Returns

`void`

## Methods

### animate()

> **animate**(`deltaTime`): `void`

Defined in: [composite-animation.ts:828](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L828)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: [composite-animation.ts:1188](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1188)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: [composite-animation.ts:1192](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1192)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### detachParent()

> **detachParent**(): `void`

Defined in: [composite-animation.ts:1139](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1139)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### findValue()

> **findValue**(`valuePercentage`, `keyframes`, `animatableAttributeHelper`): `T`

Defined in: [composite-animation.ts:957](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L957)

#### Parameters

##### valuePercentage

`number`

##### keyframes

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

##### animatableAttributeHelper

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`T`\>

#### Returns

`T`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: [composite-animation.ts:1075](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1075)

#### Parameters

##### newDuration

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`nonCascadingDuration`](../interfaces/Animator.md#noncascadingduration)

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [composite-animation.ts:1164](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1164)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onEnd`](../interfaces/Animator.md#onend)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [composite-animation.ts:1171](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1171)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### onStartAfterDelay()

> **onStartAfterDelay**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [composite-animation.ts:1180](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1180)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

Defined in: [composite-animation.ts:816](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L816)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: [composite-animation.ts:1089](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1089)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: [composite-animation.ts:820](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L820)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: [composite-animation.ts:1135](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1135)

#### Parameters

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setParent`](../interfaces/Animator.md#setparent)

***

### setUp()

> **setUp**(): `void`

Defined in: [composite-animation.ts:1037](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1037)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: [composite-animation.ts:801](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L801)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [composite-animation.ts:809](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L809)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [composite-animation.ts:1042](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1042)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: [composite-animation.ts:797](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L797)

#### Parameters

##### reverse

`boolean`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### wrapUp()

> **wrapUp**(): `void`

Defined in: [composite-animation.ts:1096](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1096)

#### Returns

`void`

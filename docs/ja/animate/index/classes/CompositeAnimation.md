[@ue-too/animate](../../modules.md) / [index](../index.md) / CompositeAnimation

# クラス: CompositeAnimation

定義: [composite-animation.ts:113](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L113)

Container for sequencing and composing multiple animations.

## Remarks

CompositeAnimation allows you to orchestrate complex animation sequences by:
- **Sequencing**: Add animations to play one after another
- **Overlapping**: Start animations before previous ones complete
- **Synchronizing**: Play multiple animations simultaneously
- **Nesting**: Compose animations contain other composite animations

## Key Features

- Add animations at specific time offsets
- Position animations relative to other animations (`addAnimationAfter`, `addAnimationBefore`)
- Automatic duration calculation based on child animations
- Hierarchical composition for complex sequences
- Prevent cyclic animation dependencies

## 例

Basic sequence
```typescript
const sequence = new CompositeAnimation();

// Add first animation at start (time 0)
sequence.addAnimation('fadeIn', fadeAnimation, 0);

// Add second animation after first completes
sequence.addAnimationAfter('slideIn', slideAnimation, 'fadeIn');

// Add third animation to overlap with second (100ms after second starts)
sequence.addAnimationAdmist('scaleUp', scaleAnimation, 'slideIn', 100);

sequence.start();
```

## 実装

- [`Animator`](../interfaces/Animator.md)
- [`AnimatorContainer`](../interfaces/AnimatorContainer.md)

## コンストラクター

### コンストラクター

> **new CompositeAnimation**(`animations`, `loop`, `parent`, `setupFn`, `tearDownFn`): `CompositeAnimation`

定義: [composite-animation.ts:132](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L132)

#### パラメータ

##### animations

`Map`\<`string`, \{ `animator`: [`Animator`](../interfaces/Animator.md); `startTime?`: `number`; \}\> = `...`

##### loop

`boolean` = `false`

##### parent

[`AnimatorContainer`](../interfaces/AnimatorContainer.md) | `undefined`

##### setupFn

`Function` = `...`

##### tearDownFn

`Function` = `...`

#### 戻り値

`CompositeAnimation`

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `number`

定義: [composite-animation.ts:540](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L540)

##### 戻り値

`number`

#### 署名を設定する

> **set** **delay**(`delayTime`): `void`

定義: [composite-animation.ts:533](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L533)

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

定義: [composite-animation.ts:551](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L551)

##### 戻り値

`number`

#### 署名を設定する

> **set** **drag**(`dragTime`): `void`

定義: [composite-animation.ts:544](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L544)

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

定義: [composite-animation.ts:338](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L338)

##### 戻り値

`number`

#### 署名を設定する

> **set** **duration**(`duration`): `void`

定義: [composite-animation.ts:342](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L342)

##### パラメータ

###### duration

`number`

##### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### loops

#### 署名を取得する

> **get** **loops**(): `boolean`

定義: [composite-animation.ts:590](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L590)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **loops**(`loop`): `void`

定義: [composite-animation.ts:594](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L594)

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

定義: [composite-animation.ts:683](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L683)

##### 戻り値

`number` \| `undefined`

#### 署名を設定する

> **set** **maxLoopCount**(`maxLoopCount`): `void`

定義: [composite-animation.ts:687](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L687)

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

定義: [composite-animation.ts:679](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L679)

##### 戻り値

`boolean`

#### の実装

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

## メソッド

### addAnimation()

> **addAnimation**(`name`, `animation`, `startTime`, `endCallback`): `void`

定義: [composite-animation.ts:414](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L414)

#### パラメータ

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### startTime

`number` = `0`

##### endCallback

`Function` = `...`

#### 戻り値

`void`

***

### addAnimationAdmist()

> **addAnimationAdmist**(`name`, `animation`, `admistName`, `delay`): `void`

定義: [composite-animation.ts:467](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L467)

#### パラメータ

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### admistName

`string`

##### delay

`number`

#### 戻り値

`void`

***

### addAnimationAfter()

> **addAnimationAfter**(`name`, `animation`, `afterName`, `delay`): `void`

定義: [composite-animation.ts:444](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L444)

#### パラメータ

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### afterName

`string`

##### delay

`number` = `0`

#### 戻り値

`void`

***

### addAnimationBefore()

> **addAnimationBefore**(`name`, `animation`, `beforeName`, `aheadTime`): `void`

定義: [composite-animation.ts:488](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L488)

#### パラメータ

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### beforeName

`string`

##### aheadTime

`number` = `0`

#### 戻り値

`void`

***

### animate()

> **animate**(`deltaTime`): `void`

定義: [composite-animation.ts:178](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L178)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### animateChildren()

> **animateChildren**(`deltaTime`): `void`

定義: [composite-animation.ts:234](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L234)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

***

### calculateDuration()

> **calculateDuration**(): `void`

定義: [composite-animation.ts:579](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L579)

#### 戻り値

`void`

***

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

定義: [composite-animation.ts:598](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L598)

#### 戻り値

`boolean`

#### の実装

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`checkCyclicChildren`](../interfaces/AnimatorContainer.md#checkcyclicchildren)

***

### checkTerminalAndLoop()

> **checkTerminalAndLoop**(): `void`

定義: [composite-animation.ts:201](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L201)

#### 戻り値

`void`

***

### childShouldAnimate()

> **childShouldAnimate**(`animation`, `prevLocalTime`): `boolean`

定義: [composite-animation.ts:264](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L264)

#### パラメータ

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### startTime?

`number`

##### prevLocalTime

`number`

#### 戻り値

`boolean`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義: [composite-animation.ts:671](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L671)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

定義: [composite-animation.ts:675](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L675)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

定義: [composite-animation.ts:627](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L627)

#### パラメータ

##### animationInInterest

[`Animator`](../interfaces/Animator.md)

#### 戻り値

`boolean`

#### の実装

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`containsAnimation`](../interfaces/AnimatorContainer.md#containsanimation)

***

### detachParent()

> **detachParent**(): `void`

定義: [composite-animation.ts:174](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L174)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### forceToggleLoop()

> **forceToggleLoop**(`loop`): `void`

定義: [composite-animation.ts:620](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L620)

#### パラメータ

##### loop

`boolean`

#### 戻り値

`void`

***

### getTrueDuration()

> **getTrueDuration**(): `number`

定義: [composite-animation.ts:396](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L396)

#### 戻り値

`number`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義: [composite-animation.ts:367](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L367)

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

定義: [composite-animation.ts:655](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L655)

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

定義: [composite-animation.ts:662](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L662)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### の実装

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### pause()

> **pause**(): `void`

定義: [composite-animation.ts:305](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L305)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### removeAnimation()

> **removeAnimation**(`name`): `void`

定義: [composite-animation.ts:519](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L519)

#### パラメータ

##### name

`string`

#### 戻り値

`void`

***

### removeDelay()

> **removeDelay**(): `void`

定義: [composite-animation.ts:555](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L555)

#### 戻り値

`void`

***

### removeDrag()

> **removeDrag**(): `void`

定義: [composite-animation.ts:562](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L562)

#### 戻り値

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義: [composite-animation.ts:389](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L389)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

定義: [composite-animation.ts:312](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L312)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

定義: [composite-animation.ts:170](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L170)

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

定義: [composite-animation.ts:400](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L400)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

定義: [composite-animation.ts:319](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L319)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

定義: [composite-animation.ts:328](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L328)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

定義: [composite-animation.ts:407](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L407)

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義: [composite-animation.ts:160](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L160)

#### パラメータ

##### reverse

`boolean`

#### 戻り値

`void`

#### の実装

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### updateDuration()

> **updateDuration**(): `void`

定義: [composite-animation.ts:569](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L569)

#### 戻り値

`void`

#### の実装

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`updateDuration`](../interfaces/AnimatorContainer.md#updateduration)

***

### wrapUpAnimator()

> **wrapUpAnimator**(`animation`, `prevLocalTime`): `void`

定義: [composite-animation.ts:281](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L281)

#### パラメータ

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### name

`string`

###### startTime?

`number`

##### prevLocalTime

`number`

#### 戻り値

`void`

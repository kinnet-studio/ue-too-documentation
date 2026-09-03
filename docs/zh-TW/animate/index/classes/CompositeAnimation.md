[@ue-too/animate](../../modules.md) / [index](../index.md) / CompositeAnimation

# 類別: CompositeAnimation

定義於: [composite-animation.ts:113](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L113)

Container for sequencing and composing multiple animations.

## 備註

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

## 範例

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

## 實作

- [`Animator`](../interfaces/Animator.md)
- [`AnimatorContainer`](../interfaces/AnimatorContainer.md)

## 建構函式

### 建構函式

> **new CompositeAnimation**(`animations`, `loop`, `parent`, `setupFn`, `tearDownFn`): `CompositeAnimation`

定義於: [composite-animation.ts:132](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L132)

#### 參數

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

#### 回傳

`CompositeAnimation`

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `number`

定義於: [composite-animation.ts:540](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L540)

##### 回傳

`number`

#### Setter 簽章

> **set** **delay**(`delayTime`): `void`

定義於: [composite-animation.ts:533](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L533)

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

定義於: [composite-animation.ts:551](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L551)

##### 回傳

`number`

#### Setter 簽章

> **set** **drag**(`dragTime`): `void`

定義於: [composite-animation.ts:544](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L544)

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

定義於: [composite-animation.ts:338](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L338)

##### 回傳

`number`

#### Setter 簽章

> **set** **duration**(`duration`): `void`

定義於: [composite-animation.ts:342](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L342)

##### 參數

###### duration

`number`

##### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### loops

#### Getter 簽章

> **get** **loops**(): `boolean`

定義於: [composite-animation.ts:590](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L590)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **loops**(`loop`): `void`

定義於: [composite-animation.ts:594](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L594)

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

定義於: [composite-animation.ts:683](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L683)

##### 回傳

`number` \| `undefined`

#### Setter 簽章

> **set** **maxLoopCount**(`maxLoopCount`): `void`

定義於: [composite-animation.ts:687](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L687)

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

定義於: [composite-animation.ts:679](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L679)

##### 回傳

`boolean`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

## 方法

### addAnimation()

> **addAnimation**(`name`, `animation`, `startTime`, `endCallback`): `void`

定義於: [composite-animation.ts:414](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L414)

#### 參數

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### startTime

`number` = `0`

##### endCallback

`Function` = `...`

#### 回傳

`void`

***

### addAnimationAdmist()

> **addAnimationAdmist**(`name`, `animation`, `admistName`, `delay`): `void`

定義於: [composite-animation.ts:467](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L467)

#### 參數

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### admistName

`string`

##### delay

`number`

#### 回傳

`void`

***

### addAnimationAfter()

> **addAnimationAfter**(`name`, `animation`, `afterName`, `delay`): `void`

定義於: [composite-animation.ts:444](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L444)

#### 參數

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### afterName

`string`

##### delay

`number` = `0`

#### 回傳

`void`

***

### addAnimationBefore()

> **addAnimationBefore**(`name`, `animation`, `beforeName`, `aheadTime`): `void`

定義於: [composite-animation.ts:488](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L488)

#### 參數

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### beforeName

`string`

##### aheadTime

`number` = `0`

#### 回傳

`void`

***

### animate()

> **animate**(`deltaTime`): `void`

定義於: [composite-animation.ts:178](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L178)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### animateChildren()

> **animateChildren**(`deltaTime`): `void`

定義於: [composite-animation.ts:234](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L234)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

***

### calculateDuration()

> **calculateDuration**(): `void`

定義於: [composite-animation.ts:579](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L579)

#### 回傳

`void`

***

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

定義於: [composite-animation.ts:598](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L598)

#### 回傳

`boolean`

#### 實作了

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`checkCyclicChildren`](../interfaces/AnimatorContainer.md#checkcyclicchildren)

***

### checkTerminalAndLoop()

> **checkTerminalAndLoop**(): `void`

定義於: [composite-animation.ts:201](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L201)

#### 回傳

`void`

***

### childShouldAnimate()

> **childShouldAnimate**(`animation`, `prevLocalTime`): `boolean`

定義於: [composite-animation.ts:264](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L264)

#### 參數

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### startTime?

`number`

##### prevLocalTime

`number`

#### 回傳

`boolean`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義於: [composite-animation.ts:671](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L671)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

定義於: [composite-animation.ts:675](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L675)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

定義於: [composite-animation.ts:627](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L627)

#### 參數

##### animationInInterest

[`Animator`](../interfaces/Animator.md)

#### 回傳

`boolean`

#### 實作了

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`containsAnimation`](../interfaces/AnimatorContainer.md#containsanimation)

***

### detachParent()

> **detachParent**(): `void`

定義於: [composite-animation.ts:174](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L174)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### forceToggleLoop()

> **forceToggleLoop**(`loop`): `void`

定義於: [composite-animation.ts:620](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L620)

#### 參數

##### loop

`boolean`

#### 回傳

`void`

***

### getTrueDuration()

> **getTrueDuration**(): `number`

定義於: [composite-animation.ts:396](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L396)

#### 回傳

`number`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義於: [composite-animation.ts:367](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L367)

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

定義於: [composite-animation.ts:655](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L655)

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

定義於: [composite-animation.ts:662](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L662)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### 實作了

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### pause()

> **pause**(): `void`

定義於: [composite-animation.ts:305](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L305)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### removeAnimation()

> **removeAnimation**(`name`): `void`

定義於: [composite-animation.ts:519](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L519)

#### 參數

##### name

`string`

#### 回傳

`void`

***

### removeDelay()

> **removeDelay**(): `void`

定義於: [composite-animation.ts:555](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L555)

#### 回傳

`void`

***

### removeDrag()

> **removeDrag**(): `void`

定義於: [composite-animation.ts:562](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L562)

#### 回傳

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義於: [composite-animation.ts:389](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L389)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

定義於: [composite-animation.ts:312](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L312)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

定義於: [composite-animation.ts:170](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L170)

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

定義於: [composite-animation.ts:400](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L400)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

定義於: [composite-animation.ts:319](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L319)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

定義於: [composite-animation.ts:328](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L328)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

定義於: [composite-animation.ts:407](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L407)

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義於: [composite-animation.ts:160](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L160)

#### 參數

##### reverse

`boolean`

#### 回傳

`void`

#### 實作了

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### updateDuration()

> **updateDuration**(): `void`

定義於: [composite-animation.ts:569](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L569)

#### 回傳

`void`

#### 實作了

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`updateDuration`](../interfaces/AnimatorContainer.md#updateduration)

***

### wrapUpAnimator()

> **wrapUpAnimator**(`animation`, `prevLocalTime`): `void`

定義於: [composite-animation.ts:281](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/animate/src/composite-animation.ts#L281)

#### 參數

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### name

`string`

###### startTime?

`number`

##### prevLocalTime

`number`

#### 回傳

`void`

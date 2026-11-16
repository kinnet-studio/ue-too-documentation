[@ue-too/animate](../globals.md) / CompositeAnimation

# Class: CompositeAnimation

Defined in: [composite-animation.ts:113](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L113)

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

## Example

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

## Implements

- [`Animator`](../interfaces/Animator.md)
- [`AnimatorContainer`](../interfaces/AnimatorContainer.md)

## Constructors

### Constructor

> **new CompositeAnimation**(`animations`, `loop`, `parent`, `setupFn`, `tearDownFn`): `CompositeAnimation`

Defined in: [composite-animation.ts:132](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L132)

#### Parameters

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

#### Returns

`CompositeAnimation`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [composite-animation.ts:540](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L540)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`delayTime`): `void`

Defined in: [composite-animation.ts:533](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L533)

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

Defined in: [composite-animation.ts:551](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L551)

##### Returns

`number`

#### Set Signature

> **set** **drag**(`dragTime`): `void`

Defined in: [composite-animation.ts:544](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L544)

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

Defined in: [composite-animation.ts:338](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L338)

##### Returns

`number`

#### Set Signature

> **set** **duration**(`duration`): `void`

Defined in: [composite-animation.ts:342](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L342)

##### Parameters

###### duration

`number`

##### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`duration`](../interfaces/Animator.md#duration)

***

### loops

#### Get Signature

> **get** **loops**(): `boolean`

Defined in: [composite-animation.ts:590](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L590)

##### Returns

`boolean`

#### Set Signature

> **set** **loops**(`loop`): `void`

Defined in: [composite-animation.ts:594](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L594)

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

Defined in: [composite-animation.ts:683](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L683)

##### Returns

`number` \| `undefined`

#### Set Signature

> **set** **maxLoopCount**(`maxLoopCount`): `void`

Defined in: [composite-animation.ts:687](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L687)

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

Defined in: [composite-animation.ts:679](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L679)

##### Returns

`boolean`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`playing`](../interfaces/Animator.md#playing)

## Methods

### addAnimation()

> **addAnimation**(`name`, `animation`, `startTime`, `endCallback`): `void`

Defined in: [composite-animation.ts:414](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L414)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### startTime

`number` = `0`

##### endCallback

`Function` = `...`

#### Returns

`void`

***

### addAnimationAdmist()

> **addAnimationAdmist**(`name`, `animation`, `admistName`, `delay`): `void`

Defined in: [composite-animation.ts:467](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L467)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### admistName

`string`

##### delay

`number`

#### Returns

`void`

***

### addAnimationAfter()

> **addAnimationAfter**(`name`, `animation`, `afterName`, `delay`): `void`

Defined in: [composite-animation.ts:444](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L444)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### afterName

`string`

##### delay

`number` = `0`

#### Returns

`void`

***

### addAnimationBefore()

> **addAnimationBefore**(`name`, `animation`, `beforeName`, `aheadTime`): `void`

Defined in: [composite-animation.ts:488](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L488)

#### Parameters

##### name

`string`

##### animation

[`Animator`](../interfaces/Animator.md)

##### beforeName

`string`

##### aheadTime

`number` = `0`

#### Returns

`void`

***

### animate()

> **animate**(`deltaTime`): `void`

Defined in: [composite-animation.ts:178](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L178)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`animate`](../interfaces/Animator.md#animate)

***

### animateChildren()

> **animateChildren**(`deltaTime`): `void`

Defined in: [composite-animation.ts:234](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L234)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### calculateDuration()

> **calculateDuration**(): `void`

Defined in: [composite-animation.ts:579](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L579)

#### Returns

`void`

***

### checkCyclicChildren()

> **checkCyclicChildren**(): `boolean`

Defined in: [composite-animation.ts:598](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L598)

#### Returns

`boolean`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`checkCyclicChildren`](../interfaces/AnimatorContainer.md#checkcyclicchildren)

***

### checkTerminalAndLoop()

> **checkTerminalAndLoop**(): `void`

Defined in: [composite-animation.ts:201](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L201)

#### Returns

`void`

***

### childShouldAnimate()

> **childShouldAnimate**(`animation`, `prevLocalTime`): `boolean`

Defined in: [composite-animation.ts:264](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L264)

#### Parameters

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### startTime?

`number`

##### prevLocalTime

`number`

#### Returns

`boolean`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: [composite-animation.ts:671](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L671)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnEnd`](../interfaces/Animator.md#clearonend)

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: [composite-animation.ts:675](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L675)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`clearOnStart`](../interfaces/Animator.md#clearonstart)

***

### containsAnimation()

> **containsAnimation**(`animationInInterest`): `boolean`

Defined in: [composite-animation.ts:627](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L627)

#### Parameters

##### animationInInterest

[`Animator`](../interfaces/Animator.md)

#### Returns

`boolean`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`containsAnimation`](../interfaces/AnimatorContainer.md#containsanimation)

***

### detachParent()

> **detachParent**(): `void`

Defined in: [composite-animation.ts:174](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L174)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`detachParent`](../interfaces/Animator.md#detachparent)

***

### forceToggleLoop()

> **forceToggleLoop**(`loop`): `void`

Defined in: [composite-animation.ts:620](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L620)

#### Parameters

##### loop

`boolean`

#### Returns

`void`

***

### getTrueDuration()

> **getTrueDuration**(): `number`

Defined in: [composite-animation.ts:396](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L396)

#### Returns

`number`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: [composite-animation.ts:367](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L367)

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

Defined in: [composite-animation.ts:655](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L655)

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

Defined in: [composite-animation.ts:662](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L662)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`onStart`](../interfaces/Animator.md#onstart)

***

### pause()

> **pause**(): `void`

Defined in: [composite-animation.ts:305](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L305)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`pause`](../interfaces/Animator.md#pause)

***

### removeAnimation()

> **removeAnimation**(`name`): `void`

Defined in: [composite-animation.ts:519](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L519)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### removeDelay()

> **removeDelay**(): `void`

Defined in: [composite-animation.ts:555](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L555)

#### Returns

`void`

***

### removeDrag()

> **removeDrag**(): `void`

Defined in: [composite-animation.ts:562](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L562)

#### Returns

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: [composite-animation.ts:389](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L389)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resetAnimationState`](../interfaces/Animator.md#resetanimationstate)

***

### resume()

> **resume**(): `void`

Defined in: [composite-animation.ts:312](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L312)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`resume`](../interfaces/Animator.md#resume)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: [composite-animation.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L170)

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

Defined in: [composite-animation.ts:400](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L400)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`setUp`](../interfaces/Animator.md#setup)

***

### start()

> **start**(): `void`

Defined in: [composite-animation.ts:319](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L319)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`start`](../interfaces/Animator.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [composite-animation.ts:328](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L328)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`stop`](../interfaces/Animator.md#stop)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [composite-animation.ts:407](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L407)

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`tearDown`](../interfaces/Animator.md#teardown)

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: [composite-animation.ts:160](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L160)

#### Parameters

##### reverse

`boolean`

#### Returns

`void`

#### Implementation of

[`Animator`](../interfaces/Animator.md).[`toggleReverse`](../interfaces/Animator.md#togglereverse)

***

### updateDuration()

> **updateDuration**(): `void`

Defined in: [composite-animation.ts:569](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L569)

#### Returns

`void`

#### Implementation of

[`AnimatorContainer`](../interfaces/AnimatorContainer.md).[`updateDuration`](../interfaces/AnimatorContainer.md#updateduration)

***

### wrapUpAnimator()

> **wrapUpAnimator**(`animation`, `prevLocalTime`): `void`

Defined in: [composite-animation.ts:281](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L281)

#### Parameters

##### animation

###### animator

[`Animator`](../interfaces/Animator.md)

###### name

`string`

###### startTime?

`number`

##### prevLocalTime

`number`

#### Returns

`void`

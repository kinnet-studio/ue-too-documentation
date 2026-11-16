[@ue-too/animate](../globals.md) / Animator

# Interface: Animator

Defined in: [composite-animation.ts:29](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L29)

Core interface for all animators in the animation system.

## Remarks

The Animator interface defines the contract for both individual animations ([Animation](../classes/Animation.md))
and composite animations ([CompositeAnimation](../classes/CompositeAnimation.md)). All animators support:
- Lifecycle control (start, stop, pause, resume)
- Duration management with delays and drag time
- Looping with optional max loop count
- Parent-child relationships for composition
- Event callbacks for start and end

## Properties

### delay

> **delay**: `number`

Defined in: [composite-animation.ts:32](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L32)

***

### drag

> **drag**: `number`

Defined in: [composite-animation.ts:33](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L33)

***

### duration

> **duration**: `number`

Defined in: [composite-animation.ts:31](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L31)

***

### loops

> **loops**: `boolean`

Defined in: [composite-animation.ts:30](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L30)

***

### maxLoopCount

> **maxLoopCount**: `number` \| `undefined`

Defined in: [composite-animation.ts:50](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L50)

***

### playing

> **playing**: `boolean`

Defined in: [composite-animation.ts:51](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L51)

## Methods

### animate()

> **animate**(`deltaTime`): `void`

Defined in: [composite-animation.ts:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L39)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

Defined in: [composite-animation.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L49)

#### Returns

`void`

***

### clearOnStart()

> **clearOnStart**(): `void`

Defined in: [composite-animation.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L48)

#### Returns

`void`

***

### detachParent()

> **detachParent**(): `void`

Defined in: [composite-animation.ts:44](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L44)

#### Returns

`void`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

Defined in: [composite-animation.ts:34](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L34)

#### Parameters

##### newDuration

`number`

#### Returns

`void`

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [composite-animation.ts:46](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L46)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [composite-animation.ts:47](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L47)

#### Parameters

##### callback

`Function`

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

Defined in: [composite-animation.ts:37](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L37)

#### Returns

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

Defined in: [composite-animation.ts:41](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L41)

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [composite-animation.ts:38](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L38)

#### Returns

`void`

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: [composite-animation.ts:43](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L43)

#### Parameters

##### parent

[`AnimatorContainer`](AnimatorContainer.md)

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [composite-animation.ts:40](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L40)

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [composite-animation.ts:35](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L35)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [composite-animation.ts:36](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L36)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [composite-animation.ts:42](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L42)

#### Returns

`void`

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

Defined in: [composite-animation.ts:45](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L45)

#### Parameters

##### reverse

`boolean`

#### Returns

`void`

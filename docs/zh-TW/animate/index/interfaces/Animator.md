[@ue-too/animate](../../modules.md) / [index](../index.md) / Animator

# 介面: Animator

定義於: [composite-animation.ts:29](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L29)

Core interface for all animators in the animation system.

## 備註

The Animator interface defines the contract for both individual animations ([Animation](../classes/Animation.md))
and composite animations ([CompositeAnimation](../classes/CompositeAnimation.md)). All animators support:
- Lifecycle control (start, stop, pause, resume)
- Duration management with delays and drag time
- Looping with optional max loop count
- Parent-child relationships for composition
- Event callbacks for start and end

## 屬性

### delay

> **delay**: `number`

定義於: [composite-animation.ts:32](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L32)

***

### drag

> **drag**: `number`

定義於: [composite-animation.ts:33](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L33)

***

### duration

> **duration**: `number`

定義於: [composite-animation.ts:31](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L31)

***

### loops

> **loops**: `boolean`

定義於: [composite-animation.ts:30](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L30)

***

### maxLoopCount

> **maxLoopCount**: `number` \| `undefined`

定義於: [composite-animation.ts:50](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L50)

***

### playing

> **playing**: `boolean`

定義於: [composite-animation.ts:51](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L51)

## 方法

### animate()

> **animate**(`deltaTime`): `void`

定義於: [composite-animation.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L39)

#### 參數

##### deltaTime

`number`

#### 回傳

`void`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義於: [composite-animation.ts:49](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L49)

#### 回傳

`void`

***

### clearOnStart()

> **clearOnStart**(): `void`

定義於: [composite-animation.ts:48](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L48)

#### 回傳

`void`

***

### detachParent()

> **detachParent**(): `void`

定義於: [composite-animation.ts:44](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L44)

#### 回傳

`void`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義於: [composite-animation.ts:34](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L34)

#### 參數

##### newDuration

`number`

#### 回傳

`void`

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [composite-animation.ts:46](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L46)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [composite-animation.ts:47](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L47)

#### 參數

##### callback

`Function`

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

定義於: [composite-animation.ts:37](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L37)

#### 回傳

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義於: [composite-animation.ts:41](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L41)

#### 回傳

`void`

***

### resume()

> **resume**(): `void`

定義於: [composite-animation.ts:38](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L38)

#### 回傳

`void`

***

### setParent()

> **setParent**(`parent`): `void`

定義於: [composite-animation.ts:43](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L43)

#### 參數

##### parent

[`AnimatorContainer`](AnimatorContainer.md)

#### 回傳

`void`

***

### setUp()

> **setUp**(): `void`

定義於: [composite-animation.ts:40](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L40)

#### 回傳

`void`

***

### start()

> **start**(): `void`

定義於: [composite-animation.ts:35](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L35)

#### 回傳

`void`

***

### stop()

> **stop**(): `void`

定義於: [composite-animation.ts:36](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L36)

#### 回傳

`void`

***

### tearDown()

> **tearDown**(): `void`

定義於: [composite-animation.ts:42](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L42)

#### 回傳

`void`

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義於: [composite-animation.ts:45](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/composite-animation.ts#L45)

#### 參數

##### reverse

`boolean`

#### 回傳

`void`

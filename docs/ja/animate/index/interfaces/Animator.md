[@ue-too/animate](../../modules.md) / [index](../index.md) / Animator

# インターフェイス: Animator

定義: [composite-animation.ts:29](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L29)

Core interface for all animators in the animation system.

## Remarks

The Animator interface defines the contract for both individual animations ([Animation](../classes/Animation.md))
and composite animations ([CompositeAnimation](../classes/CompositeAnimation.md)). All animators support:
- Lifecycle control (start, stop, pause, resume)
- Duration management with delays and drag time
- Looping with optional max loop count
- Parent-child relationships for composition
- Event callbacks for start and end

## プロパティ

### delay

> **delay**: `number`

定義: [composite-animation.ts:32](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L32)

***

### drag

> **drag**: `number`

定義: [composite-animation.ts:33](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L33)

***

### duration

> **duration**: `number`

定義: [composite-animation.ts:31](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L31)

***

### loops

> **loops**: `boolean`

定義: [composite-animation.ts:30](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L30)

***

### maxLoopCount

> **maxLoopCount**: `number` \| `undefined`

定義: [composite-animation.ts:50](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L50)

***

### playing

> **playing**: `boolean`

定義: [composite-animation.ts:51](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L51)

## メソッド

### animate()

> **animate**(`deltaTime`): `void`

定義: [composite-animation.ts:39](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L39)

#### パラメータ

##### deltaTime

`number`

#### 戻り値

`void`

***

### clearOnEnd()

> **clearOnEnd**(): `void`

定義: [composite-animation.ts:49](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L49)

#### 戻り値

`void`

***

### clearOnStart()

> **clearOnStart**(): `void`

定義: [composite-animation.ts:48](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L48)

#### 戻り値

`void`

***

### detachParent()

> **detachParent**(): `void`

定義: [composite-animation.ts:44](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L44)

#### 戻り値

`void`

***

### nonCascadingDuration()

> **nonCascadingDuration**(`newDuration`): `void`

定義: [composite-animation.ts:34](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L34)

#### パラメータ

##### newDuration

`number`

#### 戻り値

`void`

***

### onEnd()

> **onEnd**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [composite-animation.ts:46](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L46)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### onStart()

> **onStart**(`callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [composite-animation.ts:47](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L47)

#### パラメータ

##### callback

`Function`

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

***

### pause()

> **pause**(): `void`

定義: [composite-animation.ts:37](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L37)

#### 戻り値

`void`

***

### resetAnimationState()

> **resetAnimationState**(): `void`

定義: [composite-animation.ts:41](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L41)

#### 戻り値

`void`

***

### resume()

> **resume**(): `void`

定義: [composite-animation.ts:38](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L38)

#### 戻り値

`void`

***

### setParent()

> **setParent**(`parent`): `void`

定義: [composite-animation.ts:43](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L43)

#### パラメータ

##### parent

[`AnimatorContainer`](AnimatorContainer.md)

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [composite-animation.ts:40](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L40)

#### 戻り値

`void`

***

### start()

> **start**(): `void`

定義: [composite-animation.ts:35](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L35)

#### 戻り値

`void`

***

### stop()

> **stop**(): `void`

定義: [composite-animation.ts:36](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L36)

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [composite-animation.ts:42](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L42)

#### 戻り値

`void`

***

### toggleReverse()

> **toggleReverse**(`reverse`): `void`

定義: [composite-animation.ts:45](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L45)

#### パラメータ

##### reverse

`boolean`

#### 戻り値

`void`

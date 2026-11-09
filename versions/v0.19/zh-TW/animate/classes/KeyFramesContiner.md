[@ue-too/animate](../globals.md) / KeyFramesContiner

# Class: KeyFramesContiner\<T\>

Defined in: [composite-animation.ts:1213](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1213)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new KeyFramesContiner**\<`T`\>(): `KeyFramesContiner`\<`T`\>

Defined in: [composite-animation.ts:1216](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1216)

#### Returns

`KeyFramesContiner`\<`T`\>

## Accessors

### keyframes

#### Get Signature

> **get** **keyframes**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

Defined in: [composite-animation.ts:1220](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1220)

##### Returns

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

## Methods

### clearFrames()

> **clearFrames**(): `void`

Defined in: [composite-animation.ts:1254](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1254)

#### Returns

`void`

***

### from()

> **from**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

Defined in: [composite-animation.ts:1224](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1224)

#### Parameters

##### value

`T`

#### Returns

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

***

### insertAt()

> **insertAt**(`percentage`, `value`): `void`

Defined in: [composite-animation.ts:1250](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1250)

#### Parameters

##### percentage

`number`

##### value

`T`

#### Returns

`void`

***

### to()

> **to**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

Defined in: [composite-animation.ts:1237](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/animate/src/composite-animation.ts#L1237)

#### Parameters

##### value

`T`

#### Returns

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

[@ue-too/animate](../../modules.md) / [index](../index.md) / KeyFramesContiner

# 類別: KeyFramesContiner\<T\>

定義於: [composite-animation.ts:1213](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1213)

## 型別參數

### T

`T`

## 建構函式

### 建構函式

> **new KeyFramesContiner**\<`T`\>(): `KeyFramesContiner`\<`T`\>

定義於: [composite-animation.ts:1216](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1216)

#### 回傳

`KeyFramesContiner`\<`T`\>

## 存取器

### keyframes

#### Getter 簽章

> **get** **keyframes**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

定義於: [composite-animation.ts:1220](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1220)

##### 回傳

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

## 方法

### clearFrames()

> **clearFrames**(): `void`

定義於: [composite-animation.ts:1254](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1254)

#### 回傳

`void`

***

### from()

> **from**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

定義於: [composite-animation.ts:1224](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1224)

#### 參數

##### value

`T`

#### 回傳

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

***

### insertAt()

> **insertAt**(`percentage`, `value`): `void`

定義於: [composite-animation.ts:1250](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1250)

#### 參數

##### percentage

`number`

##### value

`T`

#### 回傳

`void`

***

### to()

> **to**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

定義於: [composite-animation.ts:1237](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/animate/src/composite-animation.ts#L1237)

#### 參數

##### value

`T`

#### 回傳

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

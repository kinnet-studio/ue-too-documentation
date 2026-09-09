[@ue-too/animate](../../modules.md) / [index](../index.md) / KeyFramesContiner

# クラス: KeyFramesContiner\<T\>

定義: [composite-animation.ts:1213](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1213)

## 型パラメーター

### T

`T`

## コンストラクター

### コンストラクター

> **new KeyFramesContiner**\<`T`\>(): `KeyFramesContiner`\<`T`\>

定義: [composite-animation.ts:1216](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1216)

#### 戻り値

`KeyFramesContiner`\<`T`\>

## アクセッサー

### keyframes

#### 署名を取得する

> **get** **keyframes**(): [`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

定義: [composite-animation.ts:1220](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1220)

##### 戻り値

[`Keyframe`](../type-aliases/Keyframe.md)\<`T`\>[]

## メソッド

### clearFrames()

> **clearFrames**(): `void`

定義: [composite-animation.ts:1254](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1254)

#### 戻り値

`void`

***

### from()

> **from**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

定義: [composite-animation.ts:1224](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1224)

#### パラメータ

##### value

`T`

#### 戻り値

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

***

### insertAt()

> **insertAt**(`percentage`, `value`): `void`

定義: [composite-animation.ts:1250](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1250)

#### パラメータ

##### percentage

`number`

##### value

`T`

#### 戻り値

`void`

***

### to()

> **to**(`value`): [`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

定義: [composite-animation.ts:1237](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/animate/src/composite-animation.ts#L1237)

#### パラメータ

##### value

`T`

#### 戻り値

[`Keyframes`](../interfaces/Keyframes.md)\<`T`\>

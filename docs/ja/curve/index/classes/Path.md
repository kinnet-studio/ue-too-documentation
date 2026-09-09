[@ue-too/curve](../../modules.md) / [index](../index.md) / Path

# クラス: Path

定義: [packages/curve/src/path.ts:53](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L53)

Path made of sequential line segments.

## コンストラクター

### コンストラクター

> **new Path**(`lines`): `Path`

定義: [packages/curve/src/path.ts:56](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L56)

#### パラメータ

##### lines

[`Line`](Line.md)[]

#### 戻り値

`Path`

## メソッド

### append()

> **append**(`line`): `void`

定義: [packages/curve/src/path.ts:60](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L60)

#### パラメータ

##### line

[`Line`](Line.md)

#### 戻り値

`void`

***

### clear()

> **clear**(): `void`

定義: [packages/curve/src/path.ts:64](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L64)

#### 戻り値

`void`

***

### getLength()

> **getLength**(): `number`

定義: [packages/curve/src/path.ts:76](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L76)

#### 戻り値

`number`

***

### getLines()

> **getLines**(): [`Line`](Line.md)[]

定義: [packages/curve/src/path.ts:72](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L72)

#### 戻り値

[`Line`](Line.md)[]

***

### getPercentages()

> **getPercentages**(): `object`[]

定義: [packages/curve/src/path.ts:86](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L86)

#### 戻り値

`object`[]

***

### getPointByPercentage()

> **getPointByPercentage**(`percentage`): `Point`

定義: [packages/curve/src/path.ts:102](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L102)

#### パラメータ

##### percentage

`number`

#### 戻り値

`Point`

***

### prepend()

> **prepend**(`line`): `void`

定義: [packages/curve/src/path.ts:68](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/path.ts#L68)

#### パラメータ

##### line

[`Line`](Line.md)

#### 戻り値

`void`

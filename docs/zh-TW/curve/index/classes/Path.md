[@ue-too/curve](../../modules.md) / [index](../index.md) / Path

# 類別: Path

定義於: [packages/curve/src/path.ts:53](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L53)

Path made of sequential line segments.

## 建構函式

### 建構函式

> **new Path**(`lines`): `Path`

定義於: [packages/curve/src/path.ts:56](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L56)

#### 參數

##### lines

[`Line`](Line.md)[]

#### 回傳

`Path`

## 方法

### append()

> **append**(`line`): `void`

定義於: [packages/curve/src/path.ts:60](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L60)

#### 參數

##### line

[`Line`](Line.md)

#### 回傳

`void`

***

### clear()

> **clear**(): `void`

定義於: [packages/curve/src/path.ts:64](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L64)

#### 回傳

`void`

***

### getLength()

> **getLength**(): `number`

定義於: [packages/curve/src/path.ts:76](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L76)

#### 回傳

`number`

***

### getLines()

> **getLines**(): [`Line`](Line.md)[]

定義於: [packages/curve/src/path.ts:72](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L72)

#### 回傳

[`Line`](Line.md)[]

***

### getPercentages()

> **getPercentages**(): `object`[]

定義於: [packages/curve/src/path.ts:86](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L86)

#### 回傳

`object`[]

***

### getPointByPercentage()

> **getPointByPercentage**(`percentage`): `Point`

定義於: [packages/curve/src/path.ts:102](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L102)

#### 參數

##### percentage

`number`

#### 回傳

`Point`

***

### prepend()

> **prepend**(`line`): `void`

定義於: [packages/curve/src/path.ts:68](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/path.ts#L68)

#### 參數

##### line

[`Line`](Line.md)

#### 回傳

`void`

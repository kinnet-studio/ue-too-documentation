[@ue-too/curve](../../modules.md) / [index](../index.md) / Line

# 類別: Line

定義於: [packages/curve/src/line.ts:32](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L32)

Line segment class with geometric utilities.

## 備註

Represents a straight line segment between two points with operations for:
- Line-line intersection
- Point projection onto line
- Point-in-line testing
- Linear interpolation (lerp)

## 範例

```typescript
const line = new Line({ x: 0, y: 0 }, { x: 100, y: 100 });

// Get length
console.log('Length:', line.length());

// Interpolate at midpoint
const mid = line.lerp(0.5); // { x: 50, y: 50 }

// Project a point onto the line
const result = line.projectPoint({ x: 50, y: 0 });
if (result.within) {
  console.log('Projection:', result.projectionPoint);
}
```

## 建構函式

### 建構函式

> **new Line**(`startPoint`, `endPoint`): `Line`

定義於: [packages/curve/src/line.ts:36](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L36)

#### 參數

##### startPoint

`Point`

##### endPoint

`Point`

#### 回傳

`Line`

## 方法

### getEndPoint()

> **getEndPoint**(): `Point`

定義於: [packages/curve/src/line.ts:45](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L45)

#### 回傳

`Point`

***

### getStartPoint()

> **getStartPoint**(): `Point`

定義於: [packages/curve/src/line.ts:41](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L41)

#### 回傳

`Point`

***

### getTranslationRotationToAlginXAxis()

> **getTranslationRotationToAlginXAxis**(): `object`

定義於: [packages/curve/src/line.ts:70](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L70)

#### 回傳

`object`

##### rotationAngle

> **rotationAngle**: `number`

##### translation

> **translation**: `Point`

***

### intersectionWithAnotherLine()

> **intersectionWithAnotherLine**(`lineToIntersect`): `object`

定義於: [packages/curve/src/line.ts:49](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L49)

#### 參數

##### lineToIntersect

`Line`

#### 回傳

`object`

##### intersection?

> `optional` **intersection**: `Point`

##### intersects

> **intersects**: `boolean`

##### offset?

> `optional` **offset**: `number`

***

### length()

> **length**(): `number`

定義於: [packages/curve/src/line.ts:66](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L66)

#### 回傳

`number`

***

### lerp()

> **lerp**(`ratio`): `Point`

定義於: [packages/curve/src/line.ts:103](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L103)

#### 參數

##### ratio

`number`

#### 回傳

`Point`

***

### pointInLine()

> **pointInLine**(`point`): `boolean`

定義於: [packages/curve/src/line.ts:80](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L80)

#### 參數

##### point

`Point`

#### 回傳

`boolean`

***

### projectPoint()

> **projectPoint**(`point`): `object`

定義於: [packages/curve/src/line.ts:58](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/line.ts#L58)

#### 參數

##### point

`Point`

#### 回傳

`object`

##### offset?

> `optional` **offset**: `number`

##### projectionPoint?

> `optional` **projectionPoint**: `Point`

##### within

> **within**: `boolean`

[@ue-too/curve](../../modules.md) / [index](../index.md) / Line

# クラス: Line

定義: [packages/curve/src/line.ts:32](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L32)

Line segment class with geometric utilities.

## Remarks

Represents a straight line segment between two points with operations for:
- Line-line intersection
- Point projection onto line
- Point-in-line testing
- Linear interpolation (lerp)

## 例

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

## コンストラクター

### コンストラクター

> **new Line**(`startPoint`, `endPoint`): `Line`

定義: [packages/curve/src/line.ts:36](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L36)

#### パラメータ

##### startPoint

`Point`

##### endPoint

`Point`

#### 戻り値

`Line`

## メソッド

### getEndPoint()

> **getEndPoint**(): `Point`

定義: [packages/curve/src/line.ts:45](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L45)

#### 戻り値

`Point`

***

### getStartPoint()

> **getStartPoint**(): `Point`

定義: [packages/curve/src/line.ts:41](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L41)

#### 戻り値

`Point`

***

### getTranslationRotationToAlginXAxis()

> **getTranslationRotationToAlginXAxis**(): `object`

定義: [packages/curve/src/line.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L70)

#### 戻り値

`object`

##### rotationAngle

> **rotationAngle**: `number`

##### translation

> **translation**: `Point`

***

### intersectionWithAnotherLine()

> **intersectionWithAnotherLine**(`lineToIntersect`): `object`

定義: [packages/curve/src/line.ts:49](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L49)

#### パラメータ

##### lineToIntersect

`Line`

#### 戻り値

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

定義: [packages/curve/src/line.ts:66](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L66)

#### 戻り値

`number`

***

### lerp()

> **lerp**(`ratio`): `Point`

定義: [packages/curve/src/line.ts:103](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L103)

#### パラメータ

##### ratio

`number`

#### 戻り値

`Point`

***

### pointInLine()

> **pointInLine**(`point`): `boolean`

定義: [packages/curve/src/line.ts:80](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L80)

#### パラメータ

##### point

`Point`

#### 戻り値

`boolean`

***

### projectPoint()

> **projectPoint**(`point`): `object`

定義: [packages/curve/src/line.ts:58](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/line.ts#L58)

#### パラメータ

##### point

`Point`

#### 戻り値

`object`

##### offset?

> `optional` **offset**: `number`

##### projectionPoint?

> `optional` **projectionPoint**: `Point`

##### within

> **within**: `boolean`

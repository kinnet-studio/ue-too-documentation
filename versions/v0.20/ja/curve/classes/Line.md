[@ue-too/curve](../globals.md) / Line

# Class: Line

Defined in: [packages/curve/src/line.ts:32](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L32)

Line segment class with geometric utilities.

## Remarks

Represents a straight line segment between two points with operations for:
- Line-line intersection
- Point projection onto line
- Point-in-line testing
- Linear interpolation (lerp)

## Example

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

## Constructors

### Constructor

> **new Line**(`startPoint`, `endPoint`): `Line`

Defined in: [packages/curve/src/line.ts:36](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L36)

#### Parameters

##### startPoint

`Point`

##### endPoint

`Point`

#### Returns

`Line`

## Methods

### getEndPoint()

> **getEndPoint**(): `Point`

Defined in: [packages/curve/src/line.ts:45](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L45)

#### Returns

`Point`

***

### getStartPoint()

> **getStartPoint**(): `Point`

Defined in: [packages/curve/src/line.ts:41](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L41)

#### Returns

`Point`

***

### getTranslationRotationToAlginXAxis()

> **getTranslationRotationToAlginXAxis**(): `object`

Defined in: [packages/curve/src/line.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L70)

#### Returns

`object`

##### rotationAngle

> **rotationAngle**: `number`

##### translation

> **translation**: `Point`

***

### intersectionWithAnotherLine()

> **intersectionWithAnotherLine**(`lineToIntersect`): `object`

Defined in: [packages/curve/src/line.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L49)

#### Parameters

##### lineToIntersect

`Line`

#### Returns

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

Defined in: [packages/curve/src/line.ts:66](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L66)

#### Returns

`number`

***

### lerp()

> **lerp**(`ratio`): `Point`

Defined in: [packages/curve/src/line.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L103)

#### Parameters

##### ratio

`number`

#### Returns

`Point`

***

### pointInLine()

> **pointInLine**(`point`): `boolean`

Defined in: [packages/curve/src/line.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L80)

#### Parameters

##### point

`Point`

#### Returns

`boolean`

***

### projectPoint()

> **projectPoint**(`point`): `object`

Defined in: [packages/curve/src/line.ts:58](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/line.ts#L58)

#### Parameters

##### point

`Point`

#### Returns

`object`

##### offset?

> `optional` **offset**: `number`

##### projectionPoint?

> `optional` **projectionPoint**: `Point`

##### within

> **within**: `boolean`

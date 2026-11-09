[@ue-too/curve](../globals.md) / BCurve

# Class: BCurve

Defined in: [packages/curve/src/b-curve.ts:134](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L134)

Bezier curve class supporting quadratic (3 points) and cubic (4 points) curves.

## Remarks

BCurve provides a comprehensive implementation of Bezier curves with:
- Curve evaluation at any parameter t (0 to 1)
- Arc-length calculation with caching for performance
- Curve splitting and subdivision
- Geometric queries (projection, intersection, extrema)
- Advanced operations (offset, arc fitting, curvature)

## Performance Optimizations
- Optimized formulas for quadratic and cubic curves
- Arc-length caching to avoid recomputation
- Lazy computation of lookup tables (LUT)
- Gauss-Legendre quadrature for arc-length calculation

## Coordinate System
- Parameter t ranges from 0 (start) to 1 (end)
- Points use {x, y} coordinates
- Supports 2D curves (z-coordinate optional but not used)

## Example

Create and evaluate a cubic Bezier curve
```typescript
const curve = new BCurve([
  { x: 0, y: 0 },     // Start point
  { x: 33, y: 100 },  // Control point 1
  { x: 66, y: 100 },  // Control point 2
  { x: 100, y: 0 }    // End point
]);

// Evaluate at different positions
const start = curve.get(0);    // { x: 0, y: 0 }
const mid = curve.get(0.5);    // Midpoint
const end = curve.get(1);      // { x: 100, y: 0 }

// Get curve length
console.log('Length:', curve.fullLength);

// Get derivative (tangent vector)
const tangent = curve.derivative(0.5);
```

## Constructors

### Constructor

> **new BCurve**(`controlPoints`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L170)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`BCurve`

## Accessors

### AABB

#### Get Signature

> **get** **AABB**(): `object`

Defined in: [packages/curve/src/b-curve.ts:1454](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1454)

##### Returns

`object`

###### max

> **max**: [`Point`](../type-aliases/Point.md)

###### min

> **min**: [`Point`](../type-aliases/Point.md)

***

### fullLength

#### Get Signature

> **get** **fullLength**(): `number`

Defined in: [packages/curve/src/b-curve.ts:422](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L422)

##### Returns

`number`

## Methods

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:1203](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1203)

#### Parameters

##### tVal

`number`

##### length

`number`

#### Returns

`AdvanceAtTWithLengthRes`

***

### advanceByDistance()

> **advanceByDistance**(`startT`, `distance`): `AdvanceAtTWithLengthRes`

Defined in: [packages/curve/src/b-curve.ts:1291](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1291)

#### Parameters

##### startT

`number`

##### distance

`number`

#### Returns

`AdvanceAtTWithLengthRes`

***

### compute()

> **compute**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:326](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L326)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:922](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L922)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:454](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L454)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### derivativeByPercentage()

> **derivativeByPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:235](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L235)

Gets the derivative (tangent vector) at a given percentage of the curve length.

#### Parameters

##### percentage

`number`

Percentage of the curve length (0 to 1), where 0 is the start and 1 is the end

#### Returns

[`Point`](../type-aliases/Point.md)

The derivative vector at the specified percentage along the curve

#### Remarks

This method calculates the derivative at a point specified by percentage of arc length,
not by the parameter t. This is useful when you want to sample the curve uniformly
by distance rather than by parameter value.

#### Example

```typescript
const curve = new BCurve([...]);
const tangent = curve.derivativeByPercentage(0.5); // Derivative at midpoint
const normalized = PointCal.unitVector(tangent); // Normalize for direction
```

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:458](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L458)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

Defined in: [packages/curve/src/b-curve.ts:909](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L909)

#### Parameters

##### matrix

`number`[][]

#### Returns

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:732](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L732)

#### Parameters

##### errorThreshold

`number`

#### Returns

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

Defined in: [packages/curve/src/b-curve.ts:757](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L757)

#### Parameters

##### errorThreshold

`number`

##### low

`number`

#### Returns

\{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

***

### findClosest()

> **findClosest**(`x`, `y`, `LUT`, `circleRadius`, `distanceEpsilon`, `pd2?`, `pd1?`): `number`

Defined in: [packages/curve/src/b-curve.ts:1400](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1400)

#### Parameters

##### x

`number`

##### y

`number`

##### LUT

`object`[]

##### circleRadius

`number`

##### distanceEpsilon

`number` = `5`

##### pd2?

`number`

##### pd1?

`number`

#### Returns

`number`

***

### fitArc()

> **fitArc**(`startPoint`, `endPoint`, `midPoint`): `object`

Defined in: [packages/curve/src/b-curve.ts:836](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L836)

#### Parameters

##### startPoint

[`Point`](../type-aliases/Point.md)

##### endPoint

[`Point`](../type-aliases/Point.md)

##### midPoint

[`Point`](../type-aliases/Point.md)

#### Returns

`object`

##### center?

> `optional` **center**: [`Point`](../type-aliases/Point.md)

##### endPoint?

> `optional` **endPoint**: [`Point`](../type-aliases/Point.md)

##### exists

> **exists**: `boolean`

##### radius?

> `optional` **radius**: `number`

##### startPoint?

> `optional` **startPoint**: [`Point`](../type-aliases/Point.md)

***

### get()

> **get**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:342](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L342)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

Defined in: [packages/curve/src/b-curve.ts:464](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L464)

#### Parameters

##### steps

`number` = `50`

#### Returns

`object`

##### arcLengthLUT

> **arcLengthLUT**: `object`[]

##### controlPoints

> **controlPoints**: [`Point`](../type-aliases/Point.md)[]

***

### getCacheStats()

> **getCacheStats**(): `object`

Defined in: [packages/curve/src/b-curve.ts:148](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L148)

Gets cache statistics for performance monitoring

#### Returns

`object`

Object containing cache size and hit rate information

##### hitRate

> **hitRate**: `number`

##### size

> **size**: `number`

***

### getCircleIntersections()

> **getCircleIntersections**(`circleCenter`, `circleRadius`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:1146](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1146)

#### Parameters

##### circleCenter

[`Point`](../type-aliases/Point.md)

##### circleRadius

`number`

#### Returns

`object`[]

***

### getCoefficientOfTTerms()

> **getCoefficientOfTTerms**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:946](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L946)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:956](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L956)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:296](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L296)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:998](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L998)

#### Returns

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:1443](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1443)

#### Parameters

##### curve

`BCurve`

##### deduplicationTolerance?

`number`

#### Returns

`object`[]

***

### getDerivativeCoefficients()

> **getDerivativeCoefficients**(): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:950](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L950)

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:272](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L272)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

Defined in: [packages/curve/src/b-curve.ts:1017](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1017)

#### Returns

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

Defined in: [packages/curve/src/b-curve.ts:1101](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1101)

#### Parameters

##### line

[`Line`](Line.md)

#### Returns

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:389](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L389)

#### Parameters

##### steps

`number` = `100`

#### Returns

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

Defined in: [packages/curve/src/b-curve.ts:404](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L404)

#### Parameters

##### steps?

`number`

#### Returns

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:181](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L181)

#### Parameters

##### percentage

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

Defined in: [packages/curve/src/b-curve.ts:661](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L661)

#### Parameters

##### point

[`Point`](../type-aliases/Point.md)

#### Returns

`object`

##### projection

> **projection**: [`Point`](../type-aliases/Point.md) = `preliminaryProjectionPoint`

##### tVal

> **tVal**: `number` = `preliminaryProjectionTVal`

***

### getSelfIntersections()

> **getSelfIntersections**(): `object`[]

Defined in: [packages/curve/src/b-curve.ts:1132](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1132)

#### Returns

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

Defined in: [packages/curve/src/b-curve.ts:430](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L430)

#### Parameters

##### tVal

`number`

#### Returns

`number`

***

### normal()

> **normal**(`tVal`): `object`

Defined in: [packages/curve/src/b-curve.ts:1476](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1476)

#### Parameters

##### tVal

`number`

#### Returns

`object`

##### direction

> **direction**: [`Point`](../type-aliases/Point.md)

##### tVal

> **tVal**: `number`

***

### preWarmCache()

> **preWarmCache**(`steps`): `void`

Defined in: [packages/curve/src/b-curve.ts:159](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L159)

Pre-warms the cache with commonly used t values for better performance

#### Parameters

##### steps

`number` = `100`

Number of steps to pre-cache (default: 100)

#### Returns

`void`

***

### refineBinary()

> **refineBinary**(`curve`, `x`, `y`, `LUT`, `i`, `targetDistance`, `epsilon`): \{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

Defined in: [packages/curve/src/b-curve.ts:1339](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1339)

#### Parameters

##### curve

`BCurve`

##### x

`number`

##### y

`number`

##### LUT

`object`[]

##### i

`number`

##### targetDistance

`number` = `0`

##### epsilon

`number` = `0.01`

#### Returns

\{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

***

### secondDerivative()

> **secondDerivative**(`tVal`): [`Point`](../type-aliases/Point.md)

Defined in: [packages/curve/src/b-curve.ts:939](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L939)

#### Parameters

##### tVal

`number`

#### Returns

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

Defined in: [packages/curve/src/b-curve.ts:311](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L311)

#### Parameters

##### index

`number`

##### newPoint

[`Point`](../type-aliases/Point.md)

#### Returns

`boolean`

***

### setControlPoints()

> **setControlPoints**(`controlPoints`): `void`

Defined in: [packages/curve/src/b-curve.ts:300](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L300)

#### Parameters

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### Returns

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:502](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L502)

#### Parameters

##### tVal

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

Defined in: [packages/curve/src/b-curve.ts:653](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L653)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

`BCurve`

***

### splitIn3Curves()

> **splitIn3Curves**(`tVal`, `tVal2`): \[`BCurve`, `BCurve`, `BCurve`\]

Defined in: [packages/curve/src/b-curve.ts:633](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L633)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

\[`BCurve`, `BCurve`, `BCurve`\]

***

### splitIn3WithControlPoints()

> **splitIn3WithControlPoints**(`tVal`, `tVal2`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

Defined in: [packages/curve/src/b-curve.ts:613](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L613)

#### Parameters

##### tVal

`number`

##### tVal2

`number`

#### Returns

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitIntoCurves()

> **splitIntoCurves**(`tVal`): \[`BCurve`, `BCurve`\]

Defined in: [packages/curve/src/b-curve.ts:497](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L497)

#### Parameters

##### tVal

`number`

#### Returns

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

Defined in: [packages/curve/src/b-curve.ts:1087](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1087)

#### Parameters

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### Returns

[`Point`](../type-aliases/Point.md)[]

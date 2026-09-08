[@ue-too/curve](../../modules.md) / [index](../index.md) / BCurve

# 類別: BCurve

定義於: [packages/curve/src/b-curve.ts:134](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L134)

Bezier curve class supporting quadratic (3 points) and cubic (4 points) curves.

## 備註

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

## 範例

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

## 建構函式

### 建構函式

> **new BCurve**(`controlPoints`): `BCurve`

定義於: [packages/curve/src/b-curve.ts:171](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L171)

#### 參數

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 回傳

`BCurve`

## 存取器

### AABB

#### Getter 簽章

> **get** **AABB**(): `object`

定義於: [packages/curve/src/b-curve.ts:1469](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1469)

##### 回傳

`object`

###### max

> **max**: [`Point`](../type-aliases/Point.md)

###### min

> **min**: [`Point`](../type-aliases/Point.md)

***

### fullLength

#### Getter 簽章

> **get** **fullLength**(): `number`

定義於: [packages/curve/src/b-curve.ts:423](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L423)

##### 回傳

`number`

## 方法

### advanceAtTWithLength()

> **advanceAtTWithLength**(`tVal`, `length`): `AdvanceAtTWithLengthRes`

定義於: [packages/curve/src/b-curve.ts:1218](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1218)

#### 參數

##### tVal

`number`

##### length

`number`

#### 回傳

`AdvanceAtTWithLengthRes`

***

### advanceByDistance()

> **advanceByDistance**(`startT`, `distance`): `AdvanceAtTWithLengthRes`

定義於: [packages/curve/src/b-curve.ts:1306](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1306)

#### 參數

##### startT

`number`

##### distance

`number`

#### 回傳

`AdvanceAtTWithLengthRes`

***

### compute()

> **compute**(`tVal`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:327](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L327)

#### 參數

##### tVal

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### curvature()

> **curvature**(`tVal`): `number`

定義於: [packages/curve/src/b-curve.ts:937](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L937)

#### 參數

##### tVal

`number`

#### 回傳

`number`

***

### derivative()

> **derivative**(`tVal`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:459](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L459)

#### 參數

##### tVal

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### derivativeByPercentage()

> **derivativeByPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:236](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L236)

Gets the derivative (tangent vector) at a given percentage of the curve length.

#### 參數

##### percentage

`number`

Percentage of the curve length (0 to 1), where 0 is the start and 1 is the end

#### 回傳

[`Point`](../type-aliases/Point.md)

The derivative vector at the specified percentage along the curve

#### 備註

This method calculates the derivative at a point specified by percentage of arc length,
not by the parameter t. This is useful when you want to sample the curve uniformly
by distance rather than by parameter value.

#### 範例

```typescript
const curve = new BCurve([...]);
const tangent = curve.derivativeByPercentage(0.5); // Derivative at midpoint
const normalized = PointCal.unitVector(tangent); // Normalize for direction
```

***

### derivativeNormalized()

> **derivativeNormalized**(`tVal`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:463](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L463)

#### 參數

##### tVal

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### determinant3by3()

> **determinant3by3**(`matrix`): `number`

定義於: [packages/curve/src/b-curve.ts:924](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L924)

#### 參數

##### matrix

`number`[][]

#### 回傳

`number`

***

### findArcs()

> **findArcs**(`errorThreshold`): `object`[]

定義於: [packages/curve/src/b-curve.ts:737](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L737)

#### 參數

##### errorThreshold

`number`

#### 回傳

`object`[]

***

### findArcStartingAt()

> **findArcStartingAt**(`errorThreshold`, `low`): \{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

定義於: [packages/curve/src/b-curve.ts:772](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L772)

#### 參數

##### errorThreshold

`number`

##### low

`number`

#### 回傳

\{ `arc?`: \{ `center`: [`Point`](../type-aliases/Point.md); `endPoint`: [`Point`](../type-aliases/Point.md); `endT`: `number`; `radius`: `number`; `startPoint`: [`Point`](../type-aliases/Point.md); `startT`: `number`; \}; `good`: `boolean`; \} \| `null`

***

### findClosest()

> **findClosest**(`x`, `y`, `LUT`, `circleRadius`, `distanceEpsilon`, `pd2?`, `pd1?`): `number`

定義於: [packages/curve/src/b-curve.ts:1415](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1415)

#### 參數

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

#### 回傳

`number`

***

### fitArc()

> **fitArc**(`startPoint`, `endPoint`, `midPoint`): `object`

定義於: [packages/curve/src/b-curve.ts:851](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L851)

#### 參數

##### startPoint

[`Point`](../type-aliases/Point.md)

##### endPoint

[`Point`](../type-aliases/Point.md)

##### midPoint

[`Point`](../type-aliases/Point.md)

#### 回傳

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

定義於: [packages/curve/src/b-curve.ts:343](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L343)

#### 參數

##### tVal

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### getArcLengthLUT()

> **getArcLengthLUT**(`steps`): `object`

定義於: [packages/curve/src/b-curve.ts:469](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L469)

#### 參數

##### steps

`number` = `50`

#### 回傳

`object`

##### arcLengthLUT

> **arcLengthLUT**: `object`[]

##### controlPoints

> **controlPoints**: [`Point`](../type-aliases/Point.md)[]

***

### getArcs()

> **getArcs**(`errorThreshold`): `object`[]

定義於: [packages/curve/src/b-curve.ts:768](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L768)

Get a sequence of circular arcs that approximate the curve.

#### 參數

##### errorThreshold

`number`

Maximum allowed radial error when fitting an arc.

#### 回傳

`object`[]

A list of arcs that cover the curve from \(t=0\) to \(t=1\).

***

### getCacheStats()

> **getCacheStats**(): `object`

定義於: [packages/curve/src/b-curve.ts:149](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L149)

Gets cache statistics for performance monitoring

#### 回傳

`object`

Object containing cache size and hit rate information

##### hitRate

> **hitRate**: `number`

##### size

> **size**: `number`

***

### getCircleIntersections()

> **getCircleIntersections**(`circleCenter`, `circleRadius`): `object`[]

定義於: [packages/curve/src/b-curve.ts:1161](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1161)

#### 參數

##### circleCenter

[`Point`](../type-aliases/Point.md)

##### circleRadius

`number`

#### 回傳

`object`[]

***

### getCoefficientOfTTerms()

> **getCoefficientOfTTerms**(): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:961](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L961)

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getCoefficientOfTTermsWithControlPoints()

> **getCoefficientOfTTermsWithControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:971](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L971)

#### 參數

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getControlPoints()

> **getControlPoints**(): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:297](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L297)

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getControlPointsAlignedWithXAxis()

> **getControlPointsAlignedWithXAxis**(): `object`[]

定義於: [packages/curve/src/b-curve.ts:1013](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1013)

#### 回傳

`object`[]

***

### getCurveIntersections()

> **getCurveIntersections**(`curve`, `deduplicationTolerance?`): `object`[]

定義於: [packages/curve/src/b-curve.ts:1458](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1458)

#### 參數

##### curve

`BCurve`

##### deduplicationTolerance?

`number`

#### 回傳

`object`[]

***

### getDerivativeCoefficients()

> **getDerivativeCoefficients**(): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:965](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L965)

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getDerivativeControlPoints()

> **getDerivativeControlPoints**(`controlPoints`): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:273](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L273)

#### 參數

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getExtrema()

> **getExtrema**(): `object`

定義於: [packages/curve/src/b-curve.ts:1032](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1032)

#### 回傳

`object`

##### x

> **x**: `number`[]

##### y

> **y**: `number`[]

***

### getLineIntersections()

> **getLineIntersections**(`line`): `number`[]

定義於: [packages/curve/src/b-curve.ts:1116](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1116)

#### 參數

##### line

[`Line`](Line.md)

#### 回傳

`number`[]

***

### getLUT()

> **getLUT**(`steps`): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:390](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L390)

#### 參數

##### steps

`number` = `100`

#### 回傳

[`Point`](../type-aliases/Point.md)[]

***

### getLUTWithTVal()

> **getLUTWithTVal**(`steps?`): `object`[]

定義於: [packages/curve/src/b-curve.ts:405](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L405)

#### 參數

##### steps?

`number`

#### 回傳

`object`[]

***

### getPointbyPercentage()

> **getPointbyPercentage**(`percentage`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:182](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L182)

#### 參數

##### percentage

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### getProjection()

> **getProjection**(`point`): `object`

定義於: [packages/curve/src/b-curve.ts:666](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L666)

#### 參數

##### point

[`Point`](../type-aliases/Point.md)

#### 回傳

`object`

##### projection

> **projection**: [`Point`](../type-aliases/Point.md) = `preliminaryProjectionPoint`

##### tVal

> **tVal**: `number` = `preliminaryProjectionTVal`

***

### getSelfIntersections()

> **getSelfIntersections**(): `object`[]

定義於: [packages/curve/src/b-curve.ts:1147](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1147)

#### 回傳

`object`[]

***

### lengthAtT()

> **lengthAtT**(`tVal`): `number`

定義於: [packages/curve/src/b-curve.ts:431](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L431)

#### 參數

##### tVal

`number`

#### 回傳

`number`

***

### normal()

> **normal**(`tVal`): `object`

定義於: [packages/curve/src/b-curve.ts:1491](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1491)

#### 參數

##### tVal

`number`

#### 回傳

`object`

##### direction

> **direction**: [`Point`](../type-aliases/Point.md)

##### tVal

> **tVal**: `number`

***

### preWarmCache()

> **preWarmCache**(`steps`): `void`

定義於: [packages/curve/src/b-curve.ts:160](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L160)

Pre-warms the cache with commonly used t values for better performance

#### 參數

##### steps

`number` = `100`

Number of steps to pre-cache (default: 100)

#### 回傳

`void`

***

### refineBinary()

> **refineBinary**(`curve`, `x`, `y`, `LUT`, `i`, `targetDistance`, `epsilon`): \{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

定義於: [packages/curve/src/b-curve.ts:1354](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1354)

#### 參數

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

#### 回傳

\{ `distance`: `number`; `point`: [`Point`](../type-aliases/Point.md); `tVal`: `number`; \} \| `undefined`

***

### secondDerivative()

> **secondDerivative**(`tVal`): [`Point`](../type-aliases/Point.md)

定義於: [packages/curve/src/b-curve.ts:954](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L954)

#### 參數

##### tVal

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)

***

### setControlPointAtIndex()

> **setControlPointAtIndex**(`index`, `newPoint`): `boolean`

定義於: [packages/curve/src/b-curve.ts:312](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L312)

#### 參數

##### index

`number`

##### newPoint

[`Point`](../type-aliases/Point.md)

#### 回傳

`boolean`

***

### setControlPoints()

> **setControlPoints**(`controlPoints`): `void`

定義於: [packages/curve/src/b-curve.ts:301](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L301)

#### 參數

##### controlPoints

[`Point`](../type-aliases/Point.md)[]

#### 回傳

`void`

***

### split()

> **split**(`tVal`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

定義於: [packages/curve/src/b-curve.ts:507](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L507)

#### 參數

##### tVal

`number`

#### 回傳

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitAndTakeMidCurve()

> **splitAndTakeMidCurve**(`tVal`, `tVal2`): `BCurve`

定義於: [packages/curve/src/b-curve.ts:658](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L658)

#### 參數

##### tVal

`number`

##### tVal2

`number`

#### 回傳

`BCurve`

***

### splitIn3Curves()

> **splitIn3Curves**(`tVal`, `tVal2`): \[`BCurve`, `BCurve`, `BCurve`\]

定義於: [packages/curve/src/b-curve.ts:638](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L638)

#### 參數

##### tVal

`number`

##### tVal2

`number`

#### 回傳

\[`BCurve`, `BCurve`, `BCurve`\]

***

### splitIn3WithControlPoints()

> **splitIn3WithControlPoints**(`tVal`, `tVal2`): \[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

定義於: [packages/curve/src/b-curve.ts:618](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L618)

#### 參數

##### tVal

`number`

##### tVal2

`number`

#### 回傳

\[[`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[], [`Point`](../type-aliases/Point.md)[]\]

***

### splitIntoCurves()

> **splitIntoCurves**(`tVal`): \[`BCurve`, `BCurve`\]

定義於: [packages/curve/src/b-curve.ts:502](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L502)

#### 參數

##### tVal

`number`

#### 回傳

\[`BCurve`, `BCurve`\]

***

### translateRotateControlPoints()

> **translateRotateControlPoints**(`translation`, `rotationAngle`): [`Point`](../type-aliases/Point.md)[]

定義於: [packages/curve/src/b-curve.ts:1102](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/curve/src/b-curve.ts#L1102)

#### 參數

##### translation

[`Point`](../type-aliases/Point.md)

##### rotationAngle

`number`

#### 回傳

[`Point`](../type-aliases/Point.md)[]

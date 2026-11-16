[@ue-too/math](../globals.md) / PointCal

# Class: PointCal

Defined in: [index.ts:89](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L89)

Utility class for point and vector calculations.

## Remarks

PointCal provides static methods for common 2D and 3D mathematical operations
used in canvas applications. All methods handle both 2D and 3D coordinates seamlessly.

## Example

```typescript
import { PointCal, Point } from '@ue-too/math';

const v1: Point = { x: 1, y: 2 };
const v2: Point = { x: 3, y: 4 };

const sum = PointCal.addVector(v1, v2);
const dot = PointCal.dotProduct(v1, v2);
```

## Constructors

### Constructor

> **new PointCal**(): `PointCal`

#### Returns

`PointCal`

## Angle Utilities

### angleFromA2B()

> `static` **angleFromA2B**(`a`, `b`): `number`

Defined in: [index.ts:439](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L439)

Calculates the signed angle from vector a to vector b.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First vector (starting direction)

##### b

[`point`](../type-aliases/point.md)

Second vector (ending direction)

#### Returns

`number`

The signed angle in radians, range: (-π, π]

#### Remarks

- Positive angles indicate counter-clockwise rotation from a to b
- Negative angles indicate clockwise rotation from a to b
- Uses atan2 for proper quadrant handling

#### Example

```typescript
const right = { x: 1, y: 0 };
const up = { x: 0, y: 1 };
const angle = PointCal.angleFromA2B(right, up); // π/2 (90 degrees CCW)

const down = { x: 0, y: -1 };
const angleDown = PointCal.angleFromA2B(right, down); // -π/2 (90 degrees CW)
```

## Geometric Calculations

### distanceBetweenPoints()

> `static` **distanceBetweenPoints**(`a`, `b`): `number`

Defined in: [index.ts:497](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L497)

Calculates the Euclidean distance between two points.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First point

##### b

[`point`](../type-aliases/point.md)

Second point

#### Returns

`number`

The distance between the two points

#### Remarks

Equivalent to calculating the magnitude of the vector from a to b.

#### Example

```typescript
const a = { x: 0, y: 0 };
const b = { x: 3, y: 4 };
const distance = PointCal.distanceBetweenPoints(a, b); // 5
```

***

### getLineIntersection()

> `static` **getLineIntersection**(`startPoint`, `endPoint`, `startPoint2`, `endPoint2`): `object`

Defined in: [index.ts:630](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L630)

Calculates the intersection point of two line segments.

#### Parameters

##### startPoint

[`Point`](../type-aliases/Point-1.md)

Start of first line segment

##### endPoint

[`Point`](../type-aliases/Point-1.md)

End of first line segment

##### startPoint2

[`Point`](../type-aliases/Point-1.md)

Start of second line segment

##### endPoint2

[`Point`](../type-aliases/Point-1.md)

End of second line segment

#### Returns

`object`

Object containing intersection status and details

##### intersection?

> `optional` **intersection**: [`Point`](../type-aliases/Point-1.md)

##### intersects

> **intersects**: `boolean`

##### offset?

> `optional` **offset**: `number`

#### Remarks

Returns an object with:
- `intersects`: Boolean indicating if segments intersect
- `intersection`: The intersection point (only if intersects is true)
- `offset`: Parameter t where intersection occurs on first segment (0 to 1)

The segments must actually cross within their bounds (not just their infinite extensions).

**Use cases:**
- Collision detection between line segments
- Ray casting and visibility checks
- Path intersection detection

#### Example

```typescript
const line1Start = { x: 0, y: 0 };
const line1End = { x: 10, y: 10 };
const line2Start = { x: 0, y: 10 };
const line2End = { x: 10, y: 0 };

const result = PointCal.getLineIntersection(line1Start, line1End, line2Start, line2End);
// { intersects: true, intersection: { x: 5, y: 5 }, offset: 0.5 }
```

***

### isEqual()

> `static` **isEqual**(`a`, `b`): `boolean`

Defined in: [index.ts:585](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L585)

Checks if two points are exactly equal.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First point

##### b

[`point`](../type-aliases/point.md)

Second point

#### Returns

`boolean`

True if all coordinates are exactly equal

#### Remarks

Uses strict equality (===) for comparison.
For approximate equality with tolerance, use [samePoint](../functions/samePoint.md) instead.
Missing z-coordinates are treated as 0.

#### Example

```typescript
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
PointCal.isEqual(a, b); // true

const c = { x: 1.0000001, y: 2 };
PointCal.isEqual(a, c); // false (use samePoint for tolerance)
```

***

### linearInterpolation()

> `static` **linearInterpolation**(`a`, `b`, `t`): [`point`](../type-aliases/point.md)

Defined in: [index.ts:549](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L549)

Performs linear interpolation between two points.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Starting point (t = 0)

##### b

[`point`](../type-aliases/point.md)

Ending point (t = 1)

##### t

`number`

Interpolation parameter (0 to 1)

#### Returns

[`point`](../type-aliases/point.md)

Interpolated point

#### Remarks

- t = 0 returns point a
- t = 1 returns point b
- t = 0.5 returns the midpoint
- Values outside [0, 1] perform extrapolation

**Performance**: Suitable for animation loops and real-time interpolation.

#### Example

```typescript
const a = { x: 0, y: 0 };
const b = { x: 10, y: 20 };
const mid = PointCal.linearInterpolation(a, b, 0.5); // { x: 5, y: 10 }
const quarter = PointCal.linearInterpolation(a, b, 0.25); // { x: 2.5, y: 5 }
```

***

### unitVectorFromA2B()

> `static` **unitVectorFromA2B**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:346](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L346)

Calculates the unit vector pointing from point a to point b.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Starting point

##### b

[`point`](../type-aliases/point.md)

Ending point

#### Returns

[`Point`](../type-aliases/Point-1.md)

Unit vector in the direction from a to b

#### Remarks

Equivalent to calling unitVector(subVector(b, a))

#### Example

```typescript
const a = { x: 0, y: 0 };
const b = { x: 3, y: 4 };
const direction = PointCal.unitVectorFromA2B(a, b); // { x: 0.6, y: 0.8 }
```

## Transformations

### flipYAxis()

> `static` **flipYAxis**(`point`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:519](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L519)

Flips a point's y-coordinate (mirrors across the x-axis).

#### Parameters

##### point

[`point`](../type-aliases/point.md)

Point to flip

#### Returns

[`Point`](../type-aliases/Point-1.md)

Point with negated y-coordinate

#### Remarks

Useful for converting between coordinate systems where the y-axis direction differs.
Common when converting between screen coordinates (y-down) and mathematical coordinates (y-up).

#### Example

```typescript
const point = { x: 10, y: 20 };
const flipped = PointCal.flipYAxis(point); // { x: 10, y: -20 }
```

***

### rotatePoint()

> `static` **rotatePoint**(`point`, `angle`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:373](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L373)

Rotates a point around the origin.

#### Parameters

##### point

[`point`](../type-aliases/point.md)

Point to rotate

##### angle

`number`

Rotation angle in radians (counter-clockwise)

#### Returns

[`Point`](../type-aliases/Point-1.md)

Rotated point

#### Remarks

Rotation is performed around the origin (0, 0).
Positive angles rotate counter-clockwise, negative angles rotate clockwise.
For rotation around a custom anchor, use [transformPointWRTAnchor](#transformpointwrtanchor).

**Performance**: Uses trigonometric functions (sin/cos). For many rotations with
the same angle, pre-calculate sin/cos values and apply the transformation manually.

#### Example

```typescript
const point = { x: 1, y: 0 };
const rotated = PointCal.rotatePoint(point, Math.PI / 2); // { x: 0, y: 1 }
```

***

### transform2NewAxis()

> `static` **transform2NewAxis**(`point`, `angleFromOriginalAxis2DestAxis`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:400](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L400)

Transforms a point's coordinates to a new rotated axis system.

#### Parameters

##### point

[`point`](../type-aliases/point.md)

Point in original coordinate system

##### angleFromOriginalAxis2DestAxis

`number`

Rotation angle from original to destination axis (radians, CCW positive)

#### Returns

[`Point`](../type-aliases/Point-1.md)

Point coordinates in the new axis system

#### Remarks

This performs an axis rotation transformation, converting coordinates from one
reference frame to another rotated by the specified angle.

#### Example

```typescript
const point = { x: 10, y: 0 };
const angle = Math.PI / 4; // 45 degrees
const transformed = PointCal.transform2NewAxis(point, angle);
```

***

### transformPointWRTAnchor()

> `static` **transformPointWRTAnchor**(`point`, `anchor`, `angle`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:468](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L468)

Rotates a point around a custom anchor point.

#### Parameters

##### point

[`point`](../type-aliases/point.md)

Point to rotate

##### anchor

[`point`](../type-aliases/point.md)

Anchor point to rotate around

##### angle

`number`

Rotation angle in radians (counter-clockwise)

#### Returns

[`Point`](../type-aliases/Point-1.md)

Rotated point

#### Remarks

This is equivalent to:
1. Translate point by -anchor
2. Rotate around origin
3. Translate back by +anchor

#### Example

```typescript
const point = { x: 10, y: 5 };
const anchor = { x: 5, y: 5 };
const angle = Math.PI / 2; // 90 degrees
const rotated = PointCal.transformPointWRTAnchor(point, anchor, angle);
// Rotates point around anchor (5, 5)
```

## Vector Arithmetic

### addVector()

> `static` **addVector**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:115](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L115)

Adds two vectors together.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First vector

##### b

[`point`](../type-aliases/point.md)

Second vector

#### Returns

[`Point`](../type-aliases/Point-1.md)

The sum of vectors a and b

#### Remarks

If either vector lacks a z-coordinate, it's treated as 0.
The result will include a z-coordinate if either input has one.

#### Example

```typescript
const a = { x: 1, y: 2 };
const b = { x: 3, y: 4 };
const sum = PointCal.addVector(a, b); // { x: 4, y: 6 }

// With 3D coordinates
const a3d = { x: 1, y: 2, z: 3 };
const b3d = { x: 4, y: 5, z: 6 };
const sum3d = PointCal.addVector(a3d, b3d); // { x: 5, y: 7, z: 9 }
```

***

### divideVectorByScalar()

> `static` **divideVectorByScalar**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:190](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L190)

Divides a vector by a scalar value.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Vector to divide

##### b

`number`

Scalar divisor

#### Returns

[`Point`](../type-aliases/Point-1.md)

The divided vector, or the original vector if b is 0

#### Remarks

Division by zero returns the original vector unchanged to prevent NaN values.

#### Example

```typescript
const v = { x: 10, y: 20 };
const divided = PointCal.divideVectorByScalar(v, 2); // { x: 5, y: 10 }
```

***

### multiplyVectorByScalar()

> `static` **multiplyVectorByScalar**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:167](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L167)

Multiplies a vector by a scalar value.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Vector to multiply

##### b

`number`

Scalar multiplier

#### Returns

[`Point`](../type-aliases/Point-1.md)

The scaled vector

#### Example

```typescript
const v = { x: 2, y: 3 };
const scaled = PointCal.multiplyVectorByScalar(v, 2.5); // { x: 5, y: 7.5 }
```

***

### subVector()

> `static` **subVector**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:143](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L143)

Subtracts vector b from vector a.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Vector to subtract from

##### b

[`point`](../type-aliases/point.md)

Vector to subtract

#### Returns

[`Point`](../type-aliases/Point-1.md)

The difference (a - b)

#### Remarks

If either vector lacks a z-coordinate, it's treated as 0.

#### Example

```typescript
const a = { x: 5, y: 7 };
const b = { x: 2, y: 3 };
const diff = PointCal.subVector(a, b); // { x: 3, y: 4 }
```

## Vector Operations

### crossProduct()

> `static` **crossProduct**(`a`, `b`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:315](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L315)

Calculates the cross product of two vectors.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First vector

##### b

[`point`](../type-aliases/point.md)

Second vector

#### Returns

[`Point`](../type-aliases/Point-1.md)

The cross product vector perpendicular to both inputs

#### Remarks

The cross product is perpendicular to both input vectors, following the right-hand rule.
For 2D vectors (z undefined), z is treated as 0.

**Properties:**
- Result is perpendicular to both input vectors
- Magnitude equals area of parallelogram formed by vectors
- Direction follows right-hand rule

#### Example

```typescript
const a = { x: 1, y: 0, z: 0 };
const b = { x: 0, y: 1, z: 0 };
const cross = PointCal.crossProduct(a, b); // { x: 0, y: 0, z: 1 }
```

***

### dotProduct()

> `static` **dotProduct**(`a`, `b`): `number`

Defined in: [index.ts:281](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L281)

Calculates the dot product of two vectors.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

First vector

##### b

[`point`](../type-aliases/point.md)

Second vector

#### Returns

`number`

The dot product (scalar value)

#### Remarks

The dot product is: a.x * b.x + a.y * b.y + a.z * b.z

**Use cases:**
- Determine if vectors are perpendicular (dot = 0)
- Calculate angle between vectors: θ = acos(dot / (|a| * |b|))
- Project one vector onto another

#### Example

```typescript
const a = { x: 1, y: 0 };
const b = { x: 0, y: 1 };
const dot = PointCal.dotProduct(a, b); // 0 (perpendicular vectors)

const c = { x: 2, y: 3 };
const d = { x: 4, y: 5 };
const dot2 = PointCal.dotProduct(c, d); // 23
```

***

### magnitude()

> `static` **magnitude**(`a`): `number`

Defined in: [index.ts:216](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L216)

Calculates the magnitude (length) of a vector.

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Vector to measure

#### Returns

`number`

The magnitude of the vector

#### Remarks

Uses the Euclidean distance formula: √(x² + y² + z²)

#### Example

```typescript
const v = { x: 3, y: 4 };
const mag = PointCal.magnitude(v); // 5

const v3d = { x: 1, y: 2, z: 2 };
const mag3d = PointCal.magnitude(v3d); // 3
```

***

### unitVector()

> `static` **unitVector**(`a`): [`Point`](../type-aliases/Point-1.md)

Defined in: [index.ts:242](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L242)

Converts a vector to its unit vector (normalized to length 1).

#### Parameters

##### a

[`point`](../type-aliases/point.md)

Vector to normalize

#### Returns

[`Point`](../type-aliases/Point-1.md)

Unit vector in the same direction, or zero vector if magnitude is 0

#### Remarks

A unit vector has magnitude 1 and preserves the original direction.
Returns {x: 0, y: 0, z: 0} if the input vector has zero magnitude.

**Performance note**: This method calls `magnitude()` twice. For better performance
when you need both magnitude and unit vector, calculate magnitude once and divide manually.

#### Example

```typescript
const v = { x: 3, y: 4 };
const unit = PointCal.unitVector(v); // { x: 0.6, y: 0.8 }
```

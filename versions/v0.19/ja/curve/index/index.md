[@ue-too/curve](../modules.md) / index

# index

Bezier curve and geometric path library for TypeScript.

## Remarks

The `@ue-too/curve` package provides comprehensive tools for working with Bezier curves,
lines, and composite paths. It includes advanced features like curve intersection detection,
offset curves, arc fitting, and arc-length parameterization.

## Core Components

- **[BCurve](classes/BCurve.md)**: Bezier curve (quadratic and cubic) with extensive geometric operations
- **[Line](classes/Line.md)**: Straight line segment with intersection and projection utilities
- **[CompositeBCurve](classes/CompositeBCurve.md)**: Composite Bezier curve with control points and handles
- **[Path](classes/Path.md)**: Sequential path made of line segments

## Key Features

### Bezier Curve Operations
- Evaluate curves at any parameter t
- Split curves at any point
- Calculate arc length with caching
- Find derivatives and curvature
- Detect self-intersections and curve-to-curve intersections

### Geometric Queries
- Project points onto curves
- Find closest points on curves
- Calculate bounding boxes (AABB)
- Detect intersections with lines, circles, and other curves
- Fit arcs to curve segments

### Advanced Features
- Offset curves (parallel curves at distance)
- Arc-length parameterization for uniform spacing
- Curve reduction and simplification
- Normal and tangent vector calculation
- Extrema detection (min/max x and y values)

## Main Exports

- [BCurve](classes/BCurve.md) - Bezier curve class (2-4 control points)
- [Line](classes/Line.md) - Line segment class
- [CompositeBCurve](classes/CompositeBCurve.md) - Composite curve with handles
- [ControlPoint](classes/ControlPoint.md) - Control point with left/right handles
- [Path](classes/Path.md) - Path composed of line segments

## Examples

Basic Bezier curve
```typescript
import { BCurve } from '@ue-too/curve';

// Create a quadratic Bezier curve
const curve = new BCurve([
  { x: 0, y: 0 },
  { x: 50, y: 100 },
  { x: 100, y: 0 }
]);

// Evaluate at midpoint
const midpoint = curve.get(0.5);

// Get the total length
console.log('Length:', curve.fullLength);

// Split the curve
const [left, right] = curve.splitIntoCurves(0.5);
```

Curve intersections
```typescript
import { BCurve } from '@ue-too/curve';

const curve1 = new BCurve([
  { x: 0, y: 0 },
  { x: 50, y: 100 },
  { x: 100, y: 0 }
]);

const curve2 = new BCurve([
  { x: 0, y: 50 },
  { x: 50, y: -50 },
  { x: 100, y: 50 }
]);

// Find intersections
const intersections = curve1.getCurveIntersections(curve2);
intersections.forEach(({selfT, otherT}) => {
  console.log('Intersection at t1:', selfT, 't2:', otherT);
});
```

## 参照

 - [BCurve](classes/BCurve.md) for the main Bezier curve class
 - [Line](classes/Line.md) for line segment utilities

## Core

- [BCurve](classes/BCurve.md)
- [CompositeBCurve](classes/CompositeBCurve.md)
- [ControlPoint](classes/ControlPoint.md)
- [Line](classes/Line.md)
- [Path](classes/Path.md)

## Utilities

- [AABBIntersects](functions/AABBIntersects.md)
- [approximately](functions/approximately.md)
- [computeWithControlPoints](functions/computeWithControlPoints.md)
- [getIntersectionsBetweenCurves](functions/getIntersectionsBetweenCurves.md)
- [offset](functions/offset.md)
- [offset2](functions/offset2.md)
- [reduce](functions/reduce.md)
- [solveCubic](functions/solveCubic.md)

## Types

- [TValOutofBoundError](classes/TValOutofBoundError.md)
- [HandlePoint](type-aliases/HandlePoint.md)
- [HandleType](type-aliases/HandleType.md)
- [Point](type-aliases/Point.md)

## Other

- [accept](functions/accept.md)
- [cuberoot](functions/cuberoot.md)
- [cuberoot2](functions/cuberoot2.md)
- [getCubicRoots](functions/getCubicRoots.md)
- [getLineIntersection](functions/getLineIntersection.md)
- [projectPointOntoLine](functions/projectPointOntoLine.md)

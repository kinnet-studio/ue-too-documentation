[@ue-too/border](../modules.md) / index

# index

Geodesy and map projection library for TypeScript.

## 備註

The `@ue-too/border` package provides geodesy calculations and map projections
for working with geographic coordinates on the Earth's surface. It includes utilities
for great circle navigation, rhumb line navigation, and coordinate transformations.

## Core Concepts

- **Great Circles**: Shortest path between two points on a sphere (like flight routes)
- **Rhumb Lines**: Constant bearing paths (easier for navigation, slightly longer)
- **Map Projections**: Converting geographic coordinates to 2D points and vice versa

## Key Features

### Great Circle Navigation
- Calculate distance between two geographic points
- Find initial bearing for great circle path
- Calculate intermediate points along great circle
- Find destination given origin, bearing, and distance
- Calculate midpoint on great circle

### Rhumb Line Navigation
- Calculate rhumb line distance (constant bearing path)
- Find bearing for rhumb line
- Calculate destination on rhumb line
- Find midpoint on rhumb line

### Map Projections
- **Mercator Projection**: Cylindrical map projection preserving angles
- **Orthographic Projection**: Perspective view of hemisphere from space
- Inverse projections for converting back to geographic coordinates

## Main Exports

- [GeoCoord](type-aliases/GeoCoord.md) - Geographic coordinate type (latitude/longitude)
- [mercatorProjection](functions/mercatorProjection.md) - Convert geo coordinates to Mercator projection
- [orthoProjection](functions/orthoProjection.md) - Convert geo coordinates to orthographic projection
- [greatCircleDistance](functions/greatCircleDistance.md) - Calculate great circle distance
- [initialBearingOfGreatCircle](functions/initialBearingOfGreatCircle.md) - Calculate initial bearing
- [rhumbDistance](functions/rhumbDistance.md) - Calculate rhumb line distance
- [rhumbBearing](functions/rhumbBearing.md) - Calculate rhumb line bearing

## Examples

Great circle navigation
```typescript
import {
  greatCircleDistance,
  initialBearingOfGreatCircle,
  destinationFromOriginOnGreatCircle
} from '@ue-too/border';

// New York to London
const nyc = { latitude: 40.7128, longitude: -74.0060 };
const london = { latitude: 51.5074, longitude: -0.1278 };

// Calculate distance in meters
const distance = greatCircleDistance(nyc, london);
console.log('Distance:', distance / 1000, 'km'); // ~5570 km

// Calculate initial bearing
const bearing = initialBearingOfGreatCircle(nyc, london);
console.log('Bearing:', bearing, 'degrees'); // ~51 degrees (northeast)

// Find point 1000km along the path
const intermediate = destinationFromOriginOnGreatCircle(nyc, bearing, 1000000);
```

Rhumb line navigation
```typescript
import { rhumbDistance, rhumbBearing, destinationFromOriginOnRhumbLine } from '@ue-too/border';

const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

// Calculate rhumb line distance
const dist = rhumbDistance(start, end);

// Calculate constant bearing
const bearing = rhumbBearing(start, end);

// Navigate 100km on constant bearing
const destination = destinationFromOriginOnRhumbLine(start, bearing, 100000);
```

Map projections
```typescript
import {
  mercatorProjection,
  inverseMercatorProjection,
  orthoProjection
} from '@ue-too/border';

// Convert geographic to Mercator
const coord = { latitude: 51.5074, longitude: -0.1278 };
const point = mercatorProjection(coord);
console.log('Mercator point:', point); // {x: ..., y: ...}

// Convert back to geographic
const geoCoord = inverseMercatorProjection(point);

// Orthographic projection (hemisphere view)
const origin = { latitude: 45.0, longitude: 0.0 };
const result = orthoProjection(coord, origin);
if (!result.clipped) {
  console.log('Visible at:', result.coord);
}
```

## 參閱

 - projection for map projection functions
 - greateCircle for great circle navigation
 - rhumbLine for rhumb line navigation

## Types

- [GeoCoord](type-aliases/GeoCoord.md)

## Great Circle

- [destinationFromOriginOnGreatCircle](functions/destinationFromOriginOnGreatCircle.md)
- [greatCircleDistance](functions/greatCircleDistance.md)
- [intermediatePointOnGreatCircle](functions/intermediatePointOnGreatCircle.md)
- [midPointOnGreatCircle](functions/midPointOnGreatCircle.md)

## Rhumb Line

- [destinationFromOriginOnRhumbLine](functions/destinationFromOriginOnRhumbLine.md)
- [midPointOnRhumbLine](functions/midPointOnRhumbLine.md)
- [rhumbBearing](functions/rhumbBearing.md)
- [rhumbDistance](functions/rhumbDistance.md)

## Projections

- [inverseMercatorProjection](functions/inverseMercatorProjection.md)
- [inverseOrthoProjection](functions/inverseOrthoProjection.md)
- [mercatorProjection](functions/mercatorProjection.md)
- [orthoProjection](functions/orthoProjection.md)

## Other

- [initialBearingOfGreatCircle](functions/initialBearingOfGreatCircle.md)

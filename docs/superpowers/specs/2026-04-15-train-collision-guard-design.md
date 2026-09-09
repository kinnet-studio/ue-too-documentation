# Train Collision Guard

## Context

The banana railway simulation has block signals that enforce train separation for auto-driven trains, and a proximity detector for coupling stationary trains. However, there is no universal collision prevention: manually-controlled trains ignore signals entirely, and no system prevents physical overlap between any trains. This design adds a physics-level safety net that prevents all train-train collisions regardless of control mode.

## Scope

- **All trains:** auto-driven and manually controlled
- **Same-track collisions:** head-on and rear-end on shared or connected segments
- **Crossing collisions:** trains arriving simultaneously at same-elevation track intersections
- **Universal failsafe:** independent of the signal system

## Architecture

### New class: `CollisionGuard`

**File:** `src/trains/collision-guard.ts`

A per-frame system that detects imminent collisions and forces emergency braking.

**Dependencies:**
- `OccupancyRegistry` — broad-phase for same-track pairs (colocated pairs)
- `TrackcurveManager` — for `TrackSegmentWithCollision` data and track mutation observables
- `TrackGraph` — for segment arc-length computation
- Placed trains list — for positions, speeds, bogie positions

### Crossing Map

A `Map<segmentNumber, Array<{ crossingSegment: number, selfT: number, otherT: number }>>` built from `TrackSegmentWithCollision` data, **filtered to same-elevation crossings only** using `getElevationAtT()`.

**Lifecycle — reactive via TrackcurveManager observables:**
- `onAddTrackSegment(curveNumber, segment)` — read the segment's `collision` array, filter to same-elevation crossings, add bidirectional entries to the map
- `onRemoveTrackSegment(curveNumber)` — remove the segment's entries and clean up references from other segments
- `onSegmentSplit(info)` — handled by the add/remove cycle (old segment removed, new segments added); remap collision t-values to the new segment ranges

### Per-Frame Update Flow

```
CollisionGuard.update(placedTrains, occupancyRegistry):
  1. Same-track check:
     - Get colocated pairs from OccupancyRegistry
     - For each pair, compute arc-length distance between nearest train endpoints
       using segment t-values and TrackGraph arc-length methods
     - Evaluate against thresholds

  2. Crossing check:
     - For each occupied segment, look up crossing partners in crossing map
     - Check if crossing partner segment is also occupied (via OccupancyRegistry)
     - If both occupied: compute time-to-crossing-point for each train
       (timeToArrival = arcLengthToCrossing / speed)
     - If arrival times overlap within safety window, trigger response

  3. Apply response:
     - Tier 1 (warning zone): force throttle to 'er' (emergency brake)
     - Tier 2 (critical zone): force speed = 0 + throttle lock
     - Clear locks when danger passes
```

## Two-Tier Response

### Tier 1 — Warning Zone (Emergency Brake)

- **Same-track:** triggers when distance < dynamic braking distance (computed from closing speed, with 1.8x safety margin matching auto-driver's `BRAKING_SAFETY_MARGIN`)
- **Crossings:** triggers when both trains' time-to-crossing-point differs by less than the longer train's crossing duration plus a safety margin (i.e., they'd occupy the intersection at the same time)
- **Action:** force both trains' throttle to `er` (-1.3 m/s²)

### Tier 2 — Critical Zone (Hard Stop)

- **Same-track:** triggers when distance < ~5 world units (roughly a car length)
- **Crossings:** triggers when one train is at/past the crossing point and the other is within critical distance
- **Action:** force `speed = 0`, set `collisionLocked` flag on both trains

### Throttle Lock

A new `collisionLocked` flag on `Train`:
- When `true`, `setThrottleStep()` becomes a no-op (neither AutoDriver nor manual UI can override)
- Only `CollisionGuard` can set and clear the flag
- Clears when the CollisionGuard determines the danger has passed (trains no longer in collision trajectory)

### Train.emergencyStop()

A new method on `Train` that:
- Sets `speed = 0`
- Sets `throttle = 'er'`
- Sets `collisionLocked = true`

## Frame Loop Integration

```
Frame N:
  1. TimetableManager.update()
     -> AutoDriver.driveStep() sets throttle (no-op if collisionLocked)
  2. TrainRenderSystem.update(scaledDelta):
     a. train.update(deltaTime) — physics
     b. OccupancyRegistry.updateFromTrains() — rebuild
     c. ProximityDetector.update() — coupling
     d. CollisionGuard.update() — collision detection + response  [NEW]
  3. SignalStateEngine.update()
  4. Render
```

The CollisionGuard runs after occupancy rebuild so it has fresh position data. Hard stops (Tier 2) take effect on the current frame's render. Throttle locks persist into the next frame.

## Key Files

| File | Role |
|------|------|
| `src/trains/collision-guard.ts` | **New.** Core collision detection and response |
| `src/trains/formation.ts` | Add `collisionLocked` flag, `emergencyStop()`, guard `setThrottleStep()` |
| `src/trains/train-render-system.ts` | Wire `CollisionGuard.update()` into the frame loop |
| `src/utils/init-app.ts` | Instantiate CollisionGuard, pass dependencies |
| `src/trains/tracks/utils.ts` | Reuse `getElevationAtT()` for same-elevation filtering |
| `src/trains/tracks/trackcurve-manager.ts` | Subscribe to `onAddTrackSegment`, `onRemoveTrackSegment` for crossing map |

## Testing

Tests use Bun test runner (`bun:test`).

### CollisionGuard unit tests (`test/collision-guard.test.ts`)

**Same-track scenarios:**
- Two trains on same segment approaching each other — verify emergency brake at correct distance
- Two trains same direction (rear-end) — verify detection
- Two trains moving apart — verify no false positive
- Tier 2 hard stop — trains within critical threshold, verify speed forced to 0

**Crossing scenarios:**
- Two trains approaching same-elevation intersection — verify time-based detection triggers
- Two trains at different elevations at crossing — verify no false positive
- One train stationary at crossing, other approaching — verify detection

**Throttle lock:**
- Verify `setThrottleStep()` is blocked while `collisionLocked` is true
- Verify lock clears when danger passes

### Crossing map unit tests (`test/crossing-map.test.ts`)

- Build from segments with known intersections
- Add segment — verify map updated with bidirectional entries
- Remove segment — verify entries cleaned up from both sides
- Same-elevation vs different-elevation filtering

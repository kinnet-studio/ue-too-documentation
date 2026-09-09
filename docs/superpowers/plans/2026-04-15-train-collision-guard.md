# Train Collision Guard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a universal collision prevention system that detects imminent train-train collisions (same-track and crossing) and forces emergency braking/hard stops.

**Architecture:** A new `CollisionGuard` class runs per-frame after occupancy rebuild. It uses `OccupancyRegistry` colocated pairs for same-track broad-phase and a reactive crossing map (built from `TrackSegmentWithCollision` data, filtered to same-elevation) for crossing broad-phase. Two-tier response: Tier 1 forces emergency brake at braking distance; Tier 2 forces hard stop at critical distance. A `collisionLocked` flag on `Train` prevents throttle overrides during collision events.

**Tech Stack:** TypeScript, Bun test runner (`bun:test`)

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/trains/collision-guard.ts` | Create | Core collision detection: crossing map, per-frame same-track + crossing checks, response logic |
| `src/trains/formation.ts` | Modify | Add `collisionLocked` flag, `emergencyStop()`, guard `setThrottleStep()` |
| `src/trains/train-render-system.ts` | Modify | Wire `CollisionGuard.update()` into frame loop |
| `src/utils/init-app.ts` | Modify | Instantiate CollisionGuard, subscribe to track mutation observables |
| `test/collision-guard.test.ts` | Create | Unit tests for CollisionGuard |
| `test/collision-lock.test.ts` | Create | Unit tests for Train collision lock behavior |

---

### Task 1: Add `collisionLocked` flag and `emergencyStop()` to Train

**Files:**
- Modify: `src/trains/formation.ts:594-690` (Train class fields + methods)
- Test: `test/collision-lock.test.ts`

- [ ] **Step 1: Write the failing test for collision lock on setThrottleStep**

Create `test/collision-lock.test.ts`:

```typescript
import { describe, it, expect, beforeEach } from 'bun:test';
import type { Train, TrainPosition } from '../src/trains/formation';

/**
 * Minimal mock that exercises only the throttle/speed/lock interface.
 * We import the real Train class and construct it with a stub TrackGraph.
 */
function makeStubTrackGraph() {
    return {
        getTrackSegmentWithJoints: () => null,
        getJoint: () => null,
    } as any;
}

function makeStubJDM() {
    return {
        getNextJoint: () => null,
    } as any;
}

function makeTrain(): Train {
    // Dynamically import to get the real class
    const { Train: TrainClass } = require('../src/trains/formation');
    const pos: TrainPosition = {
        trackSegment: 0,
        tValue: 0.5,
        direction: 'tangent' as const,
        point: { x: 0, y: 0 },
    };
    return new TrainClass(pos, makeStubTrackGraph(), makeStubJDM());
}

describe('Train collision lock', () => {
    let train: Train;

    beforeEach(() => {
        train = makeTrain();
    });

    it('should allow setThrottleStep when not locked', () => {
        train.setThrottleStep('p5');
        expect(train.throttleStep).toBe('p5');
    });

    it('should block setThrottleStep when collisionLocked', () => {
        train.setThrottleStep('p5');
        train.emergencyStop();
        expect(train.collisionLocked).toBe(true);
        expect(train.speed).toBe(0);
        expect(train.throttleStep).toBe('er');

        // Throttle changes should be ignored
        train.setThrottleStep('p5');
        expect(train.throttleStep).toBe('er');
    });

    it('should allow setThrottleStep after unlocking', () => {
        train.emergencyStop();
        train.clearCollisionLock();
        expect(train.collisionLocked).toBe(false);

        train.setThrottleStep('p3');
        expect(train.throttleStep).toBe('p3');
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx nx test banana -- --testPathPattern collision-lock`
Expected: FAIL — `emergencyStop`, `collisionLocked`, `clearCollisionLock` don't exist

- [ ] **Step 3: Implement collision lock on Train**

In `src/trains/formation.ts`, add a private field after `_throttle` (around line 601):

```typescript
private _collisionLocked: boolean = false;
```

Add a public getter after the `speed` getter (around line 668):

```typescript
get collisionLocked(): boolean {
    return this._collisionLocked;
}
```

Modify `setThrottleStep` (line 688) to guard against lock:

```typescript
setThrottleStep(throttleStep: ThrottleSteps) {
    if (this._collisionLocked) return;
    this._throttle = throttleStep;
}
```

Add `emergencyStop()` and `clearCollisionLock()` methods after `setThrottleStep`:

```typescript
/**
 * Force an immediate stop and lock the throttle.
 * Only {@link CollisionGuard} should call this.
 */
emergencyStop(): void {
    this._speed = 0;
    this._throttle = 'er';
    this._collisionLocked = true;
}

/**
 * Release the collision lock so normal throttle control resumes.
 * Only {@link CollisionGuard} should call this.
 */
clearCollisionLock(): void {
    this._collisionLocked = false;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bunx nx test banana -- --testPathPattern collision-lock`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add apps/banana/src/trains/formation.ts apps/banana/test/collision-lock.test.ts
git commit -m "feat(banana): add collisionLocked flag and emergencyStop to Train"
```

---

### Task 2: Create CollisionGuard — crossing map

**Files:**
- Create: `src/trains/collision-guard.ts`
- Test: `test/collision-guard.test.ts`

- [ ] **Step 1: Write failing tests for crossing map build and maintenance**

Create `test/collision-guard.test.ts`:

```typescript
import { describe, it, expect, beforeEach } from 'bun:test';
import { CrossingMap } from '../src/trains/collision-guard';
import type { TrackSegmentWithCollision } from '../src/trains/tracks/types';

function makeMockSegment(
    segmentNumber: number,
    collisions: { selfT: number; otherSegment: number; otherT: number }[],
    elevationFrom: number = 0,
    elevationTo: number = 0,
): { segmentNumber: number; segment: TrackSegmentWithCollision } {
    // We build fake collision entries. The CrossingMap receives pre-resolved
    // crossing data, not raw TrackSegmentWithCollision.collision (which stores
    // BCurve refs). The resolution happens in CollisionGuard when it subscribes
    // to onAddTrackSegment.
    return {
        segmentNumber,
        segment: {
            curve: { lengthAtT: (t: number) => t * 100, fullLength: 100 } as any,
            t0Joint: 0,
            t1Joint: 1,
            elevation: { from: elevationFrom, to: elevationTo },
            collision: [],
            gauge: 1.435,
        } as TrackSegmentWithCollision,
    };
}

describe('CrossingMap', () => {
    let crossingMap: CrossingMap;

    beforeEach(() => {
        crossingMap = new CrossingMap();
    });

    it('should add bidirectional crossing entries', () => {
        crossingMap.addCrossing(1, 0.3, 2, 0.7);

        const crossingsFor1 = crossingMap.getCrossings(1);
        expect(crossingsFor1).toHaveLength(1);
        expect(crossingsFor1[0]).toEqual({
            crossingSegment: 2,
            selfT: 0.3,
            otherT: 0.7,
        });

        const crossingsFor2 = crossingMap.getCrossings(2);
        expect(crossingsFor2).toHaveLength(1);
        expect(crossingsFor2[0]).toEqual({
            crossingSegment: 1,
            selfT: 0.7,
            otherT: 0.3,
        });
    });

    it('should remove all entries for a segment', () => {
        crossingMap.addCrossing(1, 0.3, 2, 0.7);
        crossingMap.addCrossing(1, 0.6, 3, 0.4);

        crossingMap.removeSegment(1);

        expect(crossingMap.getCrossings(1)).toHaveLength(0);
        // Partner entries should also be cleaned up
        expect(crossingMap.getCrossings(2)).toHaveLength(0);
        expect(crossingMap.getCrossings(3)).toHaveLength(0);
    });

    it('should only remove entries for the deleted segment, not unrelated ones', () => {
        crossingMap.addCrossing(1, 0.3, 2, 0.7);
        crossingMap.addCrossing(2, 0.5, 3, 0.5);

        crossingMap.removeSegment(1);

        expect(crossingMap.getCrossings(1)).toHaveLength(0);
        expect(crossingMap.getCrossings(2)).toHaveLength(1); // still has crossing with 3
        expect(crossingMap.getCrossings(3)).toHaveLength(1);
    });

    it('should return empty array for unknown segment', () => {
        expect(crossingMap.getCrossings(999)).toHaveLength(0);
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: FAIL — `CrossingMap` doesn't exist

- [ ] **Step 3: Implement CrossingMap**

Create `src/trains/collision-guard.ts`:

```typescript
/**
 * Train collision prevention system.
 *
 * @module trains/collision-guard
 */

import type { OccupancyRegistry } from './occupancy-registry';
import type { PlacedTrainEntry } from './train-manager';
import type { TrackGraph } from './tracks/track';
import type { TrackcurveManager } from './tracks/trackcurve-manager';
import type { TrackSegmentWithCollision } from './tracks/types';
import { intersectionSatisfiesVerticalClearance } from './tracks/utils';
import { DEFAULT_THROTTLE_STEPS } from './formation';
import type { SubscriptionOptions } from '@ue-too/board';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Distance (world units) at which Tier 2 hard stop activates. */
const CRITICAL_DISTANCE = 5;

/** Safety multiplier applied to ideal braking distance for Tier 1. */
const BRAKING_SAFETY_MARGIN = 1.8;

/**
 * Time window (seconds) for crossing collision detection.
 * If both trains would arrive at a crossing within this window of each other,
 * it's a collision risk.
 */
const CROSSING_TIME_WINDOW = 3;

// ---------------------------------------------------------------------------
// CrossingMap
// ---------------------------------------------------------------------------

export type CrossingEntry = {
    crossingSegment: number;
    selfT: number;
    otherT: number;
};

/**
 * Static map of same-elevation track crossings.
 * Built reactively from TrackcurveManager observables.
 *
 * @group Train System
 */
export class CrossingMap {
    private _map: Map<number, CrossingEntry[]> = new Map();

    addCrossing(
        segmentA: number,
        tA: number,
        segmentB: number,
        tB: number,
    ): void {
        this._getOrCreate(segmentA).push({
            crossingSegment: segmentB,
            selfT: tA,
            otherT: tB,
        });
        this._getOrCreate(segmentB).push({
            crossingSegment: segmentA,
            selfT: tB,
            otherT: tA,
        });
    }

    removeSegment(segmentNumber: number): void {
        const entries = this._map.get(segmentNumber);
        if (!entries) return;

        // Clean up partner references
        for (const entry of entries) {
            const partnerEntries = this._map.get(entry.crossingSegment);
            if (partnerEntries) {
                const filtered = partnerEntries.filter(
                    (e) => e.crossingSegment !== segmentNumber
                );
                if (filtered.length === 0) {
                    this._map.delete(entry.crossingSegment);
                } else {
                    this._map.set(entry.crossingSegment, filtered);
                }
            }
        }

        this._map.delete(segmentNumber);
    }

    getCrossings(segmentNumber: number): readonly CrossingEntry[] {
        return this._map.get(segmentNumber) ?? [];
    }

    private _getOrCreate(segmentNumber: number): CrossingEntry[] {
        let entries = this._map.get(segmentNumber);
        if (!entries) {
            entries = [];
            this._map.set(segmentNumber, entries);
        }
        return entries;
    }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add apps/banana/src/trains/collision-guard.ts apps/banana/test/collision-guard.test.ts
git commit -m "feat(banana): add CrossingMap for same-elevation track crossing tracking"
```

---

### Task 3: CollisionGuard — same-track collision detection

**Files:**
- Modify: `src/trains/collision-guard.ts`
- Modify: `test/collision-guard.test.ts`

- [ ] **Step 1: Write failing tests for same-track collision detection**

Add to `test/collision-guard.test.ts`:

```typescript
import { CollisionGuard, CrossingMap } from '../src/trains/collision-guard';
import { OccupancyRegistry } from '../src/trains/occupancy-registry';
import type { PlacedTrainEntry } from '../src/trains/train-manager';
import type { Train, TrainPosition } from '../src/trains/formation';

function makePosition(
    x: number,
    y: number,
    segment: number,
    tValue: number,
    direction: 'tangent' | 'reverseTangent' = 'tangent',
): TrainPosition {
    return { trackSegment: segment, tValue, direction, point: { x, y } };
}

/**
 * Mock train with controllable position, speed, and lock state.
 */
function mockTrain(opts: {
    headPosition: TrainPosition | null;
    bogiePositions: TrainPosition[] | null;
    speed?: number;
    occupiedSegments?: { trackNumber: number; inTrackDirection: 'tangent' | 'reverseTangent' }[];
    occupiedJoints?: { jointNumber: number; direction: 'tangent' | 'reverseTangent' }[];
}): Train {
    let throttle = 'N';
    let locked = false;
    let speed = opts.speed ?? 0;
    return {
        position: opts.headPosition,
        getBogiePositions: () => opts.bogiePositions,
        get speed() { return speed; },
        get throttleStep() { return throttle; },
        get collisionLocked() { return locked; },
        occupiedTrackSegments: opts.occupiedSegments ?? [],
        occupiedJointNumbers: opts.occupiedJoints ?? [],
        setThrottleStep(step: string) {
            if (!locked) throttle = step;
        },
        emergencyStop() {
            speed = 0;
            throttle = 'er';
            locked = true;
        },
        clearCollisionLock() {
            locked = false;
        },
        formation: {
            headCouplerLength: 0,
            tailCouplerLength: 0,
        },
    } as unknown as Train;
}

function entry(id: number, train: Train): PlacedTrainEntry {
    return { id, train };
}

/**
 * Minimal mock TrackGraph that returns a segment with a linear curve
 * of the given full length.
 */
function makeTrackGraph(segmentLength: number = 100) {
    return {
        getTrackSegmentWithJoints: (segNum: number) => ({
            curve: {
                lengthAtT: (t: number) => t * segmentLength,
                fullLength: segmentLength,
            },
            t0Joint: 0,
            t1Joint: 1,
            elevation: { from: 0, to: 0 },
        }),
        getJoint: () => null,
    } as any;
}

describe('CollisionGuard — same-track detection', () => {
    let guard: CollisionGuard;
    let registry: OccupancyRegistry;
    let crossingMap: CrossingMap;

    beforeEach(() => {
        crossingMap = new CrossingMap();
        guard = new CollisionGuard(makeTrackGraph(), crossingMap);
        registry = new OccupancyRegistry();
    });

    it('should trigger Tier 2 hard stop when trains are within critical distance', () => {
        // Two trains on same segment, close together, approaching each other
        const t1 = mockTrain({
            headPosition: makePosition(48, 0, 1, 0.48, 'tangent'),
            bogiePositions: [makePosition(48, 0, 1, 0.48)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });
        const t2 = mockTrain({
            headPosition: makePosition(52, 0, 1, 0.52, 'reverseTangent'),
            bogiePositions: [makePosition(52, 0, 1, 0.52)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'reverseTangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        // Distance = |0.52 - 0.48| * 100 = 4 < CRITICAL_DISTANCE (5)
        expect(t1.collisionLocked).toBe(true);
        expect(t2.collisionLocked).toBe(true);
        expect(t1.speed).toBe(0);
        expect(t2.speed).toBe(0);
    });

    it('should trigger Tier 1 emergency brake when within braking distance', () => {
        // Closing speed = 10, braking decel = 1.3
        // Braking distance = v²/(2*a) = 100/2.6 ≈ 38.5, with 1.8x margin ≈ 69
        const t1 = mockTrain({
            headPosition: makePosition(20, 0, 1, 0.2, 'tangent'),
            bogiePositions: [makePosition(20, 0, 1, 0.2)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });
        const t2 = mockTrain({
            headPosition: makePosition(70, 0, 1, 0.7, 'reverseTangent'),
            bogiePositions: [makePosition(70, 0, 1, 0.7)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'reverseTangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        // Distance = |0.7 - 0.2| * 100 = 50, within braking zone but not critical
        expect(t1.throttleStep).toBe('er');
        expect(t2.throttleStep).toBe('er');
        expect(t1.collisionLocked).toBe(false);
        expect(t2.collisionLocked).toBe(false);
    });

    it('should not trigger for trains moving apart', () => {
        const t1 = mockTrain({
            headPosition: makePosition(48, 0, 1, 0.48, 'reverseTangent'),
            bogiePositions: [makePosition(48, 0, 1, 0.48)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'reverseTangent' }],
        });
        const t2 = mockTrain({
            headPosition: makePosition(52, 0, 1, 0.52, 'tangent'),
            bogiePositions: [makePosition(52, 0, 1, 0.52)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        expect(t1.collisionLocked).toBe(false);
        expect(t2.collisionLocked).toBe(false);
        expect(t1.throttleStep).toBe('N');
    });

    it('should not trigger for trains on different segments with no crossing', () => {
        const t1 = mockTrain({
            headPosition: makePosition(0, 0, 1, 0.5, 'tangent'),
            bogiePositions: [makePosition(0, 0, 1, 0.5)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });
        const t2 = mockTrain({
            headPosition: makePosition(100, 100, 2, 0.5, 'tangent'),
            bogiePositions: [makePosition(100, 100, 2, 0.5)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 2, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        expect(t1.collisionLocked).toBe(false);
        expect(t2.collisionLocked).toBe(false);
    });

    it('should clear collision lock when trains are no longer in danger', () => {
        const t1 = mockTrain({
            headPosition: makePosition(48, 0, 1, 0.48, 'tangent'),
            bogiePositions: [makePosition(48, 0, 1, 0.48)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });
        const t2 = mockTrain({
            headPosition: makePosition(52, 0, 1, 0.52, 'reverseTangent'),
            bogiePositions: [makePosition(52, 0, 1, 0.52)],
            speed: 5,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'reverseTangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);
        expect(t1.collisionLocked).toBe(true);

        // Now only one train remains (other removed)
        const entries2 = [entry(1, t1)];
        registry.updateFromTrains(entries2);
        guard.update(entries2, registry);
        expect(t1.collisionLocked).toBe(false);
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: FAIL — `CollisionGuard` class doesn't have `update()` method

- [ ] **Step 3: Implement CollisionGuard.update() with same-track detection**

Add to `src/trains/collision-guard.ts` after the `CrossingMap` class:

```typescript
// ---------------------------------------------------------------------------
// CollisionGuard
// ---------------------------------------------------------------------------

/** Pair key for dedup: "smallerId:largerId" */
function pairKey(a: number, b: number): string {
    return a < b ? `${a}:${b}` : `${b}:${a}`;
}

/**
 * Per-frame collision prevention system.
 *
 * Detects imminent train-train collisions on same-track segments and at
 * same-elevation track crossings, forcing emergency braking or hard stops.
 *
 * @group Train System
 */
export class CollisionGuard {
    private _trackGraph: TrackGraph;
    private _crossingMap: CrossingMap;
    /** Train IDs that are currently collision-locked by this guard. */
    private _lockedTrains: Set<number> = new Set();

    constructor(trackGraph: TrackGraph, crossingMap: CrossingMap) {
        this._trackGraph = trackGraph;
        this._crossingMap = crossingMap;
    }

    /**
     * Run collision checks and apply responses.
     * Call once per frame after OccupancyRegistry has been rebuilt.
     */
    update(
        placedTrains: readonly PlacedTrainEntry[],
        occupancyRegistry: OccupancyRegistry,
    ): void {
        const trainMap = new Map<number, PlacedTrainEntry>();
        for (const e of placedTrains) trainMap.set(e.id, e);

        // Track which trains are in danger this frame
        const inDangerThisFrame = new Set<number>();

        // --- Same-track collision check ---
        const colocatedPairs = occupancyRegistry.getColocatedPairs();
        for (const pairStr of colocatedPairs) {
            const colonIdx = pairStr.indexOf(':');
            const idA = parseInt(pairStr.slice(0, colonIdx), 10);
            const idB = parseInt(pairStr.slice(colonIdx + 1), 10);

            const entryA = trainMap.get(idA);
            const entryB = trainMap.get(idB);
            if (!entryA || !entryB) continue;

            const trainA = entryA.train;
            const trainB = entryB.train;

            const posA = trainA.position;
            const posB = trainB.position;
            if (!posA || !posB) continue;

            // Only check trains on the same segment for now
            if (posA.trackSegment !== posB.trackSegment) continue;

            // Both trains must be moving (at least one with speed > 0)
            if (trainA.speed === 0 && trainB.speed === 0) continue;

            // Compute arc-length distance between heads
            const seg = this._trackGraph.getTrackSegmentWithJoints(
                posA.trackSegment
            );
            if (!seg) continue;

            const lenA = seg.curve.lengthAtT(posA.tValue);
            const lenB = seg.curve.lengthAtT(posB.tValue);
            const distance = Math.abs(lenA - lenB);

            // Check if trains are approaching each other
            if (!this._areApproaching(posA, posB, lenA, lenB)) continue;

            // Compute closing speed
            const closingSpeed = trainA.speed + trainB.speed;

            // Tier 2: critical distance — hard stop
            if (distance <= CRITICAL_DISTANCE) {
                trainA.emergencyStop();
                trainB.emergencyStop();
                inDangerThisFrame.add(idA);
                inDangerThisFrame.add(idB);
                this._lockedTrains.add(idA);
                this._lockedTrains.add(idB);
                continue;
            }

            // Tier 1: braking distance — emergency brake
            const brakingDist = this._computeBrakingDistance(closingSpeed);
            if (distance <= brakingDist * BRAKING_SAFETY_MARGIN) {
                trainA.setThrottleStep('er');
                trainB.setThrottleStep('er');
                inDangerThisFrame.add(idA);
                inDangerThisFrame.add(idB);
            }
        }

        // --- Crossing collision check ---
        this._checkCrossings(placedTrains, occupancyRegistry, trainMap, inDangerThisFrame);

        // --- Clear locks for trains no longer in danger ---
        for (const trainId of this._lockedTrains) {
            if (!inDangerThisFrame.has(trainId)) {
                const e = trainMap.get(trainId);
                if (e) e.train.clearCollisionLock();
                this._lockedTrains.delete(trainId);
            }
        }
    }

    /**
     * Check if two trains on the same segment are approaching each other.
     */
    private _areApproaching(
        posA: { tValue: number; direction: 'tangent' | 'reverseTangent' },
        posB: { tValue: number; direction: 'tangent' | 'reverseTangent' },
        lenA: number,
        lenB: number,
    ): boolean {
        // Train A moving in tangent direction increases t/length
        // Train A moving in reverseTangent direction decreases t/length
        const aMovingTowardHigherT = posA.direction === 'tangent';
        const bMovingTowardHigherT = posB.direction === 'tangent';

        if (lenA < lenB) {
            // A is behind B — approaching if A moves toward higher t and B moves toward lower t (or is stationary)
            return aMovingTowardHigherT && !bMovingTowardHigherT;
        } else {
            // B is behind A
            return bMovingTowardHigherT && !aMovingTowardHigherT;
        }
    }

    /**
     * Compute ideal braking distance from closing speed.
     * Uses emergency brake deceleration (er = -1.3 m/s²).
     */
    private _computeBrakingDistance(closingSpeed: number): number {
        const brakeAccel = Math.abs(DEFAULT_THROTTLE_STEPS['er']);
        if (brakeAccel === 0) return Infinity;
        return (closingSpeed * closingSpeed) / (2 * brakeAccel);
    }

    /**
     * Placeholder for crossing collision check — implemented in Task 4.
     */
    private _checkCrossings(
        _placedTrains: readonly PlacedTrainEntry[],
        _occupancyRegistry: OccupancyRegistry,
        _trainMap: Map<number, PlacedTrainEntry>,
        _inDangerThisFrame: Set<number>,
    ): void {
        // Implemented in Task 4
    }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add apps/banana/src/trains/collision-guard.ts apps/banana/test/collision-guard.test.ts
git commit -m "feat(banana): add CollisionGuard with same-track collision detection"
```

---

### Task 4: CollisionGuard — crossing collision detection

**Files:**
- Modify: `src/trains/collision-guard.ts`
- Modify: `test/collision-guard.test.ts`

- [ ] **Step 1: Write failing tests for crossing collision detection**

Add to `test/collision-guard.test.ts`:

```typescript
describe('CollisionGuard — crossing detection', () => {
    let guard: CollisionGuard;
    let registry: OccupancyRegistry;
    let crossingMap: CrossingMap;

    beforeEach(() => {
        crossingMap = new CrossingMap();
        guard = new CollisionGuard(makeTrackGraph(), crossingMap);
        registry = new OccupancyRegistry();
    });

    it('should trigger when two trains approach a crossing simultaneously', () => {
        // Segment 1 and 2 cross at selfT=0.5, otherT=0.5
        crossingMap.addCrossing(1, 0.5, 2, 0.5);

        // Train 1 on segment 1 at t=0.3, moving tangent (toward crossing at t=0.5)
        // Speed = 10 → distance to crossing = 20 → time = 2s
        const t1 = mockTrain({
            headPosition: makePosition(30, 0, 1, 0.3, 'tangent'),
            bogiePositions: [makePosition(30, 0, 1, 0.3)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });

        // Train 2 on segment 2 at t=0.3, moving tangent (toward crossing at t=0.5)
        // Speed = 10 → distance to crossing = 20 → time = 2s
        const t2 = mockTrain({
            headPosition: makePosition(0, 30, 2, 0.3, 'tangent'),
            bogiePositions: [makePosition(0, 30, 2, 0.3)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 2, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        // Both arrive at crossing at ~2s — within CROSSING_TIME_WINDOW (3s)
        expect(t1.throttleStep).toBe('er');
        expect(t2.throttleStep).toBe('er');
    });

    it('should not trigger when trains approach crossing at very different times', () => {
        crossingMap.addCrossing(1, 0.5, 2, 0.5);

        // Train 1 close to crossing — time ≈ 0.5s
        const t1 = mockTrain({
            headPosition: makePosition(45, 0, 1, 0.45, 'tangent'),
            bogiePositions: [makePosition(45, 0, 1, 0.45)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });

        // Train 2 far from crossing — time ≈ 4.5s
        const t2 = mockTrain({
            headPosition: makePosition(0, 5, 2, 0.05, 'tangent'),
            bogiePositions: [makePosition(0, 5, 2, 0.05)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 2, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        // Time difference ≈ 4s, beyond CROSSING_TIME_WINDOW
        expect(t1.throttleStep).toBe('N');
        expect(t2.throttleStep).toBe('N');
    });

    it('should not trigger when train is moving away from crossing', () => {
        crossingMap.addCrossing(1, 0.5, 2, 0.5);

        // Train 1 past the crossing, moving away
        const t1 = mockTrain({
            headPosition: makePosition(60, 0, 1, 0.6, 'tangent'),
            bogiePositions: [makePosition(60, 0, 1, 0.6)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });

        const t2 = mockTrain({
            headPosition: makePosition(0, 30, 2, 0.3, 'tangent'),
            bogiePositions: [makePosition(0, 30, 2, 0.3)],
            speed: 10,
            occupiedSegments: [{ trackNumber: 2, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        expect(t1.throttleStep).toBe('N');
        expect(t2.throttleStep).toBe('N');
    });

    it('should trigger Tier 2 when train is at crossing and other is within critical distance', () => {
        crossingMap.addCrossing(1, 0.5, 2, 0.5);

        // Train 1 right at the crossing
        const t1 = mockTrain({
            headPosition: makePosition(50, 0, 1, 0.5, 'tangent'),
            bogiePositions: [makePosition(50, 0, 1, 0.5)],
            speed: 2,
            occupiedSegments: [{ trackNumber: 1, inTrackDirection: 'tangent' }],
        });

        // Train 2 very close to crossing on its segment
        const t2 = mockTrain({
            headPosition: makePosition(0, 48, 2, 0.48, 'tangent'),
            bogiePositions: [makePosition(0, 48, 2, 0.48)],
            speed: 2,
            occupiedSegments: [{ trackNumber: 2, inTrackDirection: 'tangent' }],
        });

        const entries = [entry(1, t1), entry(2, t2)];
        registry.updateFromTrains(entries);
        guard.update(entries, registry);

        // Train 2 is 2 units from crossing < CRITICAL_DISTANCE, and train 1 is at crossing
        expect(t1.collisionLocked).toBe(true);
        expect(t2.collisionLocked).toBe(true);
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: FAIL — `_checkCrossings` is a placeholder

- [ ] **Step 3: Implement crossing collision detection**

Replace the `_checkCrossings` placeholder in `src/trains/collision-guard.ts`:

```typescript
/**
 * Check for collisions at track crossings.
 * For each occupied segment, look up crossing partners in the crossing map.
 * If the partner is also occupied, compute time-to-crossing for both trains.
 */
private _checkCrossings(
    placedTrains: readonly PlacedTrainEntry[],
    occupancyRegistry: OccupancyRegistry,
    trainMap: Map<number, PlacedTrainEntry>,
    inDangerThisFrame: Set<number>,
): void {
    // Build segment → train entries for occupied segments
    const segmentToTrains = new Map<number, { id: number; train: PlacedTrainEntry['train'] }[]>();
    for (const { id, train } of placedTrains) {
        const pos = train.position;
        if (!pos) continue;
        const segNum = pos.trackSegment;
        let list = segmentToTrains.get(segNum);
        if (!list) {
            list = [];
            segmentToTrains.set(segNum, list);
        }
        list.push({ id, train });
    }

    // Deduplicate crossing pair checks
    const checkedPairs = new Set<string>();

    for (const [segNum, trainsOnSeg] of segmentToTrains) {
        const crossings = this._crossingMap.getCrossings(segNum);
        if (crossings.length === 0) continue;

        for (const crossing of crossings) {
            const partnerTrains = segmentToTrains.get(crossing.crossingSegment);
            if (!partnerTrains || partnerTrains.length === 0) continue;

            for (const trainOnSeg of trainsOnSeg) {
                for (const trainOnPartner of partnerTrains) {
                    const pk = pairKey(trainOnSeg.id, trainOnPartner.id);
                    if (checkedPairs.has(pk)) continue;
                    checkedPairs.add(pk);

                    this._checkCrossingPair(
                        trainOnSeg.id,
                        trainOnSeg.train,
                        segNum,
                        crossing.selfT,
                        trainOnPartner.id,
                        trainOnPartner.train,
                        crossing.crossingSegment,
                        crossing.otherT,
                        inDangerThisFrame,
                    );
                }
            }
        }
    }
}

/**
 * Check a single pair of trains at a crossing point.
 */
private _checkCrossingPair(
    idA: number,
    trainA: PlacedTrainEntry['train'],
    segA: number,
    crossingTA: number,
    idB: number,
    trainB: PlacedTrainEntry['train'],
    segB: number,
    crossingTB: number,
    inDangerThisFrame: Set<number>,
): void {
    const posA = trainA.position;
    const posB = trainB.position;
    if (!posA || !posB) return;
    if (posA.trackSegment !== segA || posB.trackSegment !== segB) return;

    const segDataA = this._trackGraph.getTrackSegmentWithJoints(segA);
    const segDataB = this._trackGraph.getTrackSegmentWithJoints(segB);
    if (!segDataA || !segDataB) return;

    // Compute distance to crossing for each train
    const distA = this._distanceToCrossing(posA, crossingTA, segDataA);
    const distB = this._distanceToCrossing(posB, crossingTB, segDataB);

    // If either train is moving away from the crossing, skip
    if (distA === null || distB === null) return;

    // Tier 2: both trains very close to crossing point
    if (distA <= CRITICAL_DISTANCE && distB <= CRITICAL_DISTANCE) {
        trainA.emergencyStop();
        trainB.emergencyStop();
        inDangerThisFrame.add(idA);
        inDangerThisFrame.add(idB);
        this._lockedTrains.add(idA);
        this._lockedTrains.add(idB);
        return;
    }

    // Tier 1: time-based check
    if (trainA.speed === 0 && trainB.speed === 0) return;

    const timeA = trainA.speed > 0 ? distA / trainA.speed : Infinity;
    const timeB = trainB.speed > 0 ? distB / trainB.speed : Infinity;

    if (
        Math.abs(timeA - timeB) < CROSSING_TIME_WINDOW &&
        timeA < Infinity &&
        timeB < Infinity
    ) {
        trainA.setThrottleStep('er');
        trainB.setThrottleStep('er');
        inDangerThisFrame.add(idA);
        inDangerThisFrame.add(idB);
    }
}

/**
 * Compute arc-length distance from a train's position to a crossing t-value
 * on the same segment. Returns null if the train is moving away from the crossing.
 */
private _distanceToCrossing(
    pos: { tValue: number; direction: 'tangent' | 'reverseTangent' },
    crossingT: number,
    segData: { curve: { lengthAtT(t: number): number } },
): number | null {
    const posLen = segData.curve.lengthAtT(pos.tValue);
    const crossingLen = segData.curve.lengthAtT(crossingT);
    const diff = crossingLen - posLen;

    // Positive diff means crossing is ahead in tangent direction
    if (pos.direction === 'tangent') {
        return diff > 0 ? diff : null; // null = moving away
    } else {
        return diff < 0 ? -diff : null;
    }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bunx nx test banana -- --testPathPattern collision-guard`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add apps/banana/src/trains/collision-guard.ts apps/banana/test/collision-guard.test.ts
git commit -m "feat(banana): add crossing collision detection to CollisionGuard"
```

---

### Task 5: Wire CollisionGuard into the frame loop

**Files:**
- Modify: `src/trains/train-render-system.ts:412-433`
- Modify: `src/utils/init-app.ts:750-860`

- [ ] **Step 1: Add CollisionGuard to TrainRenderSystem**

In `src/trains/train-render-system.ts`, add import at the top:

```typescript
import { CollisionGuard } from './collision-guard';
```

Add a private field and setter to the class (near the other private fields):

```typescript
private _collisionGuard: CollisionGuard | null = null;
```

Add a setter method:

```typescript
set collisionGuard(guard: CollisionGuard) {
    this._collisionGuard = guard;
}
```

- [ ] **Step 2: Wire update call into frame loop**

In the `update()` method of `TrainRenderSystem` (around line 421), add the collision guard update after the proximity detector:

```typescript
update(deltaTime: number): void {
    const placed = this._getPlacedTrains();

    for (const { train } of placed) {
      train.update(deltaTime);
    }
    this._getPreviewTrain().update(deltaTime);

    this._occupancyRegistry.updateFromTrains(placed);
    this._proximityDetector.update(placed, this._occupancyRegistry);
    this._collisionGuard?.update(placed, this._occupancyRegistry);

    this._updatePreviewBogies();
    // ... rest unchanged
}
```

- [ ] **Step 3: Instantiate CollisionGuard in init-app.ts**

In `src/utils/init-app.ts`, add import:

```typescript
import { CollisionGuard, CrossingMap } from '@/trains/collision-guard';
import { intersectionSatisfiesVerticalClearance } from '@/trains/tracks/utils';
```

After the block signal system setup (around line 798), add:

```typescript
// Collision prevention system
const crossingMap = new CrossingMap();
const collisionGuard = new CollisionGuard(trackGraph, crossingMap);
trainRenderSystem.collisionGuard = collisionGuard;

// Build crossing map from existing segments and subscribe to changes
const trackCurveManager = curveEngine.trackCurveManager;

function addSegmentCrossings(curveNumber: number, segment: TrackSegmentWithCollision) {
    for (const col of segment.collision) {
        // Find which segment the other curve belongs to
        for (const otherNum of trackCurveManager.livingEntities) {
            if (otherNum === curveNumber) continue;
            const otherSeg = trackCurveManager.getTrackSegmentWithJoints(otherNum);
            if (!otherSeg || otherSeg.curve !== col.anotherCurve.curve) continue;

            // Filter to same-elevation crossings
            if (intersectionSatisfiesVerticalClearance(
                col.selfT,
                segment,
                col.anotherCurve.tVal,
                otherSeg,
            )) continue; // has vertical clearance — skip

            crossingMap.addCrossing(curveNumber, col.selfT, otherNum, col.anotherCurve.tVal);
            break;
        }
    }
}

// Populate from existing segments
for (const segNum of trackCurveManager.livingEntities) {
    const seg = trackCurveManager.getTrackSegmentWithJoints(segNum);
    if (seg) addSegmentCrossings(segNum, seg);
}

// Subscribe to track mutations
trackCurveManager.onAddTrackSegment((curveNumber, segment) => {
    addSegmentCrossings(curveNumber, segment);
});

trackCurveManager.onRemoveTrackSegment((curveNumber) => {
    crossingMap.removeSegment(curveNumber);
});
```

- [ ] **Step 4: Verify the app builds**

Run: `bunx nx build banana`
Expected: BUILD SUCCESS

- [ ] **Step 5: Run all banana tests**

Run: `bunx nx test banana`
Expected: ALL PASS

- [ ] **Step 6: Commit**

```bash
git add apps/banana/src/trains/train-render-system.ts apps/banana/src/utils/init-app.ts
git commit -m "feat(banana): wire CollisionGuard into frame loop and track mutation observables"
```

---

### Task 6: Manual testing and verification

**Files:** None (testing only)

- [ ] **Step 1: Start dev server**

Run: `bun run dev:banana`

- [ ] **Step 2: Test same-track collision**

1. Place two trains on the same track segment facing each other
2. Set both to full power (p5) via the train panel
3. Verify they slow down and stop before colliding
4. Verify they don't pass through each other

- [ ] **Step 3: Test crossing collision**

1. Create two tracks that cross at the same elevation
2. Place a train on each track approaching the crossing
3. Set both to full power
4. Verify at least one train brakes before the crossing

- [ ] **Step 4: Test auto-driven trains**

1. Set up two auto-driven trains on a collision course (e.g., on unsignalled track)
2. Verify the collision guard overrides the auto-driver's throttle

- [ ] **Step 5: Test collision lock clearing**

1. Trigger a collision stop
2. Remove one of the trains
3. Verify the other train can resume (throttle is no longer locked)

- [ ] **Step 6: Run full test suite**

Run: `bunx nx test banana`
Expected: ALL PASS

- [ ] **Step 7: Commit notes update**

Update `apps/banana/notes/train-simulation-performance.md` point 3 to reflect the new system:

```markdown
3. **Train collision prevention** — `CollisionGuard` runs per-frame after occupancy rebuild. Uses `OccupancyRegistry` colocated pairs for same-track broad-phase and a reactive `CrossingMap` for crossing detection. Two-tier response: emergency brake at braking distance, hard stop at critical distance (~5 world units). Throttle lock prevents overrides during collision events.
```

```bash
git add apps/banana/notes/train-simulation-performance.md
git commit -m "docs(banana): update performance notes with collision guard system"
```

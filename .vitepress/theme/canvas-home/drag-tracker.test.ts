import { describe, expect, test } from 'bun:test'
import { DragTracker } from './drag-tracker'

describe('DragTracker', () => {
  test('a small move then up is a click', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 10, y: 10 })
    expect(tracker.move(1, { x: 13, y: 12 })).toBeNull()
    expect(tracker.dragging).toBe(false)
    expect(tracker.up(1, { x: 13, y: 12 })).toEqual({ start: { x: 10, y: 10 }, dragged: false })
    expect(tracker.active).toBe(false)
  })

  test('crossing the threshold pans from the start, then from the last point', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 0, y: 0 })
    expect(tracker.move(1, { x: 3, y: 0 })).toBeNull()
    expect(tracker.move(1, { x: 8, y: 0 })).toEqual({ x: 8, y: 0 })
    expect(tracker.dragging).toBe(true)
    expect(tracker.move(1, { x: 10, y: 1 })).toEqual({ x: 2, y: 1 })
    expect(tracker.up(1, { x: 10, y: 1 })).toEqual({ start: { x: 0, y: 0 }, dragged: true })
  })

  test('a second pointer cancels both', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 0, y: 0 })
    tracker.down(2, { x: 50, y: 50 })
    expect(tracker.active).toBe(false)
    expect(tracker.move(1, { x: 40, y: 0 })).toBeNull()
    expect(tracker.move(2, { x: 90, y: 50 })).toBeNull()
    expect(tracker.up(1, { x: 40, y: 0 })).toBeNull()
    expect(tracker.up(2, { x: 90, y: 50 })).toBeNull()
  })

  test('stays cancelled until every pointer is up', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 0, y: 0 })
    tracker.down(2, { x: 50, y: 50 })
    tracker.up(2, { x: 50, y: 50 })
    // The first finger is still down: it must not start panning on its own
    expect(tracker.move(1, { x: 40, y: 0 })).toBeNull()
    tracker.up(1, { x: 40, y: 0 })
    tracker.down(3, { x: 0, y: 0 })
    expect(tracker.active).toBe(true)
  })

  test('an unknown pointer is ignored', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 0, y: 0 })
    expect(tracker.move(7, { x: 40, y: 0 })).toBeNull()
    expect(tracker.up(7, { x: 40, y: 0 })).toBeNull()
    expect(tracker.active).toBe(true)
  })

  test('cancel drops the current press', () => {
    const tracker = new DragTracker()
    tracker.down(1, { x: 0, y: 0 })
    tracker.cancel()
    expect(tracker.up(1, { x: 0, y: 0 })).toBeNull()
  })
})

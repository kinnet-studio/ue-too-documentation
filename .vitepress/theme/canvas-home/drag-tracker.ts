/**
 * Tells a click from a drag for one pointer at a time.
 *
 * A press that moves less than `threshold` pixels is a click. Past that it is
 * a drag, and `move` returns how far to pan: from the start point on the move
 * that crosses the threshold (so the content catches up with the pointer),
 * then from the previous point. A second pointer cancels the press: two
 * fingers belong to the board's own pinch and two-finger pan.
 */

export interface Point {
  x: number
  y: number
}

interface Press {
  id: number
  start: Point
  last: Point
  dragging: boolean
}

export class DragTracker {
  private press: Press | null = null
  private pointersDown = new Set<number>()
  // Set by a second pointer; cleared once every pointer is up
  private cancelled = false

  constructor(private readonly threshold = 5) {}

  get active(): boolean {
    return this.press !== null
  }

  get dragging(): boolean {
    return this.press?.dragging ?? false
  }

  down(id: number, point: Point): void {
    this.pointersDown.add(id)
    if (this.pointersDown.size > 1) {
      this.press = null
      this.cancelled = true
      return
    }
    if (!this.cancelled) {
      this.press = { id, start: point, last: point, dragging: false }
    }
  }

  move(id: number, point: Point): Point | null {
    const press = this.press
    if (!press || press.id !== id) return null
    if (!press.dragging) {
      if (Math.hypot(point.x - press.start.x, point.y - press.start.y) < this.threshold) return null
      press.dragging = true
    }
    const delta = { x: point.x - press.last.x, y: point.y - press.last.y }
    press.last = point
    return delta
  }

  up(id: number, _point: Point): { start: Point; dragged: boolean } | null {
    this.pointersDown.delete(id)
    if (this.pointersDown.size === 0) this.cancelled = false
    const press = this.press
    if (!press || press.id !== id) return null
    this.press = null
    return { start: press.start, dragged: press.dragging }
  }

  /** Drops the current press without a click */
  cancel(): void {
    this.press = null
  }
}

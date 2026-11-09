/**
 * The "Back to start" control on the home canvas: when to offer it, and where
 * it sits on screen. canvas-home.ts draws it and flies the camera.
 */

export interface View {
  position: { x: number; y: number }
  zoomLevel: number
}

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

// How far the camera has to pan on screen, in CSS pixels, to count as moved
const AWAY_PX = 2
// How much the zoom has to change, as a log ratio (about 1%), to count as moved
const AWAY_ZOOM = 0.01

export const PILL_HEIGHT = 30
// Padding around the label, both sides together
const PILL_PADDING = 28
// Gap between the pill and what's below it
const PILL_GAP = 10
// Space kept free at the screen's left and right edges
const GUTTER = 16

/** Whether the camera has moved far enough from the start view to offer the way back. */
export function isAway(camera: View, home: View): boolean {
  const dx = camera.position.x - home.position.x
  const dy = camera.position.y - home.position.y
  return Math.hypot(dx, dy) * camera.zoomLevel > AWAY_PX || Math.abs(Math.log(camera.zoomLevel / home.zoomLevel)) > AWAY_ZOOM
}

/** Where the pill sits, in window coordinates: centred, just above `bottom` (the top of the hint). */
export function backPillRect(labelWidth: number, windowWidth: number, bottom: number): Rect {
  const width = Math.min(labelWidth + PILL_PADDING, windowWidth - GUTTER * 2)
  return {
    x: (windowWidth - width) / 2,
    y: bottom - PILL_GAP - PILL_HEIGHT,
    width,
    height: PILL_HEIGHT,
  }
}

export function inRect(rect: Rect, point: { x: number; y: number }): boolean {
  return point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y <= rect.y + rect.height
}

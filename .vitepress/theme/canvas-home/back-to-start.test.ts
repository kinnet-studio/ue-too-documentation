import { describe, expect, test } from 'bun:test'
import { backPillRect, inRect, isAway } from './back-to-start'

const home = { position: { x: 0, y: -32 }, zoomLevel: 1 }

describe('isAway', () => {
  test('is false at the start view', () => {
    expect(isAway(home, home)).toBe(false)
  })

  test('ignores sub-pixel drift', () => {
    expect(isAway({ position: { x: 0.5, y: -32 }, zoomLevel: 1 }, home)).toBe(false)
  })

  test('is true once the camera has panned a few pixels on screen', () => {
    expect(isAway({ position: { x: 10, y: -32 }, zoomLevel: 1 }, home)).toBe(true)
  })

  test('measures the pan on screen, so the same world distance counts more zoomed in', () => {
    const nudge = { x: 0.8, y: -32 }
    expect(isAway({ position: nudge, zoomLevel: 1 }, home)).toBe(false)
    expect(isAway({ position: nudge, zoomLevel: 4 }, { ...home, zoomLevel: 4 })).toBe(true)
  })

  test('is true after zooming in or out', () => {
    expect(isAway({ ...home, zoomLevel: 1.1 }, home)).toBe(true)
    expect(isAway({ ...home, zoomLevel: 0.9 }, home)).toBe(true)
  })

  test('ignores a rounding-sized zoom change', () => {
    expect(isAway({ ...home, zoomLevel: 1.001 }, home)).toBe(false)
  })
})

describe('backPillRect', () => {
  test('is centred and sits 10px above the given bottom edge', () => {
    const rect = backPillRect(100, 1400, 950)
    expect(rect).toEqual({ x: 636, y: 910, width: 128, height: 30 })
  })

  test('leaves a 16px gutter on narrow screens', () => {
    const rect = backPillRect(500, 390, 800)
    expect(rect.x).toBe(16)
    expect(rect.width).toBe(358)
  })
})

describe('inRect', () => {
  const rect = { x: 10, y: 20, width: 100, height: 30 }

  test('includes the edges', () => {
    expect(inRect(rect, { x: 10, y: 20 })).toBe(true)
    expect(inRect(rect, { x: 110, y: 50 })).toBe(true)
  })

  test('excludes points outside', () => {
    expect(inRect(rect, { x: 9, y: 30 })).toBe(false)
    expect(inRect(rect, { x: 50, y: 51 })).toBe(false)
  })
})

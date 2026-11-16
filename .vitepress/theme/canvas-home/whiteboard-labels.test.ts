import { describe, expect, test } from 'bun:test'
import { COLOR_NAMES, TOOL_NAMES } from '@ue-too/board/whiteboard'
import { whiteboardLabels } from './whiteboard-labels'

describe('whiteboardLabels', () => {
  test('picks the locale, with English as the fallback', () => {
    expect(whiteboardLabels('ja-JP').tools.note).toBe('付箋')
    expect(whiteboardLabels('zh-TW').tools.note).toBe('便利貼')
    expect(whiteboardLabels('en-US').tools.note).toBe('Sticky note')
    expect(whiteboardLabels('fr').tools.note).toBe('Sticky note')
  })

  test('every locale names every tool, colour, size and fill', () => {
    for (const lang of ['en-US', 'ja', 'zh-TW']) {
      const labels = whiteboardLabels(lang)
      for (const tool of TOOL_NAMES) expect(labels.tools[tool]).toBeTruthy()
      for (const color of COLOR_NAMES) expect(labels.colors[color]).toBeTruthy()
      for (const size of ['s', 'm', 'l'] as const) expect(labels.sizes[size]).toBeTruthy()
      for (const fill of ['none', 'hachure', 'solid'] as const) expect(labels.fills[fill]).toBeTruthy()
      for (const key of ['toolbar', 'style', 'undo', 'redo', 'clear', 'shapes', 'more'] as const) {
        expect(labels[key]).toBeTruthy()
      }
    }
  })
})

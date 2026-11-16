import { describe, expect, test } from 'bun:test'
import { WhiteboardDocument, type Shape } from '@ue-too/board/whiteboard'
import { STORAGE_KEY, browserStorage, loadBoard, saveBoard } from './whiteboard-storage'

function memoryStorage(): Storage {
  const items = new Map<string, string>()
  return {
    get length() {
      return items.size
    },
    clear: () => items.clear(),
    getItem: key => items.get(key) ?? null,
    key: index => [...items.keys()][index] ?? null,
    removeItem: key => void items.delete(key),
    setItem: (key, value) => void items.set(key, value),
  }
}

const rect = (id: string): Shape => ({
  id,
  type: 'rect',
  x: 0,
  y: 0,
  w: 10,
  h: 10,
  rotation: 0,
  index: 'V',
  seed: 1,
  style: { color: 'ink', size: 'm', fill: 'none' },
})

const quiet = () => {}
const tick = (ms = 10) => new Promise(resolve => setTimeout(resolve, ms))

describe('whiteboard storage', () => {
  test('round-trips a drawing', () => {
    const storage = memoryStorage()
    const doc = new WhiteboardDocument([rect('a')])
    const saver = saveBoard(doc, storage, { warn: quiet })
    doc.put(rect('b'))
    saver.flush()
    expect(loadBoard(storage, quiet).size).toBe(2)
    saver.dispose()
  })

  test('a bad saved value loads empty and stays until the first edit', () => {
    const storage = memoryStorage()
    storage.setItem(STORAGE_KEY, '{not json')
    const doc = loadBoard(storage, quiet)
    expect(doc.size).toBe(0)
    const saver = saveBoard(doc, storage, { warn: quiet })
    // The visitor only looks, then leaves: pagehide flushes
    saver.flush()
    expect(storage.getItem(STORAGE_KEY)).toBe('{not json')
    doc.put(rect('a'))
    saver.flush()
    expect(JSON.parse(storage.getItem(STORAGE_KEY)!).records).toHaveLength(1)
    saver.dispose()
  })

  test('a newer schema version is left alone', () => {
    const storage = memoryStorage()
    const newer = JSON.stringify({ schema: 'ue-too-whiteboard', version: 99, records: [] })
    storage.setItem(STORAGE_KEY, newer)
    const doc = loadBoard(storage, quiet)
    expect(doc.size).toBe(0)
    saveBoard(doc, storage, { warn: quiet }).flush()
    expect(storage.getItem(STORAGE_KEY)).toBe(newer)
  })

  test('storage that throws on read or write keeps the board working and warns once', () => {
    const storage = memoryStorage()
    storage.getItem = () => {
      throw new Error('SecurityError')
    }
    const warnings: string[] = []
    const doc = loadBoard(storage, message => warnings.push(message))
    expect(doc.size).toBe(0)
    storage.setItem = () => {
      throw new Error('QuotaExceededError')
    }
    const saver = saveBoard(doc, storage, { warn: message => warnings.push(message) })
    doc.put(rect('a'))
    saver.flush()
    doc.put(rect('b'))
    saver.flush()
    expect(doc.size).toBe(2)
    expect(warnings).toHaveLength(2) // one for the read, one for the writes
    saver.dispose()
  })

  test('no storage at all is fine', () => {
    expect(loadBoard(null, quiet).size).toBe(0)
    const doc = new WhiteboardDocument()
    const saver = saveBoard(doc, null, { warn: quiet })
    doc.put(rect('a'))
    saver.flush()
    saver.dispose()
  })

  test('debounces', async () => {
    const storage = memoryStorage()
    let writes = 0
    const setItem = storage.setItem
    storage.setItem = (key, value) => {
      writes++
      setItem(key, value)
    }
    const doc = new WhiteboardDocument()
    const saver = saveBoard(doc, storage, { delay: 5, warn: quiet })
    doc.put(rect('a'))
    doc.put(rect('b'))
    doc.put(rect('c'))
    await tick(30)
    expect(writes).toBe(1)
    saver.dispose()
  })

  test('browserStorage is null when touching localStorage throws', () => {
    const g = globalThis as { window?: unknown }
    const before = g.window
    g.window = {
      get localStorage() {
        throw new Error('SecurityError')
      },
    }
    try {
      expect(browserStorage()).toBeNull()
    } finally {
      g.window = before
    }
  })
})

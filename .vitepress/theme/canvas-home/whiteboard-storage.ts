/**
 * Keeps a visitor's home page drawing in their browser: one key in
 * localStorage, shared by every locale and docs version of the site.
 */
import { WhiteboardDocument } from '@ue-too/board/whiteboard'

export const STORAGE_KEY = 'ue-too:home-whiteboard'
export const SAVE_DELAY = 400

type Warn = (message: string, error?: unknown) => void

/** window.localStorage, or null where touching it throws (blocked site data) */
export function browserStorage(): Storage | null {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

/**
 * The saved drawing, or an empty one when there is none or it can't be read
 * (bad JSON, another schema, a newer version, storage that throws).
 */
export function loadBoard(storage: Storage | null, warn: Warn = console.warn): WhiteboardDocument {
  try {
    const saved = storage?.getItem(STORAGE_KEY)
    if (saved) return WhiteboardDocument.fromSnapshot(JSON.parse(saved))
  } catch (error) {
    warn('Could not read the saved drawing; starting a new one', error)
  }
  return new WhiteboardDocument()
}

export interface BoardSaver {
  /** Saves now if anything changed since the last save (call it on pagehide) */
  flush(): void
  dispose(): void
}

/**
 * Saves the drawing `delay` ms after it last changed.
 *
 * Nothing is written until the drawing changes, so a saved drawing that
 * couldn't be read survives a visit that only looks. A failing write (a full
 * quota, say) is reported once, and the board keeps working.
 */
export function saveBoard(
  doc: WhiteboardDocument,
  storage: Storage | null,
  options: { delay?: number; warn?: Warn } = {}
): BoardSaver {
  const delay = options.delay ?? SAVE_DELAY
  const warn = options.warn ?? console.warn
  let dirty = false
  let warned = false
  let timer: ReturnType<typeof setTimeout> | undefined

  const flush = () => {
    clearTimeout(timer)
    if (!dirty || !storage) return
    dirty = false
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(doc.toSnapshot()))
    } catch (error) {
      if (!warned) warn('Could not save the drawing', error)
      warned = true
    }
  }
  const stop = doc.subscribe(() => {
    dirty = true
    clearTimeout(timer)
    timer = setTimeout(flush, delay)
  })
  return {
    flush,
    dispose() {
      clearTimeout(timer)
      stop()
    },
  }
}

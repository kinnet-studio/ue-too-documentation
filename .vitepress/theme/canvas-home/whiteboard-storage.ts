/**
 * Keeps a visitor's home page drawing in their browser: one key in
 * localStorage, shared by every locale and docs version of the site.
 */
import { WhiteboardDocument, parseSnapshot, type Shape } from '@ue-too/board/whiteboard'

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
  /**
   * Brings in what was saved since this page last read or wrote the drawing
   * (another tab, or this page before the back/forward cache restored it),
   * keeping this page's own unsaved edits. Arrives as a remote change, so it
   * stays out of undo. A missing or unreadable save changes nothing.
   */
  reload(): void
  dispose(): void
}

const sameShape = (a: Shape, b: Shape) => JSON.stringify(a) === JSON.stringify(b)
const byId = (shapes: readonly Shape[]) => new Map(shapes.map(shape => [shape.id, shape]))

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
  // The saved drawing as this page last read or wrote it
  let base = byId(doc.all())

  const flush = () => {
    clearTimeout(timer)
    if (!dirty || !storage) return
    dirty = false
    const snapshot = doc.toSnapshot()
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
      base = byId(snapshot.records)
    } catch (error) {
      if (!warned) warn('Could not save the drawing', error)
      warned = true
    }
  }

  const reload = () => {
    let saved: Shape[]
    try {
      const json = storage?.getItem(STORAGE_KEY)
      if (!json) return
      saved = parseSnapshot(JSON.parse(json))
    } catch {
      return
    }
    // Apply what changed in storage since `base`; shapes nobody else touched keep this page's version
    const added: Shape[] = []
    const updated: [Shape, Shape][] = []
    const removed: Shape[] = []
    const next = byId(saved)
    for (const shape of saved) {
      const was = base.get(shape.id)
      if (was && sameShape(was, shape)) continue
      const mine = doc.get(shape.id)
      if (mine) {
        if (!sameShape(mine, shape)) updated.push([mine, shape])
      } else if (!was) {
        added.push(shape)
      }
      // A shape this page deleted since stays deleted
    }
    for (const id of base.keys()) {
      const mine = doc.get(id)
      if (!next.has(id) && mine) removed.push(mine)
    }
    base = next
    if (added.length || updated.length || removed.length) doc.applyRemote({ added, updated, removed, source: 'remote' })
  }

  const stop = doc.subscribe(change => {
    // What came from storage is already there
    if (change.source === 'remote') return
    dirty = true
    clearTimeout(timer)
    timer = setTimeout(flush, delay)
  })
  return {
    flush,
    reload,
    dispose() {
      clearTimeout(timer)
      stop()
    },
  }
}

/**
 * Reloads the drawing when another tab saves it, or when the browser restores
 * this page from its back/forward cache.
 *
 * @returns A function that stops watching
 */
export function watchSaves(saver: Pick<BoardSaver, 'reload'>, target: EventTarget = window): () => void {
  const onStorage = (event: Event) => {
    if ((event as StorageEvent).key === STORAGE_KEY) saver.reload()
  }
  const onPageShow = (event: Event) => {
    if ((event as PageTransitionEvent).persisted) saver.reload()
  }
  target.addEventListener('storage', onStorage)
  target.addEventListener('pageshow', onPageShow)
  return () => {
    target.removeEventListener('storage', onStorage)
    target.removeEventListener('pageshow', onPageShow)
  }
}

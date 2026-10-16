/**
 * The playground console's rows. An exact repeat of the last row bumps its
 * count instead of adding a row, so an error thrown every animation frame
 * stays one row; the oldest rows drop off past MAX_CONSOLE_ENTRIES.
 */

export interface ConsoleEntry {
  level: 'log' | 'warn' | 'error'
  text: string
  count: number
}

export const MAX_CONSOLE_ENTRIES = 200
export const MAX_ENTRY_LENGTH = 2000

export function addEntry(entries: readonly ConsoleEntry[], level: ConsoleEntry['level'], text: string): ConsoleEntry[] {
  const clipped = text.length > MAX_ENTRY_LENGTH ? `${text.slice(0, MAX_ENTRY_LENGTH)}…` : text
  const last = entries[entries.length - 1]
  if (last && last.level === level && last.text === clipped) {
    return [...entries.slice(0, -1), { ...last, count: last.count + 1 }]
  }
  return [...entries, { level, text: clipped, count: 1 }].slice(-MAX_CONSOLE_ENTRIES)
}

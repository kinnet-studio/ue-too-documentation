import { describe, expect, test } from 'bun:test'
import { MAX_ENTRY_LENGTH, addEntry, type ConsoleEntry } from './console-entries'

describe('addEntry', () => {
  test('adds a first entry', () => {
    expect(addEntry([], 'log', 'a')).toEqual([{ level: 'log', text: 'a', count: 1 }])
  })

  test('merges an exact repeat of the last entry', () => {
    const entries = addEntry(addEntry([], 'error', 'boom'), 'error', 'boom')
    expect(entries).toEqual([{ level: 'error', text: 'boom', count: 2 }])
  })

  test('keeps different levels apart', () => {
    expect(addEntry(addEntry([], 'log', 'x'), 'warn', 'x').length).toBe(2)
  })

  test('does not merge with an older entry', () => {
    let entries: ConsoleEntry[] = []
    for (const text of ['a', 'b', 'a']) entries = addEntry(entries, 'log', text)
    expect(entries.length).toBe(3)
  })

  test('drops the oldest beyond 200', () => {
    let entries: ConsoleEntry[] = []
    for (let i = 0; i <= 200; i++) entries = addEntry(entries, 'log', String(i))
    expect(entries.length).toBe(200)
    expect(entries[0]?.text).toBe('1')
  })

  test('truncates long text', () => {
    const [entry] = addEntry([], 'log', 'x'.repeat(5000))
    expect(entry?.text.length).toBe(MAX_ENTRY_LENGTH + 1)
    expect(entry?.text.endsWith('…')).toBe(true)
  })

  test('does not mutate its input', () => {
    const entries: ConsoleEntry[] = [{ level: 'log', text: 'a', count: 1 }]
    addEntry(entries, 'log', 'a')
    addEntry(entries, 'log', 'b')
    expect(entries).toEqual([{ level: 'log', text: 'a', count: 1 }])
  })
})

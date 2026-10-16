import { describe, expect, test } from 'bun:test'
import {
  MESSAGE_SOURCE,
  bridgeSource,
  buildPreviewDoc,
  importMap,
  readPreviewMessage,
  toEditorLine,
} from './preview-doc'

describe('importMap', () => {
  test('importMap pins every package to the release', () => {
    const { imports } = importMap('0.19.2')
    expect(imports['@ue-too/board']).toBe('https://cdn.jsdelivr.net/npm/@ue-too/board@0.19.2/index.js')
    expect(imports['@ue-too/math']).toBe('https://cdn.jsdelivr.net/npm/@ue-too/math@0.19.2/index.js')
    expect(imports['@ue-too/being']).toBe('https://cdn.jsdelivr.net/npm/@ue-too/being@0.19.2/index.js')
    expect(Object.keys(imports).length).toBe(3)
  })

  test('importMap uses a custom cdn and adds a missing trailing slash', () => {
    const { imports } = importMap('0.19.2', 'http://localhost:8765/npm')
    expect(imports['@ue-too/math']).toBe('http://localhost:8765/npm/@ue-too/math@0.19.2/index.js')
  })
})

describe('buildPreviewDoc', () => {
  const code = "import { Board } from '@ue-too/board'\nconsole.log(1)"

  test('buildPreviewDoc puts the code where codeStartLine says', () => {
    const { html, codeStartLine } = buildPreviewDoc(code, { release: '0.19.2', runId: 1 })
    expect(html.split('\n')[codeStartLine - 1]).toBe("import { Board } from '@ue-too/board'")
    expect(html).toContain('<canvas id="graph"></canvas>')
    expect(html).toContain('<script type="importmap">' + JSON.stringify(importMap('0.19.2')))
  })

  test('buildPreviewDoc reports success only after the code', () => {
    const { html } = buildPreviewDoc(code, { release: '0.19.2', runId: 1 })
    expect(html.indexOf('window.__liveExampleRan()')).toBeGreaterThan(html.indexOf('console.log(1)'))
  })

  test('buildPreviewDoc escapes a closing script tag inside the code', () => {
    const { html } = buildPreviewDoc("const s = '</script>'", { release: '0.19.2', runId: 1 })
    expect(html).toContain("'<\\/script>'")
    const moduleStart = html.indexOf('<script type="module">')
    const moduleEnd = html.indexOf('</script>', moduleStart)
    expect(html.slice(moduleStart, moduleEnd)).toContain('window.__liveExampleRan()')
  })
})

describe('bridgeSource', () => {
  test('bridgeSource is valid JavaScript with the run id', () => {
    expect(() => new Function(bridgeSource(7))).not.toThrow()
    expect(bridgeSource(7)).toContain('7')
  })
})

describe('toEditorLine', () => {
  test('toEditorLine maps document lines back to editor lines', () => {
    const code = Array.from({ length: 10 }, (_, i) => `console.log(${i})`).join('\n')
    const doc = buildPreviewDoc(code, { release: '0.19.2', runId: 1 })
    expect(toEditorLine(doc.codeStartLine, doc, code)).toBe(1)
    expect(toEditorLine(doc.codeStartLine + 9, doc, code)).toBe(10)
    expect(toEditorLine(doc.codeStartLine + 10, doc, code)).toBeNull()
    expect(toEditorLine(doc.codeStartLine - 1, doc, code)).toBeNull()
  })
})

describe('readPreviewMessage', () => {
  test('readPreviewMessage accepts only well-formed messages for the current run', () => {
    const msg = (fields: object) => ({ source: MESSAGE_SOURCE, runId: 3, ...fields })

    expect(readPreviewMessage(msg({ type: 'ran' }), 3)).toEqual({ type: 'ran', runId: 3 })
    expect(readPreviewMessage(msg({ type: 'ran' }), 4)).toBeNull()

    expect(readPreviewMessage({ source: 'someone-else', runId: 3, type: 'ran' }, 3)).toBeNull()
    expect(readPreviewMessage(null, 3)).toBeNull()
    expect(readPreviewMessage('ran', 3)).toBeNull()
    expect(readPreviewMessage(msg({ type: 'nope' }), 3)).toBeNull()
    expect(readPreviewMessage(msg({ type: 'console', level: 'debug', text: 'x' }), 3)).toBeNull()
    expect(readPreviewMessage(msg({ type: 'error', text: 'x', file: 'about:srcdoc' }), 3)).toBeNull()

    expect(readPreviewMessage(msg({ type: 'console', level: 'warn', text: 'careful' }), 3)).toEqual({
      type: 'console',
      runId: 3,
      level: 'warn',
      text: 'careful',
    })
    expect(readPreviewMessage(msg({ type: 'error', text: 'boom', line: 12, file: 'about:srcdoc' }), 3)).toEqual({
      type: 'error',
      runId: 3,
      text: 'boom',
      line: 12,
      file: 'about:srcdoc',
    })
    expect(readPreviewMessage(msg({ type: 'load-error' }), 3)).toEqual({ type: 'load-error', runId: 3 })
  })
})

/**
 * Builds the document a live example runs in, and reads the messages it
 * sends back.
 *
 * Each run is a sandboxed srcdoc iframe: an import map pins the @ue-too
 * packages to the release the docs are for, a small bridge script forwards
 * console output and errors to the page, and the reader's code runs as a
 * module next to a full-size <canvas id="graph">.
 */

// Where the packages load from; LIVE_EXAMPLES_CDN overrides it at build time
export const DEFAULT_CDN = 'https://cdn.jsdelivr.net/npm/'

// Board and the packages its published build imports by bare name
export const PREVIEW_PACKAGES = ['board', 'math', 'being'] as const

// Tags every message the bridge sends, so the page ignores anyone else's
export const MESSAGE_SOURCE = 'ue-too-live-example'

export function importMap(release: string, cdn: string = DEFAULT_CDN): { imports: Record<string, string> } {
  const base = cdn.endsWith('/') ? cdn : `${cdn}/`
  const imports: Record<string, string> = {}
  for (const pkg of PREVIEW_PACKAGES) {
    imports[`@ue-too/${pkg}`] = `${base}@ue-too/${pkg}@${release}/index.js`
  }
  return { imports }
}

export interface PreviewDoc {
  html: string
  /** 1-based line of `html` holding the code's first line */
  codeStartLine: number
}

// The frame is transparent so the preview sits on the site's own background;
// `output` styles the readout the Zoom limits example adds
const PREVIEW_STYLE =
  'html,body{margin:0;height:100%;overflow:hidden;background:transparent}' +
  'canvas{display:block;width:100%;height:100%;touch-action:none}' +
  'output{position:fixed;top:10px;right:10px;font:500 12px/1.4 ui-monospace,Menlo,Consolas,monospace;' +
  'background:rgba(255,255,255,.85);color:#3c3c43;border:1px solid #e2e2e3;border-radius:999px;padding:3px 10px}'

export function buildPreviewDoc(code: string, opts: { release: string; runId: number; cdn?: string }): PreviewDoc {
  const head = [
    '<!doctype html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    `<style>${PREVIEW_STYLE}</style>`,
    `<script type="importmap">${JSON.stringify(importMap(opts.release, opts.cdn))}</script>`,
    `<script>${bridgeSource(opts.runId)}</script>`,
    '</head>',
    '<body>',
    '<canvas id="graph"></canvas>',
    '<script type="module">',
  ].join('\n')
  const tail = [';window.__liveExampleRan();', '</script>', '</body>', '</html>'].join('\n')
  // A literal </script> in the code would end the module early
  const body = code.replace(/<\/script/gi, '<\\/script')
  return {
    html: `${head}\n${body}\n${tail}`,
    codeStartLine: head.split('\n').length + 1,
  }
}

// Runs inside the frame before the reader's code: forwards console output,
// errors and a failed module load to the page, and defines the success hook
// the document calls after the code
export function bridgeSource(runId: number): string {
  return `(function () {
  var source = ${JSON.stringify(MESSAGE_SOURCE)}
  var runId = ${runId}
  function send(message) {
    message.source = source
    message.runId = runId
    parent.postMessage(message, '*')
  }
  function fmt(value) {
    if (typeof value === 'string') return value
    if (value instanceof Error) return value.name + ': ' + value.message
    try {
      var json = JSON.stringify(value)
      return json === undefined ? String(value) : json
    } catch (e) {
      return String(value)
    }
  }
  ;['log', 'info', 'warn', 'error'].forEach(function (name) {
    var original = console[name]
    console[name] = function () {
      send({
        type: 'console',
        level: name === 'info' ? 'log' : name,
        text: Array.prototype.map.call(arguments, fmt).join(' '),
      })
      return original.apply(console, arguments)
    }
  })
  window.addEventListener('error', function (event) {
    send({ type: 'error', text: event.message || 'Error', line: event.lineno || 0, file: event.filename || '' })
  })
  window.addEventListener('unhandledrejection', function (event) {
    send({ type: 'error', text: 'Unhandled rejection: ' + fmt(event.reason), line: 0, file: '' })
  })
  // A module that fails to download fires error on its <script>, which doesn't bubble
  document.addEventListener('error', function (event) {
    if (event.target && event.target.tagName === 'SCRIPT') send({ type: 'load-error' })
  }, true)
  window.__liveExampleRan = function () {
    send({ type: 'ran' })
  }
})()`
}

/** Maps a line of the preview document to a line of the editor, or null when it falls outside the code. */
export function toEditorLine(docLine: number, doc: PreviewDoc, code: string): number | null {
  const line = docLine - doc.codeStartLine + 1
  return line >= 1 && line <= code.split('\n').length ? line : null
}

export type PreviewMessage =
  | { type: 'ran'; runId: number }
  | { type: 'console'; runId: number; level: 'log' | 'warn' | 'error'; text: string }
  | { type: 'error'; runId: number; text: string; line: number; file: string }
  | { type: 'load-error'; runId: number }

/** Returns the message if it is a well-formed bridge message from run `runId`, otherwise null. */
export function readPreviewMessage(data: unknown, runId: number): PreviewMessage | null {
  if (typeof data !== 'object' || data === null) return null
  const m = data as Record<string, unknown>
  if (m.source !== MESSAGE_SOURCE || m.runId !== runId) return null

  switch (m.type) {
    case 'ran':
    case 'load-error':
      return { type: m.type, runId }
    case 'console':
      if ((m.level === 'log' || m.level === 'warn' || m.level === 'error') && typeof m.text === 'string') {
        return { type: 'console', runId, level: m.level, text: m.text }
      }
      return null
    case 'error':
      if (typeof m.text === 'string' && typeof m.line === 'number' && typeof m.file === 'string') {
        return { type: 'error', runId, text: m.text, line: m.line, file: m.file }
      }
      return null
    default:
      return null
  }
}

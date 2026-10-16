<script setup lang="ts">
/**
 * Live examples: a code editor beside a canvas that runs the code against the
 * @ue-too release these docs are for. Each run is a fresh sandboxed iframe
 * (see preview-doc.ts); console output and errors come back as messages.
 */
import { useData } from 'vitepress'
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import type { ThemeConfig } from '../../config'
import { addEntry, type ConsoleEntry } from './console-entries'
import type { EditorHandle } from './editor'
import { DEFAULT_CDN, buildPreviewDoc, readPreviewMessage, toEditorLine, type PreviewDoc } from './preview-doc'
import type { LiveExample } from './types'

const props = defineProps<{ examples: LiveExample[] }>()

const { theme } = useData<ThemeConfig>()
const release = computed(() => theme.value.livePlayground?.release ?? '')
const cdn = computed(() => theme.value.livePlayground?.cdn ?? DEFAULT_CDN)

// Each tab keeps its edits for as long as the reader stays on the page
const tabs = reactive(props.examples.map(example => ({ ...example, original: example.code })))
const current = ref(0)

type StatusState = 'loading' | 'running' | 'error'
const status = ref<{ state: StatusState; text: string }>({ state: 'loading', text: 'Loading @ue-too/board…' })
const entries = shallowRef<ConsoleEntry[]>([])
const runKey = ref('Ctrl ↵')
const editorReady = ref(false)

// The preview iframe is keyed by run, so every run gets a fresh one
const runId = ref(0)
const srcdoc = ref('')

const editorHost = ref<HTMLElement>()
const frameEl = ref<HTMLIFrameElement>()
const consoleBody = ref<HTMLElement>()

let editor: EditorHandle | null = null
let doc: PreviewDoc | null = null
let runCode = ''
let loadTimer: ReturnType<typeof setTimeout> | undefined
let unmounted = false

function setStatus(state: StatusState, text: string) {
  status.value = { state, text }
}

function log(level: ConsoleEntry['level'], text: string) {
  entries.value = addEntry(entries.value, level, text)
}

function run() {
  runId.value++
  clearTimeout(loadTimer)
  editor?.setErrorLine(null)
  entries.value = []
  runCode = tabs[current.value]!.code
  doc = buildPreviewDoc(runCode, { release: release.value, runId: runId.value, cdn: cdn.value })
  srcdoc.value = doc.html
  setStatus('loading', 'Loading @ue-too/board…')
  const thisRun = runId.value
  loadTimer = setTimeout(() => {
    if (thisRun === runId.value && status.value.state === 'loading') {
      setStatus('loading', 'Still loading @ue-too/board from jsDelivr…')
    }
  }, 6000)
}

function onMessage(event: MessageEvent) {
  if (!frameEl.value || event.source !== frameEl.value.contentWindow) return
  const message = readPreviewMessage(event.data, runId.value)
  if (!message) return

  switch (message.type) {
    case 'ran':
      if (status.value.state !== 'error') setStatus('running', 'Running')
      break
    case 'console':
      log(message.level, message.text)
      break
    case 'load-error':
      setStatus('error', 'Could not load @ue-too/board')
      log('error', `Could not download @ue-too/board ${release.value} from jsDelivr. Check your connection, then press Run.`)
      break
    case 'error': {
      // Lines inside the reader's code map back to the editor; others (library code) don't
      const line = doc && message.file.startsWith('about:srcdoc') ? toEditorLine(message.line, doc, runCode) : null
      const where = line === null ? '' : ` (line ${line})`
      setStatus('error', `Error${where}`)
      log('error', `${message.text}${where}`)
      if (line !== null) editor?.setErrorLine(line)
      break
    }
  }
}

function select(index: number) {
  if (index === current.value) return
  current.value = index
  editor?.showTab(tabs[index]!.id, tabs[index]!.code)
  run()
}

function onTabKey(event: KeyboardEvent) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
  const step = event.key === 'ArrowRight' ? 1 : tabs.length - 1
  const next = (current.value + step) % tabs.length
  select(next)
  nextTick(() => document.getElementById(`lp-tab-${tabs[next]!.id}`)?.focus())
}

function reset() {
  const tab = tabs[current.value]!
  tab.code = tab.original
  editor?.setCode(tab.original)
  run()
}

// Keep the newest console row in view
watch(entries, () => {
  nextTick(() => {
    if (consoleBody.value) consoleBody.value.scrollTop = consoleBody.value.scrollHeight
  })
})

onMounted(async () => {
  if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) runKey.value = '⌘↵'
  window.addEventListener('message', onMessage)
  run()

  const { createEditor } = await import('./editor')
  if (unmounted || !editorHost.value) return
  editor = createEditor(editorHost.value, {
    tabId: tabs[current.value]!.id,
    code: tabs[current.value]!.code,
    ariaLabel: 'Example code. Press Escape, then Tab, to leave the editor.',
    onChange: code => {
      tabs[current.value]!.code = code
    },
    onRun: run,
  })
  editorReady.value = true
})

onBeforeUnmount(() => {
  unmounted = true
  window.removeEventListener('message', onMessage)
  clearTimeout(loadTimer)
  editor?.destroy()
  editor = null
})
</script>

<template>
  <section class="lp" aria-label="Live example">
    <div class="lp-head">
      <div class="lp-tabs" role="tablist" aria-label="Examples" @keydown="onTabKey">
        <button
          v-for="(tab, index) in tabs"
          :id="`lp-tab-${tab.id}`"
          :key="tab.id"
          type="button"
          role="tab"
          class="lp-tab"
          :data-testid="`tab-${tab.id}`"
          :aria-selected="index === current"
          :tabindex="index === current ? 0 : -1"
          @click="select(index)"
        >
          {{ tab.title }}
          <span v-if="tab.code !== tab.original" class="lp-edited" data-testid="edited" title="Edited"></span>
        </button>
      </div>
      <div class="lp-actions">
        <span class="lp-chip" data-testid="version" title="Version the examples run against">@ue-too/board {{ release }}</span>
        <button type="button" class="lp-btn" data-testid="reset" title="Put back the original code" @click="reset">Reset</button>
        <button type="button" class="lp-btn lp-btn-primary" data-testid="run" title="Run the code" @click="run">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" /></svg>
          Run <kbd class="lp-key">{{ runKey }}</kbd>
        </button>
      </div>
    </div>

    <div class="lp-caption" v-html="tabs[current]?.caption"></div>

    <div class="lp-body">
      <div class="lp-editor" data-testid="editor">
        <pre v-if="!editorReady" class="lp-fallback">{{ tabs[current]?.code }}</pre>
        <div ref="editorHost" class="lp-editor-host"></div>
      </div>
      <div class="lp-preview" data-testid="preview">
        <iframe
          v-if="runId > 0"
          :key="runId"
          ref="frameEl"
          class="lp-frame"
          title="Live example output"
          sandbox="allow-scripts"
          :srcdoc="srcdoc"
        ></iframe>
        <div class="lp-status" :data-state="status.state">
          <span class="lp-led"></span><span data-testid="status">{{ status.text }}</span>
        </div>
        <div class="lp-hint">
          <span class="lp-hint-fine">Space + drag to pan · Ctrl + scroll or pinch to zoom</span>
          <span class="lp-hint-touch">Two fingers to pan · pinch to zoom</span>
        </div>
      </div>
    </div>

    <div class="lp-console">
      <div class="lp-console-head">
        Console <span v-if="entries.length" class="lp-count">({{ entries.length }})</span>
        <button type="button" class="lp-clear" @click="entries = []">Clear</button>
      </div>
      <div ref="consoleBody" class="lp-console-body" aria-live="polite">
        <div v-if="!entries.length" class="lp-console-empty">
          Nothing logged yet. console.log() output and errors from the example show up here.
        </div>
        <div
          v-for="(entry, index) in entries"
          :key="index"
          class="lp-row"
          :class="entry.level"
          data-testid="console-row"
        >
          <span class="lp-row-kind">{{ entry.level === 'log' ? '›' : entry.level }}</span>
          <span class="lp-row-text">{{ entry.text }}</span>
          <span v-if="entry.count > 1" class="lp-row-times">×{{ entry.count }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Syntax colours, read by the editor's highlight style */
.lp {
  --lp-tk-keyword: #d73a49;
  --lp-tk-string: #032f62;
  --lp-tk-function: #6f42c1;
  --lp-tk-number: #005cc5;
  --lp-tk-comment: #6a737d;
  --lp-tk-property: #22863a;
  --lp-tk-punct: var(--vp-c-text-1);
}
.dark .lp {
  --lp-tk-keyword: #f97583;
  --lp-tk-string: #9ecbff;
  --lp-tk-function: #b392f0;
  --lp-tk-number: #79b8ff;
  --lp-tk-comment: #6a737d;
  --lp-tk-property: #85e89d;
  --lp-tk-punct: var(--vp-c-text-1);
}

.lp {
  container-type: inline-size;
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.lp-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  padding: 8px 10px 8px 6px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}
.lp-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  min-width: 0;
}
.lp-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.lp-tab:hover {
  color: var(--vp-c-text-1);
}
.lp-tab[aria-selected='true'] {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  box-shadow: 0 0 0 1px var(--vp-c-divider);
}
.lp-edited {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vp-c-warning-1);
}
.lp-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}
.lp-chip {
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
.lp-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  cursor: pointer;
}
.lp-btn:hover {
  border-color: var(--vp-c-brand-1);
}
.lp-btn-primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}
.lp-btn-primary:hover {
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
}
.dark .lp-btn-primary {
  color: #13200b;
}
.lp-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}
.lp-key {
  font-family: inherit;
  font-size: 11px;
  opacity: 0.8;
}

.lp-caption {
  padding: 10px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

/* Stacked by default: the canvas on top of the editor */
.lp-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}
.lp-preview {
  order: 1;
  height: 400px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.lp-editor {
  order: 2;
  height: 360px;
}
@container (min-width: 860px) {
  .lp-body {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  }
  .lp-editor {
    order: 1;
    height: 480px;
  }
  .lp-preview {
    order: 2;
    height: 480px;
    border-bottom: 0;
    border-left: 1px solid var(--vp-c-divider);
  }
}
@container (max-width: 599px) {
  .lp-preview,
  .lp-editor {
    height: 340px;
  }
  .lp-chip {
    display: none;
  }
}

.lp-editor {
  position: relative;
  min-width: 0;
  background: var(--vp-c-bg-alt);
}
.lp-editor-host {
  height: 100%;
}
.lp-fallback {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 14px 16px 14px 48px;
  overflow: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 20px;
  color: var(--vp-c-text-1);
  white-space: pre;
}

.lp-preview {
  position: relative;
  min-width: 0;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}
/* Transparent over the site background; a light color-scheme keeps the
   browser from painting an opaque backdrop behind it in dark mode */
.lp-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  color-scheme: light;
  background: transparent;
}
.lp-status {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: calc(100% - 20px);
  padding: 3px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  pointer-events: none;
}
.lp-led {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
}
.lp-status[data-state='running'] .lp-led {
  background: var(--vp-c-brand-1);
}
.lp-status[data-state='loading'] .lp-led {
  background: var(--vp-c-warning-1);
  animation: lp-pulse 1s ease-in-out infinite;
}
.lp-status[data-state='error'] {
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-danger-1);
}
.lp-status[data-state='error'] .lp-led {
  background: var(--vp-c-danger-1);
}
@keyframes lp-pulse {
  50% {
    opacity: 0.3;
  }
}
@media (prefers-reduced-motion: reduce) {
  .lp-status[data-state='loading'] .lp-led {
    animation: none;
  }
}
.lp-hint {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: var(--vp-c-text-2);
  pointer-events: none;
}
.lp-hint span {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
.lp-hint .lp-hint-touch {
  display: none;
}
@media (pointer: coarse) {
  .lp-hint .lp-hint-touch {
    display: inline-block;
  }
  .lp-hint .lp-hint-fine,
  .lp-key {
    display: none;
  }
}

.lp-console {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}
.lp-console-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
.lp-count {
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
.lp-clear {
  margin-left: auto;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.lp-clear:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
.lp-console-body {
  max-height: 132px;
  overflow: auto;
  padding: 0 12px 8px;
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  line-height: 1.6;
}
.lp-console-empty {
  padding: 2px 0 4px;
  font-family: var(--vp-font-family-base);
  font-size: 13px;
  color: var(--vp-c-text-3);
}
.lp-row {
  display: flex;
  gap: 10px;
  padding: 2px 0;
  border-top: 1px solid var(--vp-c-divider);
  white-space: pre-wrap;
  word-break: break-word;
}
.lp-row:first-child {
  border-top: 0;
}
.lp-row-kind {
  flex: none;
  width: 40px;
  color: var(--vp-c-text-3);
}
.lp-row.warn {
  color: var(--vp-c-warning-1);
}
.lp-row.error,
.lp-row.error .lp-row-kind {
  color: var(--vp-c-danger-1);
}
.lp-row-times {
  flex: none;
  margin-left: auto;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
</style>

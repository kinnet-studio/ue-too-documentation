<script setup lang="ts">
/**
 * The drawing dock at the bottom of the home page: a toolbar of the
 * whiteboard's tools, with the pan and zoom hint above it, or the style panel
 * while a drawing tool is picked or shapes are selected. Rendered once the
 * canvas is up (CanvasHome.vue loads it on demand, with the whiteboard).
 */
import {
  COLOR_NAMES,
  type ColorName,
  type EditorState,
  type ShapeFill,
  type ShapeSize,
  type ToolName,
} from '@ue-too/board/whiteboard'
import { useData } from 'vitepress'
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { iconSvg, type DockIcon } from './dock-icons'
import { canvasHome } from './state'
import { whiteboardLabels } from './whiteboard-labels'
import { DARK_COLORS, LIGHT_COLORS } from './whiteboard-theme'

const props = defineProps<{ hint: string }>()

const { lang, isDark } = useData()
const labels = computed(() => whiteboardLabels(lang.value))

// The dock only renders while the canvas runs
const editor = canvasHome.value!.editor
const state = shallowRef<EditorState>(editor.getState())

const SHORTCUTS: Record<ToolName, string> = {
  hand: 'H',
  select: 'V',
  rect: 'R',
  ellipse: 'O',
  arrow: 'A',
  line: 'L',
  pen: 'P',
  text: 'T',
  note: 'N',
  eraser: 'E',
}
const SHAPE_TOOLS: ToolName[] = ['rect', 'ellipse', 'arrow', 'line']
const DRAWING_TOOLS = new Set<ToolName>([...SHAPE_TOOLS, 'pen', 'text', 'note'])
const SIZES: ShapeSize[] = ['s', 'm', 'l']
const FILLS: ShapeFill[] = ['none', 'hachure', 'solid']

type Item = ToolName | 'undo' | 'redo' | 'clear' | 'shapes' | 'more'
const WIDE: Item[][] = [['hand', 'select'], ['rect', 'ellipse', 'arrow', 'line', 'pen', 'text', 'note', 'eraser'], ['undo', 'redo'], ['clear']]
const NARROW: Item[][] = [['hand', 'select'], ['shapes', 'pen', 'text', 'note', 'eraser'], ['undo', 'more']]

const narrowQuery = typeof window === 'undefined' ? null : window.matchMedia('(max-width: 639px)')
const narrow = ref(narrowQuery?.matches ?? false)
const groups = computed(() => (narrow.value ? NARROW : WIDE))

// The shape tool the Shapes button stands for on narrow screens
const lastShape = ref<ToolName>('rect')
const menu = ref<'shapes' | 'more' | null>(null)

const showPanel = computed(() => DRAWING_TOOLS.has(state.value.tool) || state.value.selection.length > 0)
// What the panel shows: the selection's shared style, or the next shape's
const shown = computed(() => state.value.selectionStyle ?? state.value.style)
const fillable = computed(
  () =>
    state.value.tool === 'rect' ||
    state.value.tool === 'ellipse' ||
    state.value.selection.some(id => {
      const type = editor.document.get(id)?.type
      return type === 'rect' || type === 'ellipse'
    })
)
const swatch = (color: ColorName) => (isDark.value ? DARK_COLORS : LIGHT_COLORS)[color]

function label(item: Item): string {
  switch (item) {
    case 'undo':
    case 'redo':
    case 'clear':
    case 'shapes':
    case 'more':
      return labels.value[item]
    default:
      return labels.value.tools[item]
  }
}

function icon(item: Item): DockIcon {
  return item === 'shapes' ? lastShape.value : item
}

function title(item: Item): string {
  const shortcut = item in SHORTCUTS ? SHORTCUTS[item as ToolName] : null
  return shortcut ? `${label(item)} (${shortcut})` : label(item)
}

function shortcut(item: Item): string | undefined {
  if (item in SHORTCUTS) return SHORTCUTS[item as ToolName]
  if (item === 'undo') return 'Control+Z Meta+Z'
  if (item === 'redo') return 'Control+Shift+Z Meta+Shift+Z'
  return undefined
}

function pressed(item: Item): boolean | undefined {
  if (item === 'shapes') return SHAPE_TOOLS.includes(state.value.tool)
  if (item in SHORTCUTS) return state.value.tool === item
  return undefined
}

function disabled(item: Item): boolean {
  if (item === 'undo') return !state.value.canUndo
  if (item === 'redo') return !state.value.canRedo
  if (item === 'clear') return state.value.empty
  return false
}

function pickTool(tool: ToolName) {
  if (SHAPE_TOOLS.includes(tool)) lastShape.value = tool
  menu.value = null
  editor.setTool(tool)
}

function run(item: Item) {
  if (item === 'shapes' || item === 'more') {
    menu.value = menu.value === item ? null : item
    return
  }
  menu.value = null
  if (item === 'undo') editor.undo()
  else if (item === 'redo') editor.redo()
  else if (item === 'clear') editor.clear()
  else pickTool(item)
}

// Roving focus: one dock button is in the tab order, the arrow keys move between them
const toolbar = ref<HTMLElement>()
const items = computed(() => groups.value.flat())
const rovingIndex = ref(0)

function dockButtons(): HTMLButtonElement[] {
  return [...(toolbar.value?.querySelectorAll<HTMLButtonElement>(':scope > button') ?? [])]
}

function onToolbarKey(event: KeyboardEvent) {
  const buttons = dockButtons().filter(b => !b.disabled)
  const current = buttons.indexOf(document.activeElement as HTMLButtonElement)
  if (current < 0) return
  let next = -1
  if (event.key === 'ArrowRight') next = (current + 1) % buttons.length
  else if (event.key === 'ArrowLeft') next = (current - 1 + buttons.length) % buttons.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = buttons.length - 1
  if (next < 0) return
  event.preventDefault()
  buttons[next]!.focus()
}

function onButtonFocus(item: Item) {
  rovingIndex.value = items.value.indexOf(item)
}

function onMenuKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    menu.value = null
    event.stopPropagation()
  }
}

// A press outside an open menu closes it
function onDocumentPointerDown(event: PointerEvent) {
  if (!menu.value) return
  if (!(event.target as Element | null)?.closest?.('.wb-menu, .wb-menu-button')) menu.value = null
}

// The canvas puts its Back to start pill above whatever this column covers
const stack = ref<HTMLElement>()
function reportInset() {
  const top = stack.value?.getBoundingClientRect().top
  if (top !== undefined) canvasHome.value?.setBottomInset(window.innerHeight - top)
}

let stopEditor = () => {}
let observer: ResizeObserver | undefined
const onNarrowChange = (event: MediaQueryListEvent) => {
  narrow.value = event.matches
  menu.value = null
}

onMounted(() => {
  stopEditor = editor.subscribe(next => (state.value = next))
  state.value = editor.getState()
  narrowQuery?.addEventListener('change', onNarrowChange)
  document.addEventListener('pointerdown', onDocumentPointerDown)
  observer = new ResizeObserver(reportInset)
  if (stack.value) observer.observe(stack.value)
  window.addEventListener('resize', reportInset)
  reportInset()
})

onBeforeUnmount(() => {
  stopEditor()
  narrowQuery?.removeEventListener('change', onNarrowChange)
  document.removeEventListener('pointerdown', onDocumentPointerDown)
  observer?.disconnect()
  window.removeEventListener('resize', reportInset)
})
</script>

<template>
  <div ref="stack" class="wb-stack" data-testid="wb-stack">
    <div v-show="!showPanel" class="wb-hint" data-testid="wb-hint">{{ props.hint }}</div>
    <div v-show="showPanel" class="wb-bar wb-panel" role="group" :aria-label="labels.style" data-testid="wb-style">
      <button
        v-for="color in COLOR_NAMES"
        :key="color"
        type="button"
        class="wb-option"
        :aria-label="labels.colors[color]"
        :title="labels.colors[color]"
        :aria-pressed="shown.color === color"
        @click="editor.setStyle({ color })"
      >
        <span class="wb-swatch" :style="{ background: swatch(color) }"></span>
      </button>
      <span class="wb-sep" aria-hidden="true"></span>
      <button
        v-for="(size, i) in SIZES"
        :key="size"
        type="button"
        class="wb-option"
        :aria-label="labels.sizes[size]"
        :title="labels.sizes[size]"
        :aria-pressed="shown.size === size"
        @click="editor.setStyle({ size })"
      >
        <span class="wb-size" :style="{ height: `${2 + i * 2}px` }"></span>
      </button>
      <template v-if="fillable">
        <span class="wb-sep" aria-hidden="true"></span>
        <button
          v-for="fill in FILLS"
          :key="fill"
          type="button"
          class="wb-option"
          :aria-label="labels.fills[fill]"
          :title="labels.fills[fill]"
          :aria-pressed="shown.fill === fill"
          @click="editor.setStyle({ fill })"
        >
          <span class="wb-fill" :class="fill"></span>
        </button>
      </template>
    </div>
    <div
      ref="toolbar"
      class="wb-bar wb-dock"
      role="toolbar"
      :aria-label="labels.toolbar"
      data-testid="wb-dock"
      @keydown="onToolbarKey"
    >
      <template v-for="(group, g) in groups" :key="g">
        <span v-if="g > 0" class="wb-sep" aria-hidden="true"></span>
        <template v-for="item in group" :key="item">
          <button
            type="button"
            class="wb-tool"
            :class="{ 'wb-menu-button': item === 'shapes' || item === 'more' }"
            :aria-label="label(item)"
            :title="title(item)"
            :aria-keyshortcuts="shortcut(item)"
            :aria-pressed="pressed(item)"
            :aria-haspopup="item === 'shapes' || item === 'more' ? 'true' : undefined"
            :aria-expanded="item === 'shapes' || item === 'more' ? menu === item : undefined"
            :disabled="disabled(item)"
            :tabindex="items.indexOf(item) === rovingIndex ? 0 : -1"
            @click="run(item)"
            @focus="onButtonFocus(item)"
            v-html="iconSvg(icon(item))"
          ></button>
        </template>
      </template>
      <div v-if="menu === 'shapes'" class="wb-bar wb-menu" data-testid="wb-shapes-menu" @keydown="onMenuKey">
        <button
          v-for="tool in SHAPE_TOOLS"
          :key="tool"
          type="button"
          class="wb-tool"
          :aria-label="labels.tools[tool]"
          :title="title(tool)"
          :aria-pressed="state.tool === tool"
          @click="pickTool(tool)"
          v-html="iconSvg(tool)"
        ></button>
      </div>
      <div v-if="menu === 'more'" class="wb-bar wb-menu wb-menu-end" data-testid="wb-more-menu" @keydown="onMenuKey">
        <button
          type="button"
          class="wb-tool"
          :aria-label="labels.redo"
          :title="labels.redo"
          :disabled="!state.canRedo"
          @click="run('redo')"
          v-html="iconSvg('redo')"
        ></button>
        <button
          type="button"
          class="wb-tool"
          :aria-label="labels.clear"
          :title="labels.clear"
          :disabled="state.empty"
          @click="run('clear')"
          v-html="iconSvg('clear')"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wb-stack {
  position: fixed;
  left: 50%;
  bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  z-index: 20;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 16px);
}

.wb-hint {
  height: 30px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wb-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.06);
}

.wb-tool,
.wb-option {
  flex: none;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.wb-tool {
  width: 38px;
  height: 38px;
  border-radius: 8px;
}

.wb-option {
  width: 30px;
  height: 30px;
  border-radius: 7px;
}

.wb-tool :deep(svg) {
  width: 19px;
  height: 19px;
}

.wb-tool:hover:not(:disabled),
.wb-option:hover {
  background: var(--vp-c-bg-soft);
}

.wb-tool[aria-pressed='true'],
.wb-option[aria-pressed='true'] {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.wb-tool:disabled {
  opacity: 0.35;
  cursor: default;
}

.wb-tool:focus-visible,
.wb-option:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

.wb-sep {
  flex: none;
  width: 1px;
  height: 22px;
  margin: 0 4px;
  background: var(--vp-c-divider);
}

.wb-swatch {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.wb-option[aria-pressed='true'] .wb-swatch {
  box-shadow:
    0 0 0 2px var(--vp-c-bg),
    0 0 0 4px var(--vp-c-brand-1);
}

.wb-size {
  width: 16px;
  border-radius: 2px;
  background: currentColor;
}

.wb-fill {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-radius: 3px;
}

.wb-fill.hachure {
  background: repeating-linear-gradient(-45deg, currentColor 0 1.5px, transparent 1.5px 4px);
}

.wb-fill.solid {
  background: currentColor;
  opacity: 0.5;
}

.wb-menu {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.wb-menu-end {
  left: auto;
  right: 0;
  transform: none;
}

@media (max-width: 639px) {
  .wb-stack {
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  }
}
</style>

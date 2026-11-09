<script setup lang="ts">
/**
 * The home page canvas (see canvas-home.ts). The stock VitePress hero stays in
 * the page, visually hidden (custom.css), for screen readers, search engines
 * and keyboard users: its links are what a click on the canvas activates, and
 * focusing one draws a focus ring on the canvas.
 */
import { useData } from 'vitepress'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { CanvasHomeHandle } from './canvas-home'
import type { HeroContent } from './hero-layout'
import { backLabel, canvasHome } from './state'

interface HeroFrontmatter {
  name?: string
  text?: string
  tagline?: string
  actions?: { text?: string; theme?: string }[]
}

const HINTS: Record<'en' | 'ja' | 'zh-TW', { fine: string; touch: string }> = {
  en: { fine: 'Drag to pan · Ctrl + scroll or pinch to zoom', touch: 'Drag to pan · Pinch to zoom' },
  ja: { fine: 'ドラッグで移動 · Ctrl + スクロールかピンチでズーム', touch: 'ドラッグで移動 · ピンチでズーム' },
  'zh-TW': { fine: '拖曳平移 · Ctrl + 滾輪或雙指縮放', touch: '拖曳平移 · 雙指縮放' },
}

const { frontmatter, isDark, lang } = useData()
const canvasEl = ref<HTMLCanvasElement>()
let handle: CanvasHomeHandle | null = null
let unmounted = false

function hint(): string {
  const locale = lang.value.startsWith('ja') ? 'ja' : lang.value === 'zh-TW' ? 'zh-TW' : 'en'
  return HINTS[locale][matchMedia('(pointer: coarse)').matches ? 'touch' : 'fine']
}

// Hero frontmatter is rendered as HTML, so it may hold tags and entities
function plain(html: string | undefined): string {
  if (!html) return ''
  return new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() ?? ''
}

function content(): HeroContent {
  const hero = (frontmatter.value.hero ?? {}) as HeroFrontmatter
  return {
    name: plain(hero.name),
    text: plain(hero.text),
    tagline: plain(hero.tagline),
    actions: (hero.actions ?? []).map(action => ({
      text: plain(action.text),
      theme: action.theme === 'alt' || action.theme === 'sponsor' ? 'alt' : 'brand',
    })),
  }
}

function heroLinks(): HTMLAnchorElement[] {
  return [...document.querySelectorAll<HTMLAnchorElement>('.VPHomeHero .actions a')]
}

// Activating the real link keeps VitePress's routing and the link's own target
function activate(index: number, newTab: boolean) {
  const link = heroLinks()[index]
  if (!link) return
  if (newTab) window.open(link.href, '_blank', 'noopener')
  else link.click()
}

function onFocusIn(event: FocusEvent) {
  const index = heroLinks().indexOf(event.target as HTMLAnchorElement)
  if (index >= 0) handle?.setFocused(index)
}

function onFocusOut(event: FocusEvent) {
  if (heroLinks().includes(event.target as HTMLAnchorElement)) handle?.setFocused(-1)
}

// Shows the HTML hero instead of the canvas (custom.css)
function fallBack(error: unknown) {
  console.error(error)
  handle = null
  canvasHome.value = null
  document.documentElement.classList.add('canvas-home-failed')
}

onMounted(async () => {
  document.documentElement.classList.add('canvas-home')
  document.addEventListener('focusin', onFocusIn)
  document.addEventListener('focusout', onFocusOut)
  try {
    const { mountCanvasHome } = await import('./canvas-home')
    if (unmounted || !canvasEl.value) return
    handle = mountCanvasHome(canvasEl.value, {
      content: content(),
      hint: hint(),
      backLabel: backLabel(lang.value),
      onActivate: activate,
      onError: fallBack,
    })
    canvasHome.value = handle
  } catch (error) {
    fallBack(error)
  }
})

watch(isDark, () => nextTick(() => handle?.refreshTheme()))
watch([() => frontmatter.value.hero, lang], () => handle?.setContent(content(), hint(), backLabel(lang.value)))

onBeforeUnmount(() => {
  unmounted = true
  handle?.destroy()
  handle = null
  canvasHome.value = null
  document.removeEventListener('focusin', onFocusIn)
  document.removeEventListener('focusout', onFocusOut)
  document.documentElement.classList.remove('canvas-home', 'canvas-home-failed')
})
</script>

<template>
  <canvas ref="canvasEl" class="canvas-home" data-testid="canvas-home" aria-hidden="true"></canvas>
</template>

<style scoped>
.canvas-home {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}
</style>

/**
 * State shared by CanvasHome.vue (which mounts the canvas) and
 * BackToStartButton.vue (its keyboard and screen reader copy, which sits with
 * the hero's links).
 */
import { shallowRef } from 'vue'
import type { CanvasHomeHandle } from './canvas-home'

/** The running canvas, or null while it's loading, failed, or gone */
export const canvasHome = shallowRef<CanvasHomeHandle | null>(null)

const BACK_LABELS: Record<'en' | 'ja' | 'zh-TW', string> = {
  en: 'Back to start',
  ja: '最初の位置に戻る',
  'zh-TW': '回到起點',
}

export function backLabel(lang: string): string {
  return BACK_LABELS[lang.startsWith('ja') ? 'ja' : lang === 'zh-TW' ? 'zh-TW' : 'en']
}

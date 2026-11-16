/**
 * The drawing dock's words in each locale: button labels (also their
 * tooltips and screen reader names) and the style panel's options.
 */
import type { ColorName, ShapeFill, ShapeSize, ToolName } from '@ue-too/board/whiteboard'

export interface WhiteboardLabels {
  toolbar: string
  style: string
  tools: Record<ToolName, string>
  undo: string
  redo: string
  clear: string
  shapes: string
  more: string
  colors: Record<ColorName, string>
  sizes: Record<ShapeSize, string>
  fills: Record<ShapeFill, string>
}

const LABELS: Record<'en' | 'ja' | 'zh-TW', WhiteboardLabels> = {
  en: {
    toolbar: 'Drawing tools',
    style: 'Style',
    tools: {
      hand: 'Hand',
      select: 'Select',
      rect: 'Rectangle',
      ellipse: 'Ellipse',
      arrow: 'Arrow',
      line: 'Line',
      pen: 'Pen',
      text: 'Text',
      note: 'Sticky note',
      eraser: 'Eraser',
    },
    undo: 'Undo',
    redo: 'Redo',
    clear: 'Clear the board',
    shapes: 'Shapes',
    more: 'More',
    colors: { ink: 'Ink', red: 'Red', blue: 'Blue', green: 'Green', orange: 'Orange' },
    sizes: { s: 'Small', m: 'Medium', l: 'Large' },
    fills: { none: 'No fill', hachure: 'Hatched', solid: 'Solid' },
  },
  ja: {
    toolbar: '描画ツール',
    style: 'スタイル',
    tools: {
      hand: '手のひら',
      select: '選択',
      rect: '四角形',
      ellipse: '楕円',
      arrow: '矢印',
      line: '直線',
      pen: 'ペン',
      text: 'テキスト',
      note: '付箋',
      eraser: '消しゴム',
    },
    undo: '元に戻す',
    redo: 'やり直す',
    clear: 'ボードを消去',
    shapes: '図形',
    more: 'その他',
    colors: { ink: 'インク', red: '赤', blue: '青', green: '緑', orange: 'オレンジ' },
    sizes: { s: '小', m: '中', l: '大' },
    fills: { none: '塗りなし', hachure: '斜線', solid: '塗りつぶし' },
  },
  'zh-TW': {
    toolbar: '繪圖工具',
    style: '樣式',
    tools: {
      hand: '抓手',
      select: '選取',
      rect: '矩形',
      ellipse: '橢圓',
      arrow: '箭頭',
      line: '直線',
      pen: '畫筆',
      text: '文字',
      note: '便利貼',
      eraser: '橡皮擦',
    },
    undo: '復原',
    redo: '重做',
    clear: '清除畫板',
    shapes: '形狀',
    more: '更多',
    colors: { ink: '墨色', red: '紅', blue: '藍', green: '綠', orange: '橘' },
    sizes: { s: '小', m: '中', l: '大' },
    fills: { none: '無填色', hachure: '斜線', solid: '實心' },
  },
}

export function whiteboardLabels(lang: string): WhiteboardLabels {
  return LABELS[lang.startsWith('ja') ? 'ja' : lang === 'zh-TW' ? 'zh-TW' : 'en']
}

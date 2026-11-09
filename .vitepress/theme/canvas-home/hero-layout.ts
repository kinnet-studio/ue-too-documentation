/**
 * Lays out the home page hero in world space, for drawing on the canvas.
 *
 * Sizes copy VitePress's own hero (VPHero.vue) at its breakpoints, so the
 * canvas hero looks like the HTML one at zoom 1. The block is centred on the
 * world origin and every line is centred on x = 0.
 */

export interface HeroAction {
  text: string
  theme: 'brand' | 'alt'
}

/** The hero's text, as plain text (empty strings are skipped) */
export interface HeroContent {
  name: string
  text: string
  tagline: string
  actions: HeroAction[]
}

/** Width of `text` drawn in a CSS `font` with extra letter spacing (px) */
export type Measure = (text: string, font: string, letterSpacing: number) => number

export interface HeroLine {
  text: string
  /** Centre of the line */
  x: number
  /** Vertical middle of the line box */
  y: number
  font: string
  letterSpacing: number
  role: 'name' | 'text' | 'tagline'
}

export interface HeroButton {
  index: number
  text: string
  theme: 'brand' | 'alt'
  /** Top-left corner */
  x: number
  y: number
  width: number
  height: number
  font: string
}

export interface HeroLayout {
  lines: HeroLine[]
  buttons: HeroButton[]
  width: number
  height: number
}

// Space kept clear on each side of the viewport, like the hero's padding on phones
const GUTTER = 24
const HEADING_LETTER_SPACING = -0.4
const BUTTON_FONT = '600 14px'
const BUTTON_PADDING = 20
const BUTTON_HEIGHT = 40
const BUTTON_GAP = 12

interface Sizes {
  heading: { size: number; lineHeight: number }
  tagline: { size: number; lineHeight: number; paddingTop: number; maxWidth: number }
  actionsPaddingTop: number
}

function sizesFor(viewportWidth: number): Sizes {
  if (viewportWidth >= 960) {
    return {
      heading: { size: 56, lineHeight: 64 },
      tagline: { size: 24, lineHeight: 36, paddingTop: 12, maxWidth: 576 },
      actionsPaddingTop: 32,
    }
  }
  if (viewportWidth >= 640) {
    return {
      heading: { size: 48, lineHeight: 56 },
      tagline: { size: 20, lineHeight: 32, paddingTop: 12, maxWidth: 576 },
      actionsPaddingTop: 32,
    }
  }
  return {
    heading: { size: 32, lineHeight: 40 },
    tagline: { size: 18, lineHeight: 28, paddingTop: 8, maxWidth: 392 },
    actionsPaddingTop: 24,
  }
}

export function layoutHero(content: HeroContent, viewportWidth: number, fontFamily: string, measure: Measure): HeroLayout {
  const sizes = sizesFor(viewportWidth)
  const available = Math.max(viewportWidth - GUTTER * 2, 1)
  const lines: HeroLine[] = []
  const buttons: HeroButton[] = []
  let width = 0
  let y = 0

  const addLines = (
    text: string,
    role: HeroLine['role'],
    font: string,
    letterSpacing: number,
    lineHeight: number,
    maxWidth: number
  ) => {
    for (const line of wrapText(text, maxWidth, s => measure(s, font, letterSpacing))) {
      lines.push({ text: line, x: 0, y: y + lineHeight / 2, font, letterSpacing, role })
      width = Math.max(width, measure(line, font, letterSpacing))
      y += lineHeight
    }
  }

  const heading = `700 ${sizes.heading.size}px ${fontFamily}`
  addLines(content.name, 'name', heading, HEADING_LETTER_SPACING, sizes.heading.lineHeight, available)
  addLines(content.text, 'text', heading, HEADING_LETTER_SPACING, sizes.heading.lineHeight, available)

  if (content.tagline.trim()) {
    const { size, lineHeight, paddingTop, maxWidth } = sizes.tagline
    y += paddingTop
    addLines(content.tagline, 'tagline', `500 ${size}px ${fontFamily}`, 0, lineHeight, Math.min(maxWidth, available))
  }

  if (content.actions.length > 0) {
    y += sizes.actionsPaddingTop
    const font = `${BUTTON_FONT} ${fontFamily}`
    // Buttons sit in centred rows, wrapping when a row would be wider than the viewport
    let row: HeroButton[] = []
    const flushRow = () => {
      const rowWidth = row.reduce((sum, button) => sum + button.width, 0) + BUTTON_GAP * (row.length - 1)
      let x = -rowWidth / 2
      for (const button of row) {
        button.x = x
        button.y = y
        x += button.width + BUTTON_GAP
      }
      width = Math.max(width, rowWidth)
      y += BUTTON_HEIGHT
      row = []
    }
    content.actions.forEach((action, index) => {
      const button: HeroButton = {
        index,
        text: action.text,
        theme: action.theme,
        x: 0,
        y: 0,
        width: measure(action.text, font, 0) + BUTTON_PADDING * 2,
        height: BUTTON_HEIGHT,
        font,
      }
      const rowWidth = row.reduce((sum, b) => sum + b.width + BUTTON_GAP, 0) + button.width
      if (row.length > 0 && rowWidth > available) {
        flushRow()
        y += BUTTON_GAP
      }
      row.push(button)
      buttons.push(button)
    })
    flushRow()
  }

  // Centre the block vertically on the origin
  const top = -y / 2
  for (const line of lines) line.y += top
  for (const button of buttons) button.y += top

  return { lines, buttons, width, height: y }
}

// CJK characters, which may break on either side, except that a line never
// starts with closing punctuation or small kana (NO_START) and never ends with
// an opening bracket (OPEN); those stick to their neighbour
const CJK = '\\u2e80-\\u2fff\\u3000-\\u303f\\u3040-\\u30ff\\u3100-\\u31ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff\\uff00-\\uffef'
const NO_START = '、。，．・：；？！）」』】〕〉》ー々ゝゞヽヾぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ'
const OPEN = '「『（【〔〈《'
const TOKEN = new RegExp(`[${OPEN}]*(?:[${CJK}]|[^\\s${CJK}]+)[${NO_START}]*|\\s+`, 'gu')

/**
 * Splits text into lines no wider than `maxWidth`, breaking at spaces and
 * between CJK characters (following the basic Japanese line-start and
 * line-end rules). A word wider than the line gets a line of its own.
 */
export function wrapText(text: string, maxWidth: number, measure: (s: string) => number): string[] {
  const lines: string[] = []
  let line = ''
  for (const token of text.match(TOKEN) ?? []) {
    if (/^\s+$/.test(token)) {
      if (line) line += token
      continue
    }
    const candidate = line + token
    if (!line.trim() || measure(candidate.trimEnd()) <= maxWidth) {
      line = candidate
    } else {
      lines.push(line.trimEnd())
      line = token
    }
  }
  if (line.trim()) lines.push(line.trimEnd())
  return lines
}

/** Index of the button under a world point, or -1 */
export function hitButton(layout: HeroLayout, point: { x: number; y: number }): number {
  const hit = layout.buttons.find(
    b => point.x >= b.x && point.x <= b.x + b.width && point.y >= b.y && point.y <= b.y + b.height
  )
  return hit ? hit.index : -1
}

import { describe, expect, test } from 'bun:test'
import { hitButton, layoutHero, wrapText, type HeroContent, type Measure } from './hero-layout'

// Every character is half the font size wide
const measure: Measure = (text, font) => text.length * fontSize(font) * 0.5

function fontSize(font: string): number {
  return Number(/(\d+(?:\.\d+)?)px/.exec(font)?.[1] ?? 0)
}

const content: HeroContent = {
  name: 'uē-tôo',
  text: 'Canvas Toolkit for HTML',
  tagline:
    'Infinite canvas, animations, state machines, curves, physics, and more. A modular library for building rich canvas applications.',
  actions: [{ text: 'View Packages API', theme: 'brand' }],
}

const lineOf = (layout: ReturnType<typeof layoutHero>, role: string) => layout.lines.find(line => line.role === role)!

describe('layoutHero', () => {
  test('sizes follow the hero breakpoints', () => {
    const cases: [number, string, string][] = [
      [390, '32px', '18px'],
      [800, '48px', '20px'],
      [1400, '56px', '24px'],
    ]
    for (const [width, heading, tagline] of cases) {
      const layout = layoutHero(content, width, 'Inter', measure)
      expect(lineOf(layout, 'name').font).toContain(heading)
      expect(lineOf(layout, 'text').font).toContain(heading)
      expect(lineOf(layout, 'tagline').font).toContain(tagline)
    }
  })

  test('block is centred on the origin', () => {
    const layout = layoutHero(content, 1400, 'Inter', measure)
    const first = layout.lines[0]!
    // The first line is a 64px-tall line box, so its middle sits 32 below the top
    expect(first.y - 32).toBeCloseTo(-layout.height / 2)
    const button = layout.buttons[0]!
    expect(button.y + button.height).toBeCloseTo(layout.height / 2)
    for (const line of layout.lines) expect(line.x).toBe(0)
    expect(button.x + button.width / 2).toBeCloseTo(0)
  })

  test('tagline wraps at its max width', () => {
    const layout = layoutHero(content, 1400, 'Inter', measure)
    const taglines = layout.lines.filter(line => line.role === 'tagline')
    expect(taglines.length).toBeGreaterThan(1)
    for (const line of taglines) expect(measure(line.text, line.font, 0)).toBeLessThanOrEqual(576)
  })

  test('heading wraps only at the viewport', () => {
    // At 1400 the heading is wider than 576 but still fits the viewport
    const wide = layoutHero(content, 1400, 'Inter', measure)
    expect(wide.lines.filter(line => line.role === 'text').length).toBe(1)
    const phone = layoutHero(content, 390, 'Inter', measure)
    const texts = phone.lines.filter(line => line.role === 'text')
    expect(texts.length).toBeGreaterThan(1)
    for (const line of phone.lines) expect(measure(line.text, line.font, 0)).toBeLessThanOrEqual(342)
  })

  test('button box is the label plus padding', () => {
    const layout = layoutHero(content, 1400, 'Inter', measure)
    const button = layout.buttons[0]!
    expect(button.font).toContain('600 14px')
    expect(button.width).toBe(measure('View Packages API', button.font, 0) + 40)
    expect(button.height).toBe(40)
  })

  test('two buttons sit 12 apart', () => {
    const layout = layoutHero(
      { ...content, actions: [{ text: 'One', theme: 'brand' }, { text: 'Two', theme: 'alt' }] },
      1400,
      'Inter',
      measure
    )
    const [a, b] = layout.buttons
    expect(b!.x - (a!.x + a!.width)).toBe(12)
    expect(a!.y).toBe(b!.y)
    expect(a!.x + (b!.x + b!.width)).toBeCloseTo(0)
    expect(b!.theme).toBe('alt')
  })

  test('empty text and tagline add no lines', () => {
    const layout = layoutHero({ ...content, text: '', tagline: '' }, 1400, 'Inter', measure)
    expect(layout.lines.map(line => line.role)).toEqual(['name'])
  })
})

describe('wrapText', () => {
  const width = (s: string) => s.length * 10

  test('breaks at spaces', () => {
    expect(wrapText('aa bb cc', 50, width)).toEqual(['aa bb', 'cc'])
  })

  test('CJK wraps by character', () => {
    expect(wrapText('無限畫布動畫狀態機', 30, width)).toEqual(['無限畫', '布動畫', '狀態機'])
  })

  test('never starts a line with closing punctuation or small kana', () => {
    expect(wrapText('あいう。えお', 30, width)).toEqual(['あい', 'う。え', 'お'])
    expect(wrapText('パッケージ', 20, width)).toEqual(['パッ', 'ケー', 'ジ'])
    expect(wrapText('Canvas。あ', 60, width)).toEqual(['Canvas。', 'あ'])
  })

  test('keeps an opening bracket with the character after it', () => {
    expect(wrapText('あいう「えお」', 30, width)).toEqual(['あいう', '「え', 'お」'])
  })

  test('Japanese tagline lines start and end cleanly', () => {
    const tagline =
      '無限キャンバス、アニメーション、ステートマシン、カーブ、物理エンジンなど。リッチなCanvas アプリケーションを構築するためのモジュラーライブラリ。'
    for (const max of [40, 50, 70, 90, 130]) {
      for (const line of wrapText(tagline, max, width)) {
        expect(line).not.toMatch(/^[、。ーッャュョァィゥェォ）」]/)
        expect(line).not.toMatch(/[「（]$/)
      }
    }
  })

  test('keeps a word longer than the line on its own line', () => {
    expect(wrapText('a verylongword b', 50, width)).toEqual(['a', 'verylongword', 'b'])
  })
})

describe('hitButton', () => {
  const layout = layoutHero(
    { ...content, actions: [{ text: 'One', theme: 'brand' }, { text: 'Two', theme: 'alt' }] },
    1400,
    'Inter',
    measure
  )
  const [a, b] = layout.buttons

  test('finds the button under a point', () => {
    expect(hitButton(layout, { x: a!.x + 5, y: a!.y + 20 })).toBe(0)
    expect(hitButton(layout, { x: b!.x + b!.width - 5, y: b!.y + 20 })).toBe(1)
  })

  test('misses outside and between buttons', () => {
    expect(hitButton(layout, { x: 0, y: 0 })).toBe(-1)
    expect(hitButton(layout, { x: a!.x + a!.width + 6, y: a!.y + 20 })).toBe(-1)
    expect(hitButton(layout, { x: a!.x + 5, y: a!.y - 1 })).toBe(-1)
  })
})

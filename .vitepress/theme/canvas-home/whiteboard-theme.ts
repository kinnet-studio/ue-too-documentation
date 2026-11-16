/**
 * The drawing's colours on the home page, light and dark. Shapes store colour
 * names (ink, red, …); these turn them into colours that read on the site's
 * background in each theme.
 *
 * Only types come from @ue-too/board/whiteboard: this module loads with
 * every page, and the whiteboard itself loads with the home canvas only.
 */
import type { ColorName, WhiteboardTheme } from '@ue-too/board/whiteboard'

/** The whiteboard's own light palette (its DEFAULT_THEME) */
export const LIGHT_COLORS: Record<ColorName, string> = {
  ink: '#1e1e1e',
  red: '#e03131',
  blue: '#1971c2',
  green: '#2f9e44',
  orange: '#f08c00',
}

const LIGHT_PAPER: Record<ColorName, string> = {
  ink: '#fff0a3',
  red: '#ffc9c9',
  blue: '#a5d8ff',
  green: '#b2f2bb',
  orange: '#ffd8a8',
}

export const DARK_COLORS: Record<ColorName, string> = {
  ink: '#e8e8e0',
  red: '#ff8787',
  blue: '#74c0fc',
  green: '#8ce99a',
  orange: '#ffc078',
}

const DARK_PAPER: Record<ColorName, string> = {
  ink: '#e2cb5b',
  red: '#e8a0a0',
  blue: '#8fbfe0',
  green: '#9fd4a6',
  orange: '#e8bb88',
}

/**
 * @param dark - Whether the site is in dark mode
 * @param brand - The site's brand colour (`--vp-c-brand-1`), for selections
 * @param siteFont - The site's font stack, the fallback behind the handwriting font
 */
export function whiteboardTheme(dark: boolean, brand: string, siteFont: string): Partial<WhiteboardTheme> {
  return {
    colors: dark ? DARK_COLORS : LIGHT_COLORS,
    paper: dark ? DARK_PAPER : LIGHT_PAPER,
    paperText: dark ? '#231d00' : '#3d3300',
    selection: brand || '#4f7a33',
    fonts: { hand: `'Caveat', ${siteFont}` },
  }
}

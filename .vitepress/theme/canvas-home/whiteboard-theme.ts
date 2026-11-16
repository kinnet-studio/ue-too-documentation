/**
 * The drawing's colours on the home page, light and dark. Shapes store colour
 * names (ink, red, …); these turn them into colours that read on the site's
 * background in each theme.
 */
import { DEFAULT_THEME, type ColorName, type WhiteboardTheme } from '@ue-too/board/whiteboard'

const DARK_COLORS: Record<ColorName, string> = {
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
    colors: dark ? DARK_COLORS : DEFAULT_THEME.colors,
    paper: dark ? DARK_PAPER : DEFAULT_THEME.paper,
    paperText: dark ? '#231d00' : DEFAULT_THEME.paperText,
    selection: brand || DEFAULT_THEME.selection,
    fonts: { hand: `'Caveat', ${siteFont}` },
  }
}

/**
 * Drives the built board Live examples page in headless Chromium: running,
 * errors, tabs, the theme toggle, leaving the page, a CDN outage and phone
 * width.
 *
 * Usage: bun run test:examples:page [--url <page url>]
 *
 * Without --url it serves the latest line's build (`bunx vitepress build`
 * first) with `vitepress preview` on port 4173.
 */

import type { Browser, BrowserContextOptions, Page } from 'playwright'
import { launchBrowser } from './browser'
import { loadVersions } from './versions'

const TIMEOUT = 20000
const DEFAULT_URL = 'http://localhost:4173/ue-too-documentation/board/live-examples.html'

const urlFlag = process.argv.indexOf('--url')
const pageUrl = urlFlag === -1 ? DEFAULT_URL : process.argv[urlFlag + 1]
if (!pageUrl) throw new Error('--url needs a page URL')
const release = loadVersions().latest

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

async function waitForStatus(page: Page, expected: string | RegExp) {
  const pattern = typeof expected === 'string' ? `^${expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$` : expected.source
  await page
    .waitForFunction(
      source => new RegExp(source).test(document.querySelector('[data-testid=status]')?.textContent?.trim() ?? ''),
      pattern,
      { timeout: TIMEOUT }
    )
    .catch(async () => {
      const actual = await page.getByTestId('status').textContent().catch(() => null)
      throw new Error(`status never became ${expected}; it is ${JSON.stringify(actual?.trim())}`)
    })
}

// Replaces the editor's whole text, or inserts at the start with { prepend: true }
async function editCode(page: Page, text: string, { prepend = false } = {}) {
  await page.locator('.cm-content').click()
  await page.keyboard.press(prepend ? 'Control+Home' : 'Control+A')
  await page.keyboard.insertText(text)
}

async function openPage(browser: Browser, options: BrowserContextOptions = {}) {
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 }, ...options })
  const page = await context.newPage()
  return { context, page }
}

const checks: Record<string, (browser: Browser) => Promise<void>> = {
  async runs(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    const version = (await page.getByTestId('version').textContent())?.trim()
    assert(version === `@ue-too/board ${release}`, `version chip reads ${JSON.stringify(version)}`)
    await context.close()
  },

  async 'edit-and-error'(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    await editCode(page, 'nope()\n', { prepend: true })
    await page.keyboard.press('Control+Enter')
    await waitForStatus(page, 'Error (line 1)')
    const firstRow = await page.getByTestId('console-row').first().textContent()
    assert(firstRow?.includes('nope'), `first console row is ${JSON.stringify(firstRow)}`)
    assert((await page.locator('.cm-error-line').count()) > 0, 'no .cm-error-line in the editor')
    await context.close()
  },

  async 'tabs-keep-edits'(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    await editCode(page, '// edited\n', { prepend: true })
    await page.getByTestId('tab-limits').click()
    await waitForStatus(page, 'Running')
    // Undo stays within a tab: it must not bring back the previous tab's code
    await page.locator('.cm-content').click()
    await page.keyboard.press('Control+z')
    const afterUndo = await page.locator('.cm-content').innerText()
    assert(afterUndo.includes('setMinZoomLevel') && !afterUndo.includes('// edited'), 'undo on Zoom limits brought back Pan and zoom code')
    assert((await page.getByTestId('tab-limits').getByTestId('edited').count()) === 0, 'undo marked Zoom limits as edited')
    await page.getByTestId('tab-pan-zoom').click()
    const text = await page.locator('.cm-content').innerText()
    assert(text.startsWith('// edited'), 'the edit was lost after switching tabs')
    assert((await page.getByTestId('tab-pan-zoom').getByTestId('edited').count()) === 1, 'no edited dot on the tab')
    await page.getByTestId('reset').click()
    const reset = await page.locator('.cm-content').innerText()
    assert(!reset.includes('// edited'), 'Reset did not restore the original code')
    assert((await page.getByTestId('tab-pan-zoom').getByTestId('edited').count()) === 0, 'edited dot still shown after Reset')
    await context.close()
  },

  async 'frame-error'(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    await editCode(page, "function frame() {\nrequestAnimationFrame(frame);\nthrow new Error('again');\n}\nrequestAnimationFrame(frame);\n")
    await page.keyboard.press('Control+Enter')
    await waitForStatus(page, /^Error/)
    await page.waitForTimeout(1500)
    const rows = page.getByTestId('console-row')
    assert((await rows.count()) === 1, `expected 1 console row, got ${await rows.count()}`)
    const row = (await rows.first().textContent()) ?? ''
    const times = Number(/×(\d+)/.exec(row)?.[1] ?? 0)
    assert(times > 10, `expected the row to count more than 10 repeats, it says ${JSON.stringify(row)}`)
    const responsive = await Promise.race([page.evaluate(() => 1), Bun.sleep(500).then(() => 0)])
    assert(responsive === 1, 'the page did not respond within 500 ms')
    await context.close()
  },

  async 'theme-toggle'(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    const background = () => page.locator('.cm-editor').evaluate(el => getComputedStyle(el).backgroundColor)
    const before = await background()
    await page.evaluate(() => {
      document.querySelector('iframe')!.dataset.mark = 'before-toggle'
    })
    await page.locator('.VPNavBarAppearance .VPSwitchAppearance').click()
    await page.waitForTimeout(300)
    const after = await background()
    assert(before !== after, `editor background stayed ${before}`)
    await waitForStatus(page, 'Running')
    const frames = await page.evaluate(() => [...document.querySelectorAll('iframe')].map(f => f.dataset.mark))
    assert(frames.length === 1 && frames[0] === 'before-toggle', 'the preview re-ran when the theme changed')
    await context.close()
  },

  async 'navigate-away'(browser) {
    const { context, page } = await openPage(browser)
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    await page.locator('.VPSidebar a', { hasText: 'Overview' }).first().click()
    await page.waitForURL(url => !url.pathname.includes('live-examples'), { timeout: TIMEOUT })
    await page.waitForTimeout(300)
    assert((await page.locator('iframe').count()) === 0, 'the preview iframe outlived the page')
    await page.goBack()
    await waitForStatus(page, 'Running')
    assert((await page.locator('iframe').count()) === 1, 'expected exactly one preview iframe after coming back')
    await context.close()
  },

  async 'cdn-down'(browser) {
    const { context, page } = await openPage(browser)
    await context.route(/@ue-too\//, route => route.abort())
    await page.goto(pageUrl)
    await waitForStatus(page, 'Could not load @ue-too/board')
    const rows = await page.getByTestId('console-row').allTextContents()
    assert(rows.some(row => row.includes('Check your connection')), `console rows: ${JSON.stringify(rows)}`)
    await context.close()
  },

  async phone(browser) {
    const { context, page } = await openPage(browser, {
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
      deviceScaleFactor: 2,
    })
    await page.goto(pageUrl)
    await waitForStatus(page, 'Running')
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    assert(overflow === 0, `the page scrolls sideways by ${overflow}px`)
    const previewTop = (await page.getByTestId('preview').boundingBox())?.y ?? Infinity
    const editorTop = (await page.getByTestId('editor').boundingBox())?.y ?? -Infinity
    assert(previewTop < editorTop, 'the canvas is not above the editor')
    assert(await page.getByText('Two fingers to pan · pinch to zoom').isVisible(), 'touch hint not visible')
    assert(!(await page.locator('.lp-key').isVisible()), 'the Run keyboard shortcut is shown on a touch device')
    await context.close()
  },
}

async function startPreviewServer() {
  const server = Bun.spawn(['bunx', 'vitepress', 'preview', '--port', '4173'], { stdout: 'ignore', stderr: 'inherit' })
  const deadline = Date.now() + TIMEOUT
  while (Date.now() < deadline) {
    const ok = await fetch(pageUrl).then(r => r.ok, () => false)
    if (ok) return server
    await Bun.sleep(250)
  }
  server.kill()
  throw new Error(`vitepress preview did not serve ${pageUrl}; run \`bunx vitepress build\` first`)
}

const server = urlFlag === -1 ? await startPreviewServer() : null
const browser = await launchBrowser()
let failed = 0
for (const [name, run] of Object.entries(checks)) {
  try {
    await run(browser)
    console.log(`✓ ${name}`)
  } catch (error) {
    failed++
    console.log(`✗ ${name}: ${error instanceof Error ? error.message : error}`)
  }
}
await browser.close()
server?.kill()

console.log(`${Object.keys(checks).length - failed} of ${Object.keys(checks).length} page checks passed`)
process.exit(failed > 0 ? 1 : 0)

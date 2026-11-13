/**
 * Drives the built home page in headless Chromium: the hero drawn on the
 * ue-too canvas, panning, zooming, clicking its button, keyboard focus, the
 * theme toggle, the locales, leaving the page, phone width and no JavaScript.
 *
 * Usage: bun run test:home:page [--url <site root url>]
 *
 * Without --url it serves the latest line's build (`bunx vitepress build`
 * first) with `vitepress preview` on port 4173.
 */

import type { Browser, BrowserContext, BrowserContextOptions, Page } from 'playwright'
import { launchBrowser } from './browser'
// For the window.__canvasHome test hook's type
import type {} from '../.vitepress/theme/canvas-home/canvas-home'

const TIMEOUT = 20000
const DEFAULT_URL = 'http://localhost:4173/'

const urlFlag = process.argv.indexOf('--url')
const urlArg = urlFlag === -1 ? DEFAULT_URL : process.argv[urlFlag + 1]
if (!urlArg) throw new Error('--url needs the site root URL')
const siteUrl = urlArg.replace(/\/?$/, '/')

interface Rect {
  x: number
  y: number
  width: number
  height: number
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

function near(actual: number, expected: number, tolerance: number, what: string) {
  assert(Math.abs(actual - expected) <= tolerance, `${what}: expected ${expected} ± ${tolerance}, got ${actual.toFixed(2)}`)
}

async function openHome(browser: Browser, path = '', options: BrowserContextOptions = {}) {
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 }, ...options })
  const page = await context.newPage()
  await page.goto(siteUrl + path)
  await waitForCanvas(page)
  return { context, page }
}

async function waitForCanvas(page: Page) {
  await page.waitForFunction(() => window.__canvasHome, null, { timeout: TIMEOUT }).catch(() => {
    throw new Error('the home page canvas never mounted')
  })
}

async function buttonRect(page: Page): Promise<Rect> {
  const rects = await page.evaluate(() => window.__canvasHome!.buttonRects().map(r => ({ x: r.x, y: r.y, width: r.width, height: r.height })))
  assert(rects.length > 0, 'the hero has no buttons')
  return rects[0]!
}

const centre = (rect: Rect) => ({ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 })

const camera = (page: Page) => page.evaluate(() => window.__canvasHome!.camera())

// The Back to start pill in window coordinates, or null while it's hidden
async function backRect(page: Page): Promise<Rect | null> {
  return page.evaluate(() => {
    const r = window.__canvasHome!.backButtonRect()
    return r && { x: r.x, y: r.y, width: r.width, height: r.height }
  })
}

async function drag(page: Page, from: { x: number; y: number }, to: { x: number; y: number }) {
  await page.mouse.move(from.x, from.y)
  await page.mouse.down()
  await page.mouse.move(to.x, to.y, { steps: 8 })
  await page.mouse.up()
}

// Empty canvas well away from the hero, at the default 1400 × 1000 window
const EMPTY = { x: 200, y: 760 }

async function onPackagesPage(page: Page, locale = '') {
  const pattern = new RegExp(`^${new URL(siteUrl).pathname}${locale}packages(\\.html)?$`)
  await page.waitForURL(url => pattern.test(url.pathname), { timeout: TIMEOUT })
}

async function canvasGone(page: Page) {
  await page.waitForTimeout(300)
  assert((await page.locator('canvas.canvas-home').count()) === 0, 'the home canvas outlived the home page')
  const classes = await page.evaluate(() => document.documentElement.className)
  assert(!/\bcanvas-home\b/.test(classes), `<html> still has the canvas-home class: ${classes}`)
}

const PHONE: BrowserContextOptions = { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 }

// When the canvas can't run, the HTML hero shows and the page scrolls as usual; returns the page errors
async function expectFallback(context: BrowserContext): Promise<string[]> {
  const page = await context.newPage()
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto(siteUrl)
  await page
    .waitForFunction(() => document.documentElement.classList.contains('canvas-home-failed'), null, { timeout: TIMEOUT })
    .catch(() => {
      throw new Error('the page never fell back to the HTML hero')
    })
  await page.waitForTimeout(500)
  const heading = await page.locator('.VPHomeHero h1').boundingBox()
  assert(heading && heading.width > 100, `the HTML hero is hidden: ${JSON.stringify(heading)}`)
  assert(await page.locator('.VPHomeHero .actions a').first().isVisible(), 'the hero link is not visible')
  assert(await page.locator('.VPNav').isVisible(), 'the top bar is not visible')
  assert(!(await page.locator('canvas.canvas-home').isVisible()), 'the canvas still shows')
  const overflow = await page.evaluate(() => getComputedStyle(document.documentElement).overflow)
  assert(overflow !== 'hidden', 'the page is still scroll-locked')
  await context.close()
  return errors
}

const checks: Record<string, (browser: Browser) => Promise<void>> = {
  async renders(browser) {
    const { context, page } = await openHome(browser)
    const box = await page.getByTestId('canvas-home').boundingBox()
    assert(box && box.x === 0 && box.y === 0 && box.width === 1400 && box.height === 1000, `canvas box is ${JSON.stringify(box)}`)
    const heading = page.locator('.VPHomeHero h1')
    assert((await heading.textContent())?.includes('Canvas Toolkit for HTML'), 'the HTML hero heading is missing')
    const headingBox = await heading.boundingBox()
    assert(!headingBox || headingBox.width <= 1, `the HTML hero is visible: ${JSON.stringify(headingBox)}`)
    const scroll = await page.evaluate(() => {
      const root = document.documentElement
      return { x: root.scrollWidth - root.clientWidth, y: root.scrollHeight - root.clientHeight }
    })
    assert(scroll.x <= 0 && scroll.y <= 0, `the page scrolls: ${JSON.stringify(scroll)}`)
    await context.close()
  },

  async 'drag-pans'(browser) {
    const { context, page } = await openHome(browser)
    const before = await buttonRect(page)
    await drag(page, EMPTY, { x: EMPTY.x + 150, y: EMPTY.y + 80 })
    const after = await buttonRect(page)
    near(after.x - before.x, 150, 1, 'button moved across')
    near(after.y - before.y, 80, 1, 'button moved down')
    await context.close()
  },

  async 'space-drag-pans-once'(browser) {
    const { context, page } = await openHome(browser)
    const before = await buttonRect(page)
    await page.mouse.move(EMPTY.x, EMPTY.y)
    await page.keyboard.down('Space')
    await drag(page, EMPTY, { x: EMPTY.x + 100, y: EMPTY.y })
    await page.keyboard.up('Space')
    const after = await buttonRect(page)
    near(after.x - before.x, 100, 2, 'Space + drag moved the button')
    await context.close()
  },

  async 'click-navigates'(browser) {
    const { context, page } = await openHome(browser)
    const { x, y } = centre(await buttonRect(page))
    await page.mouse.click(x, y)
    await onPackagesPage(page)
    await canvasGone(page)
    await context.close()
  },

  async 'drag-from-button-stays'(browser) {
    const { context, page } = await openHome(browser)
    const url = page.url()
    const before = await buttonRect(page)
    const start = centre(before)
    await drag(page, start, { x: start.x + 100, y: start.y })
    await page.waitForTimeout(300)
    assert(page.url() === url, `dragging from the button navigated to ${page.url()}`)
    near((await buttonRect(page)).x - before.x, 100, 1, 'button moved with the drag')
    await context.close()
  },

  async 'hover-cursor'(browser) {
    const { context, page } = await openHome(browser)
    const cursor = () => page.getByTestId('canvas-home').evaluate(el => el.style.cursor)
    const { x, y } = centre(await buttonRect(page))
    await page.mouse.move(x, y)
    assert((await cursor()) === 'pointer', `cursor over the button is ${await cursor()}`)
    await page.mouse.move(EMPTY.x, EMPTY.y)
    assert((await cursor()) === 'grab', `cursor over empty canvas is ${await cursor()}`)
    await context.close()
  },

  async 'ctrl-click-new-tab'(browser) {
    const { context, page } = await openHome(browser)
    const url = page.url()
    const { x, y } = centre(await buttonRect(page))
    // mouse.click() has no modifiers option: hold Ctrl on the keyboard instead
    await page.keyboard.down('Control')
    const [popup] = await Promise.all([context.waitForEvent('page', { timeout: TIMEOUT }), page.mouse.click(x, y)])
    await page.keyboard.up('Control')
    await popup.waitForLoadState()
    assert(/\/packages(\.html)?$/.test(new URL(popup.url()).pathname), `new tab opened ${popup.url()}`)
    assert(page.url() === url, `the home tab navigated to ${page.url()}`)
    await context.close()
  },

  async 'middle-click-new-tab'(browser) {
    const { context, page } = await openHome(browser)
    const url = page.url()
    const { x, y } = centre(await buttonRect(page))
    const [popup] = await Promise.all([
      context.waitForEvent('page', { timeout: TIMEOUT }),
      page.mouse.click(x, y, { button: 'middle' }),
    ])
    await popup.waitForLoadState()
    assert(/\/packages(\.html)?$/.test(new URL(popup.url()).pathname), `new tab opened ${popup.url()}`)
    assert(page.url() === url, `the home tab navigated to ${page.url()}`)
    await context.close()
  },

  async keyboard(browser) {
    const { context, page } = await openHome(browser)
    // Pan the button out of view, as far as the bounds allow
    await drag(page, { x: 100, y: 500 }, { x: 1350, y: 500 })
    const away = await buttonRect(page)
    assert(away.x > 1400, `the button is still in view at x ${away.x}`)
    let focused = false
    for (let i = 0; i < 30 && !focused; i++) {
      await page.keyboard.press('Tab')
      focused = await page.evaluate(() => !!document.activeElement?.closest('.VPHomeHero .actions'))
    }
    assert(focused, 'Tab never reached the hero link')
    const back = await buttonRect(page)
    assert(back.x >= 0 && back.x + back.width <= 1400 && back.y >= 0 && back.y + back.height <= 1000, `focused button is out of view: ${JSON.stringify(back)}`)
    await page.keyboard.press('Enter')
    await onPackagesPage(page)
    await context.close()
  },

  async 'back-to-start'(browser) {
    const { context, page } = await openHome(browser)
    const start = await camera(page)
    assert((await backRect(page)) === null, 'Back to start shows before the camera moved')
    await drag(page, EMPTY, { x: EMPTY.x + 300, y: EMPTY.y + 150 })
    await page.mouse.move(700, 400)
    await page.keyboard.down('Control')
    await page.mouse.wheel(0, -200)
    await page.keyboard.up('Control')
    await page.waitForTimeout(100)
    const rect = await backRect(page)
    assert(rect, 'Back to start did not show after panning and zooming')
    const cursor = () => page.getByTestId('canvas-home').evaluate(el => el.style.cursor)
    const { x, y } = centre(rect)
    await page.mouse.move(x, y)
    assert((await cursor()) === 'pointer', `cursor over Back to start is ${await cursor()}`)
    await page.mouse.click(x, y)
    await page.waitForTimeout(200)
    // The pill hides during the flight, so the cursor over the now empty canvas is a hand again
    assert((await cursor()) === 'grab', `cursor during the flight is ${await cursor()}`)
    await page.waitForTimeout(1300)
    const end = await camera(page)
    assert(end.x === start.x && end.y === start.y && end.zoom === start.zoom, `landed at ${JSON.stringify(end)}, start was ${JSON.stringify(start)}`)
    assert((await backRect(page)) === null, 'Back to start still shows at the start view')
    await context.close()
  },

  async 'back-to-start-keyboard'(browser) {
    const { context, page } = await openHome(browser)
    const start = await camera(page)
    await drag(page, EMPTY, { x: EMPTY.x + 300, y: EMPTY.y + 150 })
    let focused = false
    for (let i = 0; i < 30 && !focused; i++) {
      await page.keyboard.press('Tab')
      focused = await page.evaluate(() => document.activeElement?.getAttribute('data-testid') === 'canvas-home-back')
    }
    assert(focused, 'Tab never reached Back to start')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1500)
    const end = await camera(page)
    assert(end.x === start.x && end.y === start.y && end.zoom === start.zoom, `landed at ${JSON.stringify(end)}, start was ${JSON.stringify(start)}`)
    await context.close()
  },

  async 'back-to-start-interrupted'(browser) {
    const { context, page } = await openHome(browser)
    const start = await camera(page)
    await drag(page, EMPTY, { x: EMPTY.x + 400, y: EMPTY.y + 200 })
    const rect = await backRect(page)
    assert(rect, 'Back to start did not show after panning')
    const { x, y } = centre(rect)
    await page.mouse.click(x, y)
    await page.waitForTimeout(300)
    await drag(page, EMPTY, { x: EMPTY.x - 100, y: EMPTY.y })
    const afterDrag = await camera(page)
    await page.waitForTimeout(1300)
    const end = await camera(page)
    assert(end.x === afterDrag.x && end.y === afterDrag.y && end.zoom === afterDrag.zoom, `the flight kept going after the drag: ${JSON.stringify(afterDrag)} → ${JSON.stringify(end)}`)
    assert(end.x !== start.x || end.y !== start.y, 'the camera still reached the start view')
    await context.close()
  },

  async 'back-to-start-two-fingers'(browser) {
    const { context, page } = await openHome(browser, '', PHONE)
    const cdp = await context.newCDPSession(page)
    const touch = (type: 'touchStart' | 'touchMove' | 'touchEnd', points: { x: number; y: number; id: number }[]) =>
      cdp.send('Input.dispatchTouchEvent', { type, touchPoints: points })
    const swipe = async (dx: number) => {
      await touch('touchStart', [{ x: 100, y: 400, id: 0 }])
      for (let i = 1; i <= 6; i++) await touch('touchMove', [{ x: 100 + (i * dx) / 6, y: 400, id: 0 }])
      await touch('touchEnd', [])
      await page.waitForTimeout(100)
    }
    await swipe(120)
    const rect = await backRect(page)
    assert(rect, 'Back to start did not show after panning')
    const pill = centre(rect)
    // A finger on the canvas, then a second on the pill. touchEnd lifts them in
    // the order they went down, so the canvas finger lifts while the pill is pressed
    await touch('touchStart', [{ x: 100, y: 300, id: 0 }])
    await touch('touchStart', [{ x: 100, y: 300, id: 0 }, { x: pill.x, y: pill.y, id: 1 }])
    await touch('touchEnd', [])
    await page.waitForTimeout(1300)
    const before = await camera(page)
    await swipe(60)
    const after = await camera(page)
    assert(after.x !== before.x, `one finger no longer pans after a two-finger press on Back to start: ${JSON.stringify(before)} → ${JSON.stringify(after)}`)
    await context.close()
  },

  async zoom(browser) {
    const { context, page } = await openHome(browser)
    const zoom = () => page.evaluate(() => window.__canvasHome!.camera().zoom)
    await page.mouse.move(700, 500)
    await page.keyboard.down('Control')
    await page.mouse.wheel(0, -200)
    await page.waitForTimeout(100)
    const zoomedIn = await zoom()
    assert(zoomedIn > 1, `Ctrl + scroll up left zoom at ${zoomedIn}`)
    for (let i = 0; i < 40; i++) await page.mouse.wheel(0, -400)
    await page.waitForTimeout(100)
    assert((await zoom()) <= 4 + 1e-6, `zoomed in past 4: ${await zoom()}`)
    for (let i = 0; i < 80; i++) await page.mouse.wheel(0, 400)
    await page.waitForTimeout(100)
    assert((await zoom()) >= 0.5 - 1e-6, `zoomed out past 0.5: ${await zoom()}`)
    await page.keyboard.up('Control')
    await context.close()
  },

  async theme(browser) {
    const { context, page } = await openHome(browser)
    const pixel = async () => {
      const { x, y } = await buttonRect(page)
      // A point inside the button, clear of its label
      return page.getByTestId('canvas-home').evaluate((canvas: HTMLCanvasElement, at) => {
        const ratio = window.devicePixelRatio
        return [...canvas.getContext('2d')!.getImageData(Math.round(at.x * ratio), Math.round(at.y * ratio), 1, 1).data].join(',')
      }, { x: x + 8, y: y + 20 })
    }
    const before = await pixel()
    await page.locator('.VPNavBarAppearance .VPSwitchAppearance').click()
    await page.waitForTimeout(300)
    const after = await pixel()
    assert(before !== after, `the button stayed ${before} after switching the theme`)
    await context.close()
  },

  async locales(browser) {
    for (const locale of ['ja/', 'zh-TW/']) {
      const { context, page } = await openHome(browser, locale)
      const { x, y } = centre(await buttonRect(page))
      await page.mouse.click(x, y)
      await onPackagesPage(page, locale)
      await context.close()
    }
  },

  async 'back-and-forth'(browser) {
    const { context, page } = await openHome(browser)
    const { x, y } = centre(await buttonRect(page))
    await page.mouse.click(x, y)
    await onPackagesPage(page)
    await page.goBack()
    await waitForCanvas(page)
    assert((await page.locator('canvas.canvas-home').count()) === 1, 'expected exactly one canvas after coming back')
    const classes = await page.evaluate(() => document.documentElement.className)
    assert(/\bcanvas-home\b/.test(classes), `<html> lost the canvas-home class: ${classes}`)
    await context.close()
  },

  async 'other-pages'(browser) {
    const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } })
    const page = await context.newPage()
    await page.goto(`${siteUrl}board/`)
    await page.waitForLoadState('networkidle')
    await canvasGone(page)
    await page.evaluate(() => window.scrollTo(0, 400))
    assert((await page.evaluate(() => window.scrollY)) > 0, 'the board overview page no longer scrolls')
    await context.close()
  },

  async phone(browser) {
    const { context, page } = await openHome(browser, '', PHONE)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    assert(overflow === 0, `the page scrolls sideways by ${overflow}px`)
    const before = await buttonRect(page)
    assert(before.x >= 0 && before.x + before.width <= 390, `button is outside the screen: ${JSON.stringify(before)}`)

    // One finger drags the canvas
    const cdp = await context.newCDPSession(page)
    const touch = (type: 'touchStart' | 'touchMove' | 'touchEnd', x: number, y: number) =>
      cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] })
    await touch('touchStart', 100, 720)
    for (let i = 1; i <= 6; i++) await touch('touchMove', 100 + i * 10, 720 + i * 10)
    await touch('touchEnd', 160, 780)
    const after = await buttonRect(page)
    near(after.x - before.x, 60, 2, 'one-finger drag moved the button across')
    near(after.y - before.y, 60, 2, 'one-finger drag moved the button down')

    const { x, y } = centre(after)
    await page.touchscreen.tap(x, y)
    await onPackagesPage(page)
    await context.close()
  },

  async 'second-finger'(browser) {
    const { context, page } = await openHome(browser, '', PHONE)
    const camera = () => page.evaluate(() => window.__canvasHome!.camera())
    const cdp = await context.newCDPSession(page)
    const touch = (type: 'touchStart' | 'touchMove' | 'touchEnd', points: { x: number; y: number; id: number }[]) =>
      cdp.send('Input.dispatchTouchEvent', { type, touchPoints: points })
    // One finger pans 200px, then a second finger lands and both barely move
    await touch('touchStart', [{ x: 100, y: 600, id: 0 }])
    for (let i = 1; i <= 10; i++) await touch('touchMove', [{ x: 100 + i * 20, y: 600, id: 0 }])
    const before = await camera()
    await touch('touchStart', [{ x: 300, y: 600, id: 0 }, { x: 300, y: 700, id: 1 }])
    for (let i = 1; i <= 2; i++) await touch('touchMove', [{ x: 300, y: 600 + i, id: 0 }, { x: 300, y: 700 + i, id: 1 }])
    await touch('touchEnd', [])
    await page.waitForTimeout(100)
    const after = await camera()
    near(after.zoom, before.zoom, 0.05, 'zoom after the second finger landed')
    assert(Math.hypot(after.x - before.x, after.y - before.y) < 10, `the camera jumped from ${JSON.stringify(before)} to ${JSON.stringify(after)}`)
    await context.close()
  },

  async 'failed-import'(browser) {
    const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } })
    await context.route(/\/chunks\/canvas-home\.[^/]*\.js$/, route => route.abort())
    await expectFallback(context)
  },

  async 'old-browser'(browser) {
    const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } })
    // Safari before 18 has no context.reset(), which the board calls every frame
    await context.addInitScript(() => {
      delete (CanvasRenderingContext2D.prototype as Partial<CanvasRenderingContext2D>).reset
    })
    await expectFallback(context)
  },

  async 'draw-error'(browser) {
    const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } })
    await context.addInitScript(() => {
      CanvasRenderingContext2D.prototype.fillText = () => {
        throw new Error('fillText failed')
      }
    })
    const errors = await expectFallback(context)
    assert(errors.length <= 2, `the failing frame kept running: ${errors.length} errors`)
  },

  async 'no-javascript'(browser) {
    const context = await browser.newContext({ viewport: { width: 1400, height: 1000 }, javaScriptEnabled: false })
    const page = await context.newPage()
    await page.goto(siteUrl)
    const box = await page.locator('.VPHomeHero h1').boundingBox()
    assert(box && box.width > 100, `the HTML hero is hidden without JavaScript: ${JSON.stringify(box)}`)
    assert(!(await page.locator('canvas.canvas-home').isVisible()), 'the empty canvas shows without JavaScript')
    await context.close()
  },
}

async function startPreviewServer() {
  const server = Bun.spawn(['bunx', 'vitepress', 'preview', '--port', '4173'], { stdout: 'ignore', stderr: 'inherit' })
  const deadline = Date.now() + TIMEOUT
  while (Date.now() < deadline) {
    const ok = await fetch(siteUrl).then(r => r.ok, () => false)
    if (ok) return server
    await Bun.sleep(250)
  }
  server.kill()
  throw new Error(`vitepress preview did not serve ${siteUrl}; run \`bunx vitepress build\` first`)
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

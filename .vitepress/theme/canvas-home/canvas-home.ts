/**
 * The home page canvas: a full-window @ue-too/board with the hero drawn on it
 * and a whiteboard on top.
 *
 * The whiteboard editor (@ue-too/board/whiteboard) owns the pointer: its hand
 * tool pans with a plain drag, its drawing tools draw, and the board's own
 * gestures (Ctrl + scroll, pinch, Space + drag) keep working. The hero sits
 * underneath the drawing: with the hand or select tool, a click on one of its
 * buttons (where no shape covers it) activates the button. Loaded on demand by
 * CanvasHome.vue, so only the home page downloads the board.
 */

import { Board, type CameraMuxWithAnimationAndLock, createZoomPanPath, type ZoomPanPath } from '@ue-too/board'
import { Editor, type WhiteboardDocument, type WhiteboardTheme } from '@ue-too/board/whiteboard'
import { backPillRect, inRect, isAway, PILL_HEIGHT, type Rect, type View } from './back-to-start'
import { hitButton, layoutHero, type HeroButton, type HeroContent, type HeroLayout, type Measure } from './hero-layout'

interface Point {
  x: number
  y: number
}

export interface CanvasHomeOptions {
  content: HeroContent
  /** The label of the pill that flies the camera back to where the page opened */
  backLabel: string
  /** The drawing to edit */
  document: WhiteboardDocument
  /** Colours and font for the drawing (see whiteboard-theme.ts) */
  theme: Partial<WhiteboardTheme>
  /** A hero button was clicked; `newTab` for Ctrl/Cmd/Shift or a middle click */
  onActivate: (index: number, newTab: boolean) => void
  /** Drawing failed; the canvas has already been torn down */
  onError: (error: unknown) => void
}

export interface CanvasHomeHandle {
  /** The whiteboard editor drawing on the canvas */
  editor: Editor
  setContent(content: HeroContent, backLabel: string): void
  /** Re-reads the site's colors, after a light/dark switch, and gives the drawing its theme */
  refreshTheme(theme: Partial<WhiteboardTheme>): void
  /** Draws a focus ring on a button (-1 clears it) and pans it into view */
  setFocused(index: number): void
  /** Flies the camera back to the view the page opened with */
  goBack(): void
  /** Shows the Back to start pill with a focus ring while its HTML copy has focus */
  setBackFocused(focused: boolean): void
  /**
   * How far the HTML at the bottom of the window (hint, style panel, dock)
   * reaches up from the window's bottom edge, in CSS pixels; the Back to
   * start pill sits above it
   */
  setBottomInset(px: number): void
  destroy(): void
  /** The buttons' boxes in window coordinates (for tests) */
  buttonRects(): DOMRect[]
  /** The Back to start pill's box in window coordinates, or null while it's hidden (for tests) */
  backButtonRect(): DOMRect | null
  camera(): { x: number; y: number; zoom: number }
}

declare global {
  interface Window {
    __canvasHome?: CanvasHomeHandle
  }
}

const MIN_ZOOM = 0.25
const MAX_ZOOM = 4
// The page opens at least this zoomed in, so the hero stays readable
const MIN_START_ZOOM = 0.5
// How far the camera centre can move from the hero, in world units
const PAN_LIMIT = 4000
// Grid spacing in world units, doubled while the dots would be closer than MIN_GRID_PX on screen
const GRID = 40
const MIN_GRID_PX = 16
const BUTTON_RADIUS = 20
const PILL_FONT_SIZE = 13
// How much of the window's bottom the HTML column (hint and dock) covers
// until it reports its height: 30 hint + 10 gap + 48 dock + 20 margin
const DEFAULT_BOTTOM_INSET = 108
// How long the flight back to the start takes
const FLIGHT_MS = 1000
// A press that moves further than this, in CSS pixels, isn't a click on a hero button
const PRESS_SLOP = 5

interface ButtonColors {
  bg: string
  hover: string
  active: string
  text: string
  border: string
}

interface Colors {
  name: string
  text: string
  tagline: string
  grid: string
  ring: string
  brand: ButtonColors
  alt: ButtonColors
}

function readColors(): Colors {
  const style = getComputedStyle(document.documentElement)
  const v = (name: string) => style.getPropertyValue(name).trim()
  const button = (theme: 'brand' | 'alt'): ButtonColors => ({
    bg: v(`--vp-button-${theme}-bg`),
    hover: v(`--vp-button-${theme}-hover-bg`),
    active: v(`--vp-button-${theme}-active-bg`),
    text: v(`--vp-button-${theme}-text`),
    border: v(`--vp-button-${theme}-border`),
  })
  return {
    name: v('--vp-home-hero-name-color'),
    text: v('--vp-c-text-1'),
    tagline: v('--vp-c-text-2'),
    grid: v('--vp-c-text-3'),
    ring: v('--vp-c-brand-1'),
    brand: button('brand'),
    alt: button('alt'),
  }
}

type LetterSpacingContext = CanvasRenderingContext2D & { letterSpacing?: string }

function setLetterSpacing(ctx: LetterSpacingContext, px: number) {
  if ('letterSpacing' in ctx) ctx.letterSpacing = `${px}px`
}

/**
 * Mounts the canvas. Throws if the browser lacks what the board draws with
 * (Safari before 18 has no `context.reset()`), so the caller can fall back to
 * the HTML hero.
 */
export function mountCanvasHome(canvas: HTMLCanvasElement, options: CanvasHomeOptions): CanvasHomeHandle {
  const prototype = CanvasRenderingContext2D.prototype
  if (!('reset' in prototype) || !('roundRect' in prototype)) {
    throw new Error('This browser cannot draw the home page canvas')
  }
  const board = new Board(canvas)
  board.fullScreen = true
  // Bound the camera centre, not the whole viewport, so zooming out isn't limited by the bounds
  board.limitEntireViewPort = false
  board.camera.boundaries = { min: { x: -PAN_LIMIT, y: -PAN_LIMIT }, max: { x: PAN_LIMIT, y: PAN_LIMIT } }
  board.camera.setMinZoomLevel(MIN_ZOOM)
  board.camera.setMaxZoomLevel(MAX_ZOOM)
  const rig = board.getCameraRig()
  const mux = board.cameraMux as CameraMuxWithAnimationAndLock

  const measureContext = document.createElement('canvas').getContext('2d') as LetterSpacingContext
  const measure: Measure = (text, font, letterSpacing) => {
    measureContext.font = font
    setLetterSpacing(measureContext, letterSpacing)
    return measureContext.measureText(text).width
  }

  let content = options.content
  let backLabel = options.backLabel
  let colors = readColors()
  let fontFamily = getComputedStyle(document.body).fontFamily
  let layout: HeroLayout = layoutHero(content, window.innerWidth, fontFamily, measure)
  // Hero button states, for their colours only: clicks go through the editor
  let hovered = -1
  let pressed = -1
  let pressStart: Point | null = null
  let focused = -1
  let frame = 0
  // The view the page opened with, set by frameHero()
  let home: View = currentView()
  // The flight back to it, while one is under way
  let flight: { path: ZoomPanPath; start: number } | null = null
  // The Back to start pill as last drawn (window coordinates), or null while hidden
  let backRect: Rect | null = null
  let backHovered = false
  let backPressed = false
  let backFocused = false
  let bottomInset = DEFAULT_BOTTOM_INSET
  let insetReported = false
  // Where the mouse last was over the canvas, or null once it left
  let lastMouse: { id: number; x: number; y: number } | null = null

  const editor = new Editor({
    board,
    canvas,
    document: options.document,
    theme: options.theme,
    background: {
      hitTest: world => hitButton(layout, world) >= 0,
      activate: (world, pointer) => {
        const index = hitButton(layout, world)
        if (index < 0) return
        options.onActivate(index, pointer.ctrlKey || pointer.metaKey || pointer.shiftKey || pointer.button === 1)
      },
      // The Back to start pill takes its presses whatever the tool
      ownsPointer: client => !!backRect && inRect(backRect, client),
    },
  })

  function relayout() {
    fontFamily = getComputedStyle(document.body).fontFamily
    layout = layoutHero(content, window.innerWidth, fontFamily, measure)
  }

  // Web fonts may arrive after the first layout; measure again once they do
  function loadFonts() {
    const fonts = [...layout.lines.map(line => line.font), ...layout.buttons.map(button => button.font)]
    Promise.all(fonts.map(font => document.fonts.load(font))).then(relayout, () => {})
  }

  const navHeight = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')) || 64

  // How far the middle of the free area (between the top bar and the bottom
  // HTML) sits below the window's middle, in CSS pixels
  const freeMiddleOffset = () => (navHeight() - bottomInset) / 2

  // Start with the hero centred between the top bar and the dock, shrunk if the window is too short for it
  function frameHero() {
    const room = window.innerHeight - navHeight() - bottomInset - 24
    const zoom = Math.min(1, Math.max(MIN_START_ZOOM, room / layout.height))
    rig.zoomTo(zoom)
    rig.panToWorld({ x: 0, y: -freeMiddleOffset() / zoom })
    home = currentView()
  }

  function currentView(): View {
    return { position: { ...board.camera.position }, zoomLevel: board.camera.zoomLevel }
  }

  // Fly back along a smooth zoom-and-pan path: on a long trip the camera zooms
  // out, glides across and zooms back in
  function goBack() {
    flight = { path: createZoomPanPath(currentView(), home, board.camera.viewPortWidth), start: performance.now() }
    // Put the mux's pan and zoom into their animation state; the board's own
    // gestures (Ctrl + scroll, pinch, Space + drag) move them out of it again
    mux.initatePanTransition()
    mux.initateZoomTransition()
  }

  function stepFlight(timestamp: number) {
    if (!flight) return
    if (mux.panStateMachine.currentState !== 'TRANSITION' || mux.zoomStateMachine.currentState !== 'TRANSITION') {
      // The visitor took over
      flight = null
      return
    }
    const t = Math.min(1, Math.max(0, (timestamp - flight.start) / FLIGHT_MS))
    const view = flight.path.at((1 - Math.cos(Math.PI * t)) / 2)
    mux.notifyZoomInputAnimation(view.zoomLevel)
    rig.zoomTo(view.zoomLevel)
    mux.notifyPanToAnimationInput(view.position)
    rig.panToWorld(view.position)
    if (t >= 1) flight = null
  }

  const showBack = () => backFocused || (!flight && isAway(currentView(), home))

  const worldAt = (event: PointerEvent): Point => board.convertWindowPoint2WorldCoord({ x: event.clientX, y: event.clientY })
  // The hero's buttons react to the hand and select tools only
  const heroLive = () => editor.tool === 'hand' || editor.tool === 'select'

  function toWindow(point: Point): Point {
    const viewPort = board.camera.convertFromWorld2ViewPort(point)
    return { x: viewPort.x + window.innerWidth / 2, y: viewPort.y + window.innerHeight / 2 }
  }

  function windowRect(button: HeroButton): DOMRect {
    const topLeft = toWindow({ x: button.x, y: button.y })
    const bottomRight = toWindow({ x: button.x + button.width, y: button.y + button.height })
    return new DOMRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y)
  }

  const onBack = (event: PointerEvent) => !!backRect && inRect(backRect, { x: event.clientX, y: event.clientY })

  // The editor handles every press except the Back to start pill's. These
  // listeners only press the pill, colour the hero's buttons, and stop a
  // flight when the visitor takes over
  function onPointerDown(event: PointerEvent) {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (onBack(event)) {
      backPressed = true
      return
    }
    flight = null
    pressStart = { x: event.clientX, y: event.clientY }
    pressed = heroLive() ? hitButton(layout, worldAt(event)) : -1
  }

  function onPointerMove(event: PointerEvent) {
    if (pressStart && Math.hypot(event.clientX - pressStart.x, event.clientY - pressStart.y) >= PRESS_SLOP) {
      pressed = -1
    }
    const mouse = event.pointerType === 'mouse'
    if (mouse) lastMouse = { id: event.pointerId, x: event.clientX, y: event.clientY }
    backHovered = mouse && onBack(event)
    hovered = mouse && !backHovered && heroLive() ? hitButton(layout, worldAt(event)) : -1
  }

  function onPointerUp(event: PointerEvent) {
    if (backPressed && onBack(event)) goBack()
    backPressed = false
    pressed = -1
    pressStart = null
  }

  function onPointerCancel() {
    backPressed = false
    pressed = -1
    pressStart = null
  }

  function onPointerLeave() {
    hovered = -1
    backHovered = false
    lastMouse = null
  }

  // The pill vanished under a still mouse: let the editor look again at what
  // the mouse is over now, so the cursor stops being a pointer
  function rehover() {
    if (!lastMouse) return
    editor.input.move({
      id: lastMouse.id,
      pointerType: 'mouse',
      button: -1,
      client: { x: lastMouse.x, y: lastMouse.y },
      shiftKey: false,
      ctrlKey: false,
      metaKey: false,
      altKey: false,
      timeStamp: performance.now(),
    })
  }

  // The board sizes the canvas to the window once; keep it that way
  function onResize() {
    board.fullScreen = true
    relayout()
  }

  canvas.addEventListener('pointerdown', onPointerDown)
  canvas.addEventListener('pointermove', onPointerMove)
  canvas.addEventListener('pointerup', onPointerUp)
  canvas.addEventListener('pointercancel', onPointerCancel)
  canvas.addEventListener('pointerleave', onPointerLeave)
  window.addEventListener('resize', onResize)
  document.fonts.addEventListener('loadingdone', relayout)

  function drawGrid(ctx: CanvasRenderingContext2D, zoom: number) {
    const corners = [
      board.convertWindowPoint2WorldCoord({ x: 0, y: 0 }),
      board.convertWindowPoint2WorldCoord({ x: window.innerWidth, y: window.innerHeight }),
    ]
    const min = { x: Math.min(corners[0]!.x, corners[1]!.x), y: Math.min(corners[0]!.y, corners[1]!.y) }
    const max = { x: Math.max(corners[0]!.x, corners[1]!.x), y: Math.max(corners[0]!.y, corners[1]!.y) }
    let spacing = GRID
    while (spacing * zoom < MIN_GRID_PX) spacing *= 2
    // Dots stay 2px wide on screen whatever the zoom
    const size = 2 / zoom
    ctx.save()
    ctx.globalAlpha = 0.35
    ctx.fillStyle = colors.grid
    ctx.beginPath()
    for (let x = Math.floor(min.x / spacing) * spacing; x <= max.x; x += spacing) {
      for (let y = Math.floor(min.y / spacing) * spacing; y <= max.y; y += spacing) {
        ctx.rect(x - size / 2, y - size / 2, size, size)
      }
    }
    ctx.fill()
    ctx.restore()
  }

  function drawHero(ctx: LetterSpacingContext, zoom: number) {
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const line of layout.lines) {
      ctx.font = line.font
      setLetterSpacing(ctx, line.letterSpacing)
      ctx.fillStyle = colors[line.role]
      ctx.fillText(line.text, line.x, line.y)
    }
    setLetterSpacing(ctx, 0)
    for (const button of layout.buttons) {
      const palette = colors[button.theme]
      const fill = pressed === button.index && hovered === button.index ? palette.active : hovered === button.index ? palette.hover : palette.bg
      ctx.beginPath()
      ctx.roundRect(button.x, button.y, button.width, button.height, BUTTON_RADIUS)
      ctx.fillStyle = fill
      ctx.fill()
      if (palette.border && palette.border !== 'transparent') {
        ctx.lineWidth = 1
        ctx.strokeStyle = palette.border
        ctx.stroke()
      }
      ctx.font = button.font
      ctx.fillStyle = palette.text
      ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2)
      if (focused === button.index) {
        // 2px ring, 3px out, both constant on screen
        const offset = 3 / zoom
        ctx.beginPath()
        ctx.roundRect(button.x - offset, button.y - offset, button.width + offset * 2, button.height + offset * 2, BUTTON_RADIUS + offset)
        ctx.lineWidth = 2 / zoom
        ctx.strokeStyle = colors.ring
        ctx.stroke()
      }
    }
  }

  // Drawn in screen space, above the HTML at the bottom of the window, while
  // the camera is away from the start
  function drawBack(ctx: LetterSpacingContext) {
    if (!showBack()) {
      const wasShowing = backRect !== null
      backRect = null
      backHovered = false
      if (wasShowing) rehover()
      return
    }
    ctx.save()
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    ctx.font = `500 ${PILL_FONT_SIZE}px ${fontFamily}`
    setLetterSpacing(ctx, 0)
    const rect = backPillRect(ctx.measureText(backLabel).width, window.innerWidth, window.innerHeight - bottomInset)
    const palette = colors.brand
    ctx.beginPath()
    ctx.roundRect(rect.x, rect.y, rect.width, rect.height, PILL_HEIGHT / 2)
    ctx.fillStyle = backPressed && backHovered ? palette.active : backHovered ? palette.hover : palette.bg
    ctx.fill()
    if (palette.border && palette.border !== 'transparent') {
      ctx.lineWidth = 1
      ctx.strokeStyle = palette.border
      ctx.stroke()
    }
    ctx.fillStyle = palette.text
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(backLabel, rect.x + rect.width / 2, rect.y + rect.height / 2, rect.width - 28)
    if (backFocused) {
      ctx.beginPath()
      ctx.roundRect(rect.x - 3, rect.y - 3, rect.width + 6, rect.height + 6, PILL_HEIGHT / 2 + 3)
      ctx.lineWidth = 2
      ctx.strokeStyle = colors.ring
      ctx.stroke()
    }
    ctx.restore()
    backRect = rect
  }

  function render(timestamp: number) {
    stepFlight(timestamp)
    board.step(timestamp)
    const ctx = board.context as LetterSpacingContext | undefined
    if (!ctx) return
    const zoom = board.camera.zoomLevel
    drawGrid(ctx, zoom)
    drawHero(ctx, zoom)
    editor.draw(ctx)
    drawBack(ctx)
  }

  // A frame that throws stops the loop and hands back to the HTML hero
  function draw(timestamp: number) {
    try {
      render(timestamp)
    } catch (error) {
      destroy()
      options.onError(error)
      return
    }
    frame = requestAnimationFrame(draw)
  }

  function destroy() {
    cancelAnimationFrame(frame)
    canvas.removeEventListener('pointerdown', onPointerDown)
    canvas.removeEventListener('pointermove', onPointerMove)
    canvas.removeEventListener('pointerup', onPointerUp)
    canvas.removeEventListener('pointercancel', onPointerCancel)
    canvas.removeEventListener('pointerleave', onPointerLeave)
    window.removeEventListener('resize', onResize)
    document.fonts.removeEventListener('loadingdone', relayout)
    editor.destroy()
    board.tearDown()
    if (window.__canvasHome === handle) delete window.__canvasHome
  }

  frameHero()
  loadFonts()
  frame = requestAnimationFrame(draw)

  const handle: CanvasHomeHandle = {
    editor,
    setContent(next, nextBackLabel) {
      content = next
      backLabel = nextBackLabel
      relayout()
      loadFonts()
    },
    refreshTheme(theme) {
      colors = readColors()
      editor.setTheme(theme)
    },
    setFocused(index) {
      focused = index
      const button = layout.buttons[index]
      if (!button) return
      const rect = windowRect(button)
      const inView =
        rect.left >= 0 &&
        rect.right <= window.innerWidth &&
        rect.top >= navHeight() &&
        rect.bottom <= window.innerHeight - bottomInset
      if (!inView) {
        flight = null
        rig.panToWorld({
          x: button.x + button.width / 2,
          y: button.y + button.height / 2 - freeMiddleOffset() / board.camera.zoomLevel,
        })
      }
    },
    goBack,
    setBackFocused(focusedNow) {
      backFocused = focusedNow
    },
    setBottomInset(px) {
      const first = !insetReported
      insetReported = true
      if (px === bottomInset) return
      // Frame the hero again for the column's real height, unless the visitor has moved already
      const untouched = !flight && !isAway(currentView(), home)
      bottomInset = px
      if (first && untouched) frameHero()
    },
    destroy,
    buttonRects() {
      return layout.buttons.map(windowRect)
    },
    backButtonRect() {
      return backRect && new DOMRect(backRect.x, backRect.y, backRect.width, backRect.height)
    },
    camera() {
      return { x: board.camera.position.x, y: board.camera.position.y, zoom: board.camera.zoomLevel }
    },
  }
  window.__canvasHome = handle
  return handle
}

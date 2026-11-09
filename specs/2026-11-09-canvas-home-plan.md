# Canvas Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Every docs home page is a full-window `@ue-too/board` canvas with the hero drawn on it, pannable, zoomable and clickable.

**Architecture:** Two pure modules (hero layout + hit-testing, click-vs-drag tracking) feed a runtime module that owns the Board, the draw loop and the input listeners. A Vue component mounts it on home pages only, through the theme's `home-hero-before` slot, and keeps the stock VitePress hero in the page, visually hidden, as the accessible copy.

**Tech Stack:** VitePress 2 (Vue 3), `@ue-too/board` 0.19.2 (exact), Canvas 2D, bun test, Playwright.

**Spec:** `specs/2026-11-09-canvas-home-design.md`

## Global Constraints

- `@ue-too/board` pinned to exactly `0.19.2` in `package.json`, loaded with a dynamic `import()` from the home component only.
- Nothing touches `window`/`document` outside `onMounted` (SSR build).
- 60 FPS: per-frame work is drawing only; layout is recomputed on resize, font load and content change, not per frame.
- Other pages unchanged; the top bar stays HTML; the archived-version notice stays HTML above the canvas.
- Code lives in `.vitepress/theme/canvas-home/`; 2-space indentation, no semicolons, single quotes (match `live-playground/`).
- Hero sizes copy VitePress's hero: name/text 32/40 (<640), 48/56 (≥640), 56/64 (≥960), weight 700, letter-spacing −0.4; tagline 18/28 pad 8 (<640), 20/32 pad 12 (≥640), 24/36 (≥960), weight 500; tagline max width 392 (<640) / 576; actions pad-top 24 (<640) / 32; buttons 14px weight 600, padding 0 20, height 40, radius 20, gap 12.
- Colors come from CSS variables: name `--vp-home-hero-name-color`, text `--vp-c-text-1`, tagline `--vp-c-text-2`, brand button `--vp-button-brand-{bg,hover-bg,active-bg,text}`, alt button `--vp-button-alt-{bg,hover-bg,active-bg,text}`, grid `--vp-c-divider`, focus ring `--vp-c-brand-1`.
- Limits: zoom 0.5–4; camera centre within x, y ∈ [−1000, 1000].

## Review Focus

- Phone width (390px): no line is wider than the viewport minus 48px; the text heading wraps instead of overflowing.
- Japanese / Chinese text has no spaces: the tagline still wraps, by character.
- Space + drag and middle-drag (the board's own pans) must not also trigger our drag pan, which would pan twice as fast.
- A second finger landing mid-drag hands over to the board's pinch/two-finger pan without a jump or a click.
- Navigating away and back (SPA) leaves exactly one canvas, no scroll lock on other pages, and no running animation loop.

---

### Task 1: Hero layout and hit-testing

**Files:**
- Create: `.vitepress/theme/canvas-home/hero-layout.ts`
- Test: `.vitepress/theme/canvas-home/hero-layout.test.ts`

**Interfaces:**
- Produces:
  - `interface HeroContent { name: string; text: string; tagline: string; actions: { text: string; theme: 'brand' | 'alt' }[] }` (plain text, empty strings allowed)
  - `type Measure = (text: string, font: string, letterSpacing: number) => number`
  - `interface HeroLine { text: string; x: number; y: number; font: string; letterSpacing: number; role: 'name' | 'text' | 'tagline' }` (x = centre, y = vertical middle of the line box)
  - `interface HeroButton { index: number; text: string; theme: 'brand' | 'alt'; x: number; y: number; width: number; height: number; font: string }` (x, y = top-left)
  - `interface HeroLayout { lines: HeroLine[]; buttons: HeroButton[]; width: number; height: number }`
  - `layoutHero(content: HeroContent, viewportWidth: number, fontFamily: string, measure: Measure): HeroLayout` — world space, block centred on (0, 0), every line and the button row centred on x = 0. Heading lines wrap at `viewportWidth - 48`; tagline at `min(maxWidth, viewportWidth - 48)`.
  - `wrapText(text: string, maxWidth: number, measure: (s: string) => number): string[]` — greedy; breaks at spaces, and between any two CJK characters.
  - `hitButton(layout: HeroLayout, point: { x: number; y: number }): number` — index of the button under a world point, or −1.

- [ ] **Step 1: Write failing tests** with a fake measure (`text.length * size * 0.5`, size parsed from the font): `sizes follow the hero breakpoints` (390 → name font contains `32px`, tagline `18px`; 800 → `48px`/`20px`; 1400 → `56px`/`24px`); `block is centred` (min line top = −height/2, buttons centred: `x + width/2 === 0` for one button); `tagline wraps at its max width` (no tagline line measures > 576 at 1400); `heading wraps only at the viewport` (at 390 every heading line ≤ 342); `CJK wraps by character` (`wrapText('無限畫布動畫狀態機', 30, s => s.length * 10)` → `['無限畫', '布動畫', '狀態機']`); `button box` (width = measured text + 40, height 40); `two buttons sit 12 apart`; `empty text and tagline add no lines`; `hitButton inside / outside / between buttons`.
- [ ] **Step 2: Run** `bun test .vitepress/theme/canvas-home` — FAIL (module not found).
- [ ] **Step 3: Implement** the module.
- [ ] **Step 4: Run** `bun test .vitepress/theme/canvas-home` — PASS.
- [ ] **Step 5: Commit** `feat: lay out the home hero for the canvas`.

### Task 2: Click-vs-drag tracking

**Files:**
- Create: `.vitepress/theme/canvas-home/drag-tracker.ts`
- Test: `.vitepress/theme/canvas-home/drag-tracker.test.ts`

**Interfaces:**
- Produces: `class DragTracker { constructor(threshold = 5); down(id: number, p: Point): void; move(id: number, p: Point): Point | null; up(id: number, p: Point): { start: Point; dragged: boolean } | null; cancel(): void; get active(): boolean; get dragging(): boolean }`. `move` returns the screen delta to pan by (from the start point on the move that crosses the threshold, so nothing is lost, then from the previous point), or null. A second `down` while one pointer is active cancels: neither pointer pans or clicks afterwards.

- [ ] **Step 1: Write failing tests:** `small move then up is a click` (`dragged: false`, no deltas); `crossing the threshold pans from the start` (down (0,0), move (3,0) → null, move (8,0) → (8,0), move (10,1) → (2,1); up → `dragged: true`); `second pointer cancels` (then move/up of either → null); `unknown pointer is ignored`.
- [ ] **Step 2: Run** `bun test .vitepress/theme/canvas-home` — FAIL.
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run** — PASS.
- [ ] **Step 5: Commit** `feat: tell canvas clicks from drags`.

### Task 3: Canvas runtime and home component

**Files:**
- Create: `.vitepress/theme/canvas-home/canvas-home.ts`, `.vitepress/theme/canvas-home/CanvasHome.vue`
- Modify: `.vitepress/theme/index.ts` (slot `home-hero-before` renders `[VersionBanner home, CanvasHome]`), `.vitepress/theme/custom.css`, `.vitepress/theme/VersionBanner.vue` (home banner `position: relative; z-index: 1`), `.vitepress/config.ts` (`head`: `<noscript>` style that un-hides the hero), `package.json` / `bun.lock` (`@ue-too/board` 0.19.2)

**Interfaces:**
- Consumes: Task 1 and Task 2 exports.
- Produces:
  - `mountCanvasHome(canvas: HTMLCanvasElement, options: CanvasHomeOptions): CanvasHomeHandle`
  - `interface CanvasHomeOptions { content: HeroContent; hint: string; onActivate: (index: number, newTab: boolean) => void }`
  - `interface CanvasHomeHandle { setContent(content: HeroContent, hint: string): void; refreshTheme(): void; setFocused(index: number): void /* -1 clears; pans the button into view if any part is off-screen */; destroy(): void; buttonRects(): DOMRect[] /* window coordinates */; camera(): { x: number; y: number; zoom: number } }`
  - Test hook: `window.__canvasHome` = the handle while mounted, deleted on destroy.
  - Canvas element: `<canvas class="canvas-home" data-testid="canvas-home">`; `<html>` gets class `canvas-home` while mounted (CSS: `overflow: hidden`), `canvas-home-failed` if the import or mount throws.

Runtime behaviour to pin:
- Board: `fullScreen = true`, `camera.setMinZoomLevel(0.5)`, `setMaxZoomLevel(4)`, boundaries ±1000, initial camera position `(0, -navHeight / 2)` so the hero sits centred below the top bar (`--vp-nav-height`).
- Our drag pan only when `kmtInputStateMachine.currentState === 'IDLE'`, primary button / single touch; `getCameraRig().panByViewPort({ x: -dx / zoom … })` — check sign/scale against the board's own pan in the page test (content follows the pointer 1:1).
- `pointerup` on a button with `dragged: false` → `onActivate(index, ctrlKey || metaKey || shiftKey || button === 1)`.
- Cursor: `pointer` over a button, `grabbing` while dragging, `grab` otherwise.
- Frame: `board.step`, dot grid (spacing 40, doubled until ≥ 16 screen px; only the visible area), hero, focus ring (2px, 3px offset), then the hint pill in screen space at the bottom centre.
- Relayout on resize (`onCanvasDimensionChange`), `document.fonts` `loadingdone`, and `setContent`.
- Component: content from `frontmatter.hero` (HTML stripped with `DOMParser`); hint per `lang` and `(pointer: coarse)`: en `Drag to pan · Ctrl + scroll or pinch to zoom` / `Drag to pan · Pinch to zoom`; ja `ドラッグで移動 · Ctrl + スクロールかピンチでズーム` / `ドラッグで移動 · ピンチでズーム`; zh-TW `拖曳平移 · Ctrl + 滾輪或雙指縮放` / `拖曳平移 · 雙指縮放`. `onActivate` clicks the hidden `.VPHomeHero .actions a` (or `window.open(a.href, '_blank', 'noopener')` for a new tab). `focusin`/`focusout` on that anchor → `setFocused`. `isDark` watch → `refreshTheme()` after `nextTick`.
- CSS: `.VPContent.is-home .VPHomeHero` visually hidden (sr-only); `html.canvas-home-failed` un-hides it; `.VPContent.is-home .VPHome` no bottom margin.

- [ ] **Step 1: Add the dependency** (`bun add @ue-too/board@0.19.2 --exact`).
- [ ] **Step 2: Implement** the runtime, component, slot and CSS.
- [ ] **Step 3: Build** `bunx vitepress build` — succeeds; `bun run test` — PASS.
- [ ] **Step 4: Look at it** with a quick Playwright screenshot (light, dark, phone).
- [ ] **Step 5: Commit** `feat: draw the home page on a ue-too canvas`.

### Task 4: Home page browser checks and CI

**Files:**
- Create: `scripts/test-home-page.ts` (same shape as `scripts/test-live-examples-page.ts`, default URL `http://localhost:4173/ue-too-documentation/`)
- Modify: `package.json` (`"test:home:page": "bun run scripts/test-home-page.ts"`), `.github/workflows/live-examples.yml` (step "Check the home page" after the Live examples page step), `README.md` (a "Home page" section: what it is, where the code is, how to run the check, that the board version is pinned in `package.json`)

Checks (each its own entry in `checks`):
- `renders`: canvas box = viewport; hero `h1` in the DOM with box width ≤ 1; page doesn't scroll either way.
- `drag-pans`: drag empty canvas by (+150, +80) → button rect moves by the same ±1.
- `space-drag-pans-once`: hold Space and drag by (+100, 0) → button moves +100 ±2, not +200.
- `click-navigates`: click button centre → URL ends with `/packages.html` or `/packages`; no `canvas-home` canvas and no `canvas-home` class on `<html>`.
- `drag-from-button-stays`: press on the button, move 100px, release → URL unchanged.
- `hover-cursor`: canvas cursor `pointer` over the button, `grab` off it.
- `ctrl-click-new-tab`: Ctrl+click opens a new page; current URL unchanged.
- `keyboard`: pan the button off-screen, Tab to the hidden link → button rect back inside the viewport; Enter → navigates.
- `zoom`: Ctrl + wheel → `camera().zoom` changes and stays within 0.5–4.
- `theme`: the canvas pixel at the button centre changes when the appearance switch is clicked.
- `locales`: `/ja/` and `/zh-TW/` show the canvas; clicking the button lands on `/ja/packages` / `/zh-TW/packages`.
- `back-and-forth`: home → packages → back → exactly one canvas, `__canvasHome` set.
- `other-pages`: `/board/` has no canvas and can scroll.
- `phone` (390×844, touch): no sideways scroll; every button rect inside the viewport; a one-finger touch drag (CDP `Input.dispatchTouchEvent`) pans; tapping the button navigates.

- [ ] **Step 1: Write the script and run it** against `bunx vitepress build` output: `bun run test:home:page` — all pass (fix runtime bugs it finds in Task 3's files).
- [ ] **Step 2: Run** `bun run test:examples:page` — still passes.
- [ ] **Step 3: Commit** `test: check the canvas home page in a browser`.

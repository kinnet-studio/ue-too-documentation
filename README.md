# ue-too-documentation

Source of the uē-tôo docs site, https://ue-too.dev/, built with VitePress.

```bash
bun install
bun run docs:dev       # dev server for the latest version
bun run docs:build     # build every version into .vitepress/dist
bun run docs:preview   # serve the built site
```

## Versions

The site serves one set of docs per release line (`major.minor`): the latest at the site root and each older line under `/v<line>/` (e.g. `/v0.18/`). `versions.json` lists the release each line's docs were last imported from (e.g. `0.18.5`), and their sources are:

- `docs/`: the latest line
- `versions/v<line>/`: an archived line, laid out like `docs/`

Each version is a separate VitePress build (`DOCS_VERSION` in `.vitepress/config.ts`) with its own sidebar, locales and search index. The version menu in the nav links between them, and archived versions show a notice that links to the latest. On archived versions, the npm badge in each package README is pinned to that line's release, since shields' npm badge always shows the registry's latest.

Static files that every version serves, like the logo and favicons, live in `.vitepress/public/` (set as Vite's `publicDir`), so a `public/` folder inside `docs/` or `versions/v<line>/` isn't used.

- Work on an archived version: `DOCS_VERSION=0.18 bun run docs:dev`
- Try the version menu locally: build with `DOCS_SITE_URL=http://localhost:4173/ bun run docs:build`, then `bun run docs:preview`
- Drop an old version: delete its folder and remove it from `versions.json`

## Release updates

Each ue-too release opens a PR here that runs `bun run docs:import <version> <ue-too docs dir>`:

- a patch on the latest line updates `docs/`
- a patch on an archived line updates `versions/v<line>/`
- a new minor or major copies `docs/` to `versions/v<previous line>/`, archives that line, and puts the new docs in `docs/`

English is the root locale, so English pages live in `docs/<package>/` and other locales in `docs/<locale>/<package>/`. The import copies over existing files and never deletes any, so hand-written guides inside package folders are kept.

## Home page

Each home page (every locale and version) is a full-window `@ue-too/board` canvas with the hero drawn on it, and a whiteboard on top: drag to pan, scroll or pinch to zoom, click a button to follow it, or pick a tool from the dock at the bottom and draw. The code is in `.vitepress/theme/canvas-home/`:

- The text comes from the `hero` frontmatter of each `index.md`, so editing it there changes the canvas too.
- The stock VitePress hero stays in the page, visually hidden, for screen readers, search engines and keyboard users. Clicking a button on the canvas activates its hidden link, and tabbing to that link draws a focus ring on the canvas. If the canvas can't load, or JavaScript is off, the HTML hero shows instead.
- The whiteboard is the editor from `@ue-too/board/whiteboard`, running on the same board (`canvas-home.ts`). The hero is its background: with the hand or select tool a click on a hero button follows it, unless a shape covers the button; the other tools draw over the hero.
- The dock (`WhiteboardDock.vue`) has the tools (hand, select, rectangle, ellipse, arrow, line, pen, text, sticky note, eraser), undo, redo and clear, a style panel (colour, size, fill) while a drawing tool or a selection is active, and the hint. Under 640px wide the four shapes fold into a Shapes menu, and redo and clear into a More menu. Its words are in `whiteboard-labels.ts` (English, Japanese, Traditional Chinese), and the letter shortcuts come from the editor.
- The drawing is kept in the visitor's browser: `localStorage` under `ue-too:home-whiteboard`, written 400 ms after the last change and when the page is hidden (`whiteboard-storage.ts`). Every locale and version shares it, and a page open in another tab, or brought back by Back, picks up a newer save while keeping its own unsaved edits. If storage is blocked or full, the board still works and the console gets a warning.
- Text and sticky notes use Caveat (`@fontsource/caveat`, loaded in `.vitepress/theme/index.ts`). `whiteboard-theme.ts` turns the shapes' colour names into colours for the light and dark themes, and uses the brand colour for selections. Its light palette is a copy of the editor's `DEFAULT_THEME`, so it loads with every page without pulling in the editor; keep the two in step.
- The editor and the dock load with the home canvas only, not on other pages.
- Once the visitor pans or zooms away, a Back to start pill shows above the dock and flies the camera back to where the page opened, using the board's `createZoomPanPath` (`back-to-start.ts`). Its keyboard and screen reader copy is a hidden button after the hero's links (`BackToStartButton.vue`).
- The board version, whiteboard included, is pinned in `package.json` and bundled with the site; it doesn't follow the docs release on its own.

Check it with `bunx vitepress build`, then `bun run test:home:page` (`--only <check>,<check>` runs just those checks). It runs in the `Live examples` workflow too.

## Live examples

The board docs have a Live examples page (`docs/board/live-examples.md`) where readers pan and zoom a real canvas and edit and re-run the code. Each example is a plain JavaScript module in `docs/board/live-examples/`:

- It imports only public `@ue-too/*` entry points and gets its canvas with `document.getElementById('graph')`, so readers can copy it into their own project as is.
- It runs against the release in `versions.json` for its line (`@ue-too/board@<release>` from jsDelivr). When a new minor archives a line, its examples go with it and keep running that line's release.

To add one, add a file there and an entry (`id`, `title`, `caption`, `code`) to `examples` in the page.

Checks:

```bash
bun run test                  # unit tests for the playground helpers
bun run test:examples         # runs every example headless against its line's release
bunx vitepress build          # then:
bun run test:examples:page    # drives the built page (running, errors, tabs, theme, phone width)
```

- `LIVE_EXAMPLES_CDN` replaces jsDelivr (e.g. with a local mirror), for the scripts and for `vitepress build`.
- `CHROMIUM_EXECUTABLE` points the scripts at a specific Chromium; otherwise run `bunx playwright install chromium` once.

The `Live examples` workflow runs all of these on pull requests (including each release-import PR), on pushes to `main` and weekly. It doesn't block deploys.

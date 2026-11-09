# Canvas home page: design

## Intent

Turn the docs site's home page into a live demo of the ue-too canvas. The page
is a full-window `@ue-too/board` canvas, and the hero (title, text, tagline,
"View Packages API" button) is drawn on it, so visitors can pan and zoom
around it and click the button on the canvas. Every other page stays as it is.

## Goals

- Every home page gets the canvas: the three locales (en, ja, zh-TW) and the
  archived lines (e.g. `/v0.18/`). They share one theme, so this comes for free.
- The hero is drawn on the canvas in world space, so it pans and zooms with the
  camera and stays sharp at any zoom. Sizes, fonts and colors follow today's
  hero (including its breakpoints) and the site's light/dark theme.
- A plain drag pans (mouse, pen, one finger). The board's own gestures keep
  working: Ctrl + scroll / pinch to zoom, Space + drag, middle-drag,
  two-finger swipe.
- Clicking the button follows its link. The cursor turns into a pointer over
  it, and it shows the same hover color as today. Ctrl/Cmd-click or a
  middle-click opens it in a new tab.

## Non-goals

- Other pages: no change.
- The top bar (search, language, version and dark mode) stays normal HTML on
  top of the canvas.
- The archived-version notice on old lines stays HTML, pinned under the top
  bar, so it's always visible however far the visitor pans.

## Anti-goals

- A page that only works if you can see the canvas. Screen readers, keyboard
  users and search engines must still get the text and a working link.
- Visitors getting lost: panning is bounded around the hero and zoom is
  limited.
- Making other pages slower: the board code only loads on the home page.

## Constraints

- 60 FPS on the canvas.
- `@ue-too/board` comes from npm, pinned to the docs' current release
  (0.19.2), bundled by Vite and loaded with a dynamic import on the home page
  only. It doesn't follow later releases on its own.
- The VitePress build renders pages on the server, so nothing touches `window`
  until the page is mounted in the browser.

## Approaches

- **A. Draw the hero on the canvas (picked).** Truly on the canvas, sharp at
  any zoom, and the best demo of ue-too. Costs: the hero's look is rebuilt by
  hand, and an accessible copy has to be kept alongside it.
- **B. Keep the HTML hero and move it with the camera.** Looks the same, with
  native text and links for free, but nothing is on the canvas, so it shows
  less of what ue-too does.
- **C. Snapshot the HTML into the canvas (SVG `foreignObject`).** Dropped:
  blurry when zoomed, web fonts don't load inside the snapshot, and Safari is
  unreliable.

## Decisions

- **One source for the text.** The canvas reads the `hero` frontmatter of each
  `index.md`, so the three locales need no extra copy. The existing VitePress
  hero stays in the page, visually hidden, as the accessible copy.
- **Keyboard.** Tabbing to the hidden link draws a focus ring around the button
  on the canvas and pans it into view; Enter follows the real link.
- **Click vs. drag.** A press that moves less than a few pixels and starts and
  ends on the button is a click; anything else is a pan.
- **Background.** A grid in world space, so panning and zooming are visible.
  A short hint at the bottom of the screen ("Drag to pan · Ctrl + scroll to
  zoom", per locale and touch vs. mouse) is drawn in screen space.
- **Tests.** Unit tests (`bun run test`) for the hero layout, hit-testing and
  click-vs-drag. A Playwright script on the built site checks: the canvas is
  there, drag pans, clicking the button navigates, the hidden link works with
  the keyboard, phone width, dark mode, and that other pages have no canvas.
  It runs in the existing Live examples workflow.

## Left to the builder

The exact grid look, hint wording, zoom and pan limits, and how the code is
split into files.

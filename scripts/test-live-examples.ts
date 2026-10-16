/**
 * Runs every live example in headless Chromium against the release its docs
 * line is for, and fails if any of them throws or doesn't finish loading.
 *
 * Usage: bun run test:examples [file.js …]
 *
 * With no arguments it checks every live-examples/*.js file of every line in
 * versions.json; with files it checks just those, against the latest release.
 * LIVE_EXAMPLES_CDN replaces jsDelivr (e.g. with a local mirror).
 */

import { Glob } from 'bun'
import { join, relative } from 'path'
import type { Browser } from 'playwright'
import { buildPreviewDoc, readPreviewMessage, toEditorLine, type PreviewMessage } from '../.vitepress/theme/live-playground/preview-doc'
import { launchBrowser } from './browser'
import { loadVersions, siteLines, versionSrcDir } from './versions'

const RUN_ID = 1
// How long an example has to load and run its top level
const LOAD_TIMEOUT = 20000
// How long to keep watching for errors (e.g. in the first animation frames) after it ran
const SETTLE_TIME = 1000

interface Target {
  file: string
  release: string
}

function findTargets(files: string[]): Target[] {
  const versions = loadVersions()
  if (files.length > 0) {
    return files.map(file => ({ file, release: versions.latest }))
  }
  const glob = new Glob('**/live-examples/*.js')
  return siteLines(versions).flatMap(({ line, version }) => {
    const dir = versionSrcDir(versions, line)
    return [...glob.scanSync({ cwd: dir })].sort().map(file => ({ file: join(dir, file), release: version }))
  })
}

// Resolves with null when the example ran cleanly, or with what went wrong
async function check(browser: Browser, { file, release }: Target): Promise<string | null> {
  const code = await Bun.file(file).text()
  const doc = buildPreviewDoc(code, { release, runId: RUN_ID, cdn: process.env.LIVE_EXAMPLES_CDN })
  const page = await browser.newPage()
  try {
    // Record messages before the frame exists, so none are missed
    await page.setContent('<script>window.__messages = []; addEventListener("message", e => __messages.push(e.data))</script>')
    await page.evaluate(html => {
      const frame = document.createElement('iframe')
      frame.setAttribute('sandbox', 'allow-scripts')
      frame.srcdoc = html
      document.body.append(frame)
    }, doc.html)

    const started = Date.now()
    let ranAt: number | null = null
    while (true) {
      const raw = await page.evaluate(() => (window as unknown as { __messages: unknown[] }).__messages)
      const messages = raw.map(m => readPreviewMessage(m, RUN_ID)).filter((m): m is PreviewMessage => m !== null)
      for (const m of messages) {
        if (m.type === 'load-error') return `could not load the @ue-too packages for ${release}`
        if (m.type === 'error') {
          const line = m.file.startsWith('about:srcdoc') ? toEditorLine(m.line, doc, code) : null
          return line === null ? m.text : `${m.text} (line ${line})`
        }
        if (m.type === 'ran' && ranAt === null) ranAt = Date.now()
      }
      if (ranAt !== null && Date.now() - ranAt >= SETTLE_TIME) return null
      if (ranAt === null && Date.now() - started >= LOAD_TIMEOUT) return `did not finish running within ${LOAD_TIMEOUT / 1000}s`
      await Bun.sleep(100)
    }
  } finally {
    await page.close()
  }
}

const targets = findTargets(process.argv.slice(2))
if (targets.length === 0) {
  console.log('No live examples found')
  process.exit(0)
}

const browser = await launchBrowser()
let failed = 0
for (const target of targets) {
  const problem = await check(browser, target)
  const name = `${relative(process.cwd(), target.file)} (@ue-too ${target.release})`
  if (problem === null) {
    console.log(`✓ ${name}`)
  } else {
    failed++
    console.log(`✗ ${name}: ${problem}`)
  }
}
await browser.close()

console.log(`${targets.length - failed} of ${targets.length} live examples ran cleanly`)
process.exit(failed > 0 ? 1 : 0)

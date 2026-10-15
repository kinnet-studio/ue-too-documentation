/**
 * Builds every docs version listed in versions.json into .vitepress/dist:
 * the latest line at the root and each archived line under v<line>/.
 *
 * Usage: bun run scripts/build-versions.ts
 *
 * Each version is a separate VitePress build (see DOCS_VERSION in
 * .vitepress/config.ts), so each has its own sidebar, locales and search index.
 */

import { loadVersions, siteLines } from './versions'

// The latest goes first: every build empties its own outDir, and the
// archived builds are nested inside the latest one's.
for (const { line } of siteLines(loadVersions())) {
  console.log(`Building docs for v${line}`)
  const proc = Bun.spawnSync(['bunx', 'vitepress', 'build'], {
    env: { ...process.env, DOCS_VERSION: line },
    stdout: 'inherit',
    stderr: 'inherit',
  })
  if (proc.exitCode !== 0) {
    console.error(`Failed to build docs for v${line}`)
    process.exit(proc.exitCode ?? 1)
  }
}

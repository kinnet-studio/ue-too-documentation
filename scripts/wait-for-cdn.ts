/**
 * Waits until the CDN serves every release in versions.json, so the live
 * example checks that follow don't fail just because a release was published
 * minutes ago (the release-import PR's CI starts right after publishing).
 *
 * Usage: bun run scripts/wait-for-cdn.ts
 *
 * LIVE_EXAMPLES_CDN replaces jsDelivr, as for the checks themselves.
 */

import { releaseUrls, waitForUrls } from './cdn-wait'
import { loadVersions, siteLines } from './versions'

// jsDelivr usually has a release within about five minutes of publishing
const TIMEOUT = 15 * 60_000
const INTERVAL = 30_000

const releases = siteLines(loadVersions()).map(({ version }) => version)
const missing = await waitForUrls(releaseUrls(releases, process.env.LIVE_EXAMPLES_CDN), {
  timeout: TIMEOUT,
  interval: INTERVAL,
})

if (missing.length > 0) {
  console.error(`The CDN still doesn't serve these after ${TIMEOUT / 60_000} minutes:`)
  for (const url of missing) console.error(`  ${url}`)
  process.exit(1)
}
console.log(`The CDN serves ${releases.join(', ')}`)

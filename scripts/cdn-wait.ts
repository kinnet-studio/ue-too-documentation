/**
 * Waiting for a release to reach the CDN the live examples load from.
 *
 * jsDelivr serves an npm release only once npm's registry does, a few
 * minutes after publishing, so a check that runs right after a release (the
 * release-import PR) waits for it rather than failing.
 */

import { importMap } from '../.vitepress/theme/live-playground/preview-doc'

/** The files the live examples import, for each release (each listed once) */
export function releaseUrls(releases: string[], cdn?: string): string[] {
  return [...new Set(releases)].flatMap(release => Object.values(importMap(release, cdn).imports))
}

export interface WaitOptions {
  /** Give up after this many ms */
  timeout: number
  /** Ask again after this many ms */
  interval: number
  fetch?: (url: string) => Promise<Response>
  now?: () => number
  sleep?: (ms: number) => Promise<void>
  log?: (message: string) => void
}

/**
 * Asks for each URL until all of them answer 200, asking again only for
 * those still missing.
 *
 * @returns The URLs still missing when time ran out; empty once all are there
 */
export async function waitForUrls(urls: string[], options: WaitOptions): Promise<string[]> {
  const fetch = options.fetch ?? (url => globalThis.fetch(url))
  const now = options.now ?? Date.now
  const sleep = options.sleep ?? (ms => new Promise<void>(resolve => setTimeout(resolve, ms)))
  const log = options.log ?? console.log
  const deadline = now() + options.timeout

  const isThere = async (url: string) => {
    try {
      const response = await fetch(url)
      await response.body?.cancel()
      return response.ok
    } catch {
      return false
    }
  }

  let missing = urls
  while (true) {
    const found = await Promise.all(missing.map(isThere))
    missing = missing.filter((_, i) => !found[i])
    if (missing.length === 0 || now() >= deadline) return missing
    log(`Waiting for ${missing.length} file(s) on the CDN, e.g. ${missing[0]}`)
    await sleep(Math.min(options.interval, deadline - now()))
  }
}

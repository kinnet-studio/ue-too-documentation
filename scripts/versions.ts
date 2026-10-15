import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

/**
 * The releases whose docs the site serves, stored in versions.json at the
 * repo root.
 *
 * The site serves one release per line (`major.minor`, e.g. "0.19"): each
 * entry is the release that line's docs were last imported from, so a patch
 * replaces its line's entry.
 */
export interface Versions {
  /** The newest release (e.g. "0.19.2"); its line is built from docs/ and served at the site root. */
  latest: string
  /** One release per older line, newest first; each line is built from versions/v<line>/ and served at /v<line>/. */
  archived: string[]
}

/** A release line the site serves, with the release its docs come from. */
export interface SiteLine {
  line: string
  version: string
}

const versionsFile = join(process.cwd(), 'versions.json')

export function loadVersions(): Versions {
  return JSON.parse(readFileSync(versionsFile, 'utf-8'))
}

export function saveVersions(versions: Versions): void {
  writeFileSync(versionsFile, JSON.stringify(versions, null, 2) + '\n')
}

/** The release line of a version: "v0.19.2" and "0.19.2-beta.1" are both "0.19". */
export function releaseLine(version: string): string {
  const match = version.match(/^v?(\d+)\.(\d+)\./)
  if (!match) {
    throw new Error(`Not a semver version: ${version}`)
  }
  return `${match[1]}.${match[2]}`
}

/** Compares two release lines numerically; negative when a is older than b. */
export function compareLines(a: string, b: string): number {
  const [aMajor = 0, aMinor = 0] = a.split('.').map(Number)
  const [bMajor = 0, bMinor = 0] = b.split('.').map(Number)
  return aMajor - bMajor || aMinor - bMinor
}

/** Every line the site serves, newest (the latest) first. */
export function siteLines(versions: Versions): SiteLine[] {
  return [versions.latest, ...versions.archived].map(version => ({
    line: releaseLine(version),
    version,
  }))
}

/** Where an archived line's docs live, relative to the repo root. */
export function archivedSrcDir(line: string): string {
  return `versions/v${line}`
}

/** The source directory of a line, relative to the repo root. */
export function versionSrcDir(versions: Versions, line: string): string {
  return line === releaseLine(versions.latest) ? 'docs' : archivedSrcDir(line)
}

/** The path of a line relative to the site root: "" for the latest, "v<line>/" otherwise. */
export function versionPath(versions: Versions, line: string): string {
  return line === releaseLine(versions.latest) ? '' : `v${line}/`
}

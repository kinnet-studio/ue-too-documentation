/**
 * Imports the TypeDoc output of a ue-too release into the versioned docs tree.
 *
 * Usage: bun run scripts/import-docs.ts <version> <source-dir>
 *
 * <source-dir> is ue-too's built docs/ directory: one folder per locale
 * (en, ja, zh-TW), each holding one folder per package. Anything else in it
 * is skipped.
 *
 * Where the files go depends on the release line (major.minor) of <version>:
 * - the latest line: docs/
 * - an archived line: versions/v<line>/
 * - a newer line: docs/ is first copied to versions/v<latest>/ and that line
 *   is archived; the release then becomes the latest and lands in docs/
 *
 * versions.json then records <version> as the release its line's docs are for.
 *
 * English is the site's root locale, so en/<pkg> lands at <target>/<pkg>,
 * and other locales at <target>/<locale>/<pkg>. Files are copied over the
 * existing ones and nothing is deleted, because some package folders also
 * hold hand-written guides.
 */

import { cpSync, existsSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import {
  archivedSrcDir,
  compareLines,
  loadVersions,
  releaseLine,
  saveVersions,
  versionSrcDir,
} from './versions'

const LOCALES = ['en', 'zh-TW', 'ja']

const [versionArg, sourceArg] = process.argv.slice(2)
if (!versionArg || !sourceArg) {
  console.error('Usage: bun run scripts/import-docs.ts <version> <source-dir>')
  process.exit(1)
}
const version = versionArg.replace(/^v/, '')

const sourceDir = resolve(sourceArg)
const locales = LOCALES.filter((locale) => existsSync(join(sourceDir, locale)))
if (locales.length === 0) {
  console.error(`No locale folders (${LOCALES.join(', ')}) found in ${sourceDir}`)
  process.exit(1)
}

const versions = loadVersions()
const line = releaseLine(version)
const latestLine = releaseLine(versions.latest)

if (compareLines(line, latestLine) > 0) {
  const archiveDir = archivedSrcDir(latestLine)
  if (existsSync(archiveDir)) {
    console.error(`Cannot archive v${latestLine}: ${archiveDir} already exists`)
    process.exit(1)
  }
  console.log(`Archiving v${versions.latest} docs to ${archiveDir}`)
  cpSync('docs', archiveDir, { recursive: true })
  versions.archived.unshift(versions.latest)
  versions.latest = version
} else if (line === latestLine) {
  versions.latest = version
} else {
  const index = versions.archived.findIndex(archived => releaseLine(archived) === line)
  if (index === -1) {
    console.error(
      `v${line} is older than the latest line (v${latestLine}) and is not archived; ` +
        `add it to versions.json and seed versions/v${line}/ first`
    )
    process.exit(1)
  }
  versions.archived[index] = version
}
saveVersions(versions)

const targetDir = versionSrcDir(versions, line)
console.log(`Importing ${version} docs into ${targetDir}`)

for (const locale of locales) {
  const localeTarget = locale === 'en' ? targetDir : join(targetDir, locale)
  for (const entry of readdirSync(join(sourceDir, locale), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    cpSync(join(sourceDir, locale, entry.name), join(localeTarget, entry.name), {
      recursive: true,
    })
  }
}

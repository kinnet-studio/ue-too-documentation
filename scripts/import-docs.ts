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

const [version, sourceArg] = process.argv.slice(2)
if (!version || !sourceArg) {
  console.error('Usage: bun run scripts/import-docs.ts <version> <source-dir>')
  process.exit(1)
}

const sourceDir = resolve(sourceArg)
const locales = LOCALES.filter((locale) => existsSync(join(sourceDir, locale)))
if (locales.length === 0) {
  console.error(`No locale folders (${LOCALES.join(', ')}) found in ${sourceDir}`)
  process.exit(1)
}

const versions = loadVersions()
const line = releaseLine(version)

if (compareLines(line, versions.latest) > 0) {
  const archiveDir = archivedSrcDir(versions.latest)
  if (existsSync(archiveDir)) {
    console.error(`Cannot archive v${versions.latest}: ${archiveDir} already exists`)
    process.exit(1)
  }
  console.log(`Archiving v${versions.latest} docs to ${archiveDir}`)
  cpSync('docs', archiveDir, { recursive: true })
  versions.archived.unshift(versions.latest)
  versions.latest = line
  saveVersions(versions)
} else if (line !== versions.latest && !versions.archived.includes(line)) {
  console.error(
    `v${line} is older than the latest line (v${versions.latest}) and is not archived; ` +
      `add it to versions.json and seed versions/v${line}/ first`
  )
  process.exit(1)
}

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

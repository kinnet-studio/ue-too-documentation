import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { loadVersions, versionPath, versionSrcDir } from '../scripts/versions'

// Default theme config plus the archived-version notice rendered by the custom theme
export interface ThemeConfig extends DefaultTheme.Config {
  versionBanner?: { text: string; link: string; linkText: string }
}

// Where the whole site is served. Each version is a separate build under it,
// so links between versions are full URLs; set DOCS_SITE_URL to preview a
// combined build locally (e.g. http://localhost:4173/ue-too-documentation/).
const siteUrl = (process.env.DOCS_SITE_URL ?? 'https://kinnet-studio.github.io/ue-too-documentation/').replace(/\/?$/, '/')

const versions = loadVersions()

// The release line this build is for (set per build by scripts/build-versions.ts)
const docsVersion = process.env.DOCS_VERSION ?? versions.latest
if (docsVersion !== versions.latest && !versions.archived.includes(docsVersion)) {
  throw new Error(`DOCS_VERSION ${docsVersion} is not listed in versions.json`)
}
const srcDir = versionSrcDir(versions, docsVersion)

// All packages in the project
const packages = [
  'math', 'board', 'animate', 'being', 'dynamics', 'curve', 'border', 'ecs',
  'board-react-adapter', 'board-vue-adapter', 'board-fabric-integration',
  'board-game-engine', 'board-konva-integration', 'board-pixi-integration',
  'board-pixi-react-integration', 'board-integration', 'being-devtools',
  'being-portable',
] as const

type Locale = 'en' | 'zh-TW' | 'ja'

// Resolve the docs directory for a locale (en is at root, others in subdirectories)
function localeDocsDir(locale: Locale, packageName: string): string {
  if (locale === 'en') {
    return join(process.cwd(), srcDir, packageName)
  }
  return join(process.cwd(), srcDir, locale, packageName)
}

// Helper function to load sidebar JSON for a given locale and package
function loadSidebar(locale: Locale, packageName: string): any[] {
  const filePath = join(localeDocsDir(locale, packageName), 'typedoc-sidebar.json')
  if (!existsSync(filePath)) return []
  const content = readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

// Fix sidebar links: strip ../../docs/{locale}/ prefix and .md extension
function fixSidebarLinks(sidebar: any[], locale: Locale): any[] {
  return sidebar.map(item => {
    const result = { ...item }
    if (result.link) {
      let link = result.link as string

      // Handle paths like /../../docs/en/math/functions/addVector.md
      // or /../../docs/math/functions/addVector.md (no locale in path)
      // Extract the package-relative path
      const localeDocsMatch = link.match(/\/docs\/(?:en|zh-TW|ja)\/(.+)$/)
      if (localeDocsMatch) {
        link = localeDocsMatch[1]
      } else {
        const docsMatch = link.match(/\/docs\/(.+)$/)
        if (docsMatch) {
          link = docsMatch[1]
        }
      }

      // Remove .md extension
      link = link.replace(/\.md$/, '')

      // Build locale-aware path: root locale (en) has no prefix
      if (locale === 'en') {
        link = `/${link}`
      } else {
        link = `/${locale}/${link}`
      }

      result.link = link
    }
    if (result.items) {
      result.items = fixSidebarLinks(result.items, locale)
    }
    return result
  })
}

// Custom guide pages per package (keyed by package name)
const customGuides: Record<string, Record<Locale, { text: string; file: string }>> = {
  being: {
    en: { text: 'Usage Guide', file: 'usage-guide' },
    'zh-TW': { text: '使用指南', file: 'usage-guide' },
    ja: { text: '使用ガイド', file: 'usage-guide' },
  },
  board: {
    en: { text: 'Extending Input State Machines', file: 'extending-input-state-machines' },
    'zh-TW': { text: 'Extending Input State Machines', file: 'extending-input-state-machines' },
    ja: { text: 'Extending Input State Machines', file: 'extending-input-state-machines' },
  },
}

// Add overview link to the top of a package sidebar
function addIndexToSidebar(sidebar: any[], locale: Locale, packageName: string): any[] {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const indexItem = {
    text: locale === 'zh-TW' ? '概覽' : locale === 'ja' ? '概要' : 'Overview',
    link: `${prefix}/${packageName}/`
  }
  const items = [indexItem]

  // Add custom guide pages if they exist for this package
  const guide = customGuides[packageName]?.[locale]
  if (guide) {
    const guidePath = join(localeDocsDir(locale, packageName), `${guide.file}.md`)
    if (existsSync(guidePath)) {
      items.push({
        text: guide.text,
        link: `${prefix}/${packageName}/${guide.file}`
      })
    }
  }

  return [...items, ...sidebar]
}

// Build the sidebar config for a given locale
function buildSidebar(locale: Locale): Record<string, any[]> {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const entries: Record<string, any[]> = {}

  for (const pkg of packages) {
    const raw = loadSidebar(locale, pkg)
    if (raw.length === 0) continue
    const fixed = fixSidebarLinks(raw, locale)
    entries[`${prefix}/${pkg}/`] = addIndexToSidebar(fixed, locale, pkg)
  }

  return entries
}

// Build nav items for a locale
function buildNav(locale: Locale) {
  const labels: Record<Locale, { home: string; packages: string }> = {
    en: { home: 'Home', packages: 'Packages' },
    'zh-TW': { home: '首頁', packages: '套件' },
    ja: { home: 'ホーム', packages: 'パッケージ' },
  }

  const l = labels[locale]
  const prefix = locale === 'en' ? '' : `/${locale}`

  return [
    { text: l.home, link: `${prefix}/` },
    { text: l.packages, items: packages.filter(pkg => {
      const filePath = join(localeDocsDir(locale, pkg), 'typedoc-sidebar.json')
      return existsSync(filePath)
    }).map(pkg => ({
      text: `@ue-too/${pkg}`,
      link: `${prefix}/${pkg}/`
    })) },
    buildVersionNav(locale),
  ]
}

// Root of a locale within a version, as a full URL
function versionLocaleUrl(line: string, locale: Locale): string {
  return `${siteUrl}${versionPath(versions, line)}${locale === 'en' ? '' : `${locale}/`}`
}

// Version switcher: links to the same locale's home page in each version
function buildVersionNav(locale: Locale): DefaultTheme.NavItemWithChildren {
  const latestSuffix: Record<Locale, string> = {
    en: ' (latest)',
    'zh-TW': '（最新）',
    ja: '（最新）',
  }

  return {
    text: `v${docsVersion}`,
    items: [versions.latest, ...versions.archived].map(line => ({
      text: line === versions.latest ? `v${line}${latestSuffix[locale]}` : `v${line}`,
      link: versionLocaleUrl(line, locale),
      // Another version is another build, so skip client-side routing
      target: '_self',
      noIcon: true,
    })),
  }
}

// Notice shown on every page of an archived version
function buildVersionBanner(locale: Locale): ThemeConfig['versionBanner'] {
  if (docsVersion === versions.latest) return undefined

  const labels: Record<Locale, { text: string; linkText: string }> = {
    en: {
      text: `You're viewing the docs for v${docsVersion}. The latest version is v${versions.latest}.`,
      linkText: 'Go to the latest docs',
    },
    'zh-TW': {
      text: `您正在瀏覽 v${docsVersion} 的文件。最新版本為 v${versions.latest}。`,
      linkText: '前往最新文件',
    },
    ja: {
      text: `v${docsVersion} のドキュメントを表示しています。最新バージョンは v${versions.latest} です。`,
      linkText: '最新のドキュメントへ',
    },
  }

  return { ...labels[locale], link: versionLocaleUrl(versions.latest, locale) }
}

// VitePress UI theme translations
const zhTWThemeConfig = {
  outline: { label: '頁面導覽' },
  docFooter: { prev: '上一頁', next: '下一頁' },
  darkModeSwitchLabel: '外觀',
  lightModeSwitchTitle: '切換至淺色模式',
  darkModeSwitchTitle: '切換至深色模式',
  sidebarMenuLabel: '選單',
  returnToTopLabel: '回到頂部',
  langMenuLabel: '切換語言',
  lastUpdated: { text: '最後更新於' },
  search: {
    provider: 'local' as const,
    options: {
      translations: {
        button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
        modal: {
          displayDetails: '顯示詳細列表',
          resetButtonTitle: '清除查詢',
          backButtonTitle: '關閉搜尋',
          noResultsText: '無相關結果',
          footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' },
        },
      },
    },
  },
}

const jaThemeConfig = {
  outline: { label: 'ページナビ' },
  docFooter: { prev: '前のページ', next: '次のページ' },
  darkModeSwitchLabel: '外観',
  lightModeSwitchTitle: 'ライトモードに切り替え',
  darkModeSwitchTitle: 'ダークモードに切り替え',
  sidebarMenuLabel: 'メニュー',
  returnToTopLabel: 'トップに戻る',
  langMenuLabel: '言語を切り替え',
  lastUpdated: { text: '最終更新' },
  search: {
    provider: 'local' as const,
    options: {
      translations: {
        button: { buttonText: '検索', buttonAriaLabel: '検索' },
        modal: {
          displayDetails: '詳細リストを表示',
          resetButtonTitle: 'クエリをクリア',
          backButtonTitle: '検索を閉じる',
          noResultsText: '結果が見つかりません',
          footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
        },
      },
    },
  },
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  srcDir,
  base: `${new URL(siteUrl).pathname}${versionPath(versions, docsVersion)}`,
  outDir: `.vitepress/dist/${versionPath(versions, docsVersion)}`,

  title: 'uē-tôo',
  description: 'A modular TypeScript library for HTML canvas applications. Features include infinite canvas with pan/zoom/rotate, animation system, state machines, Bezier curves, 2D physics, geographic projections, and more.',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: buildNav('en'),
        sidebar: buildSidebar('en'),
        versionBanner: buildVersionBanner('en'),
      },
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'uē-tôo',
      description: '一個用於 HTML Canvas 應用程式的模組化 TypeScript 函式庫。',
      themeConfig: {
        nav: buildNav('zh-TW'),
        sidebar: buildSidebar('zh-TW'),
        versionBanner: buildVersionBanner('zh-TW'),
        ...zhTWThemeConfig,
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'uē-tôo',
      description: 'HTML Canvas アプリケーションのためのモジュラー TypeScript ライブラリ。',
      themeConfig: {
        nav: buildNav('ja'),
        sidebar: buildSidebar('ja'),
        versionBanner: buildVersionBanner('ja'),
        ...jaThemeConfig,
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ue-too/ue-too' },
    ],
  },
})

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent, h } from 'vue'
import VersionBanner from './VersionBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(VersionBanner),
      'home-hero-before': () => h(VersionBanner, { home: true }),
    }),
  enhanceApp({ app }) {
    // Loaded on demand, so only pages with live examples download the playground
    app.component('LivePlayground', defineAsyncComponent(() => import('./live-playground/LivePlayground.vue')))
  },
} satisfies Theme

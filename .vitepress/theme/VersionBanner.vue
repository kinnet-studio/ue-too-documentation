<script setup lang="ts">
import { useData } from 'vitepress'
import type { ThemeConfig } from '../config'

// home: rendered above the home page hero, so match the hero's width and gutters
defineProps<{ home?: boolean }>()

// Set only on archived versions (see buildVersionBanner in config.ts)
const { theme } = useData<ThemeConfig>()
</script>

<template>
  <div v-if="theme.versionBanner" :class="{ home }">
    <div class="version-banner">
      {{ theme.versionBanner.text }}
      <a :href="theme.versionBanner.link" target="_self">{{ theme.versionBanner.linkText }}</a>
    </div>
  </div>
</template>

<style scoped>
.version-banner {
  margin-bottom: 24px;
  padding: 12px 16px;
  border: 1px solid var(--vp-custom-block-warning-border);
  border-radius: 8px;
  background-color: var(--vp-custom-block-warning-bg);
  color: var(--vp-custom-block-warning-text);
  font-size: 14px;
  line-height: 24px;
}

.version-banner a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: underline;
}

.home {
  padding: 24px 24px 0;
}

.home .version-banner {
  max-width: 1152px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .home {
    padding: 24px 48px 0;
  }
}

@media (min-width: 960px) {
  .home {
    padding: 24px 64px 0;
  }
}
</style>

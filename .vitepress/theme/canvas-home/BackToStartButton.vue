<script setup lang="ts">
/**
 * The keyboard and screen reader copy of the canvas's "Back to start" pill.
 * It sits after the hero's links, inside the visually hidden HTML hero, and
 * only exists while the canvas runs: focusing it shows the pill with a focus
 * ring, pressing it flies the camera back to where the page opened.
 */
import { useData } from 'vitepress'
import { computed } from 'vue'
import { backLabel, canvasHome } from './state'

const { lang } = useData()
const label = computed(() => backLabel(lang.value))
</script>

<template>
  <button
    v-if="canvasHome"
    class="canvas-home-back"
    data-testid="canvas-home-back"
    type="button"
    @click="canvasHome?.goBack()"
    @focus="canvasHome?.setBackFocused(true)"
    @blur="canvasHome?.setBackFocused(false)"
  >
    {{ label }}
  </button>
</template>

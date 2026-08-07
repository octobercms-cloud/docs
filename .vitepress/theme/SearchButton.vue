<template>
  <button
    type="button"
    class="flex size-9 items-center justify-center rounded-xl transition-colors hover:bg-gray-200/50 dark:hover:bg-gray-700/40"
    aria-label="Search"
    aria-keyshortcuts="/ control+k meta+k"
    title="Search"
    @click="openSearch"
  >
    <Search class="size-5 text-(--vp-c-text-1)" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { Search } from '@lucide/vue'

// The default theme owns the search modal's open state, so reuse its
// documented shortcut rather than reaching into the component.
function openSearch() {
  window.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'k', metaKey: true }),
  )
}
</script>

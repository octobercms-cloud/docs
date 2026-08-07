<template>
  <div ref="root" class="ThemePicker relative">
    <button
      type="button"
      class="flex size-9 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-200/50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/40 dark:hover:text-gray-200"
      :aria-expanded="open"
      aria-haspopup="listbox"
      title="Select color theme"
      @click.stop="open = !open"
    >
      <component :is="current.icon" class="size-5" aria-hidden="true" />
    </button>

    <div
      v-show="open"
      class="absolute grid gap-1 right-0 top-full z-50 min-w-36 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
      role="listbox"
      aria-label="Color theme"
    >
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        role="option"
        class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-orange-500 dark:text-gray-300 dark:hover:bg-gray-700/60 dark:hover:text-orange-400"
        :class="mode === option.value && 'bg-october/10 text-orange-500 dark:text-orange-400'"
        :aria-selected="mode === option.value"
        :title="`Use ${option.label.toLowerCase()} theme`"
        @click="select(option.value)"
      >
        <component :is="option.icon" class="size-4 shrink-0" aria-hidden="true" />
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Moon, Sun } from '@lucide/vue'
import { useColorMode } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useExclusiveDropdown } from './useExclusiveDropdown'

type Mode = 'light' | 'dark' | 'auto'

const mode = useColorMode({
  attribute: 'class',
  storageKey: 'vitepress-theme-appearance',
  emitAuto: true,
  modes: {
    light: '',
    dark: 'dark',
    auto: '',
  },
})

const open = useExclusiveDropdown('theme-picker')
const root = ref<HTMLElement | null>(null)

const options = [
  { value: 'light' as const, label: 'Light', icon: Sun },
  { value: 'dark' as const, label: 'Dark', icon: Moon },
  { value: 'auto' as const, label: 'System', icon: Monitor },
]

const current = computed(
  () => options.find((option) => option.value === mode.value) ?? options[2],
)

function select(value: Mode) {
  mode.value = value
  open.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    open.value = false
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

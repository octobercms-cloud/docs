<template>
  <Teleport v-if="heading" :to="heading">
    <div ref="root" class="CopyPage relative ml-auto flex shrink-0 items-center self-baseline">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700/60"
        :aria-expanded="open"
        aria-haspopup="menu"
        title="Copy page"
        @click.stop="open = !open"
      >
        <Copy class="size-4 shrink-0" aria-hidden="true" />
        <span class="hidden sm:inline">Copy page</span>
        <ChevronUp v-if="open" class="size-3.5 opacity-60" aria-hidden="true" />
        <ChevronDown v-else class="size-3.5 opacity-60" aria-hidden="true" />
      </button>

      <div
        v-show="open"
        class="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900"
        role="menu"
        aria-label="Page actions"
      >
        <button
          type="button"
          role="menuitem"
          class="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left no-underline! transition-colors hover:bg-gray-100 hover:no-underline! dark:hover:bg-gray-800"
          title="Copy page as Markdown for LLMs"
          @click="copyMarkdown"
        >
          <span class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <Copy class="size-4 text-gray-700 dark:text-gray-200" aria-hidden="true" />
          </span>
          <span class="min-w-0">
            <span class="block text-sm font-medium text-gray-900 dark:text-gray-100">
              {{ copied ? 'Copied' : 'Copy page' }}
            </span>
            <span class="block text-xs text-gray-500 dark:text-gray-400">
              Copy page as Markdown for LLMs
            </span>
          </span>
        </button>

        <a
          role="menuitem"
          class="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left no-underline! transition-colors hover:bg-gray-100 hover:no-underline! dark:hover:bg-gray-800"
          :href="chatGptUrl"
          target="_blank"
          rel="noreferrer"
          title="Ask questions about this page in ChatGPT"
          @click="open = false"
        >
          <span class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <svg viewBox="0 0 320 320" class="size-4 text-gray-700 dark:text-gray-200" aria-hidden="true">
              <path fill="currentColor" d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/>
            </svg>
          </span>
          <span class="min-w-0">
            <span class="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
              Open in ChatGPT
              <ExternalLink class="size-3 opacity-50" aria-hidden="true" />
            </span>
            <span class="block text-xs text-gray-500 dark:text-gray-400">
              Ask questions about this page
            </span>
          </span>
        </a>

        <a
          role="menuitem"
          class="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left no-underline! transition-colors hover:bg-gray-100 hover:no-underline! dark:hover:bg-gray-800"
          :href="claudeUrl"
          target="_blank"
          rel="noreferrer"
          title="Ask questions about this page in Claude"
          @click="open = false"
        >
          <span class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <svg viewBox="0 0 24 24" class="size-4 text-gray-700 dark:text-gray-200" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.304 3.541h-3.672l6.703 16.918H24L17.304 3.541zM6.696 3.541L0 20.459h3.744l1.37-3.543h6.879l1.371 3.543h3.744L10.615 3.541H6.696zm.547 10.223l2.242-5.791 2.242 5.791H7.243z"
              />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
              Open in Claude
              <ExternalLink class="size-3 opacity-50" aria-hidden="true" />
            </span>
            <span class="block text-xs text-gray-500 dark:text-gray-400">
              Ask questions about this page
            </span>
          </span>
        </a>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ChevronDown, ChevronUp, Copy, ExternalLink } from '@lucide/vue'
import { onContentUpdated, useData } from 'vitepress'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { stripNoCopy } from './stripNoCopy'
import { useExclusiveDropdown } from './useExclusiveDropdown'

const markdownFiles = import.meta.glob('../../docs/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const { page } = useData()

const open = useExclusiveDropdown('copy-page')
const copied = ref(false)
const root = ref<HTMLElement | null>(null)
const heading = ref<HTMLElement | null>(null)

const pageUrl = computed(() =>
  typeof window === 'undefined' ? '' : window.location.href,
)

const prompt = computed(
  () =>
    `Read this documentation page and help me understand it: ${pageUrl.value}`,
)

const chatGptUrl = computed(
  () => `https://chatgpt.com/?q=${encodeURIComponent(prompt.value)}`,
)

const claudeUrl = computed(
  () => `https://claude.ai/new?q=${encodeURIComponent(prompt.value)}`,
)

async function getMarkdown() {
  const relativePath = page.value.relativePath.replace(/\\/g, '/')
  const key = Object.keys(markdownFiles).find(
    (path) =>
      path.replace(/\\/g, '/').endsWith(`/docs/${relativePath}`) ||
      path.replace(/\\/g, '/').endsWith(relativePath),
  )

  if (!key || !markdownFiles[key]) {
    throw new Error('Markdown source not found for this page')
  }

  return stripNoCopy(await markdownFiles[key]())
}

async function copyMarkdown() {
  try {
    const markdown = await getMarkdown()
    await navigator.clipboard.writeText(markdown)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error(error)
  } finally {
    open.value = false
  }
}

let attachId = 0

async function attachToHeading() {
  const id = ++attachId
  // Remount the teleport so it survives page content patches that
  // replace the h1 and drop nodes Vue doesn't own.
  heading.value = null
  await nextTick()
  if (id !== attachId) return
  heading.value = document.querySelector('.VPDoc .vp-doc h1')
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
  attachToHeading()
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onContentUpdated(() => {
  open.value = false
  attachToHeading()
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

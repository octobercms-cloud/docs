import { ref, watch, type Ref } from 'vue'

const activeId = ref<string | null>(null)

export function useExclusiveDropdown(id: string): Ref<boolean> {
  const open = ref(false)

  watch(open, (value) => {
    if (value) activeId.value = id
    else if (activeId.value === id) activeId.value = null
  })

  watch(activeId, (value) => {
    if (value !== id) open.value = false
  })

  return open
}

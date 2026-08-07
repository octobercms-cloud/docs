<template>
  <div class="NavActions ml-3 flex items-center gap-3">
    <SearchButton />

    <ThemePicker class="max-sm:hidden" />

    <GetStarted class="max-sm:hidden" />
  </div>
</template>

<script setup lang="ts">
import GetStarted from './GetStarted.vue'
import SearchButton from './SearchButton.vue'
import ThemePicker from './ThemePicker.vue'
</script>

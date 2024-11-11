<template>
  <BaseSelect
    v-model="selectedLang"
    :options="languageOptions"
    class="bg-neutral-surface text-neutral-light border-neutral-DEFAULT rounded-md-lg px-4 py-2 focus:ring-2 focus:ring-accent-dark focus:outline-none"
    @update:modelValue="changeLanguage"
  />
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'

const selectedLang = ref('en')

// Define language options as an array of objects
const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'it', label: 'Italian' },
  // Altre lingue possono essere aggiunte qui
]

function changeLanguage() {
  const app = getCurrentInstance()
  app.appContext.config.globalProperties.$changeLanguage(selectedLang.value)
}
</script>

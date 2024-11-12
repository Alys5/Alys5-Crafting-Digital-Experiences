<template>
  <BaseSelect
    v-model="selectedLang"
    :options="languageOptions"
    class="bg-neutral-surface text-neutral-light border-neutral-DEFAULT rounded-md-lg px-4 py-2 focus:ring-2 focus:ring-accent-dark focus:outline-none"
    @update:modelValue="changeLanguage"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import { useI18n } from 'vue-i18n'

const selectedLang = ref('en')

// Define language options as an array of objects
const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'it', label: 'Italiano' },
  // Altre lingue possono essere aggiunte qui
]

function changeLanguage() {
  const { locale } = useI18n()
  locale.value = selectedLang.value
}

// Verifico se la lingua e cambiata e cambio il file di lingua corrispondente
watch(
  () => selectedLang.value,
  async (newLang) => {
    const { locale } = useI18n()
    const messages = await import(`./locales/${newLang}.json`)
    locale.value = newLang
    locale.messages.value = messages.default
  },
)
</script>

<template>
  <select
    v-model="selectedLang"
    class="px-4 py-2 rounded-md border border-gray-300 text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-gray-200 font-['Space Grotesk', sans-serif]"
    @change="changeLanguage"
  >
    <option value="en" selected>English</option>
    <option value="it">Italian</option>
    <!-- Example addition -->
  </select>
</template>

<script setup>
import { ref } from 'vue'

const selectedLang = ref('en')

function changeLanguage() {
  // Update the HTML lang attribute
  document.documentElement.lang = selectedLang.value

  // Update i18n locale if used (example with Vue I18n)
  // import { useI18n } from 'vue-i18n';
  // const { locale } = useI18n();
  // locale.value = selectedLang.value;
}
</script>

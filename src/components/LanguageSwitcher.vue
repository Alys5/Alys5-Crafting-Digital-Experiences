<template>
  <select v-model="currentLang" @change="changeLanguage">
    <option value="en">English</option>
    <option value="it">Italiano</option>
    <!-- Add other languages here -->
  </select>
</template>

<script setup>
import { ref } from 'vue'

const currentLang = ref('en')
function changeLanguage() {
  document.documentElement.lang = currentLang.value
  // Additional code to update the Vue I18n locale, if used
}
</script>

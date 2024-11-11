<template>
  <BaseSelect v-model="selectedLang" @update:modelValue="changeLanguage">
    <option value="en">English</option>
    <option value="it">Italian</option>
    <!-- Add other languages here -->
  </BaseSelect>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue' // Import getCurrentInstance

const selectedLang = ref('en')

function changeLanguage() {
  const app = getCurrentInstance()
  app.appContext.config.globalProperties.$changeLanguage(selectedLang.value)
}
</script>

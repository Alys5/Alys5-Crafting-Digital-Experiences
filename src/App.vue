<script setup>
import { RouterView } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <!-- LanguageSwitcher positioned in the top-right corner -->
    <div class="absolute top-4 right-4">
      <LanguageSwitcher />
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>

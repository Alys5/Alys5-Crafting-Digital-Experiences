<template>
  <footer
    class="bg-neutral-card text-neutral-light py-8 mt-auto border-t border-neutral-surface glass-card"
  >
    <div class="container mx-auto px-6 lg:px-8">
      <div
        class="flex flex-col items-center justify-between md:flex-row md:justify-between space-y-6 md:space-y-0"
      >
        <!-- Copyright Text -->
        <p class="text-sm text-neutral-light text-center md:text-left font-sans">
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copy') }}
        </p>

        <!-- Social Links -->
        <div class="flex space-x-6 mt-4 md:mt-0 justify-center">
          <a
            href="#"
            class="text-neutral-light hover:text-primary-hover transition-all duration-200 hover-glow"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="#"
            class="text-neutral-light hover:text-primary-hover transition-all duration-200 hover-glow"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            class="text-neutral-light hover:text-primary-hover transition-all duration-200 hover-glow"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            class="text-neutral-light hover:text-primary-hover transition-all duration-200 hover-glow"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            class="text-neutral-light hover:text-primary-hover transition-all duration-200 hover-glow"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
</script>

<style scoped>
.text-neutral-light {
  @apply text-gray-400;
}
.hover-glow:hover {
  @apply hover:text-primary;
}
.glass-card {
  @apply bg-white bg-opacity-70 backdrop-blur-md shadow-md rounded-3xl;
}
</style>

<template>
  <nav
    class="bg-gray-900 dark:bg-[#1e1e1e] text-white p-4 fixed w-full z-50 backdrop-blur-md shadow-md"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo and Branding -->
      <router-link
        to="/"
        class="flex items-center text-xl md:text-2xl font-space-grotesk font-bold text-white ml-2"
      >
        <img :src="logoSrc" alt="Alys5 Portfolio Logo" class="h-8 md:h-10 mr-2" />
        <span class="text-yellow-400">Alys</span>5
      </router-link>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link
          to="/projects"
          class="text-lg font-space-grotesk hover:text-yellow-400 transition-all duration-200"
        >
          Projects
        </router-link>
        <router-link
          to="/about"
          class="text-lg font-space-grotesk hover:text-yellow-400 transition-all duration-200"
        >
          About
        </router-link>
      </div>

      <!-- Language Switcher -->
      <div>
        <LanguageSwitcher />
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-gray-900 bg-opacity-90 fixed inset-0 z-40 flex items-center justify-center"
    >
      <div class="flex flex-col items-center space-y-4">
        <router-link
          to="/projects"
          class="text-lg font-space-grotesk text-white hover:text-yellow-400 transition-all duration-200"
        >
          Projects
        </router-link>
        <router-link
          to="/about"
          class="text-lg font-space-grotesk text-white hover:text-yellow-400 transition-all duration-200"
        >
          About
        </router-link>
        <LanguageSwitcher />
        <button @click="toggleMobileMenu" class="text-white mt-4">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const logoSrc = 'src/assets/AMlogo_Light.svg'
</script>

<style scoped>
/* Add custom styles for the mobile menu toggle icon */
.fas {
  transition: transform 0.3s ease-in-out;
}

.md:hidden button:hover .fas {
  transform: rotate(90deg);
}

/* Transition for mobile menu */
.md:hidden .transition-all {
  transition: all 0.3s ease-in-out;
}
</style>

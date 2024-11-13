<template>
  <nav
    class="bg-neutral-surface dark:bg-neutral-card text-white p-4 fixed w-full z-50 backdrop-blur-md shadow-md glass-card"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo and Branding -->
      <router-link
        to="/"
        class="flex items-center text-3xl font-heading font-bold text-white ml-2 hover:text-primary.hover transition-all duration-200"
      >
        <img :src="logoSrc" alt="Alys5 Portfolio Logo" class="h-10 md:h-12 mr-2" />
        <span class="text-primary">{{ $t('nav.title') }}</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="link in links"
          :key="link.route"
          :to="{ name: link.route }"
          class="text-lg font-sans hover:text-primary.hover transition-all duration-200"
        >
          {{ $t(`nav.${link.label}`) }}
        </router-link>
      </div>

      <!-- Language Switcher and Mobile Menu Toggle Button -->
      <div class="flex items-center space-x-2">
        <LanguageSwitcher />
        <button @click="toggleMobileMenu" class="text-white focus:outline-none md:hidden">
          <i class="fas fa-bars text-2xl" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-neutral-card bg-opacity-90 fixed inset-0 z-40 flex items-center justify-center"
      >
        <div class="flex flex-col items-center space-y-4">
          <router-link
            v-for="link in links"
            :key="link.route"
            :to="{ name: link.route }"
            class="text-lg font-sans text-white hover:text-primary.hover transition-all duration-200"
          >
            {{ $t(`nav.${link.label}`) }}
          </router-link>
          <LanguageSwitcher />
          <button @click="toggleMobileMenu" class="text-white mt-4">
            <i class="fas fa-times text-2xl" />
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const links = [
  { route: 'about', label: 'about' },
  { route: 'projects', label: 'projects' },
  { route: 'contact', label: 'contact' },
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const logoSrc = 'src/assets/AMlogo_Light.svg'
</script>

<style scoped>
/* Transition for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateY(-100%);
}
.slide-fade-leave-to {
  transform: translateY(100%);
}

.router-link-active {
  @apply text-primary;
}
</style>

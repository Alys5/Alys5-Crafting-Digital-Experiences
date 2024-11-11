<template>
  <nav class="bg-gray-800 dark:bg-[#1e1e1e] text-white p-4 fixed w-full z-50 backdrop-blur-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link
        to="/"
        class="flex items-center text-xl md:text-2xl font-space-grotesk font-bold text-white hidden md:block ml-2"
      >
        <img :src="logoSrc" alt="Alys5 Portfolio Logo" class="h-8 md:h-10 mr-2" />

        <span class="text-yellow-400">Alys</span>5
      </router-link>

      <div class="hidden md:flex space-x-4">
        <router-link to="/projects" class="text-lg font-space-grotesk hover:text-yellow-400"
          >Projects</router-link
        >
        <router-link to="/about" class="text-lg font-space-grotesk hover:text-yellow-400">
          >About</router-link
        >
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'NavBar',
  components: {
    LanguageSwitcher,
  },
  computed: {
    isDarkBackground() {
      // Check if the background is dark.  Adjust this logic as needed.
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    logoSrc() {
      return 'src/assets/AMlogo_Light.svg'
    },
  },
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
html {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--heading-line-height);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
  transform: translateY(0);
}

.glass-card {
  @apply bg-neutral-card backdrop-blur-md;
}

.hover-glow:hover {
  @apply shadow-lg;
}

.btn-elevated,
.btn-elevated-with-icon {
  @apply bg-primary hover:bg-primary-hover text-white;
}

.heading-gradient {
  background: linear-gradient(to right, var(--accent-pink), var(--accent-mint), var(--accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.code-pink {
  @apply text-accent-pink;
}

.code-purple {
  @apply text-purple-500;
}

.code-green {
  @apply text-green-500;
}

.code-yellow {
  @apply text-yellow-500;
}
</style>

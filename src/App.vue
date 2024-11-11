<template>
  <RouterView v-slot="{ Component }">
    <transition
      name="fade"
      :enter-active-class="transitionClasses.enterActive"
      :enter-from-class="transitionClasses.enterFrom"
      :enter-to-class="transitionClasses.enterTo"
      :leave-active-class="transitionClasses.leaveActive"
      :leave-from-class="transitionClasses.leaveFrom"
      :leave-to-class="transitionClasses.leaveTo"
    >
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
const transitionClasses = {
  enterActive: 'transition duration-300 ease-in-out',
  enterFrom: 'opacity-0 translate-y-4',
  enterTo: 'opacity-100 translate-y-0',
  leaveActive: 'transition duration-300 ease-in-out',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>

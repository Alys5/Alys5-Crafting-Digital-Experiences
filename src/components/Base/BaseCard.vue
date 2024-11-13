<template>
  <div class="glass-card shadow-md-2 rounded-lg bg-white dark:bg-neutral-card">
    <slot name="image" />
    <div class="p-4">
      <slot name="title" />
      <slot name="content" />
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
/* Typography */
:global(html) {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

:global(h1, h2, h3, h4, h5, h6) {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--heading-line-height);
}

/* Visual Effects */
.glass-card {
  @apply transition-shadow duration-200 ease-in-out;
}

/* Animations */
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
</style>

<template>
  <a :href="href" :class="linkClass" @click.prevent="handleClick">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkClass() {
      return [
        'text-primary', // Yellow for primary actions
        'hover:text-primary.hover', // Yellow on hover
        'underline',
        'transition-all',
        'duration-200',
        'ease-in-out',
        'hover-glow', // Interactive elements
      ].join(' ')
    },
  },
  methods: {
    handleClick() {
      // Add additional logic here, like event tracking.
    },
  },
}
</script>

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
  @apply bg-neutral-card bg-opacity-70 backdrop-blur-md shadow-md rounded-3xl;
}

.hover-glow:hover {
  @apply transition-shadow duration-200 ease-in-out shadow-lg shadow-accent-blue/50;
}

.heading-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink;
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

<template>
  <a
    :href="link"
    :class="[
      'btn-elevated',
      'hover-state-layer',
      color,
      hoverClasses,
      { 'btn-elevated-with-icon': icon },
    ]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i v-if="icon" :class="icon"></i>
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'bg-primary',
    },
    icon: {
      type: String,
      default: null,
    },
    hoverColor: {
      type: String,
      default: 'hover:bg-accent-dark', // colore di hover predefinito
    },
    variant: {
      type: String,
      default: 'elevated', // Opzioni possibili: elevated, flat, ecc.
    },
  },
  computed: {
    hoverClasses() {
      return this.hoverColor ? `${this.hoverColor} hover:shadow-md-3` : 'hover:shadow-md-3'
    },
  },
}
</script>

<style scoped>
.btn-elevated {
  @apply font-sans font-medium text-md-label py-4.5 px-10 rounded-full shadow-md-1 transition-shadow;
}
.btn-elevated-with-icon {
  @apply flex items-center pl-4 pr-6 space-x-2;
}
.hover-state-layer {
  @apply relative;
}
.hover-state-layer::before {
  content: '';
  @apply absolute inset-0 bg-current opacity-0 transition-opacity duration-200;
}
.hover-state-layer:hover::before {
  opacity: 8;
}
</style>

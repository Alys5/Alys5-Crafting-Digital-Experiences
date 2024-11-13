<template>
  <div :class="alertClass" class="p-4 rounded-md shadow-md glass-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    type: {
      type: String,
      default: 'info', // Tipi: 'info', 'success', 'warning', 'error'
    },
  },
  computed: {
    alertClass() {
      const alertTypes = {
        info: 'bg-accent-blue text-primary',
        success: 'bg-accent-mint text-primary',
        warning: 'bg-accent-pink text-primary',
        error: 'bg-neutral-card text-primary',
      }
      return `${alertTypes[this.type] || alertTypes.info} hover-glow`
    },
  },
}
</script>

<style scoped>
.glass-card {
  @apply bg-neutral-card bg-opacity-70 backdrop-blur-md shadow-md-3 rounded-3xl;
}

.hover-glow:hover {
  @apply transition-shadow duration-200 ease-in-out shadow-lg shadow-accent-blue/50;
}
</style>

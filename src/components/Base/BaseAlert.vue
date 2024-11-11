<template>
  <div :class="alertClass" class="p-4 rounded-md shadow-md">
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
        info: 'bg-blue-100 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
      }
      return alertTypes[this.type] || alertTypes.info
    },
  },
}
</script>

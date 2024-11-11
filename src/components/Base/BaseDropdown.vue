<template>
  <div class="relative">
    <button @click="toggleDropdown" class="btn-dropdown">
      <slot name="button" />
    </button>
    <div v-if="isOpen" class="absolute bg-white shadow-lg rounded-md w-full mt-2">
      <slot name="options" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.btn-dropdown {
  @apply p-2 bg-blue-500 text-white rounded-md focus:outline-none;
}
</style>

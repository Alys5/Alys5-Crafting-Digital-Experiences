<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="btn-elevated"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      aria-controls="dropdown-options"
    >
      <slot name="button" />
    </button>
    <div
      v-if="isOpen"
      class="absolute glass-card rounded-md w-full mt-2"
      id="dropdown-options"
      role="menu"
    >
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
.btn-elevated {
  @apply p-2 bg-neutral-surface text-neutral-light rounded-md focus:outline-none hover-glow;
}
</style>

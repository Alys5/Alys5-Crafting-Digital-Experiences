<template>
  <div class="relative" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot />
    <div
      v-if="isVisible"
      class="glass-card absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-2 rounded-md"
    >
      <p class="text-sm font-sans text-white">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTooltip',
  props: {
    text: String,
  },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    showTooltip() {
      this.isVisible = true
    },
    hideTooltip() {
      this.isVisible = false
    },
  },
}
</script>

<style scoped>
.glass-card {
  @apply bg-neutral-card bg-opacity-70 backdrop-blur-md shadow-md;
}
</style>

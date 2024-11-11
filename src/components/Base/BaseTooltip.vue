<template>
  <div class="relative" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot />
    <div
      v-if="isVisible"
      class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-black text-white text-xs rounded p-2"
    >
      {{ text }}
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

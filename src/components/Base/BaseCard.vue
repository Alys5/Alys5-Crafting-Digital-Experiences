<template>
  <div :class="cardClass">
    <slot name="image" />
    <div class="p-4">
      <slot name="title" />
      <slot name="content" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    shadow: {
      type: String,
      default: 'md-2', // Default shadow effect
    },
    rounded: {
      type: String,
      default: 'lg', // Default rounded corners
    },
  },
  computed: {
    cardClass() {
      return `shadow-${this.shadow} rounded-${this.rounded} bg-white`
    },
  },
}
</script>

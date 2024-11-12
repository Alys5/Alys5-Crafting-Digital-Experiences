<script setup>
import { computed } from 'vue'
const props = defineProps({
  label: { type: String, required: true },
  link: { type: String, required: true },
  color: { type: String, default: 'bg-primary' },
  icon: { type: String, default: null },
  hoverColor: { type: String, default: 'hover:bg-accent-dark' },
  variant: { type: String, default: 'elevated' },
})
const isImageIcon = computed(() => /^(http|\/|@\/assets\/)/.test(props.icon))
const isFontAwesomeIcon = computed(() => /^(fa|fab|mdi)/.test(props.icon))
const hoverClasses = computed(() => `${props.hoverColor} hover:shadow-md-3`)
</script>

<template>
  <a
    :href="link"
    class="btn-elevated"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'hover-state-layer',
      props.color,
      hoverClasses,
      { 'btn-elevated-with-icon': props.icon },
    ]"
  >
    <img v-if="isImageIcon" :src="props.icon" alt="Icon" class="icon" />
    <i v-else-if="isFontAwesomeIcon" :class="props.icon"></i>
    <span>{{ props.label }}</span>
  </a>
</template>

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

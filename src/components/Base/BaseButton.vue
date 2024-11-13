<script setup>
import { computed } from 'vue'
const props = defineProps({
  label: { type: String, required: true },
  link: { type: String, default: '' },
  color: { type: String, default: 'bg-primary' },
  icon: { type: String, default: null },
  hoverColor: { type: String, default: 'hover:bg-primary.hover' },
  variant: { type: String, default: 'elevated' },
  onClick: { type: Function, default: () => {} },
})
const isImageIcon = computed(() => /^(http|\/|@\/assets\/)/.test(props.icon))
const isFontAwesomeIcon = computed(() => /^(fa|fab|mdi)/.test(props.icon))
const hoverClasses = computed(() => `${props.hoverColor} hover:shadow-md-3`)
</script>

<template>
  <a
    v-if="props.link"
    :href="props.link"
    class="btn-elevated"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'hover-state-layer',
      props.color,
      hoverClasses,
      { 'btn-elevated-with-icon': props.icon },
      { 'btn-text': props.variant === 'text' },
    ]"
  >
    <img v-if="isImageIcon" :src="props.icon" alt="Icon" class="icon" />
    <i v-else-if="isFontAwesomeIcon" :class="props.icon"></i>
    <span>{{ props.label }}</span>
  </a>
  <button
    v-else
    class="btn-elevated"
    :class="[
      'hover-state-layer',
      props.color,
      hoverClasses,
      { 'btn-elevated-with-icon': props.icon },
      { 'btn-text': props.variant === 'text' },
    ]"
    @click="props.onClick"
  >
    <img v-if="isImageIcon" :src="props.icon" alt="Icon" class="icon" />
    <i v-else-if="isFontAwesomeIcon" :class="props.icon"></i>
    <span>{{ props.label }}</span>
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
}

.heading-gradient {
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 1) 0%,
    rgba(255, 215, 0, 1) 25%,
    rgba(255, 215, 0, 0) 50%
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 2s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

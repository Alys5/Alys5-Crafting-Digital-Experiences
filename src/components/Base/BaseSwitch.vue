<template>
  <div class="flex items-center">
    <label for="switch" class="mr-2">{{ label }}</label>
    <input
      id="switch"
      type="checkbox"
      :checked="value"
      @change="$emit('update:value', $event.target.checked)"
      class="toggle-switch"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    label: String,
    value: Boolean,
  },
}
</script>

<style scoped>
.toggle-switch {
  @apply w-10 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors;
}
.toggle-switch:checked {
  @apply bg-blue-500;
}
</style>

<template>
  <div class="flex items-center">
    <label for="switch" class="mr-2 text-sm font-sans font-medium text-neutral-900">
      {{ label }}
    </label>
    <input
      id="switch"
      type="checkbox"
      :checked="value"
      @change="$emit('update:value', $event.target.checked)"
      class="toggle-switch glass-card rounded-full p-1 transition-colors"
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
  width: 2.5rem;
  height: 1.5rem;
}
.toggle-switch:checked {
  background-color: var(--primary);
}
.toggle-switch:hover {
  background-color: var(--primary-hover);
}
</style>

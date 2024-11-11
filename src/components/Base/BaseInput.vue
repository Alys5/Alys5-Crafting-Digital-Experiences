<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm font-medium text-neutral-900">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input-base"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="error" class="text-xs text-red-600">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: String,
    type: {
      type: String,
      default: 'text',
    },
    value: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    error: String,
  },
}
</script>

<style scoped>
.input-base {
  @apply border border-neutral-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-neutral-100 disabled:cursor-not-allowed;
}
</style>

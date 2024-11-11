<template>
  <select
    v-model="internalValue"
    :class="[
      'px-4 py-2 rounded-md-lg border border-neutral-DEFAULT text-sm bg-neutral-surface text-neutral-light focus:outline-none focus:ring-2 focus:ring-accent-dark font-heading-font',
      customClasses,
    ]"
    @change="handleChange"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :class="['bg-neutral-surface text-neutral-light']"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  options: {
    type: Array,
    required: true,
    default: () => [], // Expects an array of objects: [{ value: 'en', label: 'English' }, ...]
  },
  customClasses: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

// Sync internalValue with modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  },
)

// Emit changes to parent
function handleChange() {
  emit('update:modelValue', internalValue.value)
}
</script>

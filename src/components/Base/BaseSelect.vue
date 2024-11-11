<template>
  <select
    v-model="selectedLang"
    class="px-4 py-2 rounded-md border border-gray-300 text-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-gray-200 font-['Space Grotesk', sans-serif]"
    @change="changeLanguage"
  >
    <option value="en">English</option>
    <option value="it">Italian</option>
    <!-- Example addition -->
  </select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

// Define props and emits
const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const selectedLang = ref(props.modelValue)

function changeLanguage() {
  emit('update:modelValue', selectedLang.value)
}
</script>

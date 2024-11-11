<template>
  <button
    class="px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[
      variant === 'primary'
        ? 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500'
        : variant === 'secondary'
          ? 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400', // Default
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'default', // 'primary', 'secondary'
    },
  },
}
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-6">
      <slot name="content" />
      <div class="flex justify-end mt-4">
        <button @click="close" class="px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    open() {
      this.isVisible = true
    },
    close() {
      this.isVisible = false
    },
  },
}
</script>

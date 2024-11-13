<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex justify-center items-center z-50 bg-neutral-card bg-opacity-50"
  >
    <div class="bg-neutral-surface rounded-lg p-6 glass-card">
      <slot name="content" />
      <div class="flex justify-end mt-4">
        <button @click="close" class="px-4 py-2 bg-primary text-white rounded-md hover-glow">
          Close
        </button>
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

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--heading-line-height);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>

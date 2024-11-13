<template>
  <div
    class="min-h-screen flex items-center justify-center bg-neutral-card dark:bg-neutral-background text-white"
  >
    <div
      class="max-w-[75vw] w-full md:p-8 md:p-12 lg:p-16 grid grid-cols-1 gap-8 bg-neutral-surface rounded-3xl border border-accent-pink/20 shadow-md-3 min-h-[70vh] glass-card"
    >
      <!-- 404 Section -->
      <div class="w-full space-y-8">
        <div
          class="p-8 text-center relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent-pink/10 hover-glow"
        >
          <!-- Radial Gradient Overlay -->
          <div
            class="absolute inset-0 opacity-20"
            style="background: radial-gradient(circle at 30% 30%, var(--tw-gradient-stops))"
          ></div>

          <!-- Terminal Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto mb-6 text-accent-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          <h1
            class="heading-gradient text-4xl md:text-5xl font-heading-font font-extrabold mb-4 tracking-wider"
          >
            {{ $t('error.title', { locale: $i18n.locale }) }}
          </h1>
          <p class="text-lg md:text-xl text-neutral-light">
            {{ $t('error.subtitle', { locale: $i18n.locale }) }}
          </p>
        </div>

        <!-- Alert Section -->
        <div
          class="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent-dark/20 hover-glow"
        >
          <div class="flex items-center space-x-4">
            <!-- Code Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-accent-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <p class="font-semibold text-xl text-accent-dark">
              {{ $t('error.alertTitle', { locale: $i18n.locale }) }}
            </p>
          </div>
          <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
            <BaseButton
              :label="$t('error.alertMessage', { locale: $i18n.locale })"
              :onClick="navigate"
              color="bg-dark-500"
              icon="fab fa-home"
              hoverColor="bg-dark-600"
              variant="text"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/Base/BaseButton.vue'
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

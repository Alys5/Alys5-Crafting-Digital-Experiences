<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/Base/BaseButton.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()

// Links
const calendarLink = 'https://calendar.app.google/ppakzD82jGkDSzWN7'
const linkedinLink = 'https://www.linkedin.com/in/alys5'
const githubLink = 'https://github.com/alys5'
const fiverrLink = 'https://it.fiverr.com/alys_5'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-background text-white">
    <div
      class="max-w-6xl w-full p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-neutral-surface rounded-3xl border border-accent-pink/20 shadow-md-3 min-h-[70vh]"
    >
      <!-- Welcome Section -->
      <div class="lg:col-span-2 space-y-8">
        <div
          class="p-8 text-center relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent-pink/10"
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
            class="text-4xl md:text-5xl font-heading-font font-extrabold mb-4 tracking-wider bg-gradient-to-r from-primary to-accent-dark bg-clip-text text-transparent"
          >
            {{ t('maintenance.title') }}
          </h1>
          <p class="text-lg md:text-xl text-neutral-light">
            {{ t('maintenance.subtitle') }}
          </p>
        </div>

        <!-- Alert Section -->
        <div
          class="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent-dark/20"
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
              {{ t('maintenance.alertTitle') }}
            </p>
          </div>
          <p class="text-neutral-light text-lg mt-2">
            {{ t('maintenance.alertMessage') }}
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="flex flex-col gap-6 justify-center lg:col-span-1">
        <LanguageSwitcher class="mb-6" />
        <BaseButton
          :label="t('cta.schedule')"
          :link="calendarLink"
          variant="elevated"
          color="bg-accent-pink"
          icon="fa-solid fa-calendar"
          hoverColor="bg-accent-pink/80"
        />
        <BaseButton
          :label="t('cta.linkedin')"
          :link="linkedinLink"
          color="bg-blue-500"
          icon="fab fa-linkedin-in"
          hoverColor="bg-blue-600"
          variant="elevated"
        />
        <BaseButton
          :label="t('cta.github')"
          :link="githubLink"
          color="bg-gray-500"
          icon="fab fa-github"
          hoverColor="bg-gray-600"
          variant="elevated"
        />
        <BaseButton
          :label="t('cta.fiverr')"
          :link="fiverrLink"
          color="bg-green-500"
          icon="fab fa-fiverr"
          hoverColor="bg-green-600"
          variant="elevated"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Custom gradient text support for other browsers */
@supports not (-webkit-background-clip: text) {
  h1 {
    background: unset;
    color: var(--tw-gradient-from);
  }
}
</style>

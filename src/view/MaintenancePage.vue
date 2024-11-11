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
  <div class="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
    <div
      class="max-w-6xl w-full p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-800 rounded-3xl border border-yellow-500/20 shadow-2xl min-h-[70vh]"
    >
      <!-- Welcome Section -->
      <div class="lg:col-span-2 space-y-8">
        <div
          class="p-8 text-center relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/10"
        >
          <!-- Radial Gradient Overlay -->
          <div
            class="absolute inset-0 opacity-20"
            style="background: radial-gradient(circle at 30% 30%, rgb(255, 255, 0), transparent)"
          ></div>

          <!-- Terminal Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto mb-6 text-yellow-400"
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
            class="text-4xl md:text-5xl font-extrabold mb-4 tracking-wider"
            style="
              background: linear-gradient(to right, #ffd700, #ffa500, #ec4899);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
          >
            {{ t('maintenance.title') }}
          </h1>
          <p class="text-lg md:text-xl text-gray-300">
            {{ t('maintenance.subtitle') }}
          </p>
        </div>

        <!-- Alert Section -->
        <div
          class="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/20"
        >
          <div class="flex items-center space-x-4">
            <!-- Code Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-400"
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
            <p class="font-semibold text-xl text-blue-400">
              {{ t('maintenance.alertTitle') }}
            </p>
          </div>
          <p class="text-gray-300 text-lg mt-2">
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
          color="bg-social-google-calendar-500"
          icon="fa-solid fa-calendar"
          hoverColor="bg-social-google-calendar-600"
        />
        <BaseButton
          :label="t('cta.linkedin')"
          :link="linkedinLink"
          color="bg-social-linkedin-500"
          icon="fab fa-linkedin-in"
          hoverColor="bg-social-linkedin-600"
          variant="elevated"
        />
        <BaseButton
          :label="t('cta.github')"
          :link="githubLink"
          color="bg-social-github-600"
          icon="fab fa-github"
          hoverColor="bg-social-github-700"
          variant="elevated"
        />
        <BaseButton
          :label="t('cta.fiverr')"
          :link="fiverrLink"
          color="bg-social-fiverr-500"
          icon="fab fa-fiverr"
          hoverColor="bg-social-fiverr-600"
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
    color: #ffd700;
  }
}
</style>

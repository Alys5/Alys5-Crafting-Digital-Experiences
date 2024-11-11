<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // Accessing translation function

// Links
const calendarLink = 'https://calendar.app.google/ppakzD82jGkDSzWN7'
const linkedinLink = 'https://www.linkedin.com/in/alys5'
const githubLink = 'https://github.com/alys5'
const fiverrLink = 'https://www.fiverr.com/alys_5'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div
      class="bg-gray-800 rounded-3xl shadow-xl max-w-6xl w-full p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <!-- Sezione di Benvenuto e Alert -->
      <div class="lg:col-span-2 space-y-8">
        <div class="bg-gray-800 rounded-xl p-8 text-center shadow-lg">
          <h1 class="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 tracking-wider">
            {{ t('maintenance.title') }}
          </h1>
          <p class="text-gray-300 text-lg md:text-xl">
            {{ t('maintenance.subtitle') }}
          </p>
        </div>
        <div class="bg-gray-800 rounded-xl p-6 shadow-lg">
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p class="font-semibold text-xl text-gray-300">
              {{ t('maintenance.alertTitle') }}
            </p>
          </div>
          <p class="text-gray-300 text-lg mt-2">
            {{ t('maintenance.alertMessage') }}
          </p>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="flex flex-col gap-6 justify-center">
        <a
          :href="calendarLink"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <i class="fas fa-calendar-alt mr-2"></i>
          {{ t('cta.schedule') }}
        </a>
        <a
          :href="linkedinLink"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <i class="fab fa-linkedin-in mr-2"></i>
          {{ t('cta.linkedin') }}
        </a>
        <a
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <i class="fab fa-github mr-2"></i>
          {{ t('cta.github') }}
        </a>
        <a
          :href="fiverrLink"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <i class="fab fa-fiverr mr-2"></i>
          {{ t('cta.fiverr') }}
        </a>
      </div>
    </div>
  </div>
</template>

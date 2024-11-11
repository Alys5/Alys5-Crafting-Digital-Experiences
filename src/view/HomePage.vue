<template>
  <NavBar />

  <main class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16 md:px-8 lg:px-12 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Hero Section -->
        <div class="col-span-2 lg:col-span-1">
          <div class="bg-gray-800 p-8 md:p-12 lg:p-16 rounded-xl shadow-lg">
            <h1 class="text-4xl md:text-6xl font-space font-extrabold text-primary-500 mb-4">
              {{ t('home.title') }}
            </h1>
            <p class="text-lg md:text-xl text-gray-300 mb-8">
              {{ t('home.subtitle') }}
            </p>
            <div class="space-y-4">
              <BaseButton variant="primary" class="w-full">
                {{ t('cta.primary') }}
              </BaseButton>
              <BaseButton variant="secondary" class="w-full">
                {{ t('cta.secondary') }}
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Sections -->
        <div class="col-span-2 lg:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BaseCard
              v-for="(section, index) in sections"
              :key="index"
              :title="t(`home.section${index + 1}.title`)"
              :description="t(`home.section${index + 1}.description`)"
            />
          </div>
        </div>
      </div>
    </div>
  </main>

  <FooterBar />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseCard from '@/components/Base/BaseCard.vue'

const { t } = useI18n()

const sections = [
  {
    // Section data here (optional static data or dynamic)
  },
  {
    // Add more sections as required
  },
  {
    // Add more sections as required
  },
]
</script>

<style scoped>
/* Global styles for text, button variations, and card hover effects can go here */
</style>

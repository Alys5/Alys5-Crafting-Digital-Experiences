<template>
  <div class="glass-card p-4">
    <h2 class="heading-gradient text-2xl font-heading mb-4">Language</h2>
    <BaseSelect
      :model-value="locale"
      :options="
        supportedLocales.map((sLocale) => ({ value: sLocale, label: t(`locale.${sLocale}`) }))
      "
      @update:model-value="switchLanguage"
      class="hover-glow"
    />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Tr from '@/locales/translation'

export default {
  setup() {
    const { t, locale } = useI18n()
    const router = useRouter()
    const supportedLocales = Tr.supportedLocales

    const switchLanguage = (newLocale) => {
      Tr.switchLanguage(newLocale)
      router.replace({ params: { locale: newLocale } })
    }

    return { t, locale, supportedLocales, switchLanguage }
  },
}
</script>

<style scoped>
.glass-card {
  @apply bg-neutral-card bg-opacity-70 backdrop-blur-md shadow-md-3 rounded-3xl;
}

.heading-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink;
}

.hover-glow:hover {
  @apply transition-shadow duration-200 ease-in-out shadow-lg shadow-accent-blue/50;
}
</style>

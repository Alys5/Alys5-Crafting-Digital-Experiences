<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-surface text-white">
    <div
      class="max-w-6xl w-full p-8 md:p-12 lg:p-16 glass-card rounded-3xl border border-accent-pink/20 shadow-md-3 min-h-[70vh] space-y-8"
    >
      <h1 class="heading-gradient text-4xl font-space-grotesk font-bold">Contact</h1>
      <p class="text-lg font-sans font-light">This is a contact page.</p>
      <BaseButton
        label="Send Email"
        link="mailto:alys@alys.dev"
        variant="elevated"
        color="bg-primary"
        icon="fa-solid fa-envelope"
        hoverColor="bg-primary.hover"
        class="hover-glow"
      />
    </div>
  </div>
</template>

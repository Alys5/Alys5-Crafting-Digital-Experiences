<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-surface text-white">
    <div
      class="max-w-6xl w-full p-8 md:p-12 lg:p-16 glass-card rounded-3xl border border-accent-pink/20 shadow-md-3 min-h-[70vh] space-y-8"
    >
      <h1 class="heading-gradient text-4xl font-space-grotesk font-bold">About</h1>
      <p class="text-lg font-sans font-light">
        This is a personal website showcasing my work and projects as a UX/UI Designer and Front-end
        Developer.
      </p>
      <BaseButton
        label="Learn More"
        link="#"
        variant="elevated"
        color="bg-primary"
        icon="fa-solid fa-arrow-right"
        hoverColor="bg-primary.hover"
        class="hover-glow"
      />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
}

.heading-gradient {
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 1) 0%,
    rgba(255, 215, 0, 1) 25%,
    rgba(255, 215, 0, 0) 50%
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 2s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-neutral-surface text-neutral-light"
  >
    <div class="max-w-6xl w-full p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col items-center space-y-4 glass-card">
        <h1 class="heading-gradient text-4xl font-space-grotesk font-bold">Projects</h1>
        <p class="text-lg font-sans font-light">Some of my projects will go here.</p>
        <button class="btn-elevated-with-icon" @click="$router.push({ name: 'project01' })">
          <i class="fas fa-arrow-right text-lg" />
          <span class="ml-2">Project 1</span>
        </button>
      </div>
      <div class="flex flex-col items-center space-y-4 glass-card">
        <h1 class="heading-gradient text-4xl font-space-grotesk font-bold">Project 2</h1>
        <p class="text-lg font-sans font-light">Some other projects will go here.</p>
        <button class="btn-elevated-with-icon" @click="$router.push({ name: 'project02' })">
          <i class="fas fa-arrow-right text-lg" />
          <span class="ml-2">Project 2</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  @apply bg-white bg-opacity-70 backdrop-blur-md shadow-md-3 rounded-3xl p-6;
}

.heading-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink;
}

.btn-elevated-with-icon {
  @apply p-4 bg-primary rounded-md hover:bg-primary-hover hover:text-white hover:shadow-md-3;
}

.btn-elevated-with-icon i {
  @apply text-lg;
}

.btn-elevated-with-icon:hover i {
  @apply text-white;
}

.btn-elevated-with-icon span {
  @apply ml-2;
}
</style>

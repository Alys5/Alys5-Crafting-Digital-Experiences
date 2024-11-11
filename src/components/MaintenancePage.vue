<script>
export default {
  name: 'MaintenancePage',
  data() {
    return {
      calendarLink: 'https://calendar.app.google/ppakzD82jGkDSzWN7',
      linkedinLink: 'https://www.linkedin.com/in/alys5',
      githubLink: 'https://github.com/alys5',
      fiverrLink: 'https://www.fiverr.com/alys_5',
    }
  },
}
</script>

<template>
  <div class="min-h-screen bg-background text-light-lightest flex items-center justify-center">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 bg-surface rounded-3xl shadow-xl max-w-6xl w-full h-full"
    >
      <!-- Sezione di Benvenuto e Alert -->
      <div class="lg:col-span-2 flex flex-col gap-8">
        <!-- Messaggio di Benvenuto -->
        <div class="bg-dark p-8 rounded-xl shadow-xl text-center">
          <h1 class="text-5xl font-extrabold text-yellow-500 mb-4 tracking-wider">
            Siamo in fase di aggiornamento!
          </h1>
          <p class="text-pink-300 text-lg">
            Stiamo migliorando l'esperienza per te. Torna a trovarci tra poco!
          </p>
        </div>

        <!-- Alert di Manutenzione -->
        <div class="bg-gradient-custom text-light-lightest p-6 rounded-xl shadow-xl">
          <p class="font-semibold text-xl">🚧 Manutenzione in corso 🚧</p>
          <p class="text-lg">
            Stiamo ottimizzando il sito per offrirti un'esperienza migliore. Ci scusiamo per il
            disagio!
          </p>
        </div>
      </div>

      <!-- Sezione CTA -->
      <div class="flex flex-col gap-6 justify-center h-full">
        <!-- Prenota il tuo appuntamento -->
        <a
          :href="calendarLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center py-4 px-8 rounded-xl shadow-xl transform"
        >
          <i class="fas fa-calendar-check mr-3"></i>
          Prenota il tuo appuntamento
        </a>

        <!-- Scopri il mio LinkedIn -->
        <a
          :href="linkedinLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center py-4 px-8 rounded-xl shadow-xl transform"
        >
          <i class="fab fa-linkedin mr-3"></i>
          Scopri il mio LinkedIn
        </a>

        <!-- Esplora il mio GitHub -->
        <a
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center py-4 px-8 rounded-xl shadow-xl transform"
        >
          <i class="fab fa-github mr-3"></i>
          Esplora il mio GitHub
        </a>

        <!-- Fai un salto su Fiverr -->
        <a
          :href="fiverrLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center py-4 px-8 rounded-xl shadow-xl transform"
        >
          <i class="fab fa-fiverr mr-3"></i>
          Fai un salto su Fiverr
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Pulsanti */
.btn-primary {
  @apply bg-yellow-500 text-black font-medium py-2 px-4 rounded-md shadow-xl transition-all duration-300 ease-in-out;
}
.btn-primary:hover {
  @apply bg-yellow-600 shadow-xl;
}

.btn-secondary {
  @apply bg-teal-500 text-white font-medium py-2 px-4 rounded-md shadow-xl transition-all duration-300 ease-in-out;
}
.btn-secondary:hover {
  @apply bg-teal-600 shadow-xl;
}

.btn-outline {
  @apply border-2 border-yellow-500 text-yellow-500 font-medium py-2 px-4 rounded-md transition-all duration-300 ease-in-out;
}
.btn-outline:hover {
  @apply bg-yellow-50 text-yellow-600 shadow-xl;
}

/* Sezione Manutenzione */
.bg-dark {
  background-color: #111111;
  color: white;
}

.bg-surface {
  background-color: #2d2d2d;
}

.bg-gradient-custom {
  background-image: linear-gradient(145deg, #fedd44, #5da4f9, #f2b7d4);
  color: #333333;
}

.bg-gradient-custom p {
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.text-light-lightest {
  color: #e4e4e4;
}

/* Animazioni */
@keyframes hover-grow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

/* Animazione di Sobbalzo */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Material Design Icons */
.material-icons {
  font-size: 26px;
  color: white;
}

a {
  transition: transform 0.3s ease-in-out;
}

/* Applicazione dell'animazione solo al passaggio del mouse */
a:hover {
  animation: bounce 0.3s ease-out forwards;
}

/* Titoli */
h1 {
  font-family: 'Space Grotesk', sans-serif;
}

h1,
p {
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}

/* Layout */
.max-w-6xl {
  max-width: 90%;
}

/* Responsività */
@media (max-width: 768px) {
  .lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>

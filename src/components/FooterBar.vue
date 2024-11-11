<template>
  <footer class="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-auto border-t border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-center justify-center md:flex-row md:justify-between space-y-4 md:space-y-0"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          &copy; 2023 Your Name. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>

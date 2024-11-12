<template>
  <footer class="bg-gray-900 text-white py-8 mt-auto border-t border-gray-700">
    <div class="container mx-auto px-6 lg:px-8">
      <div
        class="flex flex-col items-center justify-between md:flex-row md:justify-between space-y-6 md:space-y-0"
      >
        <!-- Copyright Text -->
        <p class="text-sm text-gray-400 text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} {{ t('footer.copy') }}
        </p>

        <!-- Social Links -->
        <div class="flex space-x-6 mt-4 md:mt-0 justify-center">
          <a href="#" class="text-gray-400 hover:text-primary-500 transition-all duration-200">
            <i class="fab fa-github"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary-500 transition-all duration-200">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary-500 transition-all duration-200">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary-500 transition-all duration-200">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary-500 transition-all duration-200">
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

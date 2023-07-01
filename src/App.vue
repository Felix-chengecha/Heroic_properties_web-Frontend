<template>

  <nav class=" sticky top-0 z-50 bg-gray-100 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-16 w-100" src="./assets/logo.jpg" alt="Logo">
      <h5 class="sm:text-1xl text-1xl font-medium title-font mb-1 text-gray-900"> Heroic properties  </h5>

        </div>



        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="showMenu = !showMenu" type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <router-link to="/" href="#section1" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</router-link>

            <a href="#section2" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#section3" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Properties</a>
            <a href="#section4" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Testimonials</a>

          </div>
        </div>
    </div>
  </div>
</nav>




<RouterView />

</template>



<script setup>


// import Indexcom from './views/IndexView.vue';

// import DetailsView  from './views/DetailsView.vue';



</script>

<style scoped>
</style>

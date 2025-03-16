<template>
  <nav class="sticky top-0 z-50 shadow-lg overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img class="h-16 w-auto max-w-xs" src="./assets/logo.jpg" alt="Logo">
          <h5 class="text-xl font-medium title-font text-gray-900 dark:text-white">Heroic Properties</h5>
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden">
          <button 
            @click="showMenu = !showMenu" 
            type="button" 
            class="bg-white dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            :aria-expanded="showMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!showMenu" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex space-x-4 items-center">
          <router-link to="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">  Home</router-link>

          <router-link to="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">  Properties</router-link>
      
          <router-link to="/AboutUs" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">About us </router-link>

         <router-link to="/Contact" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Contact</router-link>

         <router-link to="/Account" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Account</router-link>

          <!-- Dark Mode Toggle -->
          <button @click="darkModeStore.toggleDarkMode" class="p-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white">
            {{ darkModeStore.isDarkMode ? '🌙 Light' : '☀️ Dark' }}
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMenu" class="sm:hidden mt-2 bg-white dark:bg-gray-900 rounded-md shadow-md">
        <a href="/" class="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
        <a href="#section2" class="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Services</a>
        <a href="#section3" class="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Properties</a>
        <a href="#section4" class="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Testimonials</a> 

        <router-link to="/AboutUs" class="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">About us </router-link>

        <!-- Dark Mode Toggle -->
        <button @click="darkModeStore.toggleDarkMode" class="w-full text-left px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white">
          {{ darkModeStore.isDarkMode ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script>
import { ref } from "vue";
import { useDarkModeStore } from "./store/darkModeStore";


export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const showMenu = ref(false);
    return { darkModeStore, showMenu };
  }
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS manages styling */
</style>
